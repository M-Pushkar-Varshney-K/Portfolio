'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]">
      {/* Main Cursor */}
      <motion.div
        className="h-6 w-6 rounded-full bg-white mix-blend-difference absolute"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
};

export default CustomCursor;
