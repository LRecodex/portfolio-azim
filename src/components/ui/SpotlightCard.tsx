import type { ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  lift?: boolean;
};

export default function SpotlightCard({
  children,
  className,
  lift = true,
}: SpotlightCardProps) {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={lift ? { y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={cn(
        "spotlight-card rounded-3xl bg-slate-950/40 ring-1 ring-white/10 transition-colors duration-300 hover:ring-white/25",
        className,
      )}
    >
      <div className="relative z-[1] h-full">{children}</div>
    </motion.div>
  );
}
