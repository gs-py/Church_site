import { motion, useReducedMotion } from 'framer-motion';

const UpcomingPrograms = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-[#F7F2EA] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">
              Upcoming &nbsp;·&nbsp; 10 October 2026
            </p>
            <h2
              id="programs-heading"
              className="font-display mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-[#1C1916] md:text-5xl"
            >
              Elders Meeting
            </h2>
            <dl className="mt-8 divide-y divide-[#E4DDD6] border-y border-[#E4DDD6]">
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-[#6B635D]">Time</dt>
                <dd className="font-semibold text-[#1C1916]">10:00 AM</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-[#6B635D]">Speaker</dt>
                <dd className="font-semibold text-[#1C1916]">Br. N. A. Paul</dd>
              </div>
            </dl>
            <a
              href="#location"
              className="mt-8 inline-flex items-center rounded-full bg-[#1C1916] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D3530]"
            >
              Get directions
            </a>
          </div>

          <img
            src="/elders-meeting-2026-10-10.jpeg"
            alt="Zion Brethren Church Elders Meeting on October 10, 2026, at 10:00 AM, with speaker Br. N. A. Paul"
            loading="lazy"
            className="mx-auto max-h-[560px] w-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingPrograms;
