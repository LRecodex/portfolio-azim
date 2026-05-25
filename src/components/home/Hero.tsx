import { motion } from "framer-motion";
import { FileText, Github, Layers, Linkedin, MapPin } from "lucide-react";
import GlowBlobs from "../background/GlowBlobs";
import Button from "../ui/Button";
import Pill from "../ui/Pill";

export default function Hero() {
  return (
    <header className="relative">
      <GlowBlobs />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for software engineering opportunities
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] text-white">
              Muhammad Fauzul Azim
            </h1>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.1]">
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-emerald-200">
                fast, reliable
              </span>{" "}
              web & mobile products.
            </h2>

            <p className="mt-4 text-slate-200/90 max-w-2xl">
              Full-stack Software Engineer experienced in Laravel/PHP, React, Node.js, NestJS, and Flutter, shipping production modules, REST APIs, dashboards, PDF/QR automation, and Dockerized deployments on Linux.
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
              <Button href="https://github.com/LRecodex">
                <Github className="h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="ghost"
                href="https://www.linkedin.com/in/muhammad-fauzul-azim-imran-hayat-3263602a1"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
              <Button variant="ghost" href="/resume-cover-letter">
                <FileText className="h-4 w-4" /> Resume & Cover Letter
              </Button>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-white/5 ring-1 ring-white/10 p-4 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)]">
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
        </div>
      </div>
    </header>
  );
}
