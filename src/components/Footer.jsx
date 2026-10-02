import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { USER_DETAILS } from '../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200/60 dark:border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Specular Top Glow Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200/60 dark:border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white text-xs font-black shadow-sm">
                VP
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {USER_DETAILS.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Aspiring AI Engineer crafting predictive architectures, machine learning workflows, and distributed systems.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-sky-500 transition-colors">Overview</a>
            <a href="#experience" className="hover:text-sky-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-sky-500 transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a>
          </div>

          {/* Social Glass Pills & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={USER_DETAILS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-2xl glass-pill hover:border-sky-500/50 hover:text-sky-500 text-slate-700 dark:text-slate-300 transition-all"
            >
              <FiLinkedin className="text-base" />
            </a>

            <a
              href={USER_DETAILS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-2xl glass-pill hover:border-purple-500/50 hover:text-purple-400 text-slate-700 dark:text-slate-300 transition-all"
            >
              <FiGithub className="text-base" />
            </a>

            <a
              href={`mailto:${USER_DETAILS.email}`}
              aria-label="Email"
              className="p-3 rounded-2xl glass-pill hover:border-emerald-500/50 hover:text-emerald-500 text-slate-700 dark:text-slate-300 transition-all"
            >
              <FiMail className="text-base" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-3 rounded-2xl glass-btn-primary cursor-pointer ml-2"
              title="Back to top"
            >
              <FiArrowUp className="text-base" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {USER_DETAILS.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-beacon" />
            <span>Designed with Glassmorphic Precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
