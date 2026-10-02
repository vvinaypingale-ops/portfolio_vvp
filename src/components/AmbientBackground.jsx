import React from 'react';
import { motion } from 'framer-motion';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle fine dot grid matrix for microscopic depth */}
      <div 
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating Aurora Orb 1: Primary Cyan/Sky (Top Left) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-cyan-400/25 via-sky-500/20 to-indigo-500/15 dark:from-cyan-500/20 dark:via-blue-600/15 dark:to-indigo-500/10 blur-[110px]"
      />

      {/* Floating Aurora Orb 2: Ethereal Violet/Purple (Top Right) */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-[5%] -right-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-purple-500/25 via-fuchsia-500/20 to-pink-500/15 dark:from-purple-600/20 dark:via-violet-600/15 dark:to-pink-600/10 blur-[120px]"
      />

      {/* Floating Aurora Orb 3: Deep Indigo/Navy (Center-Right Floating) */}
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, -60, 40, 0],
          scale: [0.9, 1.15, 1, 0.9],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute top-[45%] right-[15%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tl from-indigo-500/20 via-blue-500/15 to-teal-400/15 dark:from-indigo-700/15 dark:via-purple-900/15 dark:to-cyan-800/10 blur-[130px]"
      />

      {/* Floating Aurora Orb 4: Emerald/Teal Accent (Bottom Left) */}
      <motion.div
        animate={{
          x: [0, 90, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-[10%] left-[5%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tr from-teal-400/20 via-cyan-500/15 to-emerald-400/15 dark:from-cyan-900/20 dark:via-teal-800/15 dark:to-blue-900/10 blur-[120px]"
      />

      {/* Gentle Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/5 dark:to-[#060813]/40 pointer-events-none" />
    </div>
  );
};

export default AmbientBackground;
