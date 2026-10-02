import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Non-intrusive ambient light spotlight.
 * Never hides the system cursor, never blocks clicks (pointer-events-none).
 * Simply floats a soft ambient photon glow behind glass elements to give dynamic refraction.
 */
const MouseSpotlight = () => {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 350, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 30 });

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[1] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 dark:opacity-30 blur-[70px]"
      style={{
        left: springX,
        top: springY,
        width: 320,
        height: 320,
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)',
      }}
    />
  );
};

export default MouseSpotlight;
