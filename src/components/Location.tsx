import { motion, useReducedMotion } from 'framer-motion';
import { Eyebrow, Panel, PillLink, PinIcon } from './ui';

const address = [
  'Zion Brethren Assembly',
  'VN ARCADE, Basement Floor',
  'Hootagalli KHB Colony',
  'Belavadi PO, Mysuru 570018',
];
const fullAddress = address.join(', ');
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

const timings = [
  { label: 'Sunday Worship', when: 'Sunday, 9:30 AM – 12:00 PM' },
  { label: 'Sunday School', when: 'Sunday, 12:00 PM – 12:30 PM' },
  { label: 'Youth Meeting', when: '4th Sunday monthly, 12:00 PM – 1:00 PM' },
  { label: 'Cottage Meeting', when: 'Wednesday, 7:30 PM' },
  { label: 'Fasting & Prayer', when: 'Friday, 10:30 AM – 1:00 PM' },
  { label: 'Bible Study', when: 'Saturday, 7:30 PM – 8:30 PM' },
];

const contacts = [
  { label: 'Phone', items: [
    { text: '+91 97392 88327', href: 'tel:+919739288327' },
    { text: '+91 99803 48867', href: 'tel:+919980348867' },
  ] },
  { label: 'Email', items: [{ text: 'zbcmysuru@gmail.com', href: 'mailto:zbcmysuru@gmail.com' }] },
  { label: 'Instagram', items: [{ text: '@zbcmysuru', href: 'https://instagram.com/zbcmysuru', external: true }] },
  { label: 'YouTube', items: [{ text: '@zbcmysuru', href: 'https://www.youtube.com/@zbcmysuru', external: true }] },
];

const Label = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-lg font-extrabold uppercase tracking-[-0.01em] text-ink">{children}</h3>
);

const Location = () => {
  const reduceMotion = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <Panel id="location" labelledBy="location-heading" className="px-5 py-14 sm:px-10 md:py-20 lg:px-[49px]">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div {...rise()}>
            <Eyebrow>Worship With Us</Eyebrow>
            <h2 id="location-heading" className="headline text-[clamp(2.25rem,4.2vw,3.25rem)] text-ink">
              Plan your visit
            </h2>
            <p className="mt-5 max-w-xl text-[1.1rem] leading-relaxed text-ink/85">
              We would love to welcome you. Find our address, service times and ways to reach us below.
            </p>
          </motion.div>

          <motion.div {...rise(0.08)} className="mt-10">
            <Label>Address</Label>
            <address className="mt-3 text-[1.1rem] not-italic leading-relaxed text-ink/90">
              {address.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </address>
            <div className="mt-6">
              <PillLink href={directionsUrl} external arrow={false} icon={<PinIcon />}>
                Get directions
              </PillLink>
            </div>
          </motion.div>

          <motion.div {...rise(0.12)} className="mt-12">
            <Label>Service times</Label>
            <ul className="mt-3 border-t border-line">
              {timings.map((t) => (
                <li
                  key={t.label}
                  className="flex flex-col gap-0.5 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-display font-bold text-ink">{t.label}</span>
                  <span className="text-[0.98rem] text-muted">{t.when}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="space-y-12">
          <motion.div {...rise(0.05)} className="h-[320px] overflow-hidden rounded-2xl bg-line md:h-[420px]">
            <iframe
              src={mapUrl}
              title="Map showing the location of Zion Brethren Church, Mysuru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </motion.div>

          <motion.div {...rise(0.12)}>
            <Label>Get in touch</Label>
            <dl className="mt-3 border-t border-line">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-0.5 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <dt className="text-[0.98rem] text-muted">{c.label}</dt>
                  <dd className="flex flex-wrap gap-x-4 font-display font-bold text-ink sm:justify-end">
                    {c.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        {...('external' in item ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="transition-colors hover:text-coral-ink"
                      >
                        {item.text}
                      </a>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </Panel>
  );
};

export default Location;
