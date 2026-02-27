import { motion } from 'framer-motion';

const beliefs = [
  {
    title: 'The Word of God',
    subtitle: 'Final authority for faith & life',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Breaking of Bread',
    subtitle: 'Weekly remembrance of Christ',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 10h18M3 14h18M10.5 3C7.5 3 4 5.5 4 10v10h16V10c0-4.5-3.5-7-5.5-7h-4z" />
      </svg>
    ),
  },
  {
    title: 'Spirit-Led Worship',
    subtitle: 'Open & Christ-centred gatherings',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 3c-1 2.5-3 4-3 7a3 3 0 006 0c0-3-2-4.5-3-7z" />
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 21v-4M8 17h8" />
      </svg>
    ),
  },
  {
    title: 'Fellowship',
    subtitle: 'A family walking together',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const marqueeItems = [
  'The Word of God',
  'Breaking of Bread',
  'Spirit-Led Worship',
  'Fellowship & Community',
  'Biblical Teaching',
  "Believer's Baptism",
  'Open Worship',
  'Missionary Heart',
  'Grace & Truth',
  'Prayer & Fasting',
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: '#F7F2EA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column layout — matches reference */}
        <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-12 lg:gap-20 items-start">

          {/* LEFT — Heading + body + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-xs tracking-[0.22em] uppercase font-semibold mb-6"
              style={{ color: '#9A8F83' }}>
              Est. Early 1800s
            </p>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.08] mb-8"
              style={{ color: '#1C1916' }}>
              Rooted in Faith,<br />
              Built on the<br />
              <em className="italic" style={{ color: '#4B4440' }}>Word of God.</em>
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-10 max-w-[480px]"
              style={{ color: '#6B635D' }}>
              Zion Brethren Assembly is a local gathering of believers in the tradition of the
              Brethren movement — a 19th-century revival that chose to set aside denominational
              barriers and gather simply around the Lord Jesus Christ and His Word. We are part
              of thousands of Brethren Assemblies across India, united in the same faith and love.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#activities"
                className="inline-block px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#1C1916', color: '#FFFFFF' }}
              >
                Weekly Schedule
              </a>
              <a
                href="#location"
                className="inline-block px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:opacity-70"
                style={{ borderColor: '#1C1916', color: '#1C1916' }}
              >
                Find Us
              </a>
            </div>
          </motion.div>

          {/* RIGHT — 2×2 belief cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="grid grid-cols-2 gap-4"
          >
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.09 }}
                className="group rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E4DDD6',
                }}
              >
                {/* Icon badge circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white"
                  style={{ backgroundColor: '#F0EBE4', color: '#3D3530' }}
                >
                  {belief.icon}
                </div>
                <h3 className="font-bold text-sm leading-snug mb-1" style={{ color: '#1C1916' }}>
                  {belief.title}
                </h3>
                <p className="text-xs" style={{ color: '#9A8F83' }}>
                  {belief.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scrolling marquee ticker ── */}
      <div className="mt-20 overflow-hidden py-5" style={{ borderTop: '1px solid #E4DDD6', borderBottom: '1px solid #E4DDD6' }}>
        {/* Duplicate items ×2 so the loop is seamless */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <span className="px-8 text-sm font-medium" style={{ color: '#B0A79E' }}>
                {item}
              </span>
              <span className="font-light" style={{ color: '#D4CCC5' }}>//</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
