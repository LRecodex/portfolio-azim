import { motion, type MotionValue } from "framer-motion";

type FloatingShapesProps = {
  drift?: MotionValue<number> | number | string;
  motionLite?: boolean;
};

export default function FloatingShapes({ drift, motionLite = false }: FloatingShapesProps) {
  if (motionLite) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[18%] h-32 w-32 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl"
        style={{ y: drift }}
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[10%] top-[26%] h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        style={{ y: drift }}
        animate={{ y: [0, 14, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[18%] bottom-[16%] h-20 w-20 rounded-[28px] border border-white/15 bg-gradient-to-br from-white/10 to-white/5"
        style={{ y: drift }}
        animate={{ x: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[20%] bottom-[12%] h-28 w-28 rounded-full border border-white/10 bg-gradient-to-br from-sky-500/10 to-emerald-500/10"
        style={{ y: drift }}
        animate={{ x: [0, -14, 0], y: [0, 10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
