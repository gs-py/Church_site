import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { songs } from '../data/songbook';
import SEO from './SEO';

const SONGS_PER_PAGE = 12;

type FilterType = 'all' | 'kannada' | 'english';
type ViewMode = 'grid' | 'list';

function filterFromPath(pathname: string): FilterType {
  if (pathname.endsWith('/kannada')) return 'kannada';
  if (pathname.endsWith('/english')) return 'english';
  return 'all';
}

function pathForFilter(f: FilterType): string {
  if (f === 'kannada') return '/songbook/kannada';
  if (f === 'english') return '/songbook/english';
  return '/songbook';
}

const seoForFilter = (filter: FilterType, count: number) => {
  const base = {
    all: {
      title: 'Songbook - Kannada & English Hymns',
      description: `Browse ${count} praise songs and hymns from Hootagalli Brethren Assembly, Mysore. Kannada Christian songbook with searchable lyrics, used in Brethren Assembly worship.`,
      keywords: 'Kannada songbook, Kannada Christian songs, Brethren Assembly hymns, praise songs Mysore, Hootagalli Brethren Assembly, Kannada hymns lyrics, church songs Kannada, worship songs India',
      path: '/songbook',
    },
    kannada: {
      title: 'Kannada Songs - Praise Songbook',
      description: `Kannada praise songs and hymns from Hootagalli Brethren Assembly, Mysore. ${count} Kannada Christian worship songs with full lyrics.`,
      keywords: 'Kannada songs, Kannada Christian songs, Kannada hymns, Kannada praise songs, Brethren Assembly Kannada songs, Kannada worship lyrics',
      path: '/songbook/kannada',
    },
    english: {
      title: 'English Hymns - Praise Songbook',
      description: `English hymns and praise songs from Hootagalli Brethren Assembly songbook, Mysore. ${count} English worship songs with lyrics.`,
      keywords: 'English hymns, Christian English songs, Brethren Assembly hymns, praise songs English, worship songs lyrics',
      path: '/songbook/english',
    },
  };
  return base[filter];
};

const Songbook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = filterFromPath(location.pathname);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [jumpToNumber, setJumpToNumber] = useState('');
  const [showJumpInput, setShowJumpInput] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const jumpRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const filteredSongs = useMemo(() => {
    let result = songs;
    if (filter === 'english') result = result.filter((s) => s.englishTitle);
    else if (filter === 'kannada') result = result.filter((s) => !s.englishTitle);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.englishTitle.toLowerCase().includes(q) ||
          s.lyrics.toLowerCase().includes(q) ||
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
      navigate(`/songbook/song/${song.number}`);
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
    name: 'Songs of Praise - Hootagalli Brethren Assembly',
    description: seo.description,
    url: `https://zionbrethrenchurchmysore.com${seo.path}`,
    numberOfItems: filteredSongs.length,
    creator: {
      '@type': 'Organization',
      name: 'Hootagalli Brethren Assembly',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mysore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      <SEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        jsonLd={songbookJsonLd}
      />

      {/* ── Minimal Header ── */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-xl border-b" style={{ borderColor: '#E8E1D9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            <Link
              to="/"
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
              <span className="group-hover:text-[#1C1916] transition-colors">Home</span>
            </Link>

            <span className="text-xs tracking-[0.15em] uppercase font-semibold" style={{ color: '#B0A79E' }}>
              Songs of Praise
            </span>

            <div className="flex items-center gap-1">
              {/* Jump to # */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setShowJumpInput(!showJumpInput)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/60"
                style={{ color: '#9A8F83' }}
                title="Jump to song number"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </motion.button>

              {/* View toggle */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/60"
                style={{ color: '#9A8F83' }}
                title={viewMode === 'grid' ? 'Switch to list' : 'Switch to grid'}
              >
                {viewMode === 'grid' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Jump to number overlay ── */}
      <AnimatePresence>
        {showJumpInput && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="sticky top-14 z-40 border-b"
            style={{ backgroundColor: '#FAF7F2', borderColor: '#E8E1D9' }}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
              <form
                onSubmit={(e) => { e.preventDefault(); handleJump(); }}
                className="flex items-center gap-3 max-w-xs mx-auto"
              >
                <input
                  ref={jumpRef}
                  type="number"
                  placeholder="Song #"
                  value={jumpToNumber}
                  onChange={(e) => setJumpToNumber(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-white border text-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1C1916]/20"
                  style={{ borderColor: '#E4DDD6', color: '#1C1916' }}
                  min={1}
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white"
                  style={{ backgroundColor: '#1C1916' }}
                >
                  Go
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-3"
            style={{ fontFamily: 'var(--font-family-serif)', color: '#1C1916' }}
          >
            Songbook
          </h2>
          <p className="text-sm" style={{ color: '#9A8F83' }}>
            Hootagalli Brethren Assembly, Mysore
          </p>
        </motion.div>

        {/* ── Search + Filters row ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: '#B0A79E' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search songs..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 focus:ring-[#1C1916]/10 transition-shadow"
              style={{ borderColor: '#E4DDD6', color: '#1C1916' }}
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded transition-colors"
                style={{ color: '#B0A79E' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border" style={{ borderColor: '#E4DDD6' }}>
            {([
              { key: 'all' as const, label: 'All' },
              { key: 'kannada' as const, label: 'Kannada' },
              { key: 'english' as const, label: 'English' },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleFilterChange(key)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === key ? 'text-white' : ''
                }`}
                style={{ color: filter === key ? '#fff' : '#9A8F83' }}
              >
                {filter === key && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: '#1C1916' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>

          {/* Count */}
          <div className="hidden sm:flex items-center px-3">
            <span className="text-xs tabular-nums" style={{ color: '#B0A79E' }}>
              {filteredSongs.length} songs
            </span>
          </div>
        </motion.div>

        {/* ── Songs ── */}
        <AnimatePresence mode="wait">
          {filteredSongs.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#F0EBE4' }}>
                <svg className="w-5 h-5" style={{ color: '#B0A79E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium" style={{ color: '#6B635D' }}>No songs match your search</p>
              <button
                onClick={() => { setSearchQuery(''); setCurrentPage(1); navigate('/songbook'); }}
                className="mt-3 text-xs font-medium underline underline-offset-2"
                style={{ color: '#9A8F83' }}
              >
                Clear filters
              </button>
            </motion.div>
          ) : viewMode === 'grid' ? (
            <motion.div
              key={`grid-${currentPage}-${filter}-${searchQuery}`}
              variants={stagger.container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {paginatedSongs.map((song) => (
                <motion.div
                  key={song.number}
                  variants={stagger.item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-left rounded-2xl p-5 border transition-all duration-200 cursor-pointer group"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E8E1D9',
                  }}
                  onClick={() => navigate(`/songbook/song/${song.number}`)}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 group-hover:bg-[#1C1916] group-hover:text-white"
                      style={{ backgroundColor: '#F0EBE4', color: '#6B635D' }}
                    >
                      {song.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-semibold text-sm leading-snug truncate transition-colors group-hover:text-[#1C1916]"
                        style={{ color: '#3D3530' }}
                      >
                        {song.title}
                      </h3>
                      {song.englishTitle && (
                        <p className="text-xs mt-0.5 truncate" style={{ color: '#B0A79E' }}>
                          {song.englishTitle}
                        </p>
                      )}
                      <p className="text-xs mt-2.5 line-clamp-2 leading-relaxed" style={{ color: '#9A8F83' }}>
                        {song.lyrics
                          .split('\n')
                          .filter((l) => l.trim() && !/^\d+\.?\s*$/.test(l.trim()) && !l.trim().startsWith('(') && !l.trim().startsWith('-'))
                          .slice(0, 2)
                          .join(' / ')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* ── List View ── */
            <motion.div
              key={`list-${currentPage}-${filter}-${searchQuery}`}
              variants={stagger.container}
              initial="hidden"
              animate="show"
              className="space-y-1"
            >
              {paginatedSongs.map((song) => (
                <motion.div
                  key={song.number}
                  variants={stagger.item}
                  onClick={() => navigate(`/songbook/song/${song.number}`)}
                  whileTap={{ scale: 0.995 }}
                  className="w-full text-left flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-150 cursor-pointer group hover:bg-white"
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold tabular-nums transition-colors group-hover:bg-[#1C1916] group-hover:text-white"
                    style={{ backgroundColor: '#F0EBE4', color: '#6B635D' }}
                  >
                    {song.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-medium truncate block" style={{ color: '#1C1916' }}>
                      {song.title}
                    </span>
                  </div>
                  {song.englishTitle && (
                    <span className="hidden sm:block text-xs truncate max-w-[200px]" style={{ color: '#B0A79E' }}>
                      {song.englishTitle}
                    </span>
                  )}
                  <svg
                    className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#B0A79E' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center gap-1 mt-12"
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white"
            >
              <svg className="w-4 h-4" style={{ color: '#6B635D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {getPageNumbers().map((page, idx) =>
              page === '...' ? (
                <span key={`d-${idx}`} className="w-9 h-9 flex items-center justify-center text-xs" style={{ color: '#B0A79E' }}>
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page as number)}
                  className="relative w-9 h-9 rounded-lg text-xs font-medium transition-colors"
                  style={{ color: currentPage === page ? '#fff' : '#6B635D' }}
                >
                  {currentPage === page && (
                    <motion.div
                      layoutId="activePage"
                      className="absolute inset-0 rounded-lg"
                      style={{ backgroundColor: '#1C1916' }}
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{page}</span>
                </button>
              )
            )}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white"
            >
              <svg className="w-4 h-4" style={{ color: '#6B635D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* ── Keyboard hint ── */}
        <div className="hidden sm:flex justify-center mt-6 gap-4">
          <span className="text-[10px] tracking-wide" style={{ color: '#C8C1B9' }}>
            <kbd className="px-1.5 py-0.5 rounded border text-[10px]" style={{ borderColor: '#E4DDD6', backgroundColor: '#F0EBE4' }}>Ctrl K</kbd> search
          </span>
          <span className="text-[10px] tracking-wide" style={{ color: '#C8C1B9' }}>
            <kbd className="px-1.5 py-0.5 rounded border text-[10px]" style={{ borderColor: '#E4DDD6', backgroundColor: '#F0EBE4' }}>Esc</kbd> close
          </span>
        </div>
      </main>
    </div>
  );
};

export default Songbook;
