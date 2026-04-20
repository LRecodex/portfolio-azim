import type { IconType } from "react-icons";
import { cn } from "../../lib/cn";

type SkillPillProps = {
  label: string;
  meta?: { icon: IconType; tint: string; bg: string };
};

export default function SkillPill({ label, meta }: SkillPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
      {meta ? (
        <span
          className={cn(
            "inline-flex h-5 w-5 items-center justify-center rounded-full",
            meta.bg,
          )}
        >
          <meta.icon className={cn("h-3.5 w-3.5", meta.tint)} />
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      )}
      {label}
    </span>
  );
}
