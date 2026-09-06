import type { GlossaryTerm } from "@/types/mbm";
import { EmptyState } from "./empty-state";
import { Highlight } from "./highlight";
import { SectionHeading } from "./section-heading";

type GlossarySectionProps = {
  id?: string;
  items: GlossaryTerm[];
  query: string;
  title?: string;
};

export function GlossarySection({ id = "istilah", items, query, title = "Daftar Istilah" }: GlossarySectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        title={title}
      />

      {items.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.term} className="border border-mbm-hairline bg-mbm-surface p-4">
              <h3 className="font-heading text-3xl font-bold uppercase text-mbm-red">
                <Highlight text={item.term} query={query} />
              </h3>
              <p className="mt-2 text-sm leading-6 text-mbm-ink">
                <Highlight text={item.definition} query={query} />
              </p>
              {item.format && (
                <p className="mt-3 whitespace-pre-line font-mono text-xs leading-5 text-mbm-muted">
                  <Highlight text={item.format} query={query} />
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
