import { ArrowUp } from "lucide-react";

export function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      className="fixed bottom-4 right-4 z-40 inline-flex size-11 items-center justify-center border border-mbm-red bg-white text-mbm-red shadow-[0_10px_24px_rgba(20,20,20,0.14)] transition hover:bg-mbm-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mbm-red"
    >
      <ArrowUp className="size-5" />
    </a>
  );
}
