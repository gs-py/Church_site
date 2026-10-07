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

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-white/10 bg-[#14110E]' : 'border-white/10 bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display shrink-0 text-lg font-semibold tracking-tight text-white sm:text-xl"
          aria-label="Zion Brethren Church, back to top"
        >
          Zion Brethren Church
        </a>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link to="/songbook" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            Songbook
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="w-56">
            <SongSearch />
          </div>
          <a
            href="#location"
            className="rounded-full bg-[#F7F2EA] px-5 py-2.5 text-sm font-semibold text-[#1C1916] transition-colors hover:bg-white"
          >
            Plan a Visit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-white lg:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div id="mobile-menu" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 bg-[#14110E] px-4 pb-6 pt-4 lg:hidden">
          <SongSearch />
          <nav aria-label="Mobile" className="mt-4">
            <ul className="divide-y divide-white/10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3.5 text-base font-medium text-white/90"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/songbook" className="block py-3.5 text-base font-medium text-white/90">
                  Songbook
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href="#location"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-[#F7F2EA] px-6 py-3.5 text-center text-sm font-semibold text-[#1C1916]"
          >
            Plan a Visit
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
