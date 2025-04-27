'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const icons = ['⌨️', '🚀', '💻'];
const loadingText = 'Loading...';

export default function Loader() {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000); // change icon every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center">
      {/* Icon Line */}
      <div className="flex items-center text-[5rem] font-bold space-x-6">
        {/* Left Static Icon */}
        <span>{'<'}</span>

        {/* Animated Middle Icon */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIcon}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {icons[currentIcon]}
          </motion.span>
        </AnimatePresence>

        {/* Right Static Icon */}
        <span>{'/>'}</span>
      </div>

      {/* Loading Text with Wave Animation */}
      <div className="flex mt-10 text-[3rem] font-semibold">
        {loadingText.split('').map((char, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1, // delay each letter a bit for wave
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
