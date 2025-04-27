"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Certificates from "@/components/certificates";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Achievements from "@/components/achievements";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Intro />
          <SectionDivider />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Experience />
          <Contact />
        </>
      )}
    </main>
  );
}
