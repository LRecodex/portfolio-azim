import { motion, type MotionValue } from "framer-motion";

type AnimatedBackgroundProps = {
  parallaxA?: MotionValue<number> | number | string;
  parallaxB?: MotionValue<number> | number | string;
  motionLite?: boolean;
};

export default function AnimatedBackground({
  parallaxA,
  parallaxB,
  motionLite = false,
}: AnimatedBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.9), transparent 60%)",
          y: parallaxA,
        }}
        animate={motionLite ? { x: [0, -8, 0], y: [0, 6, 0] } : { x: [0, -30, 10, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: motionLite ? 24 : 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-44 -left-32 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(236,72,153,0.8), transparent 60%)",
          y: parallaxB,
        }}
        animate={motionLite ? { x: [0, 10, 0], y: [0, -6, 0] } : { x: [0, 25, -20, 0], y: [0, -10, 25, 0] }}
        transition={{ duration: motionLite ? 26 : 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(34,197,94,0.7), transparent 60%)",
        }}
        animate={motionLite ? { scale: 1, rotate: 0 } : { scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: motionLite ? 0 : Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 40%, rgba(59,130,246,0.25), rgba(16,185,129,0.18), rgba(236,72,153,0.2), rgba(59,130,246,0.25))",
          filter: "blur(40px)",
        }}
        animate={motionLite ? { rotate: 0, scale: 1 } : { rotate: [0, 12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: motionLite ? 0 : Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.45) 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
