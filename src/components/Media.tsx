import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { articles } from '../data/articles';
import { ArrowIcon, Eyebrow, Panel, PillLink, SwipeHint, YoutubeIcon, swipeItem, swipeRow } from './ui';

// ── Add your YouTube video IDs below ─────────────────────────────────────────
// Open any video on your channel → copy the ID after "?v=" in the URL
// e.g.  youtube.com/watch?v=ABC123def   →   id: "ABC123def"
type SermonType = 'Sunday Sermon' | 'Bible Study' | 'Special Message';
type Video = { id: string; title: string; speaker: string; type: SermonType; date?: string };

const CHANNEL_URL = 'https://www.youtube.com/@zbcmysuru';

const videos: Video[] = [
  { id: 'CRBUuS-LU_k', type: 'Sunday Sermon', title: 'Does God speak through dreams and visions? (Kannada)', speaker: 'Br. Reginald Solomon' },
  { id: 'SqEIr1r815E', type: 'Sunday Sermon', title: 'God’s Word in the midst of suffering — Psalm 119 (Kannada & English)', speaker: 'Evg. G.V. Nagaraju' },
  { id: '5zIUHTeBXEk', type: 'Sunday Sermon', title: '1 Timothy 1:1–4', date: 'Feb 2026', speaker: 'Francis' },
  { id: 'oTiJqyBtR3w', type: 'Special Message', title: 'Christmas Message', date: '25 Dec 2025', speaker: 'Francis' },
];

// Only types that have at least one video get a filter tab
const filters: ('All' | SermonType)[] = ['All', ...Array.from(new Set(videos.map((v) => v.type)))];
// ─────────────────────────────────────────────────────────────────────────────

const thumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const meta = (v: Video) => [v.type, v.speaker, v.date].filter(Boolean).join(' · ');

/** Thumbnail that swaps to the YouTube player when played. */
const Player = ({ video, playing, onPlay, large = false }: { video: Video; playing: boolean; onPlay: () => void; large?: boolean }) => (
  <div className={`relative aspect-video overflow-hidden bg-ink ${large ? 'rounded-xl shadow-2xl' : 'rounded-lg'}`}>
    {playing ? (
      <iframe
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    ) : (
      <button type="button" onClick={onPlay} aria-label={`Play: ${video.title}`} className="group absolute inset-0 h-full w-full">
        <img src={thumb(video.id)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <span className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
        <span
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#FF0000] text-white shadow-lg transition-transform group-hover:scale-105 ${
            large ? 'h-14 w-20' : 'h-11 w-16'
          }`}
        >
          <svg className={large ? 'h-7 w-7' : 'h-6 w-6'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    )}
  </div>
);

const Media = () => {
  const reduceMotion = useReducedMotion();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'All' | SermonType>('All');

  const featured = videos[0];
  const visible = (filter === 'All' ? videos : videos.filter((v) => v.type === filter)).filter((v) => v.id !== featured.id);

  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <>
      {/* ── Sermons: coral panel ── */}
      <Panel id="media" tone="coral" labelledBy="media-heading" className="relative px-5 py-12 sm:px-10 md:py-24 lg:px-[49px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <motion.div {...rise()} className="order-2 lg:order-1">
            <Player video={featured} playing={playingId === featured.id} onPlay={() => setPlayingId(featured.id)} large />
            <p className="mt-3 font-display font-bold text-white lg:hidden">{featured.title}</p>
            <p className="mt-1 text-[0.95rem] text-white/90 lg:mt-4 lg:text-[1.05rem]">{meta(featured)}</p>
          </motion.div>

          <motion.div {...rise(0.1)} className="order-1 lg:order-2 lg:pl-4">
            <Eyebrow tone="dark">Watch &amp; Read</Eyebrow>
            <h2 id="media-heading" className="headline text-[clamp(2.25rem,4.2vw,3.25rem)] text-white">
              Sermons &amp; Teachings
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white sm:mt-5 sm:text-[1.1rem]">
              Hear the exposition of Scripture from our Sunday gatherings, Bible studies and special messages.
            </p>
            <p className="mt-4 hidden font-display text-lg font-bold text-white lg:block">{featured.title}</p>
            <div className="mt-6 sm:mt-8">
              <PillLink href={CHANNEL_URL} external variant="white" icon={<YoutubeIcon />}>
                Subscribe on YouTube
              </PillLink>
            </div>
          </motion.div>
        </div>

        {/* More messages */}
        <div className="mt-10 border-t border-white/25 pt-8 sm:mt-16 sm:pt-10">
          <div role="group" aria-label="Filter sermons by type" className="mb-6 flex flex-wrap gap-2 sm:mb-8">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => {
                  setFilter(f);
                  setPlayingId(null);
                }}
                className={`rounded-full border-2 px-4 py-1.5 font-display text-sm font-bold transition-colors sm:px-5 sm:py-2 ${
                  filter === f ? 'border-white bg-white text-coral-ink' : 'border-white/70 text-white hover:border-white'
                }`}
              >
                {f === 'All' ? 'All' : `${f}s`}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="rounded-xl bg-white/10 px-6 py-10 text-center text-white">
              No more messages in this category yet.{' '}
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                Browse our YouTube channel
              </a>
              .
            </p>
          ) : (
            <>
            <ul className={`${swipeRow} sm:grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3`}>
              {visible.map((video) => (
                <li key={video.id} className={`${swipeItem} rounded-xl bg-white p-3 text-ink`}>
                  <Player video={video} playing={playingId === video.id} onPlay={() => setPlayingId(video.id)} />
                  <div className="px-2 pb-3 pt-4">
                    <p className="text-sm text-muted">{meta(video)}</p>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug tracking-[-0.02em]">{video.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
            {visible.length > 1 && <SwipeHint count={visible.length} tone="dark" />}
            </>
          )}
        </div>
      </Panel>

      {/* ── Articles: white panel ── */}
      <div className="h-4" aria-hidden="true" />
      <Panel labelledBy="articles-heading" className="px-5 py-12 sm:px-10 md:py-20 lg:px-[49px]">
        <motion.h2 {...rise()} id="articles-heading" className="headline text-[clamp(2.25rem,4.2vw,3.25rem)] text-coral">
          Articles
        </motion.h2>

        <ul className={`mt-8 sm:mt-10 ${swipeRow} sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-12 md:grid-cols-3`}>
          {articles.map((article, i) => (
            <motion.li key={article.id} {...rise((i % 3) * 0.08)} className={swipeItem}>
              <Link to={`/article/${article.id}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-line shadow-[0_6px_18px_-8px_rgba(14,12,12,0.35)]">
                  <img src={article.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <div className="absolute inset-0" style={{ backgroundColor: article.tint, mixBlendMode: 'multiply', opacity: 0.55 }} />
                </div>
                <div className="px-1 pt-4 sm:px-4 sm:pt-5">
                  <p className="text-sm text-muted sm:text-[0.95rem]">
                    {article.category} — {article.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-tight tracking-[-0.03em] text-ink group-hover:text-coral-ink sm:text-[1.4rem]">
                    {article.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-base font-bold text-coral-ink">
                    Read more <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
        <SwipeHint count={articles.length} />
      </Panel>
    </>
  );
};

export default Media;
