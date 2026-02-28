import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { songs, type Song } from '../data/songbook';

const SONGS_PER_PAGE = 12;
const FONT_SIZES = [
  { label: 'A', size: 14, lineHeight: 1.6 },
  { label: 'A', size: 17, lineHeight: 1.7 },
  { label: 'A', size: 21, lineHeight: 1.8 },
] as const;

type ViewMode = 'grid' | 'list';

const Songbook = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [filter, setFilter] = useState<'all' | 'kannada' | 'english'>('all');
  const [fontSize, setFontSize] = useState(1);
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

  const totalPages = Math.ceil(filteredSongs.length / SONGS_PER_PAGE);
  const paginatedSongs = filteredSongs.slice(
    (currentPage - 1) * SONGS_PER_PAGE,
    currentPage * SONGS_PER_PAGE
  );

  // Navigate between songs in modal
  const currentSongIndex = selectedSong
    ? filteredSongs.findIndex((s) => s.number === selectedSong.number)
    : -1;
  const hasPrev = currentSongIndex > 0;
  const hasNext = currentSongIndex < filteredSongs.length - 1;

  const goToPrevSong = useCallback(() => {
    if (hasPrev) setSelectedSong(filteredSongs[currentSongIndex - 1]);
  }, [hasPrev, filteredSongs, currentSongIndex]);

  const goToNextSong = useCallback(() => {
    if (hasNext) setSelectedSong(filteredSongs[currentSongIndex + 1]);
  }, [hasNext, filteredSongs, currentSongIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSong) setSelectedSong(null);
        else if (showJumpInput) setShowJumpInput(false);
      }
      if (selectedSong) {
        if (e.key === 'ArrowLeft') goToPrevSong();
        if (e.key === 'ArrowRight') goToNextSong();
      }
      // Ctrl/Cmd + K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedSong, showJumpInput, goToPrevSong, goToNextSong]);

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
      setSelectedSong(song);
      setShowJumpInput(false);
      setJumpToNumber('');
    }
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

  // Parse lyrics into structured verses
  const formatLyrics = (raw: string) => {
    const lines = raw.split('\n');
    const blocks: { type: 'header' | 'verse' | 'chorus' | 'line'; content: string }[] = [];
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
      // Skip reference codes and song number headers
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
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
                onClick={() => { setFilter(key); setCurrentPage(1); }}
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
                onClick={() => { setSearchQuery(''); setFilter('all'); setCurrentPage(1); }}
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
                <motion.button
                  key={song.number}
                  variants={stagger.item}
                  onClick={() => setSelectedSong(song)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-left rounded-2xl p-5 border transition-all duration-200 cursor-pointer group"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#E8E1D9',
                  }}
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 group-hover:bg-[#1C1916] group-hover:text-white"
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
                </motion.button>
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
                <motion.button
                  key={song.number}
                  variants={stagger.item}
                  onClick={() => setSelectedSong(song)}
                  whileTap={{ scale: 0.995 }}
                  className="w-full text-left flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-150 cursor-pointer group hover:bg-white"
                >
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold tabular-nums transition-colors group-hover:bg-[#1C1916] group-hover:text-white"
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
                    className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#B0A79E' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
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
          <span className="text-[10px] tracking-wide" style={{ color: '#C8C1B9' }}>
            <kbd className="px-1.5 py-0.5 rounded border text-[10px]" style={{ borderColor: '#E4DDD6', backgroundColor: '#F0EBE4' }}>&larr; &rarr;</kbd> navigate songs
          </span>
        </div>
      </main>

      {/* ── Song Detail Modal ── */}
      <AnimatePresence>
        {selectedSong && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
            onClick={() => setSelectedSong(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl bg-white overflow-hidden shadow-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col"
            >
              {/* ── Modal Top bar ── */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: '#F0EBE4' }}>
                {/* Prev */}
                <button
                  onClick={goToPrevSong}
                  disabled={!hasPrev}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20 hover:bg-[#F0EBE4]"
                  style={{ color: '#6B635D' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Song badge */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#1C1916', color: '#fff' }}
                  >
                    {selectedSong.number}
                  </span>
                  <div className="text-center">
                    <p className="text-sm font-semibold leading-tight" style={{ color: '#1C1916' }}>
                      {selectedSong.title.length > 30
                        ? selectedSong.title.slice(0, 30) + '...'
                        : selectedSong.title}
                    </p>
                    {selectedSong.englishTitle && (
                      <p className="text-[11px] mt-0.5" style={{ color: '#B0A79E' }}>
                        {selectedSong.englishTitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Next */}
                <button
                  onClick={goToNextSong}
                  disabled={!hasNext}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-20 hover:bg-[#F0EBE4]"
                  style={{ color: '#6B635D' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* ── Font size + close toolbar ── */}
              <div className="flex items-center justify-between px-5 py-2 border-b" style={{ borderColor: '#F7F4EF' }}>
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
                  <span className="text-[10px] ml-2" style={{ color: '#C8C1B9' }}>
                    size
                  </span>
                </div>
                <button
                  onClick={() => setSelectedSong(null)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-[#F0EBE4]"
                  style={{ color: '#9A8F83' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ── Lyrics body ── */}
              <motion.div
                key={selectedSong.number}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="flex-1 overflow-y-auto px-6 py-6 overscroll-contain"
              >
                {formatLyrics(selectedSong.lyrics).map((block, i) => {
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

                {/* Bottom spacer for safe area */}
                <div className="h-8" />
              </motion.div>

              {/* ── Mobile drag indicator ── */}
              <div className="sm:hidden absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full" style={{ backgroundColor: '#E4DDD6' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Songbook;
