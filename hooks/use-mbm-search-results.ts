"use client";

import { useMemo } from "react";
import {
  formatGroups,
  glossary,
  newGlossary,
  programBlocks,
  rules,
  specialCases,
} from "@/constants/mbm-content";
import { filterFormatGroup, matchesSearch } from "@/lib/mbm-search";
import { useMbmGuideStore } from "@/stores/mbm-guide-store";
import type { FormatGroup } from "@/types/mbm";

export function useMbmSearchResults() {
  const cleanQuery = useMbmGuideStore((state) => state.cleanQuery);

  return useMemo(() => {
    const filteredFormats = formatGroups
      .map((group) => filterFormatGroup(group, cleanQuery))
      .filter(Boolean) as FormatGroup[];

    const filteredGlossary = glossary.filter((term) => matchesSearch(term, cleanQuery));
    const filteredNewGlossary = newGlossary.filter((term) => matchesSearch(term, cleanQuery));
    const filteredCases = specialCases.filter((item) => matchesSearch(item, cleanQuery));
    const filteredPrograms = programBlocks.filter((item) => matchesSearch(item, cleanQuery));
    const filteredRules = rules.filter((item) => matchesSearch(item, cleanQuery));

    return {
      cleanQuery,
      filteredCases,
      filteredFormats,
      filteredGlossary,
      filteredNewGlossary,
      filteredPrograms,
      filteredRules,
      totalResults:
        filteredGlossary.length +
        filteredNewGlossary.length +
        filteredFormats.reduce((total, group) => total + group.examples.length, 0) +
        filteredCases.length +
        filteredPrograms.length +
        filteredRules.length,
    };
  }, [cleanQuery]);
}
