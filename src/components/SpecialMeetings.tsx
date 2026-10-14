import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';

interface Photo {
  thumb: string;
  full: string;
  alt: string;
}

interface Meeting {
  id: string;
  title: string;
  date: string;
  details: { label: string; value: string }[];
  poster: Photo;
  photos: Photo[];
}

const image = (dir: string, name: string, alt: string): Photo => ({
  thumb: `/meetings/${dir}/${name}.jpg`,
  full: `/meetings/${dir}/${name}-full.jpg`,
  alt,
});

// Newest first. Add a new object here for each special meeting; files go in public/meetings/<date>/
const meetings: Meeting[] = [
  {
    id: 'elders-deacons-2026-10-10',
    title: 'Elders & Deacons Meeting',
    date: '10 October 2026',
    details: [
      { label: 'Time', value: '10:00 AM' },
      { label: 'Speaker', value: 'Br. N. A. Paul, Bengaluru' },
      { label: 'Theme', value: '“Shepherd the flock of God which is among you” — 1 Peter 5:2' },
    ],
    poster: image('2026-10-10', 'poster', 'Poster for the Elders Meeting on 10 October 2026 at 10:00 AM, with speaker Br. N. A. Paul'),
    photos: [
      image('2026-10-10', '01', 'A brother speaking at the podium beside the Elders and Deacons Meeting welcome slide'),
      image('2026-10-10', '02', 'Elders and deacons seated and singing together in the meeting hall'),
      image('2026-10-10', '03', 'Brothers singing together during the meeting'),
      image('2026-10-10', '04', 'A brother looks on while another reads the welcome leaflet'),
      image('2026-10-10', '05', 'A brother reading from his notes at the podium'),
      image('2026-10-10', '06', 'A brother speaking at the podium'),
      image('2026-10-10', '07', 'A brother singing, with others seated behind him'),
    ],
  },
  {
    id: 'special-program-2026-10-02',
    title: 'Special Program',
    date: '2 October 2026',
    details: [
      { label: 'Time', value: '10:00 AM – 12:40 PM' },
      { label: 'Speaker', value: 'Evg. Reji K Thomas' },
      { label: 'Theme', value: '“For I am not ashamed of the gospel of Christ” — Romans 1:16' },
    ],
    poster: image('2026-10-02', 'poster', 'Poster for the Special Program on 2 October 2026, with speaker Evg. Reji K Thomas and the program schedule'),
    photos: [],
  },
];

/** True once the element is within `margin` of the viewport, then stays true. */
const useNearViewport = (ref: React.RefObject<Element | null>, margin = '400px') => {
  const supported = typeof IntersectionObserver !== 'undefined';
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!supported || !el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, margin, supported]);

  return !supported || seen;
};

const iconProps = { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 1.75, 'aria-hidden': true } as const;

const Lightbox = ({
  title,
  images,
  index,
  onClose,
  onChange,
}: {
  title: string;
  images: Photo[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const current = images[index];

  // Focus and scroll lock for the lifetime of the dialog
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  const step = useCallback((d: number) => onChange((index + d + count) % count), [index, count, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'Tab' && dialogRef.current) {
        const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button'));
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, step]);

  // Warm the neighbours so next/previous feel instant
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      const p = images[(i + count) % count];
      new Image().src = p.full;
    });
  }, [index, count, images]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] flex flex-col bg-[#0B0A08]/95"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-sm text-white/70" aria-live="polite">
          {title} · {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
        >
          <svg className="h-6 w-6" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <img
          key={current.full}
          src={current.full}
          alt={current.alt}
          className="max-h-full max-w-full rounded-lg object-contain"
        />
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 sm:left-4"
        >
          <svg className="h-6 w-6" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70 sm:right-4"
        >
          <svg className="h-6 w-6" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const MeetingBlock = ({
  meeting,
  load,
  onOpen,
}: {
  meeting: Meeting;
  load: boolean;
  onOpen: (i: number) => void;
}) => {
  const total = meeting.photos.length;
  // With 7 photos: a large lead image, four small, then two wide ones to close the last row
  const wideTail = (total - 1) % 4 === 2;

  return (
    <article aria-labelledby={`${meeting.id}-title`}>
      <div className="mb-6 flex flex-col gap-1 border-b border-white/15 pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 id={`${meeting.id}-title`} className="font-display text-2xl font-semibold text-[#F7F2EA] md:text-3xl">
          {meeting.title}
        </h3>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#D4B483]">{meeting.date}</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
        {/* Poster (index 0 in the viewer) */}
        <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
          <button
            type="button"
            onClick={() => onOpen(0)}
            aria-label={`View the ${meeting.title} poster`}
            className="group relative block aspect-[2/3] w-full overflow-hidden rounded-xl bg-[#221E1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B483]"
          >
            {load && (
              <img
                src={meeting.poster.thumb}
                alt={meeting.poster.alt}
                loading="lazy"
                decoding="async"
                width={640}
                height={960}
                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
            )}
          </button>
        </div>

        <div className="min-w-0">
          <dl className="border-t border-white/15">
            {meeting.details.map((d) => (
              <div
                key={d.label}
                className="flex flex-col gap-0.5 border-b border-white/15 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="text-sm text-white/60">{d.label}</dt>
                <dd className="font-semibold text-[#F7F2EA] sm:text-right">{d.value}</dd>
              </div>
            ))}
          </dl>

          {total > 0 && (
            <ul className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {meeting.photos.map((p, i) => {
                const lead = i === 0;
                const wide = wideTail && i >= total - 2;
                const span = lead ? 'col-span-2 lg:row-span-2' : wide ? 'lg:col-span-2' : '';
                const ratio = wide ? 'lg:aspect-[16/9]' : 'aspect-[4/3]';
                return (
                  <li key={p.thumb} className={span}>
                    <button
                      type="button"
                      onClick={() => onOpen(i + 1)}
                      aria-label={`View photo ${i + 1} of ${total}: ${p.alt}`}
                      className={`group relative block h-full w-full overflow-hidden rounded-xl bg-[#221E1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B483] ${
                        lead ? 'aspect-[4/3] lg:aspect-auto' : ratio
                      }`}
                    >
                      {load && (
                        <img
                          src={p.thumb}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          width={1000}
                          height={750}
                          className="h-full w-full object-cover object-[center_35%] transition-opacity duration-300 group-hover:opacity-90"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

const SpecialMeetings = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const load = useNearViewport(sectionRef);
  const [open, setOpen] = useState<{ meeting: number; index: number } | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const change = useCallback((index: number) => setOpen((o) => (o ? { ...o, index } : o)), []);

  const active = open ? meetings[open.meeting] : null;
  // The viewer steps through the poster first, then the photos
  const images = active ? [active.poster, ...active.photos] : [];

  return (
    <section id="meetings" ref={sectionRef} className="bg-[#14110E] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Special Meetings"
          title={<>Recently <em className="font-medium text-[#D4B483]">held.</em></>}
          lede="A look back at the latest special meetings at our assembly, with their posters and photos."
        />

        <div className="space-y-20">
          {meetings.map((meeting, mi) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <MeetingBlock meeting={meeting} load={load} onOpen={(i) => setOpen({ meeting: mi, index: i })} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && active && (
          <Lightbox title={active.title} images={images} index={open.index} onClose={close} onChange={change} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpecialMeetings;
