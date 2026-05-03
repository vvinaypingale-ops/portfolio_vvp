import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { USER_DETAILS } from '../constants';
import { FiDownload, FiMail } from 'react-icons/fi';

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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wide mb-4"
        >
          WELCOME TO MY WORLD
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-primary">{USER_DETAILS.name}</span> <br/>
          <span className="text-3xl md:text-5xl mt-4 block text-gray-700 dark:text-gray-300">
            a {' '}
            <span className="text-primary">
              <Typewriter
                words={USER_DETAILS.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I build premium, performant, and accessible digital experiences using modern web technologies. Let's turn ideas into reality.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-transform hover:-translate-y-1 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-gray-300 dark:border-gray-700 px-8 py-3 rounded-full font-medium hover:border-primary dark:hover:border-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            <FiMail /> Contact Me
          </a>
          <a href={USER_DETAILS.resumeLink} target="_blank" rel="noreferrer" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
            <FiDownload /> Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
