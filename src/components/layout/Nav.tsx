import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useActiveSection } from "../../lib/useActiveSection";

type NavProps = {
  variant?: "home" | "freelance" | "estimator";
};

const HOME_SECTION_IDS = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certificates",
  "contact",
];

export default function Nav({ variant = "home" }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(variant === "home" ? HOME_SECTION_IDS : []);

  const items =
    variant === "freelance"
      ? [
          { href: "/", label: "Home" },
          { href: "/freelance", label: "Freelance" },
          { href: "/quote-estimator", label: "Estimator" },
          { href: "/#contact", label: "Contact" },
        ]
      : variant === "estimator"
      ? [
          { href: "/", label: "Home" },
          { href: "/freelance", label: "Freelance" },
          { href: "/#contact", label: "Contact" },
        ]
      : [
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#projects", label: "Projects" },
          { href: "#education", label: "Education" },
          { href: "#certificates", label: "Certificates" },
          { href: "#contact", label: "Contact" },
        ];

  const sideHref = variant === "home" ? "/freelance" : "/";
  const sideLabel = variant === "home" ? "Services" : "Back To Portfolio";
  const showSideCta = variant !== "home";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-emerald-400 flex items-center justify-center ring-1 ring-white/15 shadow-[0_4px_16px_-4px_rgba(99,102,241,0.7)] transition-transform group-hover:scale-105">
            <span className="font-display text-sm font-bold tracking-tight text-slate-950">
              FA
            </span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Muhammad Fauzul Azim</div>
            <div className="text-[11px] text-slate-400 group-hover:text-slate-300 transition">
              Software Engineer
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {items.map((it) => {
            const isActive =
              variant === "home" && it.href === `#${active}`;
            return (
              <a
                key={it.href}
                href={it.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-3 py-2 rounded-xl text-sm transition ${
                  isActive
                    ? "text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl bg-white/10 ring-1 ring-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{it.label}</span>
              </a>
            );
          })}
        </div>

          <div className="flex items-center gap-2">
          {showSideCta ? (
            <a
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
              href={sideHref}
            >
              <ArrowRight className="h-4 w-4" />
              {sideLabel}
            </a>
          ) : null}
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
            {showSideCta ? (
              <a
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-slate-100 hover:bg-white/10 transition"
                href={sideHref}
                onClick={() => setMobileOpen(false)}
              >
                <ArrowRight className="h-4 w-4" />
                {sideLabel}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
