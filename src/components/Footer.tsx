import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '#location' },
    { label: 'Weekly Schedule', href: '#activities' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: 'mailto:zbcmysuru@gmail.com' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer id="contact" className="bg-gray-950 text-white">
      {/* Main Footer Body */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Column 1 — Brand */}
        <motion.div variants={itemVariants}>
          <h2 className="font-serif text-2xl font-bold text-white mb-3 leading-snug">
            Zion Brethren<br />Assembly
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            A community rooted in faith, united in love, and committed to growing together in the Word of God.
          </p>
          {/* Divider accent */}
          <div className="w-10 h-0.5 bg-blue-500 rounded-full" />
        </motion.div>

        {/* Column 2 — Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 — Contact */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500 mb-5">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-sm">
            {/* Address */}
            <li className="flex items-start gap-3 text-gray-400">
              <svg className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">
                VN ARCADE, Basement Floor<br />
                Hootagalli KHB Colony<br />
                Belavadi PO, Mysuru – 570018
              </span>
            </li>
            {/* Phone */}
            <li className="flex items-center gap-3 text-gray-400">
              <svg className="w-4 h-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+919739288327" className="hover:text-white transition-colors duration-200">
                +91 97392 88327
              </a>
            </li>
            {/* Email */}
            <li className="flex items-center gap-3 text-gray-400">
              <svg className="w-4 h-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:zbcmysuru@gmail.com" className="hover:text-white transition-colors duration-200">
                zbcmysuru@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Zion Brethren Assembly. All Rights Reserved.
          </p>
          <p className="text-gray-700 text-xs italic">
            "For where two or three gather in my name, there am I." — Matt. 18:20
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
