import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Location = () => {
  // Contact information
  const email = "zbcmysuru@gmail.com";
  const phone = "+91-9739288327";
  const phone2 = "+91-9980348867";
  const address = {
    name: "Zion Brethren Assembly",
    line1: "VN ARCADE Basement Floor",
    line2: "Hootagalli KHB Colony",
    line3: "Belavadi PO Mysuru",
    line4: "570018"
  };

  // Google Maps embed URL - using the full address
  const fullAddress = `${address.name}, ${address.line1}, ${address.line2}, ${address.line3}, ${address.line4}`;
  // Using Google Maps embed without API key (works for public locations)
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900"
        >
          LOCATION
        </motion.h2>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {email}
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Phone</h3>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {phone}
                </a>
                <br />
                <a
                  href={`tel:${phone2.replace(/\s/g, '')}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {phone2}
                </a>
              </div>
            </motion.div>

            {/* Office/Address */}
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Address</h3>
                <div className="text-gray-700">
                  <p>{address.name}</p>
                  <p>{address.line1}</p>
                  <p>{address.line2}</p>
                  <p>{address.line3}</p>
                  <p>{address.line4}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Map */}
          <motion.div
            variants={itemVariants}
            className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
