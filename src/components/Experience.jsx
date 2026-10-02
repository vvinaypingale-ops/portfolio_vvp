import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiReact, SiSpringboot, SiMysql, SiMongodb, SiJavascript, 
  SiOpenai, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiGit, 
  SiGithub, SiBootstrap, SiPostman
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa6';
import { FiCpu, FiServer, FiLayers, FiDatabase, FiTool, FiCode, FiCheckCircle } from 'react-icons/fi';

const SKILLS_DATA = [
  {
    category: "AI & Machine Learning",
    icon: FiCpu,
    accent: "from-sky-500 to-indigo-500",
    skills: [
      { name: "Python", icon: SiPython, level: "Advanced", color: "#3776AB" },
      { name: "Scikit-Learn", icon: SiScikitlearn, level: "Advanced", color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, level: "Advanced", color: "#150458" },
      { name: "NumPy", icon: SiNumpy, level: "Advanced", color: "#013243" },
      { name: "LLM Integration & APIs", icon: SiOpenai, level: "Specialized", color: "#10A37F" },
      { name: "Machine Learning Modeling", icon: FiCpu, level: "Specialized", color: "#38bdf8" },
      { name: "Deep Learning Fundamentals", icon: SiPytorch, level: "Intermediate", color: "#EE4C2C" },
      { name: "Model Evaluation & Metrics", icon: FiCheckCircle, level: "Advanced", color: "#a855f7" },
    ]
  },
  {
    category: "Backend & Systems",
    icon: FiServer,
    accent: "from-purple-500 to-pink-500",
    skills: [
      { name: "Java", icon: FaJava, level: "Advanced", color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, level: "Specialized", color: "#6DB33F" },
      { name: "Java Servlets & JSP", icon: FaJava, level: "Production", color: "#007396" },
      { name: "Multithreading & Concurrency", icon: FiCpu, level: "Advanced", color: "#6366f1" },
      { name: "RESTful API Architecture", icon: FiServer, level: "Advanced", color: "#06b6d4" },
      { name: "MVC Architecture", icon: FiLayers, level: "Production", color: "#8b5cf6" },
    ]
  },
  {
    category: "Web & Frontend",
    icon: FiLayers,
    accent: "from-teal-400 to-sky-500",
    skills: [
      { name: "React", icon: SiReact, level: "Advanced", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: "Advanced", color: "#F7DF1E" },
      { name: "Modern CSS / Glassmorphism", icon: FiLayers, level: "Advanced", color: "#38bdf8" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Proficient", color: "#7952B3" },
    ]
  },
  {
    category: "Databases & Storage",
    icon: FiDatabase,
    accent: "from-blue-500 to-teal-400",
    skills: [
      { name: "MySQL (3NF Design)", icon: SiMysql, level: "Advanced", color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, level: "Proficient", color: "#47A248" },
      { name: "SQL Query Optimization", icon: FiDatabase, level: "Advanced", color: "#38bdf8" },
    ]
  },
  {
    category: "Developer Tools & Core",
    icon: FiTool,
    accent: "from-indigo-500 to-purple-600",
    skills: [
      { name: "Git", icon: SiGit, level: "Advanced", color: "#F05032" },
      { name: "GitHub", icon: SiGithub, level: "Advanced", color: "#8b5cf6" },
      { name: "VS Code", icon: VscCode, level: "Daily Driver", color: "#007ACC" },
      { name: "Data Structures & Algorithms", icon: FiCode, level: "Strong", color: "#10b981" },
      { name: "OOP Principles", icon: FiLayers, level: "Strong", color: "#f59e0b" },
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Backend & Systems', 'Web & Frontend', 'Databases & Storage'];

  const filteredGroups = activeTab === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(group => group.category === activeTab);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Crisp Contrast */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 text-xs font-semibold text-sky-600 dark:text-sky-400 border-sky-500/20">
            <FiCpu className="text-sm" />
            <span>Technical Capabilities</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Engineering <span className="text-gradient-hero">Arsenal & Stack</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive toolbelt honed through building high-stakes healthcare AI, distributed enterprise architectures, and scalable web apps.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === cat
                    ? 'glass-btn-primary shadow-md'
                    : 'glass-pill text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-sky-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, groupIdx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
                  className="rounded-3xl glass-card p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Group Title with Glowing Icon */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60 dark:border-white/10">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${group.accent} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {group.category}
                        </h3>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          {group.skills.length} core technologies
                        </span>
                      </div>
                    </div>

                    {/* Skill Pills Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {group.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="p-2.5 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 hover:border-sky-500/40 hover:bg-sky-500/[0.04] transition-all flex items-center gap-2.5 group/item"
                          >
                            <div className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-sm flex-shrink-0 group-hover/item:scale-110 transition-transform">
                              <SkillIcon style={{ color: skill.color }} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                                {skill.name}
                              </div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                                {skill.level}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Subtle bottom accent line */}
                  <div className={`mt-6 h-1 w-16 rounded-full bg-gradient-to-r ${group.accent} opacity-60`} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Experience;
