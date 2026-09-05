import { Download, FileText } from "lucide-react";



export function ReferenceSection() {
  return (
    <section id="referensi" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24">
     

  
      <div className="mt-10 flex flex-col gap-5 border border-mbm-hairline bg-mbm-surface p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-mbm-ink">
            <FileText className="size-5 text-mbm-red" />
            Dokumen Guideline Asli
          </h3>
          
        </div>
        <a
          href="/download-guideline"
          className="inline-flex h-11 items-center justify-center gap-2 border border-mbm-red px-4 text-sm font-bold text-mbm-red transition hover:bg-mbm-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mbm-red"
        >
          <Download className="size-4" />
          Unduh
        </a>
      </div>
    </section>
  );
}
