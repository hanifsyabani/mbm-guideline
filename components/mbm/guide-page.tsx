"use client";

import { useEffect } from "react";
import Image from "next/image";
import { navItems } from "@/constants/mbm-content";
import { useMbmSearchResults } from "@/hooks/use-mbm-search-results";
import { useMbmGuideStore } from "@/stores/mbm-guide-store";
import { BackToTop } from "./back-to-top";
import { FormatSection } from "./format-section";
import { GlossarySection } from "./glossary-section";
import { HeroSection } from "./hero-section";
import { ProgramSection } from "./program-section";
import { ReferenceSection } from "./reference-section";
import { RulesSection } from "./rules-section";
import { SectionHeading } from "./section-heading";

export function GuidePage() {
  const setActiveSection = useMbmGuideStore((state) => state.setActiveSection);
  const {
    cleanQuery,
    filteredCases,
    filteredFormats,
    filteredGlossary,
    filteredNewGlossary,
    filteredPrograms,
    filteredRules,
  } = useMbmSearchResults();

  useEffect(() => {
    let frameId: number | null = null;

    const getSectionElements = () =>
      navItems
        .map(({ id }) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element));

    const updateActiveSection = () => {
      frameId = null;

      const sections = getSectionElements();
      const firstSection = sections[0];
      const lastSection = sections[sections.length - 1];

      if (!firstSection || !lastSection) return;

      const scrollBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;

      if (pageBottom - scrollBottom <= 2) {
        setActiveSection(lastSection.id);
        return;
      }

      const markerY = window.innerHeight * 0.35;
      let activeId = firstSection.id;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= markerY) {
          activeId = section.id;
        }
      });

      setActiveSection(activeId);
    };

    const scheduleUpdate = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);
    };
  }, [
    cleanQuery,
    filteredCases.length,
    filteredFormats.length,
    filteredGlossary.length,
    filteredNewGlossary.length,
    filteredPrograms.length,
    filteredRules.length,
    setActiveSection,
  ]);

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
      <section id="sumber" className="mx-auto space-y-10 max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
        <div className=" space-y-4">
          <SectionHeading
            title="LOT"
          />
          <div className="flex justify-center">
            <Image
              src={'/mbm-assets/LOT.jpeg'}
              alt="MBM Display"
              className="w-400"
              width={500}
              height={500}
            />
          </div>

        </div>
        <div className=" space-y-4">
          <SectionHeading
            title="SOT"
          />
          <div className="grid lg:grid-cols-3">

            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/image9.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/image1.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/image2.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className=" space-y-4">
          <SectionHeading
            title="Wwc"
          />
          <div className="grid lg:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/Wwc.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/Wwc_2.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className=" space-y-4">
          <SectionHeading
            title="LR"
          />
          <div className="grid lg:grid-cols-3">
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/LR.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/image6.png'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={'/mbm-assets/LOTT.jpeg'}
                alt="MBM Display"
                className="w-400"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className=" space-y-4">
          <SectionHeading
            title="Teleconference"
          />
          <div className="flex justify-center">
            <Image
              src={'/mbm-assets/tele.png'}
              alt="MBM Display"
              className="w-400"
              width={500}
              height={500}
            />
          </div>

        </div>
        <div className=" space-y-4">
          <SectionHeading
            title="Dialog"
          />
          <div className="flex justify-center">
            <Image
              src={'/mbm-assets/DIALOG.jpeg'}
              alt="MBM Display"
              className="w-150"
              width={500}
              height={500}
            />
          </div>


        </div>


      </section>

      {/* daftar istilah baru */}
      <GlossarySection
        id="istilah-baru"
        items={filteredNewGlossary}
        query={cleanQuery}
        title="Daftar Istilah Baru"
      />

      <FormatSection groups={filteredFormats} cases={filteredCases} query={cleanQuery} />
      <ProgramSection items={filteredPrograms} query={cleanQuery} />
      <RulesSection items={filteredRules} query={cleanQuery} />
      <ReferenceSection />
      <BackToTop />
    </main>
  );
}
