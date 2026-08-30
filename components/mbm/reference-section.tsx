import Image from "next/image";
import { Download, FileText } from "lucide-react";
import type { SourceShot } from "@/types/mbm";
import { Highlight } from "./highlight";
import { SectionHeading } from "./section-heading";

type ReferenceSectionProps = {
  query: string;
  shots: SourceShot[];
};

export function ReferenceSection({ query, shots }: ReferenceSectionProps) {
  return (
    <section id="referensi" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        title="Pencarian & Referensi Cepat"
        description="Ringkasan visual dan file sumber untuk pengecekan lanjutan."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {shots.map((shot) => (
          <article key={shot.src} className="border border-mbm-hairline bg-white p-3">
            <div className="relative aspect-video overflow-hidden bg-mbm-surface">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 350px, 100vw"
                className="object-contain"
              />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-mbm-ink">
              <Highlight text={shot.title} query={query} />
            </h3>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-5 border border-mbm-hairline bg-mbm-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-mbm-ink">
            <FileText className="size-5 text-mbm-red" />
            Dokumen guideline asli
          </h3>
          <p className="mt-2 text-sm leading-6 text-mbm-muted">
            File Word sumber tetap tersedia sebagai cadangan referensi.
          </p>
        </div>
        <a
          href="/download-guideline"
          className="inline-flex h-11 items-center justify-center gap-2 border border-mbm-red px-4 text-sm font-bold text-mbm-red transition hover:bg-mbm-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mbm-red"
        >
          <Download className="size-4" />
          Unduh Word
        </a>
      </div>
    </section>
  );
}
