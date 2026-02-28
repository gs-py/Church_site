import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { songs } from '../data/songbook';

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return songs
      .filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.englishTitle.toLowerCase().includes(q) ||
          s.number.toString() === q
      )
      .slice(0, 6);
  }, [searchQuery]);

  const showDropdown = searchFocused && searchQuery.trim().length > 0;

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Reset highlight when suggestions change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [suggestions]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
        navigateToSong(suggestions[highlightedIndex].number);
      } else if (suggestions.length > 0) {
        navigateToSong(suggestions[0].number);
      }
    } else if (e.key === 'Escape') {
      setSearchFocused(false);
      searchRef.current?.blur();
    }
  };

  const navigateToSong = (num: number) => {
    setSearchQuery('');
    setSearchFocused(false);
    navigate(`/songbook/song/${num}`);
  };

  // Using the Unsplash image URL - direct link to the photo
  const backgroundImageUrl = "https://images.unsplash.com/photo-1591171134898-cd346fd73a4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // Animation variants for professional intro
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  } as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center p-0 md:p-8">
      {/* Image Container with padding/rounded frame effect */}
      <div 
        className="relative w-full h-full min-h-screen rounded-none md:rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        {/* Header inside the image */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 md:h-16 gap-3">
              {/* Left: Songbook */}
              <Link
                to="/songbook"
                className="shrink-0 flex items-center gap-1.5 text-white font-medium text-sm transition-colors hover:text-white/80"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <span className="hidden sm:inline">Songbook</span>
              </Link>

              {/* Center: Search songs with suggestions */}
              <div className="relative flex-1 max-w-xs sm:max-w-sm">
                <div className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border text-xs sm:text-sm transition-all ${
                  searchFocused
                    ? 'bg-white/20 border-white/30'
                    : 'bg-white/10 border-white/15 hover:bg-white/15 hover:border-white/25'
                }`}>
                  <svg className="w-3.5 h-3.5 shrink-0 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search songs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-xs sm:text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => { setSearchQuery(''); searchRef.current?.focus(); }}
                      className="shrink-0 text-white/40 hover:text-white/70 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Suggestions dropdown */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-[#1C1916]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden z-[70]"
                    >
                      {suggestions.length === 0 ? (
                        <div className="px-4 py-3 text-xs text-white/40 text-center">
                          No songs found
                        </div>
                      ) : (
                        <div className="py-1">
                          {suggestions.map((song, idx) => (
                            <button
                              key={song.number}
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => navigateToSong(song.number)}
                              onMouseEnter={() => setHighlightedIndex(idx)}
                              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                                highlightedIndex === idx
                                  ? 'bg-white/10'
                                  : 'hover:bg-white/5'
                              }`}
                            >
                              <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/10 text-white/70">
                                {song.number}
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm text-white font-medium truncate">
                                  {song.title}
                                </p>
                                {song.englishTitle && (
                                  <p className="text-[11px] text-white/40 truncate">
                                    {song.englishTitle}
                                  </p>
                                )}
                              </div>
                              <svg className="w-3.5 h-3.5 shrink-0 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* View all link */}
                      <div className="border-t border-white/8 px-4 py-2">
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => { setSearchQuery(''); setSearchFocused(false); navigate('/songbook'); }}
                          className="text-[11px] text-white/40 hover:text-white/60 transition-colors font-medium"
                        >
                          View all songs &rarr;
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right: Contact Us */}
              <motion.a
                href="#location"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 px-3 sm:px-5 py-2 text-xs sm:text-sm bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.nav>

        {/* Content Container - Centered vertically, left-aligned on desktop */}
        <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-7xl w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            >
              

              {/* Introductory Text with fade and slide */}
              <motion.p
                variants={itemVariants}
                className="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
              >
                We are happy to welcome you to our spiritual family – a place where the heart finds peace, the soul is filled with faith, and every step leads to the light of God's love.
              </motion.p>

              {/* Main Heading - Bible Verse with scale and fade */}
              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8
                }}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 md:mb-8"
              >
                "For where two or three gather in my name, there am I with them."
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-3 md:mt-4"
                >
                  — Matthew 18:20
                </motion.span>
              </motion.h1>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-10 flex flex-col items-center gap-2 text-white"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs md:text-sm font-medium hidden sm:block"
          >
            Scroll Down
          </motion.span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
