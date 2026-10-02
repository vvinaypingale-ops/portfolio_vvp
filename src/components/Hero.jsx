import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { USER_DETAILS } from '../constants';
import { FiArrowRight, FiDownload, FiCpu, FiActivity, FiZap, FiShield, FiGithub, FiLinkedin, FiLayers } from 'react-icons/fi';
import { SiPython, SiReact, SiSpringboot } from 'react-icons/si';

const Hero = () => {
  // Interactive mini-demo state inside the hero glass card
  const [demoHeartRate, setDemoHeartRate] = useState(76);
  const [analyzing, setAnalyzing] = useState(false);
  const [riskScore, setRiskScore] = useState(14); // Low risk initial

  const runSimulatedInference = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const newRate = Math.floor(Math.random() * (130 - 65 + 1)) + 65;
      setDemoHeartRate(newRate);
      // Risk formula based on simulated vitals
      const score = newRate > 105 ? Math.floor(65 + (newRate - 105) * 1.4) : Math.floor((newRate / 105) * 25);
      setRiskScore(score);
      setAnalyzing(false);
    }, 450);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTAs (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Eyebrow Glass Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 text-xs font-semibold text-slate-700 dark:text-slate-200 border-sky-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-slate-900 dark:text-white font-bold">{USER_DETAILS.name}</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-sky-600 dark:text-sky-400">AI & Full-Stack Engineer</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08] mb-6">
              Engineering <br />
              <span className="text-gradient-hero">Intelligent Systems</span> <br />
              & Scalable Software.
            </h1>

            {/* Role Typewriter Ribbon */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 mb-6 h-8">
              <span className="text-slate-400 dark:text-slate-500 font-mono text-sm tracking-wider">SPECIALTY:</span>
              <span className="font-semibold text-sky-600 dark:text-sky-300 border-b border-sky-400/40 pb-0.5">
                <Typewriter
                  words={USER_DETAILS.roles}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={40}
                  delaySpeed={1800}
                />
              </span>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl leading-relaxed font-normal">
              Transforming raw data into high-availability AI platforms. Proven track record building clinical cardiovascular risk predictors, LLM assistants, and enterprise distributed backends.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="relative group px-6 py-3.5 rounded-2xl glass-btn-primary font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-150%] skew-x-[-15deg] group-hover:translate-x-[250%] transition-transform duration-700 ease-out pointer-events-none" />
                <span>Explore Projects</span>
                <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={USER_DETAILS.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl glass-btn-secondary font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <FiDownload className="text-sky-500 dark:text-sky-400" />
                <span>Resume / CV</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={USER_DETAILS.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-2xl glass-pill hover:border-sky-500/50 hover:text-sky-500 transition-all text-slate-700 dark:text-slate-300"
                >
                  <FiGithub className="text-lg" />
                </a>
                <a
                  href={USER_DETAILS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-2xl glass-pill hover:border-purple-500/50 hover:text-purple-400 transition-all text-slate-700 dark:text-slate-300"
                >
                  <FiLinkedin className="text-lg" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-200/80 dark:border-white/10 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">5+</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Deployed Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 tracking-tight">Top 50</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Smart India Hackathon</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">98.4%</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Model Accuracy</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Glassmorphism AI Architecture Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Backlight Glow behind the card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

            {/* Interactive Glass Bento Widget */}
            <div className="relative rounded-3xl glass-panel p-6 sm:p-7 shadow-2xl border border-white/20 overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-200/60 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                    <FiCpu className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      PulseGuard Engine
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/20 font-mono">v2.4</span>
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Clinical Cardiovascular Inference</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[11px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-beacon" />
                  ONLINE
                </div>
              </div>

              {/* Realtime Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <FiZap className="text-amber-500" />
                    <span>Inference Latency</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    28<span className="text-xs font-normal text-slate-400">ms</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <FiShield className="text-sky-500" />
                    <span>Model F1 Score</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    0.982
                  </div>
                </div>
              </div>

              {/* Interactive Simulation Console */}
              <div className="p-4 rounded-2xl bg-slate-900/5 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/10 mb-5">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <FiActivity className="text-rose-500 animate-pulse" />
                    Simulated Patient Vitals
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
                    BPM: <strong className="text-slate-900 dark:text-white">{demoHeartRate}</strong>
                  </span>
                </div>

                {/* Risk Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden mb-3">
                  <motion.div
                    className={`h-full rounded-full transition-all duration-500 ${
                      riskScore > 50 ? 'bg-gradient-to-r from-amber-500 to-rose-500' : 'bg-gradient-to-r from-emerald-400 to-sky-400'
                    }`}
                    style={{ width: `${riskScore}%` }}
                  />
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Risk Assessment:</span>
                  <span className={`font-bold font-mono px-2 py-0.5 rounded-md ${
                    riskScore > 50 
                      ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' 
                      : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                  }`}>
                    {riskScore > 50 ? 'ELEVATED RISK' : 'LOW RISK (STABLE)'}
                  </span>
                </div>
              </div>

              {/* Interactive Button */}
              <button
                onClick={runSimulatedInference}
                disabled={analyzing}
                className="w-full py-2.5 rounded-xl text-xs font-bold glass-btn-secondary border-sky-500/30 hover:border-sky-500/60 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
              >
                <FiActivity className={analyzing ? 'animate-spin text-sky-500' : 'text-sky-500'} />
                <span>{analyzing ? 'Evaluating Neural Weights...' : 'Simulate Live Patient Vitals'}</span>
              </button>

              {/* Architecture Stack Chips */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Core Stack:</span>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded-md glass-pill">
                    <SiPython className="text-[#3776AB]" /> Python
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded-md glass-pill">
                    <SiSpringboot className="text-[#6DB33F]" /> Spring Boot
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] px-2 py-0.5 rounded-md glass-pill">
                    <SiReact className="text-[#61DAFB]" /> React
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
