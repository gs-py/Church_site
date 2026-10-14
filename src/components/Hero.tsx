import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PillLink } from './ui';

const ease = [0.22, 1, 0.36, 1] as const;

// Scrolling band: the assembly's own tagline (from our posters)
const band = ['Worship', 'Fellowship', 'Discipleship', 'Service'];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <>
      <section
        id="top"
        aria-labelledby="hero-verse"
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white"
      >
        <img
          src="/sunday-worship.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(14,12,12,0.9)_0%,rgba(14,12,12,0.55)_45%,rgba(14,12,12,0.2)_100%)] lg:bg-[linear-gradient(to_top,rgba(14,12,12,0.85)_0%,rgba(14,12,12,0.35)_55%,rgba(14,12,12,0.15)_100%),linear-gradient(to_right,rgba(14,12,12,0.55)_0%,rgba(14,12,12,0)_65%)]"
        />

        <div className="mx-auto w-full max-w-[1440px] px-4 pb-14 pt-32 sm:px-8 md:pb-20 lg:px-[53px]">
          <motion.p {...reveal(0.1)} className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/85">
            Mysuru &nbsp;·&nbsp; A Brethren Assembly
          </motion.p>

          <motion.h1
            id="hero-verse"
            {...reveal(0.2)}
            className="headline max-w-[19ch] text-[clamp(2.1rem,4.6vw,4.25rem)] text-white"
          >
            They devoted themselves to the apostles’ teaching,{' '}
            <span className="font-light">to fellowship, to the breaking of bread and to prayer.</span>
          </motion.h1>

          <motion.p {...reveal(0.35)} className="mt-5 font-display text-lg font-semibold text-white sm:text-xl">
            Acts 2:42
          </motion.p>

          <motion.p {...reveal(0.45)} className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-[1.1rem]">
            We are a family of believers gathered simply around the Lord Jesus Christ and His Word.
            Come as you are. You are welcome here.
          </motion.p>

          <motion.p {...reveal(0.5)} className="mt-4 font-display text-base font-bold text-white sm:text-lg">
            Sunday Worship · 9:30 AM – 12:00 PM
          </motion.p>

          <motion.div {...reveal(0.6)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PillLink href="#activities">Join us this Sunday</PillLink>
            <Link
              to="/songbook"
              className="border-b-2 border-white/70 pb-1 font-display text-lg font-bold text-white transition-colors hover:border-white"
            >
              Open the Songbook
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scrolling tagline band, alternating solid and outlined words */}
      <div aria-hidden="true" className="overflow-hidden bg-cream py-6 md:py-8">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {[...band, ...band].map((word, i) => (
                <span
                  key={`${copy}-${i}`}
                  className={`headline px-6 text-[clamp(2.25rem,5vw,4rem)] md:px-10 ${i % 2 === 0 ? 'text-coral' : 'text-outline'}`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
