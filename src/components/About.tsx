import { motion, useReducedMotion } from 'framer-motion';
import { PillLink, PinIcon, TextLink, Eyebrow } from './ui';

const beliefs = [
  { title: 'The Word of God', subtitle: 'Final authority for faith and life' },
  { title: 'Breaking of Bread', subtitle: 'Weekly remembrance of Christ' },
  { title: 'Spirit-Led Worship', subtitle: 'Open, Christ-centred gatherings' },
  { title: 'Fellowship', subtitle: 'A family walking together' },
];

// Slanted capsule photos (the reference's signature shape), using our own pictures.
// Boxes leave room on each side for the slant (about 0.22 × height).
const capsules = [
  {
    src: '/church-members.jpg',
    alt: 'Members of Zion Brethren Church, young and old, gathered together for a group photo',
    box: 'left-[13%] top-[6%] h-[88%] w-[24%]',
    pos: '50% 55%',
  },
  {
    src: '/sunday-school.jpg',
    alt: 'Children listening during Sunday School',
    box: 'left-[44%] top-0 h-[82%] w-[24%]',
    pos: '60% 50%',
  },
  {
    src: '/meetings/2026-10-10/03.jpg',
    alt: 'Brothers singing together during a meeting',
    box: 'left-[72%] top-[34%] h-[60%] w-[18%]',
    pos: '45% 50%',
  },
];

const About = () => {
  const reduceMotion = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-x-clip bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-4 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 lg:px-[55px]">
        {/* Message */}
        <div>
          <motion.div {...rise()}>
            <Eyebrow>Who we are</Eyebrow>
          </motion.div>
          <motion.h2 {...rise(0.08)} id="about-heading" className="headline text-[clamp(2.25rem,4vw,3.25rem)] text-ink">
            A family gathered around the <span className="text-coral">Word of God.</span>
          </motion.h2>
          <motion.p {...rise(0.16)} className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-ink/85">
            Zion Brethren Assembly is a family of believers in Mysuru who gather simply around the
            Lord Jesus Christ and His Word. Whatever your story, there is a place for you here.
          </motion.p>

          <motion.ul {...rise(0.24)} className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {beliefs.map((belief) => (
              <li key={belief.title}>
                <span className="block font-display text-base font-extrabold uppercase tracking-[-0.01em] text-ink">
                  {belief.title}
                </span>
                <span className="mt-1 block text-[0.95rem] text-muted">{belief.subtitle}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.32)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PillLink href="#activities">Weekly Schedule</PillLink>
            <TextLink href="#location" icon={<PinIcon />}>
              Find Us
            </TextLink>
          </motion.div>
        </div>

        {/* Capsule photos */}
        <motion.div {...rise(0.1)} className="relative mx-auto aspect-[5/4] w-full max-w-[760px]">
          {capsules.map((c) => (
            <div key={c.src} className={`absolute ${c.box}`}>
              <div className="relative h-full w-full -skew-x-[24deg] overflow-hidden rounded-full bg-line">
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute left-1/2 top-0 h-full w-[200%] max-w-none -translate-x-1/2 skew-x-[24deg] object-cover"
                  style={{ objectPosition: c.pos }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
