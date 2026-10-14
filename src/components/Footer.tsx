import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Community Chapel.png';
import { Wordmark } from './SiteHeader';
import { PinIcon } from './ui';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Weekly Gatherings', href: '#activities' },
  { label: 'Sermons', href: '#media' },
  { label: 'Plan a Visit', href: '#location' },
];

const Column = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => (
  <div className="flex flex-col items-center gap-4 text-center">
    <span className="text-white">{icon}</span>
    <div className="text-[1.05rem] leading-relaxed text-white">{children}</div>
  </div>
);

const footerLink = 'font-display text-sm font-medium uppercase tracking-[0.06em] text-white/85 transition-colors hover:text-white';

const Footer = () => {
  return (
    <div className="px-2 pb-2 sm:px-4 sm:pb-4 lg:px-[23px] lg:pb-[23px]">
      <footer id="contact" className="rounded-2xl bg-black px-5 py-16 text-white sm:px-10 md:py-20">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="Zion Brethren Assembly, Mysuru logo" className="h-16 w-16 rounded-full" />
          <Wordmark className="text-center text-xl text-white sm:text-2xl" />
        </div>

        <address className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 not-italic md:grid-cols-3">
          <Column icon={<PinIcon className="h-7 w-7" />}>
            VN ARCADE, Basement Floor, Hootagalli KHB Colony, Belavadi PO, Mysuru – 570018
          </Column>
          <Column
            icon={
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v.3l-10 6.25L2 6.8v-.3zm0 2.66V17.5A2.5 2.5 0 004.5 20h15a2.5 2.5 0 002.5-2.5V9.16l-9.47 5.92a1 1 0 01-1.06 0L2 9.16z" />
              </svg>
            }
          >
            <a href="mailto:zbcmysuru@gmail.com" className="transition-colors hover:text-white/70">
              zbcmysuru@gmail.com
            </a>
          </Column>
          <Column
            icon={
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
              </svg>
            }
          >
            <a href="tel:+919739288327" className="block transition-colors hover:text-white/70">+91 97392 88327</a>
            <a href="tel:+919980348867" className="block transition-colors hover:text-white/70">+91 99803 48867</a>
          </Column>
        </address>

        <nav aria-label="Footer" className="mt-14 border-t border-white/15 pt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/songbook" className={footerLink}>
                Songbook
              </Link>
            </li>
            <li>
              <a href="https://instagram.com/zbcmysuru" target="_blank" rel="noopener noreferrer" className={footerLink}>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@zbcmysuru" target="_blank" rel="noopener noreferrer" className={footerLink}>
                YouTube
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Zion Brethren Church, Mysuru. All rights reserved.</p>
          <Link to="/admin" className="transition-colors hover:text-white">
            Admin
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
