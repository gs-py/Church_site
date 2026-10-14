import { motion, useReducedMotion } from 'framer-motion';
import { PillLink } from './ui';

const ease = [0.22, 1, 0.36, 1] as const;

const MusicIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

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
      {/* Phones: the photo sits clear at the top and fades into a dark panel that holds the text.
          From sm up: full-bleed photo with the text over its darkened lower-left. */}
      <section
        id="top"
        aria-labelledby="hero-verse"
        className="relative isolate overflow-hidden bg-ink text-white sm:flex sm:min-h-[100svh] sm:items-end"
      >
        <div className="relative h-[52svh] min-h-[300px] max-h-[520px] sm:absolute sm:inset-0 sm:-z-20 sm:h-auto sm:max-h-none">
          <img
            src="/sunday-worship.jpg"
            alt="Sunday worship at Zion Brethren Church, with the congregation facing the speaker"
            fetchPriority="high"
            width={1400}
            height={1050}
            className="h-full w-full object-cover object-[50%_40%] sm:object-[60%_center]"
          />
          {/* Phone: darken the top for the header, fade the bottom into the text panel */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,12,12,0.55)_0%,rgba(14,12,12,0)_28%,rgba(14,12,12,0)_55%,#0E0C0C_100%)] sm:hidden"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_top,rgba(14,12,12,0.9)_0%,rgba(14,12,12,0.55)_45%,rgba(14,12,12,0.2)_100%)] sm:block lg:bg-[linear-gradient(to_top,rgba(14,12,12,0.85)_0%,rgba(14,12,12,0.35)_55%,rgba(14,12,12,0.15)_100%),linear-gradient(to_right,rgba(14,12,12,0.55)_0%,rgba(14,12,12,0)_65%)]"
        />

        <div className="relative mx-auto -mt-12 w-full max-w-[1440px] px-5 pb-10 sm:mt-0 sm:px-8 sm:pb-14 sm:pt-28 md:pb-20 lg:px-[53px]">
          <motion.p
            {...reveal(0.1)}
            className="mb-4 font-display text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#FF8A8A] sm:mb-5 sm:text-sm sm:font-semibold sm:tracking-[0.16em] sm:text-white/85"
          >
            Mysuru &nbsp;·&nbsp; A Brethren Assembly
          </motion.p>

          <motion.h1
            id="hero-verse"
            {...reveal(0.2)}
            className="max-w-[19ch] font-display text-[1.6rem] font-bold leading-[1.25] tracking-[-0.02em] text-white min-[400px]:text-[1.75rem] sm:text-[clamp(1.7rem,4.6vw,4.25rem)] sm:font-extrabold sm:uppercase sm:leading-[1.04] sm:tracking-[-0.045em]"
          >
            They devoted themselves to the apostles’ teaching,{' '}
            <span className="font-normal text-white/75 sm:font-light sm:text-white">
              to fellowship, to the breaking of bread and to prayer.
            </span>
          </motion.h1>

          <motion.p
            {...reveal(0.35)}
            className="mt-3 font-display text-sm font-semibold tracking-[0.04em] text-white/80 sm:mt-5 sm:text-xl sm:tracking-normal sm:text-white"
          >
            <span className="sm:hidden">— </span>Acts 2:42
          </motion.p>

          <motion.p {...reveal(0.45)} className="mt-6 hidden max-w-xl text-[1.1rem] leading-relaxed text-white/90 sm:block">
            We are a family of believers gathered simply around the Lord Jesus Christ and His Word.
            Come as you are. You are welcome here.
          </motion.p>

          <motion.p
            {...reveal(0.5)}
            className="mt-6 flex items-center gap-2.5 border-t border-white/15 pt-5 font-display text-sm font-bold text-white sm:mt-4 sm:block sm:border-0 sm:pt-0 sm:text-lg"
          >
            <svg className="h-5 w-5 shrink-0 text-[#FF8A8A] sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sunday Worship · 9:30 AM – 12:00 PM
          </motion.p>

          <motion.div {...reveal(0.6)} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <PillLink href="#activities" fullOnMobile>
              Join us this Sunday
            </PillLink>
            <PillLink href="/songbook" variant="white" icon={<MusicIcon />} fullOnMobile>
              Open the Songbook
            </PillLink>
          </motion.div>
        </div>
      </section>

      {/* Scrolling tagline band, alternating solid and outlined words */}
      <div aria-hidden="true" className="overflow-hidden bg-cream py-4 md:py-8">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {[...band, ...band].map((word, i) => (
                <span
                  key={`${copy}-${i}`}
                  className={`headline px-4 text-[clamp(1.75rem,5vw,4rem)] md:px-10 ${i % 2 === 0 ? 'text-coral' : 'text-outline'}`}
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
