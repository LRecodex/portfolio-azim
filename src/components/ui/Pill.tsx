import type { ReactNode } from "react";

export default function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}
