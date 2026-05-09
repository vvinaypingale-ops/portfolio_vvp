import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle, FiCpu } from 'react-icons/fi';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work focusing on AI integration, Full-Stack development, and System Design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => {
              // Highlight top 2 projects by making them look slightly distinct, but here we keep grid uniform and rely on card styling
              const isTopProject = index < 2;
              
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className={`rounded-2xl overflow-hidden ai-glass-card group flex flex-col h-full relative transition-all duration-500 ${isTopProject ? 'border-primary/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-white/10 dark:border-gray-800'}`}
                >
                  {/* Glowing background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="p-8 flex-grow flex flex-col relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white line-clamp-1 flex items-center gap-2">
                        {isTopProject && <FiCpu className="text-primary animate-pulse" />}
                        {project.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                      {project.description}
                    </p>

                    <ul className="mb-6 space-y-3 flex-grow">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <FiCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/50 dark:bg-[#030712]/80 border border-gray-200 dark:border-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:border-primary/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/50 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors font-medium text-sm border border-gray-200 dark:border-gray-700">
                          <FiGithub /> Source
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-medium text-sm ml-auto border border-primary/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
