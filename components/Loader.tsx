// components/Loader.tsx
'use client';

import { motion } from 'framer-motion';

const loadingText = ['<', '⌨️', '🚀', '💻', '/>'];

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col items-center justify-center">
      <motion.div
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", repeatType: "reverse" }}
      >
        Loading...
      </motion.div>
      
      <div className="flex space-x-2 text-4xl">
        {loadingText.map((item, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 1 + index * 0.2 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
