import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

type NavProps = {
  variant?: "home" | "freelance" | "estimator";
};

export default function Nav({ variant = "home" }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const items =
    variant === "freelance" || variant === "estimator"
      ? [
          { href: "/", label: "Home" },
          { href: "/freelance", label: "Freelance" },
          { href: "/quote-estimator", label: "Estimator" },
          { href: "/#contact", label: "Contact" },
        ]
      : [
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#projects", label: "Projects" },
          { href: "#education", label: "Education" },
          { href: "#certificates", label: "Certificates" },
          { href: "/freelance", label: "Freelance" },
          { href: "/quote-estimator", label: "Estimator" },
          { href: "#contact", label: "Contact" },
        ];

  const sideHref = variant === "home" ? "/freelance" : "/";
  const sideLabel = variant === "home" ? "Freelance Rates" : "Back To Portfolio";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
            <img
              src="/avatar.png"
              alt="Muhammad Fauzul Azim"
              className="h-8 w-8 rounded-xl object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Muhammad Fauzul Azim</div>
            <div className="text-[11px] text-slate-400 group-hover:text-slate-300 transition">
              Software Engineer
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="px-3 py-2 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              {it.label}
            </a>
          ))}
        </div>

          <div className="flex items-center gap-2">
          <a
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            href={sideHref}
          >
            <ArrowRight className="h-4 w-4" />
            {sideLabel}
          </a>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 p-2.5 text-slate-200 hover:bg-white/10 transition"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="md:hidden mt-3 rounded-2xl bg-slate-900/80 ring-1 ring-white/10 p-2 space-y-1">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="block px-3 py-2 rounded-xl text-sm text-slate-200 hover:text-white hover:bg-white/5 transition"
                onClick={() => setMobileOpen(false)}
              >
                {it.label}
              </a>
            ))}
            <a
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-slate-100 hover:bg-white/10 transition"
              href={sideHref}
              onClick={() => setMobileOpen(false)}
            >
              <ArrowRight className="h-4 w-4" />
              {sideLabel}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
