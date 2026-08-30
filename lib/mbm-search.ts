import type { FormatGroup } from "@/types/mbm";

export function getSearchTerms(query: string) {
  return Array.from(new Set(query.toLowerCase().split(/\s+/).filter(Boolean)));
}

export function searchableText(value: unknown): string {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(searchableText).join(" ");
  if (value && typeof value === "object") return Object.values(value).map(searchableText).join(" ");
  return "";
}

export function matchesSearch(value: unknown, query: string) {
  const terms = getSearchTerms(query);
  const text = searchableText(value).toLowerCase();
  return terms.length === 0 || terms.every((term) => text.includes(term));
}

export function filterFormatGroup(group: FormatGroup, query: string): FormatGroup | null {
  if (!query) return group;

  const groupMatch = matchesSearch(
    { title: group.title, description: group.description, patterns: group.patterns },
    query,
  );
  const examples = group.examples.filter((example) => groupMatch || matchesSearch(example, query));

  if (!groupMatch && examples.length === 0) return null;
  return { ...group, examples };
}
