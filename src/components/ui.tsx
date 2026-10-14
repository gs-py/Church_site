import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'coral' | 'white' | 'ink';

const pill: Record<Variant, string> = {
  coral: 'bg-coral text-white group-hover:bg-coral-deep',
  white: 'bg-white text-ink group-hover:bg-cream',
  ink: 'bg-ink text-white group-hover:bg-black',
};

export const ArrowIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.25} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
  </svg>
);

interface PillLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Show the round arrow button beside the pill */
  arrow?: boolean;
  /** Replace the arrow with a custom icon */
  icon?: ReactNode;
  external?: boolean;
  onClick?: () => void;
  /** Stretch to full width on phones (from `sm` up it sizes to its text) */
  fullOnMobile?: boolean;
}

/** Pill button with a separate round arrow, both part of one link. */
export const PillLink = ({ href, children, variant = 'coral', arrow = true, icon, external, onClick, fullOnMobile }: PillLinkProps) => {
  const body = (
    <>
      <span
        className={`inline-flex min-h-12 items-center rounded-full px-7 py-3 font-display text-[1.1875rem] font-bold tracking-[-0.02em] transition-colors ${
          fullOnMobile ? 'flex-1 justify-center sm:flex-none sm:justify-start' : ''
        } ${pill[variant]}`}
      >
        {children}
      </span>
      {(arrow || icon) && (
        <span
          aria-hidden="true"
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-[background-color,transform] duration-200 group-hover:translate-x-0.5 ${pill[variant]}`}
        >
          {icon ?? <ArrowIcon />}
        </span>
      )}
    </>
  );
  const cls = `${fullOnMobile ? 'flex w-full sm:inline-flex sm:w-auto' : 'inline-flex'} group items-center gap-1 focus-visible:outline-none focus-visible:[&>span:first-child]:ring-4 focus-visible:[&>span:first-child]:ring-coral/40`;

  if (href.startsWith('/') && !external) {
    return (
      <Link to={href} className={cls} onClick={onClick}>
        {body}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={cls}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {body}
    </a>
  );
};

/** Underlined coral text link with a leading icon. */
export const TextLink = ({ href, children, icon, external }: { href: string; children: ReactNode; icon?: ReactNode; external?: boolean }) => {
  const cls =
    'inline-flex items-center gap-2 border-b-2 border-coral pb-1 font-display text-[1.1875rem] font-bold tracking-[-0.02em] text-coral-ink transition-colors hover:border-coral-ink';
  if (href.startsWith('/') && !external) {
    return (
      <Link to={href} className={cls}>
        {icon}
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {icon}
      {children}
    </a>
  );
};

export const PinIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
);

export const YoutubeIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/** Small uppercase label above a headline. */
export const Eyebrow = ({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) => (
  <p
    className={`mb-4 font-display text-sm font-bold uppercase tracking-[0.14em] ${
      tone === 'dark' ? 'text-white/85' : 'text-coral-ink'
    }`}
  >
    {children}
  </p>
);

/** Rounded inset panel used for most sections. */
export const Panel = ({
  children,
  tone = 'white',
  className = '',
  id,
  labelledBy,
}: {
  children: ReactNode;
  tone?: 'white' | 'coral' | 'ink';
  className?: string;
  id?: string;
  labelledBy?: string;
}) => {
  const bg = tone === 'coral' ? 'bg-coral-deep text-white' : tone === 'ink' ? 'bg-black text-white' : 'bg-white text-ink';
  return (
    <section id={id} aria-labelledby={labelledBy} className="px-2 sm:px-4 lg:px-[23px]">
      <div className={`overflow-hidden rounded-2xl ${bg} ${className}`}>{children}</div>
    </section>
  );
};

/** On phones a list becomes a swipeable row; from `sm` up the caller's grid takes over. */
export const swipeRow =
  'no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0';
export const swipeItem = 'w-[82%] shrink-0 snap-start sm:w-auto';

export const SwipeHint = ({ count, tone = 'light' }: { count: number; tone?: 'light' | 'dark' }) => (
  <p className={`mt-3 text-sm sm:hidden ${tone === 'dark' ? 'text-white/90' : 'text-muted'}`} aria-hidden="true">
    Swipe to see all {count} →
  </p>
);
