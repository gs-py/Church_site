import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  // Using the Unsplash image URL - direct link to the photo
  const backgroundImageUrl = "https://images.unsplash.com/photo-1745355474597-28b55be8bcb2?w=1920&q=80&auto=format&fit=crop";

  const menuItems = [
    { name: 'About Us', href: '#about' },
    { name: 'Weekly Schedule', href: '#activities' },
    { name: 'Sermons', href: '#media' },
    { name: 'Contact Us', href: '#location' },
    { name: 'Songbook', href: '/songbook', isRoute: true },
  ];

  // Animation variants for professional intro
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  } as const;

  // const avatarVariants = {
  //   hidden: { 
  //     opacity: 0, 
  //     scale: 0,
  //     rotate: -180
  //   },
  //   visible: (i: number) => ({ 
  //     opacity: 1, 
  //     scale: 1,
  //     rotate: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 200,
  //       damping: 15,
  //       delay: i * 0.1
  //     }
  //   })
  // };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-0 md:p-8">
      {/* Image Container with padding/rounded frame effect */}
      <div 
        className="relative w-full h-full min-h-screen rounded-none md:rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        {/* Header inside the image */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Left Side Links */}
              <div className="hidden md:flex space-x-8">
                {menuItems.map((item) =>
                  'isRoute' in item && item.isRoute ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white hover:text-white/80 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-white/80 font-medium transition-colors"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>

              {/* Right Side Buttons */}
              <div className="flex items-center gap-4 ml-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 md:px-6 py-2 text-sm md:text-base bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </motion.button>
               
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Content Container - Centered vertically, left-aligned on desktop */}
        <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-7xl w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            >
              

              {/* Introductory Text with fade and slide */}
              <motion.p
                variants={itemVariants}
                className="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
              >
                We are happy to welcome you to our spiritual family – a place where the heart finds peace, the soul is filled with faith, and every step leads to the light of God's love.
              </motion.p>

              {/* Main Heading - Bible Verse with scale and fade */}
              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  duration: 0.8
                }}
                className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 md:mb-8"
              >
                "For where two or three gather in my name, there am I with them."
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-3 md:mt-4"
                >
                  — Matthew 18:20
                </motion.span>
              </motion.h1>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-10 flex flex-col items-center gap-2 text-white"
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs md:text-sm font-medium hidden sm:block"
          >
            Scroll Down
          </motion.span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
