import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import logo from '../assets/Community Chapel.png';

const beliefs = [
  {
    title: 'The Word of God',
    subtitle: 'Final authority for faith & life',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Breaking of Bread',
    subtitle: 'Weekly remembrance of Christ',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 10h18M3 14h18M10.5 3C7.5 3 4 5.5 4 10v10h16V10c0-4.5-3.5-7-5.5-7h-4z" />
      </svg>
    ),
  },
  {
    title: 'Spirit-Led Worship',
    subtitle: 'Open & Christ-centred gatherings',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

// Drop the congregation photo at public/church-members.jpg
const membersPhoto = '/church-members.jpg';

const About = () => {
  const reduceMotion = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="about" className="bg-[#F7F2EA] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Congregation photo */}
        <motion.figure {...rise()} className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E9E1D5] shadow-[0_24px_60px_-30px_rgba(28,25,22,0.45)]">
            {photoFailed ? (
              <div className="flex h-full w-full items-center justify-center">
                <img src={logo} alt="" className="h-40 w-40 rounded-full opacity-90" />
              </div>
            ) : (
              <img
                src={membersPhoto}
                alt="Members of Zion Brethren Church gathered together in Mysuru"
                loading="lazy"
                onError={() => setPhotoFailed(true)}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {!photoFailed && (
            <figcaption className="mt-4 text-sm text-[#6B635D]">
              The Zion Brethren family, Mysuru
            </figcaption>
          )}
        </motion.figure>

        {/* Message */}
        <div className="order-1 lg:order-2">
          <motion.p {...rise()} className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">
            Who we are
          </motion.p>
          <motion.h2
            {...rise(0.08)}
            className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#1C1916] text-balance md:text-5xl"
          >
            A family gathered around the <em className="font-medium text-[#4B4440]">Word of God.</em>
          </motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-[#6B635D] md:text-lg">
            Zion Brethren Assembly is a family of believers in Mysuru who gather simply around the
            Lord Jesus Christ and His Word. Whatever your story, there is a place for you here.
          </motion.p>

          <motion.ul {...rise(0.24)} className="mt-10 grid grid-cols-1 border-t border-[#E4DDD6] sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <li
                key={belief.title}
                className={`flex items-start gap-4 border-b border-[#E4DDD6] py-5 ${
                  i % 2 === 0 ? 'sm:pr-6' : 'sm:border-l sm:pl-6'
                }`}
              >
                <span className="mt-0.5 shrink-0 text-[#8A6D3B]">{belief.icon}</span>
                <span>
                  <span className="block font-semibold text-[#1C1916]">{belief.title}</span>
                  <span className="mt-0.5 block text-sm text-[#6B635D]">{belief.subtitle}</span>
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#activities"
              className="inline-flex items-center rounded-full bg-[#1C1916] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D3530]"
            >
              Weekly Schedule
            </a>
            <a
              href="#location"
              className="inline-flex items-center rounded-full border border-[#1C1916] px-7 py-3.5 text-sm font-semibold text-[#1C1916] transition-colors hover:bg-[#1C1916] hover:text-white"
            >
              Find Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
