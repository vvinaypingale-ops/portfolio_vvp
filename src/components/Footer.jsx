import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { USER_DETAILS } from '../constants';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-[#0b1121] text-center border-t border-gray-200 dark:border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <h3 className="text-2xl font-bold text-primary mb-6">
          {USER_DETAILS.name}
        </h3>

        <div className="flex gap-6 mb-8">
          <a href={USER_DETAILS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:scale-110 shadow-sm transition-all">
            <FiLinkedin className="text-xl" />
          </a>
          <a href={USER_DETAILS.github} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:scale-110 shadow-sm transition-all">
            <FiGithub className="text-xl" />
          </a>
          <a href={`mailto:${USER_DETAILS.email}`} className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:scale-110 shadow-sm transition-all">
            <FiMail className="text-xl" />
          </a>
        </div>

        <p className="text-gray-500 dark:text-gray-400 font-medium">
          © {new Date().getFullYear()} {USER_DETAILS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
