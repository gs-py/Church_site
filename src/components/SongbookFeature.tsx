import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { songs } from '../data/songbook';
import SongSearch from './SongSearch';
import { Eyebrow, Panel, PillLink } from './ui';

// Same tabs and rules as the Songbook page
const tabs = [
  { label: 'All songs', to: '/songbook', count: songs.length },
  { label: 'Kannada', to: '/songbook/kannada', count: songs.filter((s) => !s.englishTitle).length },
  { label: 'Kannada only', to: '/songbook/kannada-only', count: songs.filter((s) => s.kannadaLyrics).length },
  { label: 'English', to: '/songbook/english', count: songs.filter((s) => s.englishTitle).length },
];

const maxNumber = Math.max(...songs.map((s) => s.number));

const MusicIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SongbookFeature = () => {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const jump = (e: React.FormEvent) => {
    e.preventDefault();
    const n = parseInt(number, 10);
    if (songs.some((s) => s.number === n)) {
      navigate(`/songbook/song/${n}`);
    } else {
      setError(`Enter a song number from 1 to ${maxNumber}.`);
    }
  };

  return (
    <Panel id="songbook" tone="coral" labelledBy="songbook-heading" className="px-5 py-12 sm:px-10 md:py-20 lg:px-[49px]">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16"
      >
        <div>
          <Eyebrow tone="dark">Songs of Praise</Eyebrow>
          <h2 id="songbook-heading" className="headline flex items-center gap-3 text-[clamp(2.5rem,6vw,4.5rem)] text-white">
            <MusicIcon className="h-[0.8em] w-[0.8em] shrink-0" />
            Songbook
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white sm:text-[1.1rem]">
            {songs.length} Kannada and English songs and hymns, searchable by title, words or number.
          </p>
          <div className="mt-7 hidden lg:block">
            <PillLink href="/songbook" variant="white">
              Open the Songbook
            </PillLink>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-4 text-ink sm:p-5">
            <p className="mb-2 font-display text-sm font-bold uppercase tracking-[0.06em]">Find a song</p>
            <SongSearch tone="light" size="large" />

            <form onSubmit={jump} className="mt-4 flex items-center gap-2" noValidate>
              <label htmlFor="jump-number" className="shrink-0 text-[0.95rem] text-muted">
                Go to song no.
              </label>
              <input
                id="jump-number"
                type="number"
                inputMode="numeric"
                min={1}
                max={maxNumber}
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  setError('');
                }}
                placeholder="e.g. 12"
                aria-describedby={error ? 'jump-error' : undefined}
                className="w-full min-w-0 rounded-full border border-line bg-cream px-4 py-2.5 text-base outline-none focus:border-ink"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-coral px-5 py-2.5 font-display text-base font-bold text-white transition-colors hover:bg-coral-deep"
              >
                Go
              </button>
            </form>
            {error && (
              <p id="jump-error" role="alert" className="mt-2 text-sm text-coral-ink">
                {error}
              </p>
            )}
          </div>

          <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {tabs.map((t) => (
              <li key={t.to}>
                <Link
                  to={t.to}
                  className="flex items-center justify-between gap-2 whitespace-nowrap rounded-full border-2 border-white/80 px-3 py-2 font-display text-sm font-bold text-white sm:px-4 transition-colors hover:bg-white hover:text-coral-ink"
                >
                  {t.label}
                  <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs tabular-nums">{t.count}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden">
            <PillLink href="/songbook" variant="white">
              Open the Songbook
            </PillLink>
          </div>
        </div>
      </motion.div>
    </Panel>
  );
};

export default SongbookFeature;
