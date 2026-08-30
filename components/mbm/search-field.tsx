import { Search } from "lucide-react";

type SearchFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  compact?: boolean;
};

export function SearchField({ value, onChange, placeholder, compact }: SearchFieldProps) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Cari guideline MBM</span>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mbm-muted" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? "Cari istilah / format..."}
        className={`w-full border border-mbm-hairline bg-white pl-10 pr-3 text-mbm-ink outline-none transition focus:border-mbm-red focus:ring-2 focus:ring-mbm-red/20 ${
          compact ? "h-9 text-sm" : "h-12 text-base"
        }`}
      />
    </label>
  );
}
