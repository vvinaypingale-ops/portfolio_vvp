import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work focusing on AI, Full-Stack, and System Design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="rounded-xl overflow-hidden glass group flex flex-col h-full shadow-lg"
              >
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white line-clamp-1">{project.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 font-medium">
                    {project.description}
                  </p>

                  <ul className="mb-6 space-y-2 flex-grow">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm">
                        <FiGithub /> Source Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors font-medium text-sm ml-auto">
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
