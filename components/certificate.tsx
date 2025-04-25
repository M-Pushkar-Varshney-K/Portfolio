"use client";

import { useRef } from "react";
import { certificates } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof certificates)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group block mb-6 sm:mb-10 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer">
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 p-6 sm:p-10">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-700 leading-relaxed dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/70 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Content */}
          <div className="relative w-full sm:w-[280px] flex-shrink-0 self-center sm:self-start">
            <Image
              src={imageUrl}
              alt={`${title} image`}
              quality={95}
              className="rounded-lg shadow-2xl w-full h-auto object-contain transition 
                group-hover:scale-[1.03] 
                group-hover:-translate-y-1 
                group-hover:rotate-[1deg]"/>
          </div>
        </div>
      </section>
    </motion.a>
  );
}
