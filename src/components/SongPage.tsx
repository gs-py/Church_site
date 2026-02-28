import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { songs } from '../data/songbook';
import SEO from './SEO';

const FONT_SIZES = [
  { label: 'A', size: 14, lineHeight: 1.6 },
  { label: 'A', size: 17, lineHeight: 1.7 },
  { label: 'A', size: 21, lineHeight: 1.8 },
] as const;

const formatLyrics = (raw: string) => {
  const lines = raw.split('\n');
  const blocks: { type: 'header' | 'verse'; content: string }[] = [];
  let currentBlock: string[] = [];

  const flushBlock = () => {
    if (currentBlock.length > 0) {
      blocks.push({ type: 'verse', content: currentBlock.join('\n') });
      currentBlock = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushBlock();
      continue;
    }
    if (/^-[A-Z]+-\d*-?$/.test(trimmed)) continue;
    if (/^\d+\.\s*$/.test(trimmed)) continue;
    if (/^\d+\.\s*\(/.test(trimmed)) {
      blocks.push({ type: 'header', content: trimmed });
      continue;
    }
    if (trimmed === '***') continue;
    currentBlock.push(trimmed);
  }
  flushBlock();
  return blocks;
};

const SongPage = () => {
  const { number } = useParams<{ number: string }>();
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState(1);

  const songNumber = parseInt(number || '0');
  const song = useMemo(() => songs.find((s) => s.number === songNumber), [songNumber]);
  const songIndex = useMemo(() => songs.findIndex((s) => s.number === songNumber), [songNumber]);
  const prevSong = songIndex > 0 ? songs[songIndex - 1] : null;
  const nextSong = songIndex < songs.length - 1 ? songs[songIndex + 1] : null;

  const goToPrev = useCallback(() => {
    if (prevSong) navigate(`/songbook/song/${prevSong.number}`);
  }, [prevSong, navigate]);

  const goToNext = useCallback(() => {
    if (nextSong) navigate(`/songbook/song/${nextSong.number}`);
  }, [nextSong, navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') navigate('/songbook');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goToPrev, goToNext, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [songNumber]);

  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="text-center">
          <div
            className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: '#F0EBE4' }}
          >
            <svg className="w-6 h-6" style={{ color: '#B0A79E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-base font-medium" style={{ color: '#6B635D' }}>
            Song not found
          </p>
          <Link
            to="/songbook"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-2 transition-colors hover:text-[#1C1916]"
            style={{ color: '#9A8F83' }}
          >
            Back to Songbook
          </Link>
        </div>
      </div>
    );
  }

  const blocks = formatLyrics(song.lyrics);

  const songJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: song.title,
    ...(song.englishTitle && { alternateName: song.englishTitle }),
    lyrics: {
      '@type': 'CreativeWork',
      text: song.lyrics
        .split('\n')
        .filter((l) => l.trim())
        .slice(0, 4)
        .join(' '),
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hootagalli Brethren Assembly',
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      <SEO
        title={`${song.title}${song.englishTitle ? ` - ${song.englishTitle}` : ''} | Song #${song.number}`}
        description={`Lyrics for "${song.title}"${song.englishTitle ? ` (${song.englishTitle})` : ''} - Song #${song.number} from Hootagalli Brethren Assembly Songbook, Mysore.`}
        path={`/songbook/song/${song.number}`}
        keywords={`${song.title}, ${song.englishTitle || 'Kannada song'}, Brethren Assembly hymn, Christian song lyrics`}
        jsonLd={songJsonLd}
      />

      {/* Header */}
      <header
        className="sticky top-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-xl border-b"
        style={{ borderColor: '#E8E1D9' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link
              to="/songbook"
              className="group flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#9A8F83' }}
            >
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: -3 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </motion.svg>
              <span className="group-hover:text-[#1C1916] transition-colors">Songbook</span>
            </Link>

            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: '#1C1916', color: '#fff' }}
            >
              {song.number}
            </span>

            <div className="flex items-center gap-1">
              {FONT_SIZES.map((fs, i) => (
                <button
                  key={i}
                  onClick={() => setFontSize(i)}
                  className={`w-7 h-7 rounded-md flex items-center justify-center font-semibold transition-all ${
                    fontSize === i ? 'bg-[#1C1916] text-white' : 'hover:bg-[#F0EBE4]'
                  }`}
                  style={{
                    fontSize: 10 + i * 3,
                    color: fontSize === i ? '#fff' : '#9A8F83',
                  }}
                >
                  {fs.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="text-2xl sm:text-3xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-family-serif)', color: '#1C1916' }}
          >
            {song.title}
          </h1>
          {song.englishTitle && (
            <p className="text-sm mt-1.5" style={{ color: '#9A8F83' }}>
              {song.englishTitle}
            </p>
          )}
        </motion.div>

        <motion.div
          key={songNumber}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mt-10"
        >
          {blocks.map((block, i) => {
            if (block.type === 'header') {
              return (
                <p
                  key={i}
                  className="font-semibold mb-4"
                  style={{
                    fontSize: FONT_SIZES[fontSize].size - 1,
                    lineHeight: FONT_SIZES[fontSize].lineHeight,
                    color: '#6B635D',
                  }}
                >
                  {block.content}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="mb-5 whitespace-pre-wrap"
                style={{
                  fontSize: FONT_SIZES[fontSize].size,
                  lineHeight: FONT_SIZES[fontSize].lineHeight,
                  color: '#1C1916',
                }}
              >
                {block.content}
              </p>
            );
          })}
        </motion.div>

        {/* Prev / Next navigation */}
        <div
          className="flex items-center justify-between mt-14 pt-8 border-t"
          style={{ borderColor: '#E8E1D9' }}
        >
          {prevSong ? (
            <Link
              to={`/songbook/song/${prevSong.number}`}
              className="group flex items-center gap-3 transition-colors"
            >
              <motion.div
                whileHover={{ x: -3 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors group-hover:bg-[#F0EBE4]"
                style={{ color: '#9A8F83' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider" style={{ color: '#B0A79E' }}>
                  Previous
                </p>
                <p
                  className="text-sm font-medium truncate max-w-[140px] sm:max-w-[200px] group-hover:text-[#1C1916] transition-colors"
                  style={{ color: '#6B635D' }}
                >
                  {prevSong.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextSong ? (
            <Link
              to={`/songbook/song/${nextSong.number}`}
              className="group flex items-center gap-3 transition-colors text-right"
            >
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: '#B0A79E' }}>
                  Next
                </p>
                <p
                  className="text-sm font-medium truncate max-w-[140px] sm:max-w-[200px] group-hover:text-[#1C1916] transition-colors"
                  style={{ color: '#6B635D' }}
                >
                  {nextSong.title}
                </p>
              </div>
              <motion.div
                whileHover={{ x: 3 }}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors group-hover:bg-[#F0EBE4]"
                style={{ color: '#9A8F83' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Keyboard hints */}
        <div className="hidden sm:flex justify-center mt-8 gap-4">
          <span className="text-[10px] tracking-wide" style={{ color: '#C8C1B9' }}>
            <kbd
              className="px-1.5 py-0.5 rounded border text-[10px]"
              style={{ borderColor: '#E4DDD6', backgroundColor: '#F0EBE4' }}
            >
              &larr; &rarr;
            </kbd>{' '}
            prev / next
          </span>
          <span className="text-[10px] tracking-wide" style={{ color: '#C8C1B9' }}>
            <kbd
              className="px-1.5 py-0.5 rounded border text-[10px]"
              style={{ borderColor: '#E4DDD6', backgroundColor: '#F0EBE4' }}
            >
              Esc
            </kbd>{' '}
            back to list
          </span>
        </div>
      </main>
    </div>
  );
};

export default SongPage;
