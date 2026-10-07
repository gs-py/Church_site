import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from './SectionHeading';

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

const Location = () => {
  const reduceMotion = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="location" className="bg-[#F7F2EA] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Worship With Us"
          title="Plan your visit"
          lede="We would love to welcome you. Find our address, service times and ways to reach us below."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            {/* Address */}
            <motion.div {...rise()}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">Address</h3>
              <address className="mt-4 text-lg not-italic leading-relaxed text-[#1C1916]">
                {address.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-[#1C1916] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#3D3530]"
              >
                Get directions
              </a>
            </motion.div>

            {/* Service times */}
            <motion.div {...rise(0.08)}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">Service times</h3>
              <ul className="mt-4 border-t border-[#E4DDD6]">
                {timings.map((t) => (
                  <li
                    key={t.label}
                    className="flex flex-col gap-0.5 border-b border-[#E4DDD6] py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-semibold text-[#1C1916]">{t.label}</span>
                    <span className="text-sm text-[#6B635D]">{t.when}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="space-y-10">
            <motion.div
              {...rise(0.05)}
              className="h-[320px] overflow-hidden rounded-2xl bg-[#E9E1D5] md:h-[400px]"
            >
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

            {/* Contact */}
            <motion.div {...rise(0.12)}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6D3B]">Get in touch</h3>
              <dl className="mt-4 border-t border-[#E4DDD6]">
                {contacts.map((c) => (
                  <div
                    key={c.label}
                    className="flex flex-col gap-0.5 border-b border-[#E4DDD6] py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="text-sm text-[#6B635D]">{c.label}</dt>
                    <dd className="flex flex-wrap gap-x-4 font-semibold text-[#1C1916] sm:justify-end">
                      {c.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          {...('external' in item ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="transition-colors hover:text-[#8A6D3B]"
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
      </div>
    </section>
  );
};

export default Location;
