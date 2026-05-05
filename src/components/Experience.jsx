import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ACHIEVEMENTS, POSITIONS } from '../constants';
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              My toolbelt for building intelligent and scalable AI applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="ai-glass-card p-6 rounded-xl group"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-gray-100 dark:bg-darkBg border border-gray-200 dark:border-gray-800 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Positions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Achievements */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ai-glass p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-primary/5 text-9xl">
              <FiAward />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <FiAward className="text-3xl text-secondary" />
              <h2 className="text-3xl font-bold">Achievements</h2>
            </div>
            <ul className="space-y-4 relative z-10">
              {ACHIEVEMENTS.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Positions of Responsibility */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="ai-glass p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-secondary/5 text-9xl">
              <FiStar />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <FiStar className="text-3xl text-primary" />
              <h2 className="text-3xl font-bold">Responsibility</h2>
            </div>
            <ul className="space-y-4 relative z-10">
              {POSITIONS.map((item, index) => (
                <li key={index} className="flex items-start group">
                  <FiCheckCircle className="text-secondary mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
