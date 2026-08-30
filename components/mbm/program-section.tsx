import type { ProgramBlock } from "@/types/mbm";
import { EmptyState } from "./empty-state";
import { Highlight } from "./highlight";
import { SectionHeading } from "./section-heading";

type ProgramSectionProps = {
  items: ProgramBlock[];
  query: string;
};

export function ProgramSection({ items, query }: ProgramSectionProps) {
  return (
    <section id="kepala" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        title="Kepala MBM & Struktur Program"
        description="Rangka kepala file dan bagian-bagian utama dalam susunan program MBM."
      />

      {items.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((block) => (
            <article key={block.title} className="border border-mbm-hairline bg-white p-5">
              <h3 className="text-lg font-semibold text-mbm-ink">
                <Highlight text={block.title} query={query} />
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-mbm-muted">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 bg-mbm-red" />
                    <span>
                      <Highlight text={point} query={query} />
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
