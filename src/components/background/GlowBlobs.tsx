import { motion } from "framer-motion";

export default function GlowBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.9), transparent 60%)",
        }}
        animate={{ x: [0, 30, -10, 0], y: [0, 15, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-16 -right-24 h-96 w-96 rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(168,85,247,0.9), transparent 60%)",
        }}
        animate={{ x: [0, -25, 10, 0], y: [0, 10, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-140px] left-[20%] h-[420px] w-[420px] rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(34,197,94,0.9), transparent 60%)",
        }}
        animate={{ x: [0, 20, -15, 0], y: [0, -10, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
    </div>
  );
}
