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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
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
          <Projects />
          <Skills />
          <Certificates />
          <Experience />
          <Contact />
        </>
      )}
    </main>
  );
}
