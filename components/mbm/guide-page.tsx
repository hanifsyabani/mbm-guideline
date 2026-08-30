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

export function GuidePage() {
  const setActiveSection = useMbmGuideStore((state) => state.setActiveSection);
  const {
    cleanQuery,
    filteredCases,
    filteredFormats,
    filteredGlossary,
    filteredPrograms,
    filteredRules,
    totalResults,
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
      <HeroSection  />
      <GlossarySection items={filteredGlossary} query={cleanQuery} />
      <FormatSection groups={filteredFormats} cases={filteredCases} query={cleanQuery} />
      <ProgramSection items={filteredPrograms} query={cleanQuery} />
      <RulesSection items={filteredRules} query={cleanQuery} />
      <ReferenceSection shots={sourceShots} query={cleanQuery} />
      <BackToTop />
    </main>
  );
}
