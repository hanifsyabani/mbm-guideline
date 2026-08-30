import { Check, Info, X } from "lucide-react";
import type { CompareItem } from "@/types/mbm";

type StatusBadgeProps = {
  status: CompareItem["status"];
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const isRight = status === "Benar";
  const isWrong = status === "Salah";
  const Icon = isRight ? Check : isWrong ? X : Info;

  return (
    <span
      className={`inline-flex h-7 items-center gap-1 px-2 text-xs font-bold uppercase text-white ${
        isRight ? "bg-mbm-ok" : isWrong ? "bg-mbm-red" : "bg-mbm-ink"
      }`}
    >
      <Icon className="size-3.5" />
      {status}
    </span>
  );
}
