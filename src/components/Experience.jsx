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
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-600 dark:text-gray-400">My toolbelt for building intelligent and scalable applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
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
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiAward className="text-3xl text-primary" />
              <h2 className="text-3xl font-bold">Achievements</h2>
            </div>
            <ul className="space-y-4">
              {ACHIEVEMENTS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
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
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <FiStar className="text-3xl text-primary" />
              <h2 className="text-3xl font-bold">Responsibility</h2>
            </div>
            <ul className="space-y-4">
              {POSITIONS.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
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
