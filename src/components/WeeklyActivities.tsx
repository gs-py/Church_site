import { motion, useReducedMotion } from 'framer-motion';
import { Eyebrow, Panel } from './ui';

const activities = [
  {
    id: 1,
    title: "Sunday Worship",
    day: "Every Sunday",
    time: "9:30 AM – 12:00 PM",
    description:
      "Come join us for a spirit-filled service with prayer, praise, and the transformative Word of God. All hearts are welcome.",
    image:
      "/sunday-worship.jpg",
    overlayColor: "rgba(8,47,73,0.85)",
    tag: "Worship",
  },
  {
    id: 2,
    title: "Sunday School",
    day: "Every Sunday",
    time: "12:00 PM – 12:30 PM",
    description:
      "Biblical education for children — nurturing young hearts to discover God's love, grace, and His living Word.",
    image:
      "/sunday-school.jpg",
    overlayColor: "rgba(6,78,59,0.85)",
    tag: "Children",
  },
  {
    id: 3,
    title: "Youth Meeting",
    day: "4th Sunday Monthly",
    time: "12:00 PM – 1:00 PM",
    description:
      "A vibrant gathering for youth to fellowship, explore their faith, and build lifelong bonds in Christ.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=85&auto=format&fit=crop",
    overlayColor: "rgba(46,16,101,0.85)",
    tag: "Youth",
  },
  {
    id: 4,
    title: "Cottage Meeting",
    day: "Every Wednesday",
    time: "7:30 PM",
    description:
      "Intimate gatherings for group discussion and activities to deepen our understanding of God's Word. Held at church when a host is unavailable.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=85&auto=format&fit=crop",
    overlayColor: "rgba(78,52,1,0.85)",
    tag: "Fellowship",
  },
  {
    id: 5,
    title: "Fasting & Prayer",
    day: "Every Friday",
    time: "10:30 AM – 1:00 PM",
    description:
      "A sacred time of fasting and prayer — seeking God's presence and interceding for our community and loved ones.",
    image:
      "https://news.ag.org/-/media/PENews/Images/2024-Article-Images/1400/Praying-and-Fasting-1400.jpg",
    overlayColor: "rgba(76,5,25,0.85)",
    tag: "Prayer",
  },
  {
    id: 6,
    title: "Bible Study",
    day: "Every Saturday",
    time: "7:30 PM – 8:30 PM",
    description:
      "An engaging deep-dive into the Scriptures with guided study, group reflection, and meaningful fellowship.",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=900&q=85&auto=format&fit=crop",
    overlayColor: "rgba(4,47,46,0.85)",
    tag: "Study",
  },
];

const WeeklyActivities = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Panel id="activities" labelledBy="activities-heading" className="px-5 py-14 sm:px-10 md:py-20 lg:px-[49px]">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <Eyebrow>Our Gatherings</Eyebrow>
        <h2 id="activities-heading" className="headline text-[clamp(2.25rem,4.2vw,3.25rem)] text-coral">
          Come as you are. Every week.
        </h2>
        <p className="mt-5 text-[1.1rem] leading-relaxed text-ink/85">
          We meet throughout the week to worship, pray and study God's Word together. All are warmly welcome.
        </p>
      </motion.div>

      <ul className="mt-12 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <motion.li
            key={activity.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : (index % 3) * 0.08 }}
          >
            <article>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-line shadow-[0_6px_18px_-8px_rgba(14,12,12,0.35)]">
                <img
                  src={activity.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
                  {activity.tag}
                </span>
              </div>
              <div className="px-1 pt-5 sm:px-4">
                <h3 className="font-display text-[1.5rem] font-bold leading-tight tracking-[-0.03em] text-ink">
                  {activity.title}
                </h3>
                <p className="mt-2 text-[1.05rem] text-muted">
                  {activity.day} · {activity.time}
                </p>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/80">{activity.description}</p>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </Panel>
  );
};

export default WeeklyActivities;
