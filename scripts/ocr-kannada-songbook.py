#!/usr/bin/env python3
"""OCR scanned Kannada songbook pages into resumable JSONL line detections.

Run with: uv run --with arjuna-ocr --python 3.13 python scripts/ocr-kannada-songbook.py INPUT.pdf OUTPUT.jsonl
Requires Poppler. OCR stays local; verify the output before publishing lyrics.
"""

import argparse
import json
import shutil
import subprocess
import tempfile
import time
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--dpi", type=int, default=240)
    args = parser.parse_args()

    if not args.pdf.is_file():
        parser.error(f"PDF not found: {args.pdf}")
    if not shutil.which("pdftoppm") or not shutil.which("pdfinfo"):
        parser.error("Install Poppler first; pdftoppm and pdfinfo are required to render PDF pages.")

    source = args.pdf.resolve()
    stat = source.stat()
    fingerprint = {"source": str(source), "bytes": stat.st_size, "modified_ns": stat.st_mtime_ns}
    page_count = int(
        next(line.split(":", 1)[1] for line in subprocess.check_output(["pdfinfo", str(source)], text=True).splitlines() if line.startswith("Pages:"))
    )
    args.output.parent.mkdir(parents=True, exist_ok=True)

    completed = set()
    if args.output.exists():
        with args.output.open(encoding="utf-8") as existing:
            for line in existing:
                row = json.loads(line)
                if any(row.get(key) != value for key, value in fingerprint.items()):
                    raise SystemExit("Output belongs to a different PDF; choose a new output file.")
                if row["status"] == "done":
                    completed.add(row["page"])

    from kanen_infer import KanEnOCR

    reader = KanEnOCR()
    print(f"OCR ready, pages={page_count}, already_done={len(completed)}", flush=True)

    started = time.monotonic()
    with tempfile.TemporaryDirectory(prefix="kannada-songbook-") as temp_dir, args.output.open("a", encoding="utf-8") as output:
        for page in range(1, page_count + 1):
            if page in completed:
                continue
            rendered = Path(temp_dir) / "page"
            try:
                subprocess.run(
                    ["pdftoppm", "-f", str(page), "-l", str(page), "-singlefile", "-jpeg", "-r", str(args.dpi), str(source), str(rendered)],
                    check=True,
                    capture_output=True,
                )
                document = reader.page(str(rendered) + ".jpg")
                row = {
                    **fingerprint,
                    "page": page,
                    "status": "done",
                    "document": document,
                }
            except Exception as error:
                row = {**fingerprint, "page": page, "status": "failed", "error": str(error)}
            output.write(json.dumps(row, ensure_ascii=False) + "\n")
            output.flush()
            line_count = sum(len(block.get("lines", [])) for block in row.get("document", {}).get("blocks", []))
            print(f"page={page}/{page_count} status={row['status']} lines={line_count} elapsed={int(time.monotonic() - started)}s", flush=True)


if __name__ == "__main__":
    main()
