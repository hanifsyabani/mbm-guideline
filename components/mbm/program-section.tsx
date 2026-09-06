import Image from "next/image";
import type { ProgramBlock, ProgramPoint } from "@/types/mbm";
import { EmptyState } from "./empty-state";
import { Highlight } from "./highlight";
import { SectionHeading } from "./section-heading";

type ProgramSectionProps = {
  items: ProgramBlock[];
  query: string;
};

function getPointText(point: ProgramPoint) {
  return typeof point === "string" ? point : point.text;
}

function ProgramPointItem({ point, query, depth = 0 }: { point: ProgramPoint; query: string; depth?: number }) {
  const text = getPointText(point);
  const children = typeof point === "string" ? [] : point.children ?? [];
  const markerClassName =
    depth === 0 ? "mt-2 size-1.5 shrink-0 bg-mbm-red" : "mt-2 size-1 shrink-0 bg-mbm-ink/35";

  return (
    <li>
      <div className="flex gap-3">
        <span className={markerClassName} />
        <span>
          <Highlight text={text} query={query} />
        </span>
      </div>
      {children.length > 0 && (
        <ul className="ml-6 mt-2 space-y-2 text-mbm-muted">
          {children.map((child, index) => (
            <ProgramPointItem key={`${getPointText(child)}-${index}`} point={child} query={query} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function ProgramSection({ items, query }: ProgramSectionProps) {
  return (
    <section id="kepala" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        title="Kepala MBM & Struktur Program"
      />

      {items.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className="grid gap-4">
          {items.map((block) => {
            const images = block.images ?? [];

            return (
              <article key={block.title} className="border border-mbm-hairline bg-white p-5">
                <h3 className="text-lg font-semibold text-mbm-ink">
                  <Highlight text={block.title} query={query} />
                </h3>

                {images.length > 0 && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {images.map((image, index) => (
                      <div
                        key={`${block.title}-${image}-${index}`}
                        className={images.length === 1 ? "sm:col-span-2" : undefined}
                      >
                        <div className="relative aspect-video overflow-hidden border border-mbm-hairline bg-mbm-surface">
                          <Image
                            src={image}
                            alt={`Contoh ${block.title} ${index + 1}`}
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="mt-4 space-y-3 text-sm leading-6 text-mbm-muted">
                  {block.points.map((point, index) => (
                    <ProgramPointItem key={`${getPointText(point)}-${index}`} point={point} query={query} />
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
