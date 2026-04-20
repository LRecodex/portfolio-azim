import { ArrowRight } from "lucide-react";

type NavProps = {
  variant?: "home" | "freelance";
};

export default function Nav({ variant = "home" }: NavProps) {
  const items =
    variant === "freelance"
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
          { href: "/freelance", label: "Freelance" },
          { href: "#contact", label: "Contact" },
        ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
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
            href={variant === "freelance" ? "/" : "/freelance"}
          >
            <ArrowRight className="h-4 w-4" />
            {variant === "freelance" ? "Back To Portfolio" : "Freelance Rates"}
          </a>
        </div>
      </div>
    </div>
  );
}
