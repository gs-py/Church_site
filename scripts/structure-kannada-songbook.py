#!/usr/bin/env python3
"""Group Arjuna-OCR page lines into numbered Kannada song drafts."""

import argparse
import json
import re
import subprocess
from difflib import SequenceMatcher
from pathlib import Path


def normalized(text):
    return re.sub(r"[^a-z0-9]", "", text.lower())


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ocr_jsonl", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--catalog", type=Path, default=Path("songs-data.json"))
    args = parser.parse_args()

    if not args.catalog.exists():
        subprocess.run(["node", "scripts/generate-songs-meta.mjs"], check=True)
    catalog = json.loads(args.catalog.read_text(encoding="utf-8"))
    titles = [(normalized(song["englishTitle"]), song["number"]) for song in catalog if song["englishTitle"]]
    catalog_numbers = sorted(song["number"] for song in catalog)
    drafts = {}
    current = None
    kannada_digits = str.maketrans("೦೧೨೩೪೫೬೭೮೯", "0123456789")

    for raw in args.ocr_jsonl.open(encoding="utf-8"):
        row = json.loads(raw)
        if row["status"] != "done":
            continue
        document = row["document"]
        width = document["page"]["width"]
        columns = [[] for _ in range(4)]
        for block in document["blocks"]:
            for line in block.get("lines", []):
                x1, y1, x2, y2 = line["bbox"]
                column = min(3, int(((x1 + x2) / 2) / (width / 4)))
                columns[column].append((y1, x1, line))

        for column in columns:
            column.sort(key=lambda item: (item[0], item[1]))
            for index, (_, _, line) in enumerate(column):
                text = line["text"].strip()
                script = line.get("script", "")
                number = None

                if script == "num":
                    match = re.fullmatch(r"\d+", text.translate(kannada_digits))
                    if match:
                        y = line["bbox"][1]
                        has_heading_context = any(
                            nearby.get("script") == "en"
                            and abs(nearby["bbox"][1] - y) < 120
                            for _, _, nearby in column[max(0, index - 2) : index + 4]
                        )
                        if has_heading_context:
                            number = int(match.group())
                elif script == "en" and not text.lower().startswith("tune"):
                    prefix = re.match(r"^(\d{1,3})\s+[A-Za-z]", text)
                    if prefix:
                        number = int(prefix.group(1))
                    else:
                        candidate = normalized(text)
                        matches = [
                            (SequenceMatcher(None, candidate, title).ratio(), song_number)
                            for title, song_number in titles
                            if min(len(candidate), len(title)) >= 10
                            and (candidate in title or SequenceMatcher(None, candidate, title).ratio() >= 0.78)
                        ]
                        if matches:
                            best = max(matches)
                            if sum(score == best[0] for score, _ in matches) == 1:
                                number = best[1]

                if number is not None:
                    if current is not None and number <= current:
                        expected = current + 1
                        if str(expected).startswith(str(number)) and str(number) != str(expected):
                            number = expected
                        else:
                            number = None
                if number is not None:
                    if current != number:
                        current = number
                        drafts.setdefault(number, {"number": number, "lines": [], "confidences": [], "pages": set()})

                verse_one = re.match(r"^1\.\s*", text)
                if script == "kn" and verse_one and current is not None and drafts[current]["lines"]:
                    current = next((song_number for song_number in catalog_numbers if song_number > current), current + 1)
                    drafts.setdefault(current, {"number": current, "lines": [], "confidences": [], "pages": set()})

                if current is None or script != "kn" or text == "ಸ್ತೋತ್ರವು":
                    continue
                drafts[current]["lines"].append(text)
                drafts[current]["confidences"].append(float(line.get("confidence", 0)))
                drafts[current]["pages"].add(row["page"])

    output = []
    for number, draft in sorted(drafts.items()):
        lines = draft["lines"]
        if not lines:
            continue
        output.append({
            "number": number,
            "kannadaTitle": re.sub(r"^\d+\.\s*", "", lines[0]),
            "kannadaLyrics": "\n".join(lines),
            "ocrConfidence": round(sum(draft["confidences"]) / len(lines), 4),
            "minLineConfidence": round(min(draft["confidences"]), 4),
            "sourcePages": sorted(draft["pages"]),
            "reviewRequired": True,
        })

    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Draft songs: {len(output)}; pages: {sum(1 for _ in args.ocr_jsonl.open(encoding='utf-8'))}")


if __name__ == "__main__":
    main()
