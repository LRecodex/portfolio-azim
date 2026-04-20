import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import AnimatedBackground from "./components/background/AnimatedBackground";
import FloatingShapes from "./components/background/FloatingShapes";
import FreelancePage from "./pages/FreelancePage";
import HomePage from "./pages/HomePage";

export default function App() {
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const blobDrift = useTransform(scrollY, [0, 900], [0, -120]);
  const blobLift = useTransform(scrollY, [0, 900], [0, 80]);
  const shapeDrift = useTransform(scrollY, [0, 900], [0, -60]);

  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";

  const isFreelancePage = pathname === "/freelance";
  const motionLite = reduceMotion || isFreelancePage;

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <AnimatedBackground parallaxA={blobDrift} parallaxB={blobLift} motionLite={motionLite} />
      <FloatingShapes drift={shapeDrift} motionLite={motionLite} />
      {isFreelancePage ? <FreelancePage /> : <HomePage />}
    </div>
  );
}
