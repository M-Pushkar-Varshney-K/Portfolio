"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      mouseX.set(x);
      mouseY.set(y);

      // Push cursor point for trail
      setTrail((prev) => [...prev.slice(-19), { x, y }]); // limit to last 20 points
      setIsMoving(true);
    };

    const handleStop = () => {
      setIsMoving(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleStop);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleStop);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main circular cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full bg-white mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Line trail */}
      {/* <svg
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        width="100vw"
        height="100vh"
      >
        <polyline
          points={
            isMoving
              ? trail.map((point) => ${point.x},${point.y}).join(" ")
              : ""
          }
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff0000">
              <animate
                attributeName="stop-color"
                values="#ff0000;#00ff00;#0000ff;#ff0000"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#0000ff">
              <animate
                attributeName="stop-color"
                values="#0000ff;#ff0000;#00ff00;#0000ff"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg> */}
    </>
  );
};

export default CustomCursor;