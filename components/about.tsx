"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After <span className="font-medium">Diploma in Engineering in Electronics</span>, I decided to pursue my passion for programming & development. 
        I enrolled in a <span className="font-medium">Bachelor's of Technology in IT</span> and learned 
        <span className="font-medium"> Full-stack web & Android app development</span>. 
        <span className="italic"> My favorite part of programming</span> is the problem-solving aspect. 
        I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. 
        My core stack is <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. 
        I am also familiar with <span className="font-medium">TypeScript and Python</span>. 
        I am always looking to learn new technologies and tech-stack. 
        I am currently looking for a <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing <span className="font-medium">chess, mobile games, and sleep</span>. 
        I also enjoy learning new things. I am currently learning about <span className="font-medium">React-Native</span>.
      </p>
    </motion.section>
  );
}
