import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiCheckCircle, FiShield, FiTrendingUp, FiFlag } from 'react-icons/fi';
import { ACHIEVEMENTS, POSITIONS } from '../constants';

const HACKATHON_DETAILS = [
  {
    title: "Smart India Hackathon (SIH)",
    badge: "National Top 50 Finalist",
    desc: "Competed at national scale addressing complex institutional problem statements, designing high-availability software architectures with multi-tier validation.",
    highlight: "National Level Recognition",
    color: "from-amber-400 to-orange-500",
    icon: FiAward,
  },
  {
    title: "GDG Build with Bengaluru",
    badge: "Google Developer Groups Hackathon",
    desc: "Built modern developer solutions and AI integration prototypes under rapid 24-48 hour hackathon sprints with real-time API integrations.",
    highlight: "Community Innovation",
    color: "from-sky-400 to-blue-600",
    icon: FiTrendingUp,
  },
  {
    title: "Anveshna & TechBizz",
    badge: "Technical Competitions",
    desc: "Demonstrated innovative project prototypes, technical feasibility presentations, and system design roadmaps to technical panels.",
    highlight: "Technical Pitching",
    color: "from-purple-400 to-indigo-600",
    icon: FiStar,
  }
];

const LEADERSHIP_DETAILS = [
  {
    title: "NSS Junior Leader",
    organization: "National Service Scheme",
    badge: "Leadership & Community",
    desc: "Spearheaded student outreach initiatives, coordinated volunteer teams for community development, and managed logistics for large-scale institutional campaigns.",
    color: "from-teal-400 to-emerald-600",
    icon: FiFlag,
  },
  {
    title: "NCC Cadet (6 Months)",
    organization: "National Cadet Corps",
    badge: "Discipline & Tactical Teamwork",
    desc: "Completed rigorous physical, leadership, and drill training instilling discipline, strategic problem solving under pressure, and mission alignment.",
    color: "from-blue-500 to-indigo-700",
    icon: FiShield,
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 text-xs font-semibold text-sky-600 dark:text-sky-400 border-sky-500/20">
            <FiAward className="text-sm" />
            <span>Milestones & Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Honors & <span className="text-gradient-hero">Leadership</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Validated through competitive national hackathons, community leadership, and structured disciplinary training.
          </p>
        </div>

        {/* Dual Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hackathons & Competitions (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl glass-card p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Top Header */}
            <div className="flex items-center gap-3.5 mb-8 pb-5 border-b border-slate-200/60 dark:border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                <FiAward className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Hackathons & Competitions
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  National milestones and engineering competitions
                </p>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              {HACKATHON_DETAILS.map((hack, idx) => {
                const Icon = hack.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 hover:border-amber-500/40 transition-all group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-xl bg-gradient-to-tr ${hack.color} flex items-center justify-center text-white text-xs`}>
                          <Icon />
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                          {hack.title}
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono glass-pill text-amber-600 dark:text-amber-400 border-amber-500/20">
                        {hack.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                      {hack.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Leadership & Service (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl glass-card p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Top Header */}
            <div className="flex items-center gap-3.5 mb-8 pb-5 border-b border-slate-200/60 dark:border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                <FiStar className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Leadership & Service
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Positions of trust, team coordination and discipline
                </p>
              </div>
            </div>

            {/* List */}
            <div className="space-y-4">
              {LEADERSHIP_DETAILS.map((pos, idx) => {
                const Icon = pos.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 hover:border-sky-500/40 transition-all group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-xl bg-gradient-to-tr ${pos.color} flex items-center justify-center text-white text-xs`}>
                          <Icon />
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                          {pos.title}
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono glass-pill text-sky-600 dark:text-sky-400 border-sky-500/20">
                        {pos.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-9">
                      {pos.desc}
                    </p>
                  </div>
                );
              })}

              {/* Value Quote Glass Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 border border-sky-500/20">
                <p className="text-xs italic text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <FiCheckCircle className="text-sky-500 flex-shrink-0" />
                  "Committed to rigorous engineering standards, collaborative accountability, and continuous self-improvement."
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;
