"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificates } from "@/lib/data";
import Certificate from "./certificate";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Certificates", 0.5);

  return (
    <section ref={ref} id="certificates" className="scroll-mt-28 mb-28">
      <SectionHeading>My Certificates</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {certificates.map((project, index) => (
    <div
      key={index}
      className="flex flex-col h-full w-full min-h-[350px] rounded-lg shadow-md overflow-hidden"
    >
      <Certificate {...project} />
    </div>
  ))}
</div>

    </section>
  );
}
