import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';
import { songs } from '../data/songbook';
import SEO from './SEO';

const SITE_URL = 'https://zbcmysuru.in';

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
  const location = useLocation();
  const requestedSource = new URLSearchParams(location.search).get('from');
  const sourceFilter = requestedSource === 'kannada' || requestedSource === 'kannada-only' || requestedSource === 'english'
    ? requestedSource
    : 'all';
  const fromKannadaOnly = sourceFilter === 'kannada-only';
  const returnPath = sourceFilter === 'all' ? '/songbook' : `/songbook/${sourceFilter}`;
  const [fontSize, setFontSize] = useState(1);
  const [toast, setToast] = useState('');
  const [downloading, setDownloading] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const songNumber = parseInt(number || '0');
  const song = useMemo(() => songs.find((s) => s.number === songNumber), [songNumber]);
  const songIndex = useMemo(() => songs.findIndex((s) => s.number === songNumber), [songNumber]);
  const prevSong = songIndex > 0 ? songs[songIndex - 1] : null;
  const nextSong = songIndex < songs.length - 1 ? songs[songIndex + 1] : null;

  const goToPrev = useCallback(() => {
    if (prevSong) navigate(`/songbook/song/${prevSong.number}?from=${sourceFilter}`);
  }, [prevSong, navigate, sourceFilter]);

  const goToNext = useCallback(() => {
    if (nextSong) navigate(`/songbook/song/${nextSong.number}?from=${sourceFilter}`);
  }, [nextSong, navigate, sourceFilter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') navigate(returnPath);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goToPrev, goToNext, navigate, returnPath]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [songNumber]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  }, []);

  const handleShare = useCallback(async () => {
    const url = `${SITE_URL}/songbook/song/${songNumber}`;
    const sharedSong = songs.find((s) => s.number === songNumber);
    const title = (fromKannadaOnly ? sharedSong?.kannadaTitle : sharedSong?.title) || '';
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      showToast('Link copied!');
    }
  }, [songNumber, showToast, fromKannadaOnly]);

  const handleDownload = useCallback(async () => {
    if (!imageRef.current || downloading) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(imageRef.current, { pixelRatio: 2 });
      const link = document.createElement('a');
      link.download = `song-${songNumber}.png`;
      link.href = dataUrl;
      link.click();
      showToast('Image saved!');
    } catch {
      showToast('Failed to generate image');
    } finally {
      setDownloading(false);
    }
  }, [songNumber, downloading, showToast]);

  if (!song) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F3EEE8' }}>
        <div className="text-center">
          <div
            className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: '#EAE3DA' }}
          >
            <svg className="w-6 h-6" style={{ color: '#6E6660' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-base font-medium" style={{ color: '#5C5550' }}>
            Song not found
          </p>
          <Link
            to="/songbook"
            className="inline-block mt-4 text-sm font-medium underline underline-offset-2 transition-colors hover:text-[#0E0C0C]"
            style={{ color: '#5C5550' }}
          >
            Back to Songbook
          </Link>
        </div>
      </div>
    );
  }

  const displayTitle = fromKannadaOnly ? song.kannadaTitle || song.title : song.title;
  const displayLyrics = fromKannadaOnly ? song.kannadaLyrics || song.lyrics : song.lyrics;
  const blocks = formatLyrics(displayLyrics);

  const songJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicComposition',
    name: displayTitle,
    ...(song.englishTitle && { alternateName: song.englishTitle }),
    inLanguage: song.englishTitle ? ['kn', 'en'] : 'kn',
    genre: 'Christian hymn',
    lyrics: {
      '@type': 'CreativeWork',
      text: displayLyrics
        .split('\n')
        .filter((l) => l.trim())
        .slice(0, 4)
        .join(' '),
    },
    isPartOf: {
      '@type': 'MusicPlaylist',
      name: 'Songs of Praise - Christian Brethren Songbook',
      url: 'https://zbcmysuru.in/songbook',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hootagalli Brethren Assembly',
      alternateName: 'Zion Brethren Church Mysore',
    },
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SEO
        title={`${song.title}${song.englishTitle ? ` - ${song.englishTitle}` : ''} | Song #${song.number}`}
        description={`Lyrics for "${song.title}"${song.englishTitle ? ` (${song.englishTitle})` : ''} - Song #${song.number} from the Christian Brethren Songbook, Hootagalli Brethren Assembly, Mysore. ${song.englishTitle ? 'Kannada-English translated hymn.' : 'Kannada Christian hymn.'}`}
        path={`/songbook/song/${song.number}`}
        keywords={`${song.title}, ${song.englishTitle || 'Kannada Christian song'}, Christian Brethren hymn, Brethren Assembly songbook, ${song.englishTitle ? 'Kannada English translated song, ' : ''}Christian song lyrics, worship hymn India, ಕ್ರೈಸ್ತ ಹಾಡು`}
        jsonLd={songJsonLd}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-1 px-3 sm:gap-2 sm:px-6">
          <Link to={returnPath} className="group flex shrink-0 items-center gap-1 font-display text-base font-bold text-ink sm:gap-1.5">
            <svg className="h-5 w-5 text-coral transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Songbook
          </Link>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              onClick={handleShare}
              className="flex h-10 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-white sm:w-10"
              aria-label="Share this song"
              title="Share"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.9} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3-3m0 0l3 3m-3-3v12" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex h-10 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-white disabled:opacity-40 sm:w-10"
              aria-label="Download as image"
              title="Download as image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.9} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>

            <div className="ml-0.5 flex items-center rounded-full bg-white p-0.5 sm:mx-1" role="group" aria-label="Text size">
              {FONT_SIZES.map((fs, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFontSize(i)}
                  aria-pressed={fontSize === i}
                  aria-label={['Small text', 'Medium text', 'Large text'][i] ?? `Text size ${i + 1}`}
                  className={`flex h-8 w-8 items-center justify-center rounded-full font-display font-bold transition-colors ${
                    fontSize === i ? 'bg-coral text-white' : 'text-ink hover:bg-cream'
                  }`}
                  style={{ fontSize: 11 + i * 3 }}
                >
                  {fs.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-3 pb-16 pt-6 sm:px-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="px-2 sm:px-0"
        >
          <p className="inline-flex items-center rounded-full bg-coral px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.1em] text-white">
            Song {song.number}
          </p>
          <h1 className="mt-3 font-display text-[1.75rem] font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-4xl">
            {displayTitle}
          </h1>
          {song.englishTitle && <p className="mt-1.5 text-base text-muted">{song.englishTitle}</p>}
        </motion.div>

        <motion.div
          key={songNumber}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mt-6 rounded-2xl bg-white px-5 py-7 sm:mt-8 sm:px-10 sm:py-10"
        >
          {blocks.map((block, i) => {
            if (block.type === 'header') {
              return (
                <p
                  key={i}
                  className="mb-4 font-display font-bold text-coral-ink"
                  style={{
                    fontSize: FONT_SIZES[fontSize].size - 1,
                    lineHeight: FONT_SIZES[fontSize].lineHeight,
                  }}
                >
                  {block.content}
                </p>
              );
            }
            return (
              <p
                key={i}
                className="mb-6 whitespace-pre-wrap text-ink last:mb-0"
                style={{
                  fontSize: FONT_SIZES[fontSize].size,
                  lineHeight: FONT_SIZES[fontSize].lineHeight,
                }}
              >
                {block.content}
              </p>
            );
          })}
        </motion.div>

        {/* Prev / Next navigation */}
        <nav aria-label="More songs" className="mt-4 grid grid-cols-2 gap-3">
          {prevSong ? (
            <Link
              to={`/songbook/song/${prevSong.number}?from=${sourceFilter}`}
              className="group flex min-w-0 items-center gap-3 rounded-2xl bg-white p-4 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(14,12,12,0.35)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted">Previous · {prevSong.number}</span>
                <span className="block truncate font-display text-sm font-bold group-hover:text-coral-ink">{prevSong.title}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextSong ? (
            <Link
              to={`/songbook/song/${nextSong.number}?from=${sourceFilter}`}
              className="group flex min-w-0 items-center justify-end gap-3 rounded-2xl bg-white p-4 text-right transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(14,12,12,0.35)]"
            >
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted">Next · {nextSong.number}</span>
                <span className="block truncate font-display text-sm font-bold group-hover:text-coral-ink">{nextSong.title}</span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>

        {/* Keyboard hints */}
        <p className="mt-8 hidden justify-center gap-4 text-xs text-muted sm:flex">
          <span>
            <kbd className="rounded border border-line bg-white px-1.5 py-0.5">&larr; &rarr;</kbd> prev / next
          </span>
          <span>
            <kbd className="rounded border border-line bg-white px-1.5 py-0.5">Esc</kbd> back to list
          </span>
        </p>
      </main>

      {/* Hidden image template for download */}
      <div style={{ position: 'fixed', left: '-9999px', top: 0 }}>
        <div
          ref={imageRef}
          style={{
            width: 1080,
            padding: '80px 72px',
            background: 'linear-gradient(160deg, #F3EEE8 0%, #EAE3DA 50%, #E2DAD1 100%)',
            fontFamily: "'Open Sans', system-ui, sans-serif",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#F03C3C',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 800,
                flexShrink: 0,
              }}
            >
              {song.number}
            </div>
            <div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  color: '#0E0C0C',
                  lineHeight: 1.3,
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                {displayTitle}
              </div>
              {song.englishTitle && (
                <div style={{ fontSize: 18, color: '#5C5550', marginTop: 4 }}>
                  {song.englishTitle}
                </div>
              )}
            </div>
          </div>

          <div
            style={{
              width: '100%',
              height: 1,
              background: 'linear-gradient(90deg, #B9AFA5 0%, transparent 100%)',
              marginBottom: 36,
            }}
          />

          {blocks.map((block, i) =>
            block.type === 'header' ? (
              <p
                key={i}
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: '#5C5550',
                  marginBottom: 16,
                  lineHeight: 1.6,
                }}
              >
                {block.content}
              </p>
            ) : (
              <p
                key={i}
                style={{
                  fontSize: 20,
                  color: '#0E0C0C',
                  marginBottom: 24,
                  lineHeight: 1.8,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {block.content}
              </p>
            ),
          )}

          <div
            style={{
              marginTop: 48,
              paddingTop: 28,
              borderTop: '1px solid #B9AFA5',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 14, color: '#5C5550', fontWeight: 500 }}>
              Zion Brethren Church Mysore
            </span>
            <span style={{ fontSize: 13, color: '#6E6660' }}>
              Song #{song.number}
            </span>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full text-sm font-medium shadow-lg"
            style={{ backgroundColor: '#0E0C0C', color: '#F3EEE8' }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SongPage;
