'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);

      // Push cursor point for trail
      setTrail((prev) => [...prev.slice(-20), { x, y }]); // limit to last 20 points
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main circular cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full bg-white mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Line trail */}
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 z-[9998] h-[2px] w-[2px] rounded-full bg-white mix-blend-difference"
          initial={{ opacity: 0 }}
          animate={{
            x: point.x,
            y: point.y,
            opacity: (index + 1) / trail.length, // fade out old points
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
