"use client";

import React, { useState, useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
import { achievement } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

export default function Achievements() {
  const { ref } = useSectionInView("Achievements", 0.5);

  const [currentLeet, setCurrentLeet] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const webathonAchievement = achievement.find((item) => item.name === "Hackathon");
  const leetCodeAchievements = achievement.filter((item) => item.name.includes("Leetcode"));
  const lpuAchievement = achievement.find((item) => item.name === "LPU");

  const isWebathonArray = Array.isArray(webathonAchievement?.img);

  useEffect(() => {
    if (leetCodeAchievements.length > 0) {
      const interval = setInterval(() => {
        setCurrentLeet((prev) => (prev + 1) % leetCodeAchievements.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [leetCodeAchievements.length]);

  useEffect(() => {
    if (isWebathonArray) {
      const interval = setInterval(() => {
        const imgs = webathonAchievement?.img as StaticImageData[];
        setCurrentImage((prev) => (prev + 1) % imgs.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [webathonAchievement, isWebathonArray]);

  return (
    <section
      ref={ref}
      id="achievements"
      className="min-h-screen mb-28 scroll-mt-28 px-4 sm:px-10"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        🌟 My Achievements
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Web-a-Thon */}
        <div className="flex flex-col justify-between bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden h-full">
          {webathonAchievement && (
            <div className="relative w-full h-full flex flex-col justify-end">
              {/* Image area filling card */}
              <div className="absolute inset-0">
              <AnimatePresence mode="wait">
                {isWebathonArray && (
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <Image
                  src={(webathonAchievement.img as StaticImageData[])[currentImage]}
                  alt="Webathon Image"
                  fill
                  className="object-cover"
                  />
                </motion.div>
                )}
                {!isWebathonArray && (
                <Image
                  src={webathonAchievement.img as StaticImageData}
                  alt="Webathon Image"
                  fill
                  className="object-cover"
                />
                )}
              </AnimatePresence>
              </div>

              {/* Text */}
              <div className="relative z-10 bg-black bg-opacity-50 text-white p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">
                {webathonAchievement.title}
              </h3>
              <p className="text-lg">{webathonAchievement.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: LeetCode Slider + LPU Static */}
        <div className="flex flex-col gap-6">
          
          {/* LeetCode rotating achievements */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 h-72 flex flex-col items-center justify-center text-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={leetCodeAchievements[currentLeet].title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center"
              >
                <Image
                  src={leetCodeAchievements[currentLeet].img as StaticImageData}
                  alt="LeetCode Achievement"
                  width={80}
                  height={120}
                  className="mb-4 rounded-md object-cover"
                />
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {leetCodeAchievements[currentLeet].title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {leetCodeAchievements[currentLeet].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LPU Static achievement */}
          {lpuAchievement && (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center">
              <Image
                src={lpuAchievement.img as StaticImageData}
                alt="LPU Achievement"
                width={80}
                height={80}
                className="mb-4 rounded-md object-cover"
              />
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                {lpuAchievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {lpuAchievement.description}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
