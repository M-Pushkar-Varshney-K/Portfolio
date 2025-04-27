"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { projects } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/me.jpg"
              alt="Pushkar Varshney"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Pushkar.</span> I'm a{" "}
        <span className="font-bold">Full-stack & Android app developer</span> with{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentProjectIndex}
            className="font-bold text-blue-600 underline underline-offset-4 inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {projects[currentProjectIndex]}
          </motion.span>
        </AnimatePresence>
        . I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Contact Button */}
        <motion.button
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            overlay.style.zIndex = "999";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";

            const videoWrapper = document.createElement("div");
            videoWrapper.style.position = "relative";
            videoWrapper.style.zIndex = "1000";

            const videoElement = document.createElement("video");
            videoElement.src = "/videoCV.mp4";
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.style.width = "90%";
            videoElement.style.height = "auto";
            videoElement.style.borderRadius = "10px";
            videoElement.style.transform = "scale(0)";
            videoElement.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            videoElement.style.opacity = "0";

            // Add zoom-in effect
            setTimeout(() => {
              videoElement.style.transform = "scale(1)";
              videoElement.style.opacity = "1";
            }, 0);

            videoWrapper.appendChild(videoElement);
            overlay.appendChild(videoWrapper);

            overlay.onclick = () => {
              videoElement.style.transform = "scale(0)";
              videoElement.style.opacity = "0";
              setTimeout(() => {
          document.body.removeChild(overlay);
              }, 500); // Match the transition duration
            };

            document.body.appendChild(overlay);
          }}
        >
          Video CV{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </motion.button>

        {/* Download CV */}
        <a
          className="relative group bg-blue-600 text-white px-7 py-3 flex items-center gap-2 rounded-full overflow-hidden outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-blue-600/10"
          href="/CV.pdf"
          download
        >
          <span className="absolute inset-0 bg-blue-700 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 flex items-center gap-2">
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </span>
        </a>

        {/* Social Media Links */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          {/* LinkedIn */}
          <a
            className="bg-white p-4 text-gray-700 hover:text-white hover:bg-blue-600 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:hover:bg-blue-600 dark:text-white group"
            href="https://www.linkedin.com/in/pushkar-varshney-32714b2b1/"
            target="_blank"
          >
            <BsLinkedin className="text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:text-white" />
          </a>

          {/* GitHub */}
          <a
            className="bg-white p-4 text-gray-700 hover:text-white hover:bg-black flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60 dark:hover:bg-black group"
            href="https://github.com/M-Pushkar-Varshney-K"
            target="_blank"
          >
            <FaGithubSquare className="transition-transform duration-300 group-hover:rotate-12 group-hover:text-white" />
          </a>

          {/* LeetCode */}
          <a
            className="bg-white p-4 text-gray-700 hover:text-white hover:bg-orange-500 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-orange-500 group"
            href="https://leetcode.com/your_leetcode_username/"
            target="_blank"
          >
            <SiLeetcode className="transition-transform duration-300 group-hover:rotate-12" />
          </a>

          {/* GeeksforGeeks */}
          <a
            className="bg-white p-4 text-gray-700 hover:text-white hover:bg-green-600 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-green-600 group"
            href="https://auth.geeksforgeeks.org/user/your_gfg_username/"
            target="_blank"
          >
            <SiGeeksforgeeks className="transition-transform duration-300 group-hover:rotate-12" />
          </a>

          {/* Instagram */}
          <a
            className="bg-white p-4 text-gray-700 hover:text-white hover:bg-pink-500 flex items-center gap-2 text-[1.5rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:bg-pink-500 group"
            href="https://instagram.com/your_instagram_username/"
            target="_blank"
          >
            <FaInstagramSquare className="transition-transform duration-300 group-hover:rotate-12" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
