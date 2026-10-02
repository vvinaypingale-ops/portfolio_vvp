import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import MouseSpotlight from './components/MouseSpotlight';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or default to dark mode for rich glassmorphism
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Default dark
    }
    return true;
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#f8fafc] dark:bg-[#060813] text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-sky-500/20 selection:text-sky-300">
      
      {/* Dynamic Ambient Aurora Backlight */}
      <AmbientBackground />

      {/* Interactive Light Spotlight following cursor without hijacking cursor */}
      <MouseSpotlight />

      {/* Top Glass Scroll Progress Line */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 origin-left z-[100] shadow-[0_0_12px_rgba(56,189,248,0.7)]"
        style={{ scaleX }}
      />

      {/* Floating Pill Glass Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        
        {/* Subtle glass separator */}
        <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/10 to-transparent" />
        
        <Experience />
        
        <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/10 to-transparent" />
        
        <Projects />

        <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/10 to-transparent" />
        
        <Achievements />

        <div className="h-px max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/10 to-transparent" />
        
        <Contact />
      </main>
      
      {/* Sleek Glass Footer */}
      <Footer />

      {/* Floating Back to Top Glass Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-2xl glass-btn-primary shadow-2xl z-40 cursor-pointer flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
