import { motion } from 'framer-motion';

// ── Add your YouTube video IDs below ─────────────────────────────────────────
// Open any video on your channel → copy the ID after "?v=" in the URL
// e.g.  youtube.com/watch?v=ABC123def   →   id: "ABC123def"
const videos = [
  { id: '', title: 'Sunday Sermon — Strength in the Lord', date: 'Feb 2026', speaker: 'Francis' },
  { id: '', title: 'Bible Study — Walking in the Spirit', date: 'Jan 2026', speaker: 'Francis' },
  { id: '', title: 'Special Message — The Power of Prayer', date: 'Dec 2025', speaker: 'Francis' },
];
// ─────────────────────────────────────────────────────────────────────────────

const articles = [
  {
    id: 1,
    category: 'Teaching',
    date: 'Feb 2026',
    title: 'Walking by Faith: Lessons from the Life of Abraham',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=700&q=85&auto=format&fit=crop',
    tint: '#1a3a8a',
  },
  {
    id: 2,
    category: 'Doctrine',
    date: 'Jan 2026',
    title: "The Lord's Table: The Meaning of Breaking Bread Together",
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=700&q=85&auto=format&fit=crop',
    tint: '#3b1a78',
  },
  {
    id: 3,
    category: 'Fellowship',
    date: 'Dec 2025',
    title: "Building a Community Rooted in the Word of God",
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=85&auto=format&fit=crop',
    tint: '#7a4400',
  },
];

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
const VideoCard = ({ video, index }: { video: typeof videos[0]; index: number }) => {
  const hasId = video.id.trim() !== '';
  const thumbnailUrl = hasId
    ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
    : null;
  const videoUrl = hasId
    ? `https://www.youtube.com/watch?v=${video.id}`
    : `https://www.youtube.com/@bethesdaassemblymysore3533/search?query=francis`;

  return (
    <motion.a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
      style={{ backgroundColor: '#ECEAE6' }}
    >
      {/* Thumbnail */}
      <div className="relative h-52 shrink-0 overflow-hidden bg-gray-900 rounded-t-2xl">
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          /* Gradient placeholder when no video ID is set */
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <PlayIcon />
          </div>
        </div>

        {/* YouTube badge */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white rounded-lg px-2.5 py-1 flex items-center gap-1.5">
          <YoutubeIcon />
          <span className="text-xs font-semibold">YouTube</span>
        </div>
      </div>

      {/* Card body — same structure as article cards */}
      <div className="flex flex-col flex-1 p-6">
        <p
          className="text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          style={{ color: '#9A8F83' }}
        >
          {video.speaker} — {video.date}
        </p>

        <h3
          className="font-serif text-xl font-bold leading-snug flex-1"
          style={{ color: '#1C1916' }}
        >
          {video.title}
        </h3>

        <div className="my-5 h-px" style={{ backgroundColor: '#D9D4CE' }} />

        <div
          className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
          style={{ color: '#3D3530' }}
        >
          Watch on YouTube
          <ArrowRight />
        </div>
      </div>
    </motion.a>
  );
};

// ── Main component ────────────────────────────────────────────────────────────
const Media = () => {
  return (
    <section id="media" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span
              className="text-xs tracking-[0.22em] uppercase font-semibold mb-3 block"
              style={{ color: '#9A8F83' }}
            >
              Watch &amp; Read
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sermons &amp; Insights
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@bethesdaassemblymysore3533/search?query=francis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 px-5 py-2.5 rounded-xl hover:border-gray-900 hover:text-gray-900 transition-colors duration-200 shrink-0"
          >
            <YoutubeIcon />
            View All Sermons
          </a>
        </motion.div>

        {/* ── Video Cards ── */}
        <div className="mb-8">
          <p
            className="text-xs tracking-[0.2em] uppercase font-semibold mb-6"
            style={{ color: '#B0A79E' }}
          >
            Latest Videos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} index={i} />
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-14 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ backgroundColor: '#E4DDD6' }} />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: '#B0A79E' }}>
            Articles &amp; Teachings
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#E4DDD6' }} />
        </div>

        {/* ── Article Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default Media;
