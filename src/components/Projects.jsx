import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle, FiCpu, FiLayers, FiActivity, FiChevronDown, FiChevronUp, FiBookOpen, FiDollarSign, FiUsers, FiMusic } from 'react-icons/fi';
import { PROJECTS } from '../constants';

const PROJECT_EXTRAS = {
  1: {
    category: "AI & Healthcare",
    badge: "Flagship AI Platform",
    gradient: "from-sky-500/20 via-indigo-500/10 to-teal-500/15",
    accentColor: "#38bdf8",
    icon: FiActivity,
    metrics: [
      { label: "Predictive Engine", val: "Cardiovascular AI" },
      { label: "Emergency", val: "Real-time SOS + GPS" },
      { label: "Backend", val: "Spring Boot + MySQL" }
    ]
  },
  2: {
    category: "AI & Education",
    badge: "LLM Powered",
    gradient: "from-purple-500/20 via-pink-500/10 to-indigo-500/15",
    accentColor: "#a855f7",
    icon: FiBookOpen,
    metrics: [
      { label: "Core Model", val: "Large Language Models" },
      { label: "Learning Pace", val: "Adaptive AI" },
      { label: "Stack", val: "React + Python + Node" }
    ]
  },
  3: {
    category: "Full Stack",
    badge: "Intelligent Finance",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/15",
    accentColor: "#10b981",
    icon: FiDollarSign,
    metrics: [
      { label: "ML Classification", val: "Expense Categorizer" },
      { label: "Data Visualization", val: "Interactive Charts" },
      { label: "Stack", val: "React + Node + SQL" }
    ]
  },
  4: {
    category: "Full Stack",
    badge: "Enterprise MVC",
    gradient: "from-blue-500/20 via-indigo-500/10 to-slate-500/15",
    accentColor: "#6366f1",
    icon: FiUsers,
    metrics: [
      { label: "Concurrency", val: "ExecutorService Async" },
      { label: "Database", val: "3NF Normalized MySQL" },
      { label: "Server", val: "Apache Tomcat" }
    ]
  },
  5: {
    category: "Web Apps",
    badge: "Interactive Media",
    gradient: "from-rose-500/20 via-purple-500/10 to-amber-500/15",
    accentColor: "#f43f5e",
    icon: FiMusic,
    metrics: [
      { label: "Audio Engine", val: "HTML5 Audio Pipeline" },
      { label: "State", val: "Continuous Playback" },
      { label: "UI", val: "Dynamic Transitions" }
    ]
  }
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(1); // Default first project expanded for rich preview

  const filters = ['All', 'AI & Healthcare', 'Full Stack', 'Web Apps'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    const extra = PROJECT_EXTRAS[proj.id];
    return extra && extra.category === activeFilter;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 text-xs font-semibold text-sky-600 dark:text-sky-400 border-sky-500/20">
            <FiCpu className="text-sm" />
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Production <span className="text-gradient-hero">Innovations</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Selected engineering projects demonstrating applied machine learning, high-reliability backends, and responsive user experiences.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'glass-btn-primary shadow-md'
                    : 'glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-sky-500/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const extra = PROJECT_EXTRAS[project.id] || {
                category: "Project",
                badge: "Featured",
                gradient: "from-sky-500/10 to-indigo-500/10",
                accentColor: "#38bdf8",
                icon: FiLayers,
                metrics: []
              };
              const Icon = extra.icon;
              const isExpanded = expandedId === project.id;
              const isFlagship = project.id === 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-3xl glass-card overflow-hidden flex flex-col justify-between ${
                    isFlagship ? 'md:col-span-2 border-sky-500/30 shadow-sky-500/10' : ''
                  }`}
                >
                  {/* Subtle Gradient Backlight Banner */}
                  <div className={`h-2 w-full bg-gradient-to-r ${extra.gradient}`} />

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div 
                            className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm"
                            style={{ background: `linear-gradient(135deg, ${extra.accentColor} 0%, #6366f1 100%)` }}
                          >
                            <Icon className="text-xl" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              {extra.category}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                              {project.name}
                            </h3>
                          </div>
                        </div>

                        <span className="px-3 py-1 rounded-full text-xs font-semibold glass-pill border-sky-500/30 text-sky-600 dark:text-sky-300">
                          {extra.badge}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Highlights Metrics Matrix */}
                      {extra.metrics && extra.metrics.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                          {extra.metrics.map((m, mIdx) => (
                            <div 
                              key={mIdx}
                              className="p-3 rounded-2xl bg-slate-100/50 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/10"
                            >
                              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 dark:text-slate-400">
                                {m.label}
                              </div>
                              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                                {m.val}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Expandable Engineering Deep Dive */}
                      <div className="mb-6">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="w-full flex items-center justify-between py-2 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors focus:outline-none cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <FiCpu />
                            {isExpanded ? 'Hide Architecture & Implementation' : 'View Architecture & Implementation Details'}
                          </span>
                          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pt-2"
                            >
                              <ul className="p-4 rounded-2xl bg-slate-100/60 dark:bg-slate-900/50 border border-slate-200/70 dark:border-white/10 space-y-2.5">
                                {project.bullets.map((bullet, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                                    <FiCheckCircle className="text-sky-500 mt-0.5 flex-shrink-0" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Tech Stack & Links Footer */}
                    <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium glass-pill text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-2.5 flex-shrink-0">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold glass-btn-secondary"
                          >
                            <FiGithub />
                            <span>Repository</span>
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold glass-btn-primary"
                          >
                            <FiExternalLink />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;
