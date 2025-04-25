"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skillsData.map(({ name, color }, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 transition-colors duration-100"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
          style={{
            border: `2px solid transparent`,
          }}
          whileHover={{
            scale: 1.05,
            color: "#ffffff",
            backgroundColor: color,
          }}
        >
          {name}
        </motion.li>
    ))}

      </ul>
    </section>
  );
}
