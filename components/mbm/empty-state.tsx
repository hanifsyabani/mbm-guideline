type EmptyStateProps = {
  query: string;
};

export function EmptyState({ query }: EmptyStateProps) {
  return (
    <div className="border border-dashed border-mbm-hairline bg-white p-6 text-sm leading-6 text-mbm-muted">
      Tidak ada hasil untuk <span className="font-semibold text-mbm-ink">&quot;{query}&quot;</span>.
    </div>
  );
}
