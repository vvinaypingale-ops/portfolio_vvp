import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { USER_DETAILS } from '../constants';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home', id: 'home' },
    { name: 'Skills & Tech', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-5xl rounded-full glass-panel transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-lg ${
          scrolled ? 'shadow-black/10 dark:shadow-black/40 border-cyan-500/20' : ''
        }`}
      >
        {/* Brand Identity */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 p-[1px] shadow-sm group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-shadow duration-300">
            <div className="w-full h-full bg-slate-900/90 rounded-[11px] flex items-center justify-center">
              <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-300">
                VP
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Vinay Pingale
            </span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-cyan-400/90 leading-tight">
              AI & Full-Stack
            </span>
          </div>
        </a>

        {/* Center Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-200/40 dark:bg-white/[0.04] p-1 rounded-full border border-slate-300/40 dark:border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive 
                    ? 'text-sky-600 dark:text-sky-300' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white dark:bg-white/10 shadow-sm border border-slate-200/80 dark:border-white/15"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA / Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-beacon" />
            <span className="text-[11px] font-semibold tracking-tight">Open to Work</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 sm:p-2.5 rounded-full glass-pill hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-pointer text-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FiSun className="text-base text-amber-400 hover:rotate-90 transition-transform duration-300" />
            ) : (
              <FiMoon className="text-base text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* Resume Quick Action */}
          <a
            href={USER_DETAILS.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-btn-primary"
          >
            <FiDownload className="text-xs" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full glass-pill text-slate-700 dark:text-slate-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-3xl glass-panel p-5 shadow-2xl border border-white/20 lg:hidden flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/50 dark:border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">Navigation</span>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-beacon" />
                <span className="text-[11px]">Available for Roles</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.name}</span>
                  <FiArrowUpRight className="opacity-50 text-xs" />
                </a>
              ))}
            </div>

            <div className="pt-3 mt-2 border-t border-slate-200/50 dark:border-white/10 flex gap-2">
              <a
                href={USER_DETAILS.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold glass-btn-primary flex items-center justify-center gap-2"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
