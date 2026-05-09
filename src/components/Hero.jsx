import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { USER_DETAILS } from '../constants';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Generate lightweight particles
  const particles = Array.from({ length: 15 });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 dark:bg-primary/10 blur-[2px]"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)] backdrop-blur-md"
          >
            {USER_DETAILS.name}
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white leading-[1.1]">
            Aspiring AI Engineer <br/>
            <span className="text-gradient leading-tight">
              Building Intelligent Systems
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mt-8 h-[40px]">
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming complex data into actionable insights and designing scalable neural architectures to solve real-world problems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -ml-4"></span>
            View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href={USER_DETAILS.resumeLink} 
            target="_blank" 
            rel="noreferrer" 
            className="px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 ai-glass-card text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-secondary/50 shadow-lg"
          >
            <FiDownload className="text-secondary" /> Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
