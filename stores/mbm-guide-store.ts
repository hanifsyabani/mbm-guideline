"use client";

import { create } from "zustand";

type MbmGuideState = {
  activeSection: string;
  query: string;
  cleanQuery: string;
  setActiveSection: (activeSection: string) => void;
  setQuery: (query: string) => void;
  clearQuery: () => void;
};

export const useMbmGuideStore = create<MbmGuideState>((set) => ({
  activeSection: "top",
  query: "",
  cleanQuery: "",
  setActiveSection: (activeSection) => set({ activeSection }),
  setQuery: (query) => set({ query, cleanQuery: query.trim() }),
  clearQuery: () => set({ query: "", cleanQuery: "" }),
}));
