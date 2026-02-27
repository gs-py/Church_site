import { motion } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: "Sunday Worship",
    day: "Every Sunday",
    time: "9:30 AM – 12:00 PM",
    description:
      "Come join us for a spirit-filled service with prayer, praise, and the transformative Word of God. All hearts are welcome.",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=900&q=85&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=85&auto=format&fit=crop",
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
      "https://images.unsplash.com/photo-1507692049790-de58c9e6fc8e?w=900&q=85&auto=format&fit=crop",
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

const ClockIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const WeeklyActivities = () => {
  return (
    <section id="activities" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100"
          >
            Come As You Are
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            Our Weekly{' '}
            <span className="relative inline-block">
              Gatherings
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="absolute bottom-1 left-0 right-0 h-1.5 bg-blue-200 rounded-full origin-left -z-10"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every week we come together to worship, learn, and grow in faith.{' '}
            <strong className="text-gray-700 font-semibold">
              All are warmly welcome.
            </strong>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative h-[380px] rounded-2xl overflow-hidden shadow-lg cursor-pointer select-none"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${activity.image})` }}
              />

              {/* Color + Gradient Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background: `linear-gradient(to top, ${activity.overlayColor} 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)`,
                }}
              />

              {/* Hover brightening veil */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Tag Badge — top right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-white/25 shadow-sm">
                  {activity.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                {/* Day row */}
                <div className="flex items-center gap-1.5 text-white/65 mb-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                  <CalendarIcon />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {activity.day}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[1.6rem] font-bold text-white leading-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {activity.title}
                </h3>

                {/* Time */}
                <div className="flex items-center gap-1.5 text-white/90 mb-0 transition-transform duration-300 group-hover:-translate-y-1">
                  <ClockIcon />
                  <span className="text-sm font-semibold">{activity.time}</span>
                </div>

                {/* Description — revealed on hover */}
                <div className="overflow-hidden">
                  <p
                    className="text-white/80 text-sm leading-relaxed pt-0 max-h-0 opacity-0
                      group-hover:max-h-24 group-hover:opacity-100 group-hover:pt-3
                      transition-all duration-500 ease-in-out"
                  >
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-white/20 transition-all duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
            <svg
              className="w-5 h-5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p className="text-gray-500 text-sm">
              All meetings are open to everyone.{' '}
              <span className="text-gray-800 font-semibold">
                You are loved and welcome here.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyActivities;
