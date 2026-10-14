import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SongSearch from './SongSearch';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Gatherings', href: '#activities' },
  { label: 'Sermons', href: '#media' },
  { label: 'Visit', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const MusicIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const Wordmark = ({ className = '' }: { className?: string }) => (
  <span className={`font-display uppercase tracking-[0.06em] ${className}`}>
    <span className="font-extrabold">Zion Brethren</span> <span className="font-light">Church</span>
  </span>
);

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Over the hero photo the header is transparent with white text; once scrolled it turns cream
  const solid = scrolled || menuOpen;
  const linkCls = `font-display text-sm font-medium uppercase tracking-[0.04em] transition-colors ${
    solid ? 'text-ink hover:text-coral-ink' : 'text-white hover:text-white/75'
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 shadow-[0_1px_0_rgba(14,12,12,0.08)] backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-8">
        <a href="#top" aria-label="Zion Brethren Church, back to top" className="shrink-0">
          <Wordmark className={`text-[0.95rem] min-[400px]:text-base sm:text-xl ${solid ? 'text-coral' : 'text-white'}`} />
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkCls}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="w-56">
            <SongSearch tone={solid ? 'light' : 'dark'} />
          </div>
          <Link
            to="/songbook"
            className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-coral-deep"
          >
            <MusicIcon className="h-4 w-4" />
            Songbook
          </Link>
        </div>

        {/* Songbook + menu toggle (below xl) */}
        <div className="flex items-center gap-1 xl:hidden">
        <Link
          to="/songbook"
          aria-label="Songbook"
          className="inline-flex h-10 items-center gap-2 rounded-full bg-coral px-3 font-display text-sm font-bold text-white sm:px-4"
        >
          <MusicIcon />
          <span className="hidden sm:inline">Songbook</span>
        </Link>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className={`-mr-2 flex h-11 items-center gap-3 px-2 ${solid ? 'text-ink' : 'text-white'}`}
        >
          <span className="hidden font-display text-sm font-medium uppercase sm:inline">Menu</span>
          <svg className="h-7 w-9" fill="none" stroke="currentColor" viewBox="0 0 36 24" strokeWidth={2} aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" d="M9 3l18 18M27 3L9 21" />
            ) : (
              <path strokeLinecap="round" d="M2 4h32M2 12h32M2 20h32" />
            )}
          </svg>
        </button>
        </div>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div id="mobile-menu" className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-cream px-4 pb-8 pt-5 sm:px-8 xl:hidden">
          <Link
            to="/songbook"
            className="flex items-center justify-between rounded-2xl bg-coral px-5 py-4 text-white"
          >
            <span className="headline text-2xl">Songbook</span>
            <MusicIcon className="h-6 w-6" />
          </Link>
          <div className="mt-3">
            <SongSearch tone="light" />
          </div>
          <nav aria-label="Mobile" className="mt-2">
            <ul className="divide-y divide-line">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="headline block py-3.5 text-xl text-ink transition-colors hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#location"
            onClick={() => setMenuOpen(false)}
            className="mt-5 block rounded-full border-2 border-ink px-6 py-3.5 text-center font-display text-lg font-bold text-ink"
          >
            Plan a Visit
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
