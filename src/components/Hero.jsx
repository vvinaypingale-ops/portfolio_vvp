import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { USER_DETAILS } from '../constants';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            {USER_DETAILS.name}
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
            Aspiring AI Engineer <br/>
            <span className="text-gradient leading-tight">
              Building Intelligent Systems
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mt-6 h-[40px]">
            <Typewriter
              words={USER_DETAILS.roles}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming complex data into actionable insights and designing scalable neural architectures to solve real-world problems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -ml-4"></span>
            View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href={USER_DETAILS.resumeLink} 
            target="_blank" 
            rel="noreferrer" 
            className="px-8 py-3 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 ai-glass-card text-gray-900 dark:text-white"
          >
            <FiDownload className="text-primary" /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
