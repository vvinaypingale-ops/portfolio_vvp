import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { USER_DETAILS } from '../constants';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-50 dark:bg-[#030712] text-center border-t border-gray-200 dark:border-gray-800 relative z-10 overflow-hidden">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        
        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">
          {USER_DETAILS.name}
        </h3>

        <div className="flex gap-6 mb-10">
          <a href={USER_DETAILS.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:border-primary/50 transition-all duration-300">
            <FiLinkedin className="text-2xl" />
          </a>
          <a href={USER_DETAILS.github} target="_blank" rel="noreferrer" className="p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:border-primary/50 transition-all duration-300">
            <FiGithub className="text-2xl" />
          </a>
          <a href={`mailto:${USER_DETAILS.email}`} className="p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-2xl text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:border-secondary/50 transition-all duration-300">
            <FiMail className="text-2xl" />
          </a>
        </div>

        <p className="text-gray-500 dark:text-gray-500 font-medium">
          © {new Date().getFullYear()} {USER_DETAILS.name}. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
