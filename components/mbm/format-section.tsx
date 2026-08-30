import { MonitorPlay } from "lucide-react";
import type { FormatGroup, SpecialCase } from "@/types/mbm";
import { CgPreview } from "./cg-preview";
import { EmptyState } from "./empty-state";
import { Highlight } from "./highlight";
import { SectionHeading } from "./section-heading";
import { StatusBadge } from "./status-badge";

type FormatSectionProps = {
  groups: FormatGroup[];
  cases: SpecialCase[];
  query: string;
};

export function FormatSection({ groups, cases, query }: FormatSectionProps) {
  const hasResult = groups.length > 0 || cases.length > 0;

  return (
    <section id="format" className="border-y border-mbm-hairline bg-mbm-surface">
      <div className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          title="Format Penulisan"
          description="Setiap contoh menjaga pola Format umum, Contoh, lalu Breakdown komponen."
        />

        {!hasResult ? (
          <EmptyState query={query} />
        ) : (
          <>
            <div className="space-y-12">
              {groups.map((group) => (
                <article key={group.id} className="border-t border-mbm-hairline pt-8">
                  <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                    <div>
                      <h3 className="text-xl font-semibold text-mbm-ink">
                        <Highlight text={group.title} query={query} />
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-mbm-muted">
                        <Highlight text={group.description} query={query} />
                      </p>
                      <div className="mt-5 space-y-2">
                        {group.patterns.map((pattern) => (
                          <p
                            key={pattern}
                            className="border-l-2 border-mbm-red bg-white px-3 py-2 font-mono text-xs leading-5 text-mbm-ink"
                          >
                            <Highlight text={pattern} query={query} />
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {group.examples.map((example) => (
                        <CgPreview key={`${group.id}-${example.label}`} example={example} query={query} />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {cases.length > 0 && (
              <div className="mt-14">
                <h3 className="mb-5 flex items-center gap-2 text-xl font-semibold">
                  <MonitorPlay className="size-5 text-mbm-red" />
                  Format Lainnya
                </h3>
                <div className="grid gap-4 lg:grid-cols-3">
                  {cases.map((item) => (
                    <article key={item.title} className="border border-mbm-hairline bg-white p-4">
                      <h4 className="text-base font-semibold text-mbm-ink">
                        <Highlight text={item.title} query={query} />
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-mbm-muted">
                        <Highlight text={item.description} query={query} />
                      </p>
                      <div className="mt-4 space-y-3">
                        {item.items.map((caseItem) => (
                          <div key={`${item.title}-${caseItem.text}`} className="border border-mbm-hairline p-3">
                            <StatusBadge status={caseItem.status} />
                            <p className="mt-3 font-mono text-xs leading-5 text-mbm-ink">
                              <Highlight text={caseItem.text} query={query} />
                            </p>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
