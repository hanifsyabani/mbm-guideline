"use client";

import Image from "next/image";
import { useMbmGuideStore } from "@/stores/mbm-guide-store";


export function HeroSection() {

  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-mbm-hairline">
      <Image
        src="/mbm-assets/banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative mx-auto flex min-h-[72svh] max-w-4xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6 lg:py-20">
        <div className="w-full max-w-3xl">
          <p className="mb-4 inline-flex bg-mbm-red px-3 py-1 font-heading text-sm font-bold uppercase text-white">
            On Air Reference
          </p>
          <h1 className="font-heading text-6xl max-w-2xl mx-auto font-bold uppercase leading-none text-white lg:text-7xl">
            Minute By Minute <span className="text-red-500">Guideline</span>
          </h1>

       
        </div>
      </div>
    </section>
  );
}
