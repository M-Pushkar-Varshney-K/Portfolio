"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {

  return (
    <motion.div
      className="group relative w-[320px] h-[450px] flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-300 dark:bg-white/10 dark:border-white/20 hover:shadow-neon transition-transform duration-300 cursor-pointer scale-90 opacity-70 hover:scale-100 hover:opacity-100"
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
        {/* Image */}
        <div className="relative w-full h-1/2">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold break-words whitespace-pre-wrap">{title}</h3>
            <p className="mt-2 text-gray-600 text-sm dark:text-white/70 break-words whitespace-pre-wrap text-justify">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/70 px-2 py-1 text-[0.65rem] uppercase tracking-wide text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover Neon Border */}
        {/* <div className="absolute inset-0z rounded-lg border-2 border-transparent group-hover:border-cyan-400 transition-all pointer-events-none"></div> */}
      </a>
    </motion.div>
  );
}
