import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import logo from '../assets/Community Chapel.png';

const beliefs = [
  { title: 'The Word of God', subtitle: 'Final authority for faith and life' },
  { title: 'Breaking of Bread', subtitle: 'Weekly remembrance of Christ' },
  { title: 'Spirit-Led Worship', subtitle: 'Open, Christ-centred gatherings' },
  { title: 'Fellowship', subtitle: 'A family walking together' },
];

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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-8">
        {/* Congregation photo */}
        <motion.figure {...rise()} className="order-2 lg:order-1">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#E9E1D5]">
            {photoFailed ? (
              <div className="flex h-full w-full items-center justify-center">
                <img src={logo} alt="" className="h-40 w-40 rounded-full" />
              </div>
            ) : (
              <img
                src={membersPhoto}
                alt="Members of Zion Brethren Church, young and old, gathered together for a group photo"
                loading="lazy"
                width={1280}
                height={960}
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
          <motion.p {...rise(0.16)} className="mt-6 max-w-lg text-base leading-relaxed text-[#6B635D] md:text-lg">
            Zion Brethren Assembly is a family of believers in Mysuru who gather simply around the
            Lord Jesus Christ and His Word. Whatever your story, there is a place for you here.
          </motion.p>

          <motion.ul {...rise(0.24)} className="mt-9 border-t border-[#E4DDD6]">
            {beliefs.map((belief) => (
              <li
                key={belief.title}
                className="flex flex-col gap-0.5 border-b border-[#E4DDD6] py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-semibold text-[#1C1916]">{belief.title}</span>
                <span className="text-sm text-[#6B635D]">{belief.subtitle}</span>
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
