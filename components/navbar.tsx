"use client";

import Image from "next/image";
import { navItems } from "@/constants/mbm-content";
import { useMbmGuideStore } from "@/stores/mbm-guide-store";

export default function Navbar() {
  const activeSection = useMbmGuideStore((state) => state.activeSection);

  return (
    <header className="sticky top-0 z-50 border-b border-mbm-hairline bg-white/95 backdrop-blur">
      <div className=" flex flex-col gap-3 py-3 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mbm-red"
        >
          <Image src="/logo.png" alt="MBM" width={32} height={32} priority className="h-8 w-8 object-contain" />
          <span>
            <span className="font-heading block text-lg font-bold uppercase leading-none">
              MBM Guideline
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-7 overflow-x-auto pb-1 text-sm font-semibold text-mbm-muted lg:pb-0">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={`shrink-0 border-b-2 py-2 uppercase transition hover:text-mbm-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mbm-red ${
                activeSection === item.id ? "border-mbm-red text-mbm-ink" : "border-transparent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

    
      </div>
    </header>
  );
}
