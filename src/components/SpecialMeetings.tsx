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
  speaker?: string;
  photos: Photo[];
}

const dir = '/meetings/2026-10-10';
const photo = (n: string, alt: string): Photo => ({ thumb: `${dir}/${n}.jpg`, full: `${dir}/${n}-full.jpg`, alt });

// Add a new object here for each special meeting; its photos go in public/meetings/<date>/
const meetings: Meeting[] = [
  {
    id: 'elders-deacons-2026-10-10',
    title: 'Elders & Deacons Meeting',
    date: '10 October 2026',
    speaker: 'Br. N. A. Paul',
    photos: [
      photo('01', 'A brother speaking at the podium beside the Elders and Deacons Meeting welcome slide'),
      photo('02', 'Elders and deacons seated and singing together in the meeting hall'),
      photo('03', 'Brothers singing together during the meeting'),
      photo('04', 'A brother looks on while another reads the welcome leaflet'),
      photo('05', 'A brother reading from his notes at the podium'),
      photo('06', 'A brother speaking at the podium'),
      photo('07', 'A brother singing, with others seated behind him'),
    ],
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
  meeting,
  index,
  onClose,
  onChange,
}: {
  meeting: Meeting;
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = meeting.photos.length;
  const current = meeting.photos[index];

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
      const p = meeting.photos[(i + count) % count];
      new Image().src = p.full;
    });
  }, [index, count, meeting.photos]);

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${meeting.title} photos`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] flex flex-col bg-[#0B0A08]/95"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="text-sm text-white/70" aria-live="polite">
          {meeting.title} · {index + 1} / {count}
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

const MeetingGallery = ({
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
    <div>
      <div className="mb-6 flex flex-col gap-1 border-b border-white/15 pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-display text-2xl font-semibold text-[#F7F2EA]">{meeting.title}</h3>
        <p className="text-sm text-white/60">
          {meeting.date}
          {meeting.speaker && ` · Speaker: ${meeting.speaker}`}
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {meeting.photos.map((p, i) => {
          const lead = i === 0;
          const wide = wideTail && i >= total - 2;
          const span = lead ? 'col-span-2 lg:row-span-2' : wide ? 'lg:col-span-2' : '';
          const ratio = wide ? 'lg:aspect-[16/9]' : 'aspect-[4/3]';
          return (
            <li key={p.thumb} className={span}>
              <button
                type="button"
                onClick={() => onOpen(i)}
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
    </div>
  );
};

const SpecialMeetings = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const load = useNearViewport(sectionRef);
  const [open, setOpen] = useState<{ meeting: number; photo: number } | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const change = useCallback((photo: number) => setOpen((o) => (o ? { ...o, photo } : o)), []);

  return (
    <section id="meetings" ref={sectionRef} className="bg-[#14110E] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Special Meetings"
          title={<>Gathered for <em className="font-medium text-[#D4B483]">His work.</em></>}
          lede="Moments from the special meetings of our assembly, when elders, deacons and believers come together."
        />

        <div className="space-y-16">
          {meetings.map((meeting, mi) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <MeetingGallery meeting={meeting} load={load} onOpen={(p) => setOpen({ meeting: mi, photo: p })} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Lightbox meeting={meetings[open.meeting]} index={open.photo} onClose={close} onChange={change} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SpecialMeetings;
