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
      <div className=" bg-mbm-red px-4 py-3">
        <p className="font-heading text-base font-bold uppercase leading-tight text-white sm:text-lg">
          {example.text}
        </p>
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
