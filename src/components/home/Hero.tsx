import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Layers,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import GlowBlobs from "../background/GlowBlobs";
import Button from "../ui/Button";
import Pill from "../ui/Pill";
import RotatingText from "../ui/RotatingText";

const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "15+", label: "Technologies" },
];

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Specialist",
  "API & Systems Builder",
  "DevOps Practitioner",
];

export default function Hero() {
  return (
    <header className="relative">
      <GlowBlobs />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-xs text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for software engineering opportunities
            </div>

            <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.02] text-white">
              Muhammad Fauzul Azim
            </h1>

            <div className="mt-4 flex items-center gap-2 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-200">
              <Sparkles className="h-6 w-6 text-indigo-300" />
              <RotatingText words={roles} className="text-gradient" />
            </div>

            <p className="mt-5 text-base sm:text-lg text-slate-200/90 max-w-2xl leading-relaxed">
              I build{" "}
              <span className="font-semibold text-white">fast, reliable</span>{" "}
              web &amp; mobile products — production modules, REST APIs,
              dashboards, PDF/QR automation, and Dockerized deployments on Linux.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Pill>Laravel</Pill>
              <Pill>React + Vite</Pill>
              <Pill>Node.js</Pill>
              <Pill>NestJS</Pill>
              <Pill>Flutter</Pill>
              <Pill>Docker</Pill>
              <Pill>MySQL / PostgreSQL</Pill>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#projects">
                <ArrowDown className="h-4 w-4" /> View my work
              </Button>
              <Button variant="ghost" href="/resume-cover-letter">
                <Download className="h-4 w-4" /> Resume
              </Button>
              <Button variant="ghost" href="https://github.com/LRecodex">
                <Github className="h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="ghost"
                href="https://www.linkedin.com/in/muhammad-fauzul-azim-imran-hayat-3263602a1"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
            </div>

            <div className="mt-9 grid max-w-md grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-3 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white font-display">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] sm:text-xs text-slate-400">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Animated conic ring */}
              <div className="absolute -inset-[2px] rounded-[2.1rem] ring-conic opacity-60 blur-[2px]" />

              <div className="relative rounded-[2rem] bg-slate-950/80 ring-1 ring-white/10 p-4 shadow-[0_30px_120px_-60px_rgba(99,102,241,0.8)]">
                <div className="relative rounded-[1.6rem] overflow-hidden bg-slate-900 ring-1 ring-white/10">
                  <img
                    src="/avatar.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-35"
                  />

                  <div className="relative w-full h-[360px] flex items-center justify-center">
                    <img
                      src="/avatar.png"
                      alt="Muhammad Fauzul Azim"
                      fetchPriority="high"
                      decoding="async"
                      className="max-h-full max-w-full object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-white/5" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="mt-1 flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-slate-300" />
                      Kajang, Selangor
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                    <div className="text-xs text-slate-400">Focus</div>
                    <div className="mt-1 flex items-center gap-2 text-sm">
                      <Layers className="h-4 w-4 text-slate-300" />
                      Full-stack + DevOps
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
