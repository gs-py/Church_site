import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';

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

const PlayIcon = () => (
  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

// ── Video thumbnail card ──────────────────────────────────────────────────────
const VideoCard = ({
  video,
  index,
  isPlaying,
  onPlay,
}: {
  video: Video;
  index: number;
  isPlaying: boolean;
  onPlay: () => void;
}) => {
  const hasId = video.id.trim() !== '';
  const thumbnailUrl = hasId
    ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
    : null;
  const fallbackUrl = CHANNEL_URL;

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={!isPlaying ? { y: -4, transition: { duration: 0.2 } } : {}}
      className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
      style={{ backgroundColor: '#ECEAE6' }}
    >
      {/* Thumbnail / Player */}
      <div className="relative h-52 shrink-0 overflow-hidden bg-gray-900 rounded-t-2xl">
        {isPlaying && hasId ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <>
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background:
                    'radial-gradient(ellipse at 35% 40%, #1e3a6e 0%, #0d1b36 60%, #0a0a0a 100%)',
                }}
              />
            )}

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Play button */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => hasId ? onPlay() : window.open(fallbackUrl, '_blank')}
            >
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <PlayIcon />
              </div>
            </div>

            {/* YouTube badge */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white rounded-lg px-2.5 py-1 flex items-center gap-1.5">
              <YoutubeIcon />
              <span className="text-xs font-semibold">YouTube</span>
            </div>
          </>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <p
          className="text-xs font-semibold uppercase tracking-[0.12em] mb-4"
          style={{ color: '#9A8F83' }}
        >
          {[video.type, video.speaker, video.date].filter(Boolean).join(' · ')}
        </p>

        <h3
          className="font-serif text-xl font-bold leading-snug flex-1"
          style={{ color: '#1C1916' }}
        >
          {video.title}
        </h3>

        <div className="my-5 h-px" style={{ backgroundColor: '#D9D4CE' }} />

        {hasId ? (
          <button
            onClick={onPlay}
            className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200 text-left"
            style={{ color: '#3D3530' }}
          >
            {isPlaying ? 'Now Playing' : 'Watch Now'}
            {!isPlaying && <ArrowRight />}
          </button>
        ) : (
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
            style={{ color: '#3D3530' }}
          >
            Watch on YouTube
            <ArrowRight />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Media = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'All' | SermonType>('All');
  const visible = filter === 'All' ? videos : videos.filter((v) => v.type === filter);

  return (
    <section id="media" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Watch & Read"
          title="Sermons & Teachings"
          lede="Hear the exposition of Scripture from our Sunday gatherings, Bible studies and special messages."
          action={
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#1C1916] px-5 py-2.5 text-sm font-semibold text-[#1C1916] transition-colors hover:bg-[#1C1916] hover:text-white"
            >
              <YoutubeIcon />
              Subscribe on YouTube
            </a>
          }
        />

        {/* ── Filters ── */}
        <div role="group" aria-label="Filter sermons by type" className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => {
                setFilter(f);
                setPlayingId(null);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? 'border-[#1C1916] bg-[#1C1916] text-white'
                  : 'border-[#D9D4CE] text-[#4B4440] hover:border-[#1C1916]'
              }`}
            >
              {f === 'All' ? 'All' : `${f}s`}
            </button>
          ))}
        </div>

        {/* ── Video Cards ── */}
        <div className="mb-8">
          {visible.length === 0 ? (
            <p className="rounded-2xl bg-[#F7F2EA] px-6 py-10 text-center text-[#6B635D]">
              No messages in this category yet.{' '}
              <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1C1916] underline">
                Browse our YouTube channel
              </a>
              .
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {visible.map((video, i) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={i}
                  isPlaying={playingId === video.id}
                  onPlay={() => setPlayingId(video.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Divider ── */}
        <div className="my-14 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: '#E4DDD6' }} />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: '#B0A79E' }}>
            Articles
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#E4DDD6' }} />
        </div>

        {/* ── Article Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Link key={article.id} to={`/article/${article.id}`} className="block">
              <motion.article
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl overflow-hidden flex flex-col cursor-pointer group h-full"
                style={{ backgroundColor: '#ECEAE6' }}
              >
                {/* Image with duotone overlay */}
                <div className="relative overflow-hidden h-52 shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: article.tint, mixBlendMode: 'multiply', opacity: 0.85 }}
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                    style={{ color: '#9A8F83' }}
                  >
                    {article.category} — {article.date}
                  </p>
                  <h3
                    className="font-serif text-xl font-bold leading-snug flex-1"
                    style={{ color: '#1C1916' }}
                  >
                    {article.title}
                  </h3>
                  <div className="my-5 h-px" style={{ backgroundColor: '#D9D4CE' }} />
                  <div
                    className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                    style={{ color: '#3D3530' }}
                  >
                    Read more
                    <ArrowRight />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Media;
