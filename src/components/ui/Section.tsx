import type { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Stagger from "./Stagger";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, title, icon, subtitle, children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="relative scroll-mt-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10"
      >
        <div className="flex items-end justify-between gap-6 mb-7">
          <div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                {icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
            </div>
            {subtitle ? <p className="mt-2 text-slate-300/90 max-w-2xl">{subtitle}</p> : null}
          </div>
        </div>

        <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden">
          <motion.div
            aria-hidden
            className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-sky-300/80 to-transparent"
            animate={reduceMotion ? { x: "-30%" } : { x: ["-30%", "350%"] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 11, repeat: Infinity, ease: "linear" }
            }
          />
          <div className="p-5 sm:p-7">
            <Stagger active={isInView}>{children}</Stagger>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
