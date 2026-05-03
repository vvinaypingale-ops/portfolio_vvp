import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from 'react-icons/fi';
import { USER_DETAILS } from '../constants';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${USER_DETAILS.githubUsername}/repos?sort=updated&per_page=100`);
        
        // Filter out forks and empty repos
        const validProjects = response.data
          .filter(repo => !repo.fork && repo.description)
          .slice(0, 6); // Take top 6 recently updated meaningful repos
          
        setProjects(validProjects);
      } catch (error) {
        console.error("Error fetching projects from GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const Skeleton = () => (
    <div className="rounded-xl overflow-hidden glass p-6 animate-pulse">
      <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6 w-full"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-6 w-5/6"></div>
      <div className="flex gap-2 mb-6">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
      </div>
    </div>
  );

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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent open-source projects pulled directly from GitHub.
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => <Skeleton key={i} />)}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-10 glass rounded-xl">
              <p className="text-xl text-gray-500">No public repositories found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="rounded-xl overflow-hidden glass group flex flex-col h-full"
                >
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white line-clamp-1">{project.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><FiStar /> {project.stargazers_count}</span>
                        <span className="flex items-center gap-1"><FiGitBranch /> {project.forks_count}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.language && (
                        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                          {project.language}
                        </span>
                      )}
                      {project.topics && project.topics.slice(0, 2).map(topic => (
                        <span key={topic} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm">
                        <FiGithub /> Repository
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-blue-600 transition-colors font-medium text-sm ml-auto">
                          <FiExternalLink /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
