import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
}

const SectionHeading = ({ eyebrow, title, lede, align = 'left', action }: SectionHeadingProps) => {
  const reduceMotion = useReducedMotion();
  const centered = align === 'center';

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
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">{eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-[#1C1916] text-balance md:text-5xl">
          {title}
        </h2>
        {lede && <p className="mt-5 text-base leading-relaxed text-[#6B635D] md:text-lg">{lede}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </motion.div>
  );
};

export default SectionHeading;
