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
          <Wordmark className={`text-base sm:text-xl ${solid ? 'text-coral' : 'text-white'}`} />
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkCls}>
              {link.label}
            </a>
          ))}
          <Link to="/songbook" className={linkCls}>
            Songbook
          </Link>
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="w-56">
            <SongSearch tone={solid ? 'light' : 'dark'} />
          </div>
          <a
            href="#location"
            className="rounded-full bg-coral px-5 py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-coral-deep"
          >
            Plan a Visit
          </a>
        </div>

        {/* Menu toggle (below xl) */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className={`-mr-2 flex h-11 items-center gap-3 px-2 xl:hidden ${solid ? 'text-ink' : 'text-white'}`}
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

      {/* Mobile panel */}
      {menuOpen && (
        <div id="mobile-menu" className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-cream px-4 pb-8 pt-5 sm:px-8 xl:hidden">
          <SongSearch tone="light" />
          <nav aria-label="Mobile" className="mt-4">
            <ul className="divide-y divide-line">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="headline block py-4 text-2xl text-ink transition-colors hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/songbook" className="headline block py-4 text-2xl text-ink transition-colors hover:text-coral">
                  Songbook
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href="#location"
            onClick={() => setMenuOpen(false)}
            className="mt-6 block rounded-full bg-coral px-6 py-4 text-center font-display text-lg font-bold text-white"
          >
            Plan a Visit
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
