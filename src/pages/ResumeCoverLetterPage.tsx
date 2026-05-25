import { Download, FileText } from "lucide-react";
import Nav from "../components/layout/Nav";
import Button from "../components/ui/Button";

export default function ResumeCoverLetterPage() {
  return (
    <>
      <Nav variant="estimator" />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/15 via-slate-900/75 to-emerald-500/15 ring-1 ring-white/15 p-6 sm:p-8">
          <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
              Documents
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Resume & Cover Letter
            </h1>
            <p className="mt-3 text-slate-200/90 max-w-2xl">
              Download the latest versions below.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/docs/resume-coverltr/Resume_Muhammad_Fauzul_Azim_Bin_Imran_Hayat.pdf">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
              <Button
                variant="ghost"
                href="/docs/resume-coverltr/Muhammad_Fauzul_Azim_Cover_Letter.pdf"
              >
                <FileText className="h-4 w-4" /> Download Cover Letter
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
