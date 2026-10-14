import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Eyebrow } from './ui';

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
      className="fixed inset-0 z-[90] flex flex-col bg-black/95"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <p className="font-display text-sm font-semibold text-white/85" aria-live="polite">
          {title} · {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-cream"
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
          className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-coral text-white transition-colors hover:bg-coral-deep sm:left-4"
        >
          <svg className="h-6 w-6" {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-coral text-white transition-colors hover:bg-coral-deep sm:right-4"
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
  reverse,
}: {
  meeting: Meeting;
  load: boolean;
  onOpen: (i: number) => void;
  reverse: boolean;
}) => {
  const total = meeting.photos.length;

  return (
    <article aria-labelledby={`${meeting.id}-title`} className="rounded-2xl bg-white px-5 py-10 sm:px-10 md:py-14 lg:px-[49px]">
      <div className={`grid grid-cols-1 items-center gap-10 lg:gap-16 ${reverse ? 'lg:grid-cols-[1fr_320px]' : 'lg:grid-cols-[320px_1fr]'}`}>
        {/* Poster (index 0 in the viewer), with a coral offset like the reference's arches */}
        <div className={`mx-auto w-full max-w-[300px] lg:max-w-none ${reverse ? 'lg:order-2' : ''}`}>
          <button
            type="button"
            onClick={() => onOpen(0)}
            aria-label={`View the ${meeting.title} poster`}
            className="group relative block aspect-[2/3] w-full overflow-hidden rounded-2xl border-b-[10px] border-r-[10px] border-coral bg-line focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-coral/50"
          >
            {load && (
              <img
                src={meeting.poster.thumb}
                alt={meeting.poster.alt}
                loading="lazy"
                decoding="async"
                width={640}
                height={960}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            )}
          </button>
        </div>

        <div className="min-w-0">
          <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-coral-ink">{meeting.date}</p>
          <h3 id={`${meeting.id}-title`} className="headline mt-3 text-[clamp(1.9rem,3.4vw,2.75rem)] text-ink">
            {meeting.title}
          </h3>
          <dl className="mt-8 border-t border-line">
            {meeting.details.map((d) => (
              <div key={d.label} className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:gap-8">
                <dt className="w-24 shrink-0 font-display text-sm font-extrabold uppercase tracking-[0.06em] text-ink">{d.label}</dt>
                <dd className="text-[1.05rem] text-ink/85">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {total > 0 && (
        <div className="mt-12">
          <p className="mb-5 font-display text-sm font-bold uppercase tracking-[0.14em] text-muted">
            Photos · {total}
          </p>
          {/* Arch-shaped photos in a scrolling row */}
          <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-3 sm:-mx-10 sm:scroll-px-10 sm:px-10 lg:-mx-[49px] lg:scroll-px-[49px] lg:px-[49px]">
            {meeting.photos.map((p, i) => (
              <li key={p.thumb} className="shrink-0 snap-start">
                <button
                  type="button"
                  onClick={() => onOpen(i + 1)}
                  aria-label={`View photo ${i + 1} of ${total}: ${p.alt}`}
                  className="group block h-[300px] w-[230px] overflow-hidden rounded-t-full border-b-[8px] border-r-[8px] border-coral bg-line focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-coral/50 sm:h-[380px] sm:w-[290px]"
                >
                  {load && (
                    <img
                      src={p.thumb}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={750}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
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

  const rise = {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section id="meetings" ref={sectionRef} aria-labelledby="meetings-heading" className="bg-cream py-16 md:py-24">
      <motion.div {...rise} className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <Eyebrow>Special Meetings</Eyebrow>
        <h2 id="meetings-heading" className="headline text-[clamp(2.5rem,5vw,3.5rem)] text-coral">
          Recently held.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.1rem] leading-relaxed text-ink/85">
          A look back at the latest special meetings at our assembly, with their posters and photos.
        </p>
      </motion.div>

      <div className="mt-12 space-y-4 px-2 sm:px-4 lg:px-[23px]">
        {meetings.map((meeting, mi) => (
          <motion.div key={meeting.id} {...rise}>
            <MeetingBlock meeting={meeting} load={load} reverse={mi % 2 === 1} onOpen={(i) => setOpen({ meeting: mi, index: i })} />
          </motion.div>
        ))}
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
