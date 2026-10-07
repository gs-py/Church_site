import { useState, useRef, useEffect, useMemo, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { songs } from '../data/songbook';

const SongSearch = () => {
  const navigate = useNavigate();
  const listId = useId();
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return songs
      .filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.englishTitle.toLowerCase().includes(q) ||
          s.number.toString() === q
      )
      .slice(0, 6);
  }, [query]);

  const open = focused && query.trim().length > 0;

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  const goToSong = (num: number) => {
    setQuery('');
    setFocused(false);
    navigate(`/songbook/song/${num}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setFocused(false);
      inputRef.current?.blur();
      return;
    }
    if (!open || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted((i) => (i < suggestions.length - 1 ? i + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted((i) => (i > 0 ? i - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      goToSong(suggestions[highlighted >= 0 ? highlighted : 0].number);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full" role="search">
      <div
        className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
          focused
            ? 'border-white/40 bg-white/12'
            : 'border-white/20 bg-white/6 hover:border-white/30'
        }`}
      >
        <svg
          className="h-4 w-4 shrink-0 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-label="Search songs by title or number"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          placeholder="Search songs"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setHighlighted(-1);
          }}
          onFocus={() => setFocused(true)}
          onKeyDown={onKeyDown}
          className="min-w-0 flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/60 sm:text-sm"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            className="shrink-0 text-white/60 transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={listId}
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full z-[70] mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#1C1916] shadow-2xl"
          >
            {suggestions.length === 0 ? (
              <div className="px-4 py-3 text-center text-xs text-white/60">No songs found</div>
            ) : (
              <ul className="py-1">
                {suggestions.map((song, idx) => (
                  <li key={song.number} role="option" aria-selected={highlighted === idx}>
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => goToSong(song.number)}
                      onMouseEnter={() => setHighlighted(idx)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        highlighted === idx ? 'bg-white/10' : 'hover:bg-white/5'
                      }`}
                    >
                      <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-white/10 px-1.5 text-[11px] font-semibold text-white/80">
                        {song.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-white">{song.title}</span>
                        {song.englishTitle && (
                          <span className="block truncate text-xs text-white/60">{song.englishTitle}</span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="border-t border-white/10 px-4 py-2">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setQuery('');
                  setFocused(false);
                  navigate('/songbook');
                }}
                className="text-xs font-medium text-white/70 transition-colors hover:text-white"
              >
                View all songs &rarr;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SongSearch;
