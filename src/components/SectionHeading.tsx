import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
  tone?: 'light' | 'dark';
}

const SectionHeading = ({ eyebrow, title, lede, align = 'left', action, tone = 'light' }: SectionHeadingProps) => {
  const reduceMotion = useReducedMotion();
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 flex flex-col gap-6 md:mb-14 ${
        centered ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'
      }`}
    >
      <div className="max-w-2xl">
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${dark ? 'text-[#D4B483]' : 'text-[#8A6D3B]'}`}>{eyebrow}</p>
        <h2
          className={`font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance md:text-5xl ${
            dark ? 'text-[#F7F2EA]' : 'text-[#1C1916]'
          }`}
        >
          {title}
        </h2>
        {lede && <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? 'text-white/70' : 'text-[#6B635D]'}`}>{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
};

export default SectionHeading;
