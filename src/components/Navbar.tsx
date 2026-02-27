import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: 'About Us',
      submenu: [
        'What We Believe',
        'Mission, Vision, Values',
        'National Leaders',
        {
          name: 'Regions',
          items: ['Midwest Region', 'North Central Region', 'Northeast Region', 'Southeast Region', 'West Region']
        },
        {
          name: 'Global Partners',
          items: ['Global Partners Internship']
        }
      ]
    },
    {
      name: 'For Our People',
      submenu: [
        'Where We Are',
        'Regional News & Events',
        'Articles & Media',
        'Brethen Archives',
        'Events',
        'Brethren Shop'
      ]
    },
    {
      name: 'For Leaders',
      submenu: [
        'Plant Churches',
        'Strengthen Churches',
        'Develop Leaders',
        'Resources for Leaders',
        'Ministry Partners'
      ]
    },
    {
      name: 'Partner',
      submenu: [
        'Give Financially',
        'Serve With Us',
        'Pray WIth Us',
        'Now Hiring'
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">The Brethren Church</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-gray-800 hover:text-gray-900 font-medium">
                  {item.name}
                </button>
                <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2"
                    >
                      {item.submenu.map((subItem, idx) => {
                        if (typeof subItem === 'string') {
                          return (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem}
                            </a>
                          );
                        }
                        return (
                          <div key={idx} className="py-2">
                            <div className="px-4 py-2 text-sm font-semibold text-gray-900">
                              {subItem.name}
                            </div>
                            {subItem.items.map((nestedItem, nestedIdx) => (
                              <a
                                key={nestedIdx}
                                href="#"
                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {nestedItem}
                              </a>
                            ))}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button className="w-full text-left text-gray-700 font-medium py-2">
                    {item.name}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem, idx) => {
                      if (typeof subItem === 'string') {
                        return (
                          <a key={idx} href="#" className="block py-1 text-sm text-gray-600">
                            {subItem}
                          </a>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md mt-4">
                Donate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
