import Image from "next/image";
import type { FormatExample } from "@/types/mbm";
import { Highlight } from "./highlight";

type CgPreviewProps = {
  example: FormatExample;
  query: string;
};

export function CgPreview({ example, query }: CgPreviewProps) {
  return (
    <article className="group border border-mbm-hairline bg-white p-3 transition duration-200 hover:shadow-[0_12px_30px_rgba(20,20,20,0.08)]">
      <div className="relative aspect-video overflow-hidden bg-mbm-ink">
        {example.image ? (
          <Image
            src={example.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover opacity-60"
          />
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#141414_0_22%,#222_22%_78%,#141414_78%)]" />
        )}
        <div className="absolute left-0 top-0 bg-black/75 px-3 py-1 font-mono text-[11px] uppercase text-white">
          {example.label}
        </div>
        <div className="absolute inset-x-0 bottom-0 min-h-16 bg-mbm-red px-4 py-3">
          <p className="font-heading text-base font-bold uppercase leading-tight text-white sm:text-lg">
            {example.text}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <p className="font-mono text-sm leading-6 text-mbm-ink">
          <Highlight text={example.text} query={query} />
        </p>
        {example.note && <p className="text-sm leading-6 text-mbm-muted">{example.note}</p>}
        <div className="grid gap-2 sm:grid-cols-2">
          {example.breakdown.map((part) => (
            <div key={`${example.label}-${part.value}`} className="border-l-2 border-mbm-red pl-3">
              <p className="font-mono text-sm text-mbm-ink">
                <Highlight text={part.value} query={query} />
              </p>
              <p className="text-xs font-medium uppercase text-mbm-muted">{part.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
