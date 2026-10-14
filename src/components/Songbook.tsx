import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { songs } from '../data/songbook';
import SEO from './SEO';
import { Wordmark } from './SiteHeader';

const SONGS_PER_PAGE = 12;

type FilterType = 'all' | 'kannada' | 'kannada-only' | 'english';
type ViewMode = 'grid' | 'list';

function filterFromPath(pathname: string): FilterType {
  if (pathname.endsWith('/kannada')) return 'kannada';
  if (pathname.endsWith('/kannada-only')) return 'kannada-only';
  if (pathname.endsWith('/english')) return 'english';
  return 'all';
}

function pathForFilter(f: FilterType): string {
  if (f === 'kannada') return '/songbook/kannada';
  if (f === 'kannada-only') return '/songbook/kannada-only';
  if (f === 'english') return '/songbook/english';
  return '/songbook';
}

const seoForFilter = (filter: FilterType, count: number) => {
  const base = {
    all: {
      title: 'Songbook - Kannada & English Christian Hymns | Brethren Assembly',
      description: `Browse ${count} Kannada and English translated praise songs and hymns from the Christian Brethren songbook. Searchable Kannada-English hymn book used in Brethren Assembly worship at Hootagalli, Mysore. ಕ್ರೈಸ್ತ ಸಭೆಯ ಹಾಡುಗಳು.`,
      keywords: 'Kannada English translated songbook, Christian Brethren songbook, Brethren Assembly hymn book, Kannada Christian songs, Kannada hymns with English translation, Songs of Praise book, praise songs Mysore, Hootagalli Brethren Assembly, Kannada hymns lyrics, church songs Kannada, worship songs India, ಕ್ರೈಸ್ತ ಹಾಡುಗಳು, ಕನ್ನಡ ಸ್ತುತಿ ಗೀತೆಗಳು, Protestant Christian songs Kannada, Brethren church songs, Indian Christian hymnal',
      path: '/songbook',
    },
    kannada: {
      title: 'Kannada Christian Songs - Brethren Assembly Praise Songbook',
      description: `${count} Kannada praise songs and hymns from the Christian Brethren songbook. Kannada translated worship songs with full lyrics from Hootagalli Brethren Assembly, Mysore. ಕನ್ನಡ ಕ್ರೈಸ್ತ ಹಾಡುಗಳು.`,
      keywords: 'Kannada Christian songs, Kannada translated songbook, Kannada hymns, Kannada praise songs, Brethren Assembly Kannada songs, Kannada worship lyrics, ಕನ್ನಡ ಕ್ರೈಸ್ತ ಹಾಡುಗಳು, ಕನ್ನಡ ಸ್ತುತಿ ಗೀತೆಗಳು, Christian Brethren Kannada hymn book, Kannada church songs',
      path: '/songbook/kannada',
    },
    'kannada-only': {
      title: 'Kannada Script Christian Songs - Brethren Assembly Songbook',
      description: `${count} Christian songs transcribed in Kannada script from the scanned songbook. ಕನ್ನಡ ಲಿಪಿಯಲ್ಲಿರುವ ಕ್ರೈಸ್ತ ಹಾಡುಗಳು.`,
      keywords: 'Kannada script Christian songs, Kannada hymn lyrics, ಕನ್ನಡ ಕ್ರೈಸ್ತ ಹಾಡುಗಳು, ಕನ್ನಡ ಸ್ತುತಿ ಗೀತೆಗಳು',
      path: '/songbook/kannada-only',
    },
    english: {
      title: 'English Christian Hymns - Brethren Assembly Praise Songbook',
      description: `${count} English hymns and praise songs from the Christian Brethren songbook. English translated worship songs with lyrics from Hootagalli Brethren Assembly, Mysore.`,
      keywords: 'English Christian hymns, Christian Brethren hymn book, Brethren Assembly English hymns, English translated songbook, praise songs English, worship songs lyrics, English church hymnal India, Protestant hymns English',
      path: '/songbook/english',
    },
  };
  return base[filter];
};

const Songbook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = filterFromPath(location.pathname);
  const songPath = (number: number) => `/songbook/song/${number}?from=${filter}`;

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // Phones start with the compact list; larger screens with cards
  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    typeof window !== 'undefined' && window.innerWidth < 640 ? 'list' : 'grid'
  );
  const [jumpToNumber, setJumpToNumber] = useState('');
  const [showJumpInput, setShowJumpInput] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const jumpRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const filteredSongs = useMemo(() => {
    let result = songs;
    if (filter === 'english') result = result.filter((s) => s.englishTitle);
    else if (filter === 'kannada') result = result.filter((s) => !s.englishTitle);
    else if (filter === 'kannada-only') result = result.filter((s) => s.kannadaLyrics);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.kannadaTitle?.toLowerCase().includes(q) ||
          s.englishTitle.toLowerCase().includes(q) ||
          s.lyrics.toLowerCase().includes(q) ||
          s.kannadaLyrics?.toLowerCase().includes(q) ||
          s.number.toString() === q
      );
    }
    return result;
  }, [searchQuery, filter]);

  // Reset page when filter changes (React recommended pattern)
  const [prevFilter, setPrevFilter] = useState(filter);
  if (prevFilter !== filter) {
    setPrevFilter(filter);
    setCurrentPage(1);
  }

  const totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);
  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * SONGS_PER_PAGE,
    currentPage * SONGS_PER_PAGE
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showJumpInput) setShowJumpInput(false);
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showJumpInput]);

  // Scroll to top on page change
  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Focus jump input when shown
  useEffect(() => {
    if (showJumpInput) jumpRef.current?.focus();
  }, [showJumpInput]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleJump = () => {
    const num = parseInt(jumpToNumber);
    if (!num) return;
    const song = songs.find((s) => s.number === num);
    if (song) {
      navigate(songPath(song.number));
      setShowJumpInput(false);
      setJumpToNumber('');
    }
  };

  const handleFilterChange = (f: FilterType) => {
    setCurrentPage(1);
    navigate(pathForFilter(f));
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const stagger = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.1 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring' as const, stiffness: 400, damping: 30 },
      },
    },
  };

  const seo = seoForFilter(filter, filteredSongs.length);

  // JSON-LD structured data for the songbook collection
  const songbookJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicPlaylist',
    name: 'Songs of Praise - Christian Brethren Songbook',
    description: seo.description,
    url: `https://zbcmysuru.in${seo.path}`,
    numberOfItems: filteredSongs.length,
    inLanguage: ['kn', 'en'],
    genre: 'Christian hymns',
    creator: {
      '@type': 'Organization',
      name: 'Hootagalli Brethren Assembly',
      alternateName: 'Zion Brethren Church Mysore',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mysore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
    },
  };

  const filterTabs: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: songs.length },
    { key: 'kannada', label: 'Kannada', count: songs.filter((s) => !s.englishTitle).length },
    { key: 'kannada-only', label: 'Kannada only', count: songs.filter((s) => s.kannadaLyrics).length },
    { key: 'english', label: 'English', count: songs.filter((s) => s.englishTitle).length },
  ];

  const titleOf = (song: (typeof songs)[number]) =>
    filter === 'kannada-only' ? song.kannadaTitle || song.title : song.title;

  const previewOf = (song: (typeof songs)[number]) =>
    (filter === 'kannada-only' ? song.kannadaLyrics || song.lyrics : song.lyrics)
      .split('\n')
      .filter((l) => l.trim() && !/^\d+\.?\s*$/.test(l.trim()) && !l.trim().startsWith('(') && !l.trim().startsWith('-'))
      .slice(0, 2)
      .join(' / ');

  const iconBtn =
    'flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-coral';

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        jsonLd={songbookJsonLd}
      />

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/" className="group flex min-w-0 items-center gap-2" aria-label="Back to the Zion Brethren Church home page">
            <svg className="h-5 w-5 shrink-0 text-coral transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <Wordmark className="truncate text-[0.95rem] text-coral sm:text-lg" />
          </Link>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setShowJumpInput(!showJumpInput)}
              aria-expanded={showJumpInput}
              className={`${iconBtn} ${showJumpInput ? 'bg-white' : ''}`}
              aria-label="Jump to song number"
              title="Jump to song number"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className={iconBtn}
              aria-label={viewMode === 'grid' ? 'Show as list' : 'Show as cards'}
              title={viewMode === 'grid' ? 'Show as list' : 'Show as cards'}
            >
              {viewMode === 'grid' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Jump to number ── */}
        <AnimatePresence>
          {showJumpInput && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-line"
            >
              <form
                onSubmit={(e) => { e.preventDefault(); handleJump(); }}
                className="mx-auto flex max-w-sm items-center gap-2 px-4 py-3"
              >
                <label htmlFor="songbook-jump" className="shrink-0 text-sm text-muted">Song no.</label>
                <input
                  id="songbook-jump"
                  ref={jumpRef}
                  type="number"
                  inputMode="numeric"
                  placeholder="e.g. 12"
                  value={jumpToNumber}
                  onChange={(e) => setJumpToNumber(e.target.value)}
                  className="w-full min-w-0 rounded-full border border-line bg-white px-4 py-2 text-base outline-none focus:border-ink"
                  min={1}
                />
                <button type="submit" className="shrink-0 rounded-full bg-coral px-5 py-2 font-display text-sm font-bold text-white hover:bg-coral-deep">
                  Go
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Title, search and filters on a coral panel ── */}
      <div className="px-2 pt-2 sm:px-4 sm:pt-4 lg:px-[23px]">
        <section aria-labelledby="songbook-title" className="mx-auto max-w-[1394px] rounded-2xl bg-coral-deep px-5 py-8 text-white sm:px-10 sm:py-12">
          <div className="mx-auto max-w-5xl">
            <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-white/85 sm:text-sm">Songs of Praise</p>
            <h1 id="songbook-title" className="headline mt-2 flex items-center gap-3 text-[clamp(2.25rem,6vw,4rem)]">
              <svg className="h-[0.8em] w-[0.8em] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Songbook
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:text-base">Hootagalli Brethren Assembly, Mysore</p>

            <div className="relative mt-6 sm:mt-8">
              <svg className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={searchRef}
                type="search"
                aria-label="Search songs by title, words or number"
                placeholder="Title, words or song no."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full rounded-full bg-white py-3.5 pl-13 pr-12 text-base text-ink outline-none placeholder:text-muted focus:ring-4 focus:ring-white/40 sm:py-4 sm:text-lg"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-muted hover:bg-cream hover:text-ink"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter songs by language">
              {filterTabs.map(({ key, label, count }) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={filter === key}
                  onClick={() => handleFilterChange(key)}
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 px-3 py-1.5 font-display text-sm font-bold transition-colors sm:px-4 sm:py-2 ${
                    filter === key ? 'border-white bg-white text-coral-ink' : 'border-white/75 text-white hover:border-white'
                  }`}
                >
                  {label}
                  <span className={`rounded-full px-1.5 text-xs tabular-nums ${filter === key ? 'bg-coral/10' : 'bg-white/20'}`}>{count}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      <main ref={contentRef} className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10">
        <p className="mb-4 text-sm text-muted" aria-live="polite">
          {searchQuery.trim()
            ? `${filteredSongs.length} ${filteredSongs.length === 1 ? 'song matches' : 'songs match'} “${searchQuery.trim()}”`
            : `${filteredSongs.length} songs`}
          {totalPages > 1 && ` · page ${currentPage} of ${totalPages}`}
        </p>

        {/* ── Songs ── */}
        <AnimatePresence mode="wait">
          {filteredSongs.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl bg-white px-6 py-16 text-center"
            >
              <p className="font-display text-lg font-bold">No songs match your search</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setCurrentPage(1); navigate('/songbook'); }}
                className="mt-4 rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white hover:bg-coral-deep"
              >
                Clear search and filters
              </button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <motion.ul
              key={`grid-${currentPage}-${filter}-${searchQuery}`}
              variants={stagger.container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {paginatedSongs.map((song) => (
                <motion.li key={song.number} variants={stagger.item}>
                  <Link
                    to={songPath(song.number)}
                    className="group flex h-full items-start gap-4 rounded-2xl bg-white p-5 transition-shadow hover:shadow-[0_8px_24px_-12px_rgba(14,12,12,0.35)] focus-visible:outline-2 focus-visible:outline-coral"
                  >
                    <span className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-coral px-2 font-display text-sm font-bold text-white">
                      {song.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display font-bold tracking-[-0.02em] group-hover:text-coral-ink">{titleOf(song)}</span>
                      {song.englishTitle && <span className="mt-0.5 block truncate text-sm text-muted">{song.englishTitle}</span>}
                      <span className="mt-2.5 line-clamp-2 block text-sm leading-relaxed text-ink/70">{previewOf(song)}</span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.ul
              key={`list-${currentPage}-${filter}-${searchQuery}`}
              variants={stagger.container}
              initial="hidden"
              animate="show"
              className="divide-y divide-line overflow-hidden rounded-2xl bg-white"
            >
              {paginatedSongs.map((song) => (
                <motion.li key={song.number} variants={stagger.item}>
                  <Link
                    to={songPath(song.number)}
                    className="group flex items-center gap-4 px-4 py-3.5 transition-colors hover:bg-cream/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-coral sm:px-5"
                  >
                    <span className="w-9 shrink-0 text-right font-display text-base font-extrabold tabular-nums text-coral-ink">
                      {song.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display font-bold tracking-[-0.02em] group-hover:text-coral-ink">{titleOf(song)}</span>
                      {song.englishTitle && <span className="block truncate text-sm text-muted">{song.englishTitle}</span>}
                    </span>
                    <svg className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <nav aria-label="Pages" className="mt-10 flex items-center justify-center gap-1">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {getPageNumbers().map((page, idx) =>
              page === '...' ? (
                <span key={`d-${idx}`} className="flex h-10 w-6 items-center justify-center text-sm text-muted sm:w-8">
                  …
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page as number)}
                  aria-current={currentPage === page ? 'page' : undefined}
                  className={`h-10 min-w-10 rounded-full px-2 font-display text-sm font-bold tabular-nums transition-colors ${
                    currentPage === page ? 'bg-coral text-white' : 'text-ink hover:bg-white'
                  }`}
                >
                  {page}
                </button>
              )
            )}
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        )}

        <p className="mt-6 hidden justify-center gap-4 text-xs text-muted sm:flex">
          <span>
            <kbd className="rounded border border-line bg-white px-1.5 py-0.5">Ctrl K</kbd> search
          </span>
          <span>
            <kbd className="rounded border border-line bg-white px-1.5 py-0.5">Esc</kbd> close
          </span>
        </p>
      </main>
    </div>
  );
};

export default Songbook;
