"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 overflow-hidden relative">
      <SectionHeading>My Projects</SectionHeading>

      <div className="relative w-[90vw] py-8 overflow-hidden group">
        <div className="flex animate-scroll gap-6 whitespace-nowrap">
          {[...projectsData, ...projectsData].map((project, index) => (
            <div className="flex-shrink-0" key={index}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
