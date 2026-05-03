import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { USER_DETAILS } from '../constants';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-primary">
            {USER_DETAILS.name}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#projects" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
