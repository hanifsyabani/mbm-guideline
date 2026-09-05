import type { RuleItem } from "@/types/mbm";
import { EmptyState } from "./empty-state";
import { Highlight } from "./highlight";
import { SectionHeading } from "./section-heading";
import { StatusBadge } from "./status-badge";

type RulesSectionProps = {
  items: RuleItem[];
  query: string;
};

export function RulesSection({ items, query }: RulesSectionProps) {
  return (
    <section id="rules" className="border-y border-mbm-hairline bg-mbm-surface">
      <div className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          title="Catatan Penting"
        />

        {items.length === 0 ? (
          <EmptyState query={query} />
        ) : (
          <div className="grid gap-4 lg:grid-cols-2">
            {items.map((rule) => (
              <article key={rule.title} className="border border-mbm-hairline bg-white p-5">
                <h3 className="text-lg font-semibold text-mbm-ink">
                  <Highlight text={rule.title} query={query} />
                </h3>
                {rule.points && (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-mbm-muted">
                    {rule.points.map((point) => (
                      <li key={point}>
                        <Highlight text={point} query={query} />
                      </li>
                    ))}
                  </ul>
                )}

                {(rule.wrong || rule.right) && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {rule.wrong && (
                      <div className="border border-mbm-red/30 bg-red-50 p-3">
                        <StatusBadge status="Salah" />
                        <p className="mt-3 font-mono text-xs leading-5 text-mbm-ink">
                          <Highlight text={rule.wrong} query={query} />
                        </p>
                      </div>
                    )}
                    {rule.right && (
                      <div className="border border-mbm-ok/30 bg-green-50 p-3">
                        <StatusBadge status="Benar" />
                        <p className="mt-3 font-mono text-xs leading-5 text-mbm-ink">
                          <Highlight text={rule.right} query={query} />
                        </p>
                      </div>
                    )}
                    {rule.right2 && (
                      <div className="border border-mbm-ok/30 bg-green-50 p-3">
                        <StatusBadge status="Benar" />
                        <p className="mt-3 font-mono text-xs leading-5 text-mbm-ink">
                          <Highlight text={rule.right2} query={query} />
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
