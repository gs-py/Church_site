import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

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
    <section id="activities" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Gatherings"
          title={<>Come as you are. <em className="font-medium text-[#4B4440]">Every week.</em></>}
          lede="We meet throughout the week to worship, pray and study God's Word together. All are warmly welcome."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                            className="group relative h-[380px] rounded-2xl overflow-hidden select-none"
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
                <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
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

      </div>
    </section>
  );
};

export default WeeklyActivities;
