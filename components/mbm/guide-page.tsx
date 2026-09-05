"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import { navItems, sourceShots } from "@/constants/mbm-content";
import { useMbmSearchResults } from "@/hooks/use-mbm-search-results";
import { useMbmGuideStore } from "@/stores/mbm-guide-store";
import { BackToTop } from "./back-to-top";
import { FormatSection } from "./format-section";
import { GlossarySection } from "./glossary-section";
import { HeroSection } from "./hero-section";
import { ProgramSection } from "./program-section";
import { ReferenceSection } from "./reference-section";
import { RulesSection } from "./rules-section";
import Image from "next/image";
import { SectionHeading } from "./section-heading";

export function GuidePage() {
  const setActiveSection = useMbmGuideStore((state) => state.setActiveSection);
  const {
    cleanQuery,
    filteredCases,
    filteredFormats,
    filteredGlossary,
    filteredPrograms,
    filteredRules,
  } = useMbmSearchResults();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <main className="min-h-screen bg-mbm-bg text-mbm-ink">
      <HeroSection />
      <section id="tampilan" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          title="Tampilan MBM"
        />
        <div className="flex justify-center">
          <Image
            src={'/mbm-assets/TAMPILAN MBM.png'}
            alt="MBM Display"
            className="w-400"
            width={500}
            height={500}
          />
        </div>
      </section>
      <GlossarySection items={filteredGlossary} query={cleanQuery} />
      <FormatSection groups={filteredFormats} cases={filteredCases} query={cleanQuery} />
      <ProgramSection items={filteredPrograms} query={cleanQuery} />
      <RulesSection items={filteredRules} query={cleanQuery} />
      <ReferenceSection  />
      <BackToTop />
    </main>
  );
}
