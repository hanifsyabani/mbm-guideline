import { getSearchTerms } from "@/lib/mbm-search";

type HighlightProps = {
  text: string;
  query: string;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function Highlight({ text, query }: HighlightProps) {
  const terms = getSearchTerms(query);

  if (terms.length === 0) {
    return <>{text}</>;
  }

  const parts = text.split(new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        terms.includes(part.toLowerCase()) ? (
          <mark key={`${part}-${index}`} className="bg-yellow-200 px-0.5 text-mbm-ink">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
