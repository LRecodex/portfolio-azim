import FreelanceSection from "../components/freelance/FreelanceSection";
import FreelanceModelShowcase from "../components/freelance/FreelanceModelShowcase";
import Nav from "../components/layout/Nav";

export default function FreelancePage() {
  return (
    <>
      <Nav variant="freelance" />

      <header className="relative">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-1">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/20 via-slate-900/70 to-emerald-500/15 ring-1 ring-white/15 p-5 sm:p-6">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Freelance Services
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Website & Web App Development
                </h1>
                <p className="mt-3 max-w-3xl text-slate-200/90">
                  Tell me what you need, your budget range, and target timeline.
                  I will help you choose the right package and provide a clear quote.
                </p>
              </div>
              <FreelanceModelShowcase />
            </div>
          </div>
        </div>
      </header>

      <FreelanceSection />

      <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 px-5 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()} Muhammad Fauzul Azim Bin Imran Hayat
          </div>
          <a
            href="/"
            className="text-xs text-slate-300 hover:text-white transition"
          >
            Back to main portfolio
          </a>
        </div>
      </footer>
    </>
  );
}
