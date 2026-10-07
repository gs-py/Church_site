import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backgroundImageUrl =
  'https://images.unsplash.com/photo-1591171134898-cd346fd73a4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const gatherings = [
  { label: 'Sunday Worship', detail: '9:30 AM – 12:00 PM', href: '#activities' },
  { label: 'Cottage Meeting', detail: 'Wednesdays, 7:30 PM', href: '#activities' },
  { label: 'Find us', detail: 'Belavadi, Mysuru', href: '#location' },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <section
      aria-labelledby="hero-verse"
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#14110E] pt-16 text-white"
    >
      {/* Photograph, pushed back so the type carries the page */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center md:bg-[position:75%_center]"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,17,14,0.96)_0%,rgba(20,17,14,0.88)_50%,rgba(20,17,14,0.5)_100%)] max-md:bg-[linear-gradient(180deg,rgba(20,17,14,0.8)_0%,rgba(20,17,14,0.92)_100%)]"
      />

      {/* Verse */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-12 sm:px-6 md:py-14 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            {...reveal(0.1)}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4B483] sm:text-sm"
          >
            Mysuru &nbsp;·&nbsp; A Brethren Assembly
          </motion.p>

          <motion.h1
            id="hero-verse"
            {...reveal(0.25)}
            className="font-display text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-[#F7F2EA] text-balance"
          >
            They devoted themselves to the apostles’ teaching,{' '}
            <em className="font-medium text-[#D4B483]">
              to fellowship, to the breaking of bread and to prayer.
            </em>
          </motion.h1>

          <motion.p {...reveal(0.45)} className="mt-6 text-base font-medium text-white/70 sm:text-lg">
            Acts 2:42
          </motion.p>

          <motion.p
            {...reveal(0.6)}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            We are a family of believers gathered simply around the Lord Jesus Christ and His Word.
            Come as you are. You are welcome here.
          </motion.p>

          <motion.div {...reveal(0.75)} className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#activities"
              className="inline-flex items-center rounded-full bg-[#F7F2EA] px-7 py-3.5 text-sm font-semibold text-[#1C1916] transition-colors hover:bg-white"
            >
              Join us this Sunday
            </a>
            <Link
              to="/songbook"
              className="inline-flex items-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Open the Songbook
            </Link>
          </motion.div>
        </div>
      </div>

      {/* When & where */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 1 }}
        className="relative z-10 border-t border-white/15 bg-[#14110E]/80"
      >
        <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {gatherings.map((item) => (
            <li key={item.label} className="md:first:pl-0 md:px-8">
              <a
                href={item.href}
                className="group flex items-baseline justify-between gap-4 py-4 transition-colors md:block md:py-6"
              >
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#D4B483]">
                  {item.label}
                </span>
                <span className="block text-base text-white/90 transition-colors group-hover:text-white md:mt-1.5 md:text-lg">
                  {item.detail}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Hero;
