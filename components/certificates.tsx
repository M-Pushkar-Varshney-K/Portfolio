"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificates} from "@/lib/data";
import Certificate from "./certificate";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Certificates", 0.5);

  return (
    <section ref={ref} id="certificates" className="scroll-mt-28 mb-28">
      <SectionHeading>My Certificates</SectionHeading>
      <div>
        {certificates.map((project, index) => (
          <React.Fragment key={index}>
            <Certificate {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
