import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Weekly Gatherings', href: '#activities' },
  { label: 'Sermons', href: '#media' },
  { label: 'Plan a Visit', href: '#location' },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#14110E] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-semibold leading-snug text-[#F7F2EA]">
            Zion Brethren Church
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            A Brethren assembly in Mysuru, gathered simply around the Lord Jesus Christ and His Word.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B483]">Explore</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/songbook" className="text-sm text-white/70 transition-colors hover:text-white">
                Songbook
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B483]">Get in touch</h3>
          <address className="space-y-3 text-sm not-italic leading-relaxed text-white/70">
            <p>
              VN ARCADE, Basement Floor
              <br />
              Hootagalli KHB Colony
              <br />
              Belavadi PO, Mysuru – 570018
            </p>
            <p>
              <a href="tel:+919739288327" className="transition-colors hover:text-white">+91 97392 88327</a>
              {', '}
              <a href="tel:+919980348867" className="transition-colors hover:text-white">+91 99803 48867</a>
            </p>
            <p>
              <a href="mailto:zbcmysuru@gmail.com" className="transition-colors hover:text-white">zbcmysuru@gmail.com</a>
            </p>
            <p className="flex gap-4">
              <a href="https://instagram.com/zbcmysuru" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Instagram</a>
              <a href="https://www.youtube.com/@zbcmysuru" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">YouTube</a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Zion Brethren Church, Mysuru. All rights reserved.
          </p>
          <Link to="/admin" className="text-xs text-white/50 transition-colors hover:text-white" title="Admin">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
