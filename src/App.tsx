import React, { useMemo, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Sparkles,
  Layers,
} from "lucide-react";

type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

type Project = {
  name: string;
  period?: string;
  description: string;
  tags: string[];
  links?: Array<{
    label: string;
    href: string;
    kind?: "repo" | "demo" | "release";
  }>;
};

type Education = {
  school: string;
  program: string;
  period: string;
};

type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  file?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function Section({
  id,
  title,
  icon,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px", once: true });

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
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h2>
            </div>
            {subtitle ? (
              <p className="mt-2 text-slate-300/90 max-w-2xl">{subtitle}</p>
            ) : null}
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden">
          <div className="p-5 sm:p-7">
            <Stagger active={isInView}>{children}</Stagger>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stagger({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  const items = React.Children.toArray(children);
  return (
    <motion.div
      initial="hidden"
      animate={active ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: 0.08 },
        },
      }}
      className="space-y-4"
    >
      {items.map((child, index) => (
        <motion.div
          key={`stagger-${index}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-white text-slate-950 hover:bg-slate-200"
      : "bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-white/10";

  return (
    <a
      className={cn(base, styles)}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function Nav() {
  const items = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-slate-200" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              Muhammad Fauzul Azim
            </div>
            <div className="text-[11px] text-slate-400 group-hover:text-slate-300 transition">
              Software Engineer
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="px-3 py-2 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              {it.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            href="#contact"
          >
            <ArrowRight className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

function GlowBlobs() {
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

function AnimatedBackground({
  parallaxA,
  parallaxB,
}: {
  parallaxA?: MotionValue<number> | number | string;
  parallaxB?: MotionValue<number> | number | string;
}) {
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
        animate={{ x: [0, -30, 10, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-44 -left-32 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(236,72,153,0.8), transparent 60%)",
          y: parallaxB,
        }}
        animate={{ x: [0, 25, -20, 0], y: [0, -10, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(34,197,94,0.7), transparent 60%)",
        }}
        animate={{ scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 40%, rgba(59,130,246,0.25), rgba(16,185,129,0.18), rgba(236,72,153,0.2), rgba(59,130,246,0.25))",
          filter: "blur(40px)",
        }}
        animate={{ rotate: [0, 12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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

function FloatingShapes({
  drift,
}: {
  drift?: MotionValue<number> | number | string;
}) {
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

function Hero() {
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

            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
              I build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-emerald-200">
                fast, reliable
              </span>{" "}
              web & mobile products.
            </h1>

            <p className="mt-4 text-slate-200/90 max-w-2xl">
              Full-stack Software Developer experienced in Laravel/PHP, React
              (Vite), Node.js, and Flutter—shipping production modules, REST
              APIs, dashboards, PDF/QR automation, and Dockerized deployments on
              Linux.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Pill>Laravel</Pill>
              <Pill>React + Vite</Pill>
              <Pill>Node.js</Pill>
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

              <Button
                variant="ghost"
                href="/docs/certificate/Resume_Muhammad_Fauzul_Azim_Bin_Imran_Hayat.pdf"
              >
                <Download className="h-4 w-4" /> Resume
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
                {/* Blurred background fill (makes tall images look premium) */}
                <img
                  src="/avatar.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-35"
                />

                {/* Main portrait - no awkward cropping */}
                <div className="relative w-full h-[360px] flex items-center justify-center">
                  <img
                    src="/avatar.png"
                    alt="Muhammad Fauzul Azim"
                    className="max-h-full max-w-full object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
                  />
                </div>

                {/* Subtle glossy overlay */}
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

export default function App() {
  const { scrollY } = useScroll();
  const blobDrift = useTransform(scrollY, [0, 900], [0, -120]);
  const blobLift = useTransform(scrollY, [0, 900], [0, 80]);
  const shapeDrift = useTransform(scrollY, [0, 900], [0, -60]);

  const skills = useMemo(
    () => [
      {
        title: "Languages",
        items: ["Java", "PHP", "JavaScript", "TypeScript", "Dart", "Python"],
      },
      {
        title: "Frameworks",
        items: [
          "Laravel",
          "React",
          "Node.js (Express)",
          "Flutter",
          "Django",
          "Flask",
        ],
      },
      {
        title: "Data",
        items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
      },
      {
        title: "DevOps",
        items: [
          "Docker",
          "Kubernetes",
          "OpenShift",
          "Linux CLI",
          "Apache",
          "Nginx",
        ],
      },
      { title: "Tooling", items: ["GitHub", "GitLab", "Postman"] },
    ],
    [],
  );

  const experience: Experience[] = [
    {
      company: "Bytes Security Malaysia PLT",
      role: "Software Engineer",
      period: "Feb 2025 – Present",
      bullets: [
        "Contributed to secure web application development using Laravel and JavaScript frameworks.",
        "Optimized backend processes and database queries to improve efficiency and code quality.",
        "Collaborated with cross-functional teams to troubleshoot and deliver fixes/features on time.",
      ],
    },
    {
      company: "MSC Management Service Sdn Bhd",
      role: "Intern Full Stack Developer",
      period: "Dec 2024 – Jan 2025",
      bullets: [
        "Developed and maintained web/mobile apps using Laravel, Node.js, and Flutter.",
        "Automated workflows for counseling session registration and case management (+30% efficiency).",
        "Designed REST APIs and improved DB performance (reduced query time up to ~40%).",
      ],
    },
    {
      company: "Bytes Security Malaysia PLT",
      role: "Part-time Junior Software Engineer",
      period: "Dec 2024 – Jan 2025",
      bullets: [
        "Implemented bug fixes and small features across Laravel and JavaScript codebases.",
        "Wrote unit/feature tests and refactored queries to reduce load and simplify maintenance.",
      ],
    },
  ];

  const projects: Project[] = [
    {
      name: "BMS Fastentix",
      period: "Dec 2024 – Present",
      description:
        "Multi-tenant business platform modules: dashboards, payments, PDF/QR generation, and reliability improvements.",
      tags: ["Laravel", "JS", "MySQL", "Queues", "Docker", "Linux", "Supervisor", "Postman"],
    },
    {
      name: "Remote Mouse",
      period: "Nov 2025",
      description:
        "Cross-platform remote mouse system consisting of a Flutter mobile app and a desktop application. The mobile app acts as a touchpad, sending real-time input events to the desktop client via WebSocket for cursor movement and control.",
      tags: ["Flutter", "Python 3", "WebSocket", "Desktop App", "Mobile App"],
      links: [
        {
          label: "Server (Python)",
          href: "https://github.com/LRecodex/phone_remote_server",
          kind: "repo",
        },
        {
          label: "Mobile App (Flutter)",
          href: "https://github.com/LRecodex/phone_remote",
          kind: "repo",
        },
        {
          label: "Releases",
          href: "https://github.com/LRecodex/phone-remote-releases",
          kind: "release",
        },
      ],
    },
    {
      name: "LRecodexTerm",
      period: "Jan 2025",
      description:
        "Linux terminal application similar to MobaXterm, providing SSH and SFTP capabilities with a graphical interface. Built to simplify remote server access and file transfer in a single unified tool.",
      tags: ["C#", "GTK", "SSH", "SFTP", "Linux", "JSON"],
      links: [
        {
          label: "GitHub Repo",
          href: "https://github.com/LRecodex/linux-ssh-client",
          kind: "repo",
        },
      ],
    },
    {
      name: "LRecodexKatapat",
      period: "Jan 2025",
      description:
        "Multiplayer Wordle-style word game built as a web application. Supports real-time multiplayer gameplay and interactive UI for collaborative and competitive word guessing sessions.",
      tags: ["React", "Web App", "Multiplayer", "Game Logic", "Supabase"],
      links: [
        {
          label: "Live Site",
          href: "https://www.katapat.fauzulazim.com",
          kind: "demo",
        },
        {
          label: "GitHub Repo",
          href: "https://github.com/LRecodex/katapat",
          kind: "repo",
        },
      ],
    },
    {
      name: "YKN (Yayasan Kebajikan Negara)",
      period: "Aug 2024 – Dec 2024",
      description:
        "Built scalable modules for operational workflows, reporting, and integrations in a production environment.",
      tags: ["Laravel", "REST API", "MySQL", "PDF"],
    },
    {
      name: "Mosque Financial Management System",
      period: "May 2023 – May 2024",
      description:
        "Finance management features with structured data modeling and clear user flows for tracking and reporting.",
      tags: ["Web App", "SQL", "Node.js", "Express", "Docker", "PostgreSQL" ],
    },
  ];

  const education: Education[] = [
    {
      school: "University Malaysia Terengganu",
      program:
        "Bachelor of Computer Science (Software Engineering) with Honors",
      period: "Oct 2022 – Jan 2025",
    },
    {
      school: "Perak Matriculation College",
      program: "Pre-University Studies",
      period: "2021 – 2022",
    },
  ];

  const certificates: Certificate[] = [
    {
      title: "IBM Full Stack Developer",
      issuer: "IBM",
      date: "Aug 2025",
      file: "IBM FULL STACK SOFTWARE DEVELOPER 8NEDNOL4GUJ2.pdf",
    },
    {
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM",
      date: "Aug 2025",
      file: "Developing AI Applications with Python and Flask BOYYRK339VQQ.pdf",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Aug 2025",
      file: "Python for Data Science, AI & Development FHSI8B43NQIY.pdf",
    },
    {
      title: "Application Development using Microservices and Serverless",
      issuer: "IBM",
      date: "Aug 2025",
      file:
        "Application Development using Microservices and Serverless  O4PFIULQQFGT.pdf",
    },
    {
      title: "Ubuntu Linux Professional Certificate",
      issuer: "Canonical",
      date: "Jan 2025",
    },
    {
      title: "Ubuntu Linux: User and Group Management",
      issuer: "LinkedIn",
      date: "Jan 2025",
      file: "Ubuntu Linux: User and Group Management.pdf",
    },
    {
      title: "Spring Boot 2.0 Essential Training",
      issuer: "LinkedIn",
      date: "Jan 2025",
      file: "Spring Boot 2.0 Essential Training.pdf",
    },
    {
      title: "React: Creating and Hosting a Full-Stack Site",
      issuer: "LinkedIn",
      date: "Dec 2024",
      file: "React: Creating and Hosting a Full-Stack Site.pdf",
    },
    {
      title: "Cloud Computing: Core Concepts",
      issuer: "NASBA / LinkedIn",
      date: "Dec 2024",
      file: "National Association of State Boards of Accountancy (NASBA).pdf",
    },
    {
      title: "Linux Security and Hardening Essential Training",
      issuer: "LinkedIn",
      date: "Dec 2024",
    },
    {
      title: "Advanced Laravel",
      issuer: "LinkedIn",
      date: "Dec 2024",
      file: "Advanced Laravel.pdf",
    },
    {
      title: "Advanced Node.js",
      issuer: "LinkedIn",
      date: "Dec 2024",
      file: "Advanced Node.js.pdf",
    },
    {
      title: "Learning Linux Command Line",
      issuer: "LinkedIn",
      date: "Dec 2024",
      file: "Learning Linux Command Line (2023).pdf",
    },
    {
      title: "Ubuntu Linux: Operating System Basics",
      issuer: "LinkedIn",
      date: "Dec 2024",
      file: "Ubuntu Linux:Operating System Basics.pdf",
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker Inc.",
      date: "Dec 2024",
    },
    {
      title: "CompTIA",
      issuer: "CompTIA",
      file: "CompTIA®.pdf",
    },
    {
      title: "Django Application Development with SQL and Databases",
      issuer: "IBM",
      file: "Django Application Development with SQL and Databases CNDW0M50HFS1.pdf",
    },
    {
      title: "Docker: Your First Project",
      issuer: "LinkedIn",
      file: "Docker: Your First Project.pdf",
    },
    {
      title: "Full Stack Application Development Capstone Project",
      issuer: "IBM",
      file: "Full Stack Application Development Capstone Project PHV24QWZMGGJ.pdf",
    },
    {
      title: "Generative AI: Elevate your Software Development Career",
      issuer: "IBM",
      file: "Generative AI_ Elevate your Software Development Career 8NVCXOE1DG0B.pdf",
    },
    {
      title: "Getting Started with Git and GitHub",
      issuer: "IBM",
      file: "Getting Started with Git and GitHub BZJWGVPGX1D5.pdf",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      file: "Introduction to Cloud Computing I6KL5QIDD3AD.pdf",
    },
    {
      title: "Introduction to Containers, Docker, Kubernetes & OpenShift",
      issuer: "IBM",
      file: "Introduction to Containers Docker, Kubernetes OpenShift 3LJB441DV506.pdf",
    },
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      issuer: "IBM",
      file: "Introduction to HTML, CSS, & JavaScript 2JWPTGZ3K16Y.pdf",
    },
    {
      title: "Learning Docker",
      issuer: "LinkedIn",
      file: "Learning Docker.pdf",
    },
    {
      title: "Learning Docker Compose",
      issuer: "LinkedIn",
      file: "Learning Docker Compose.pdf",
    },
    {
      title: "Ubuntu Linux: Storage Management",
      issuer: "LinkedIn",
      file: "Ubuntu Linux: Storage Management.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <AnimatedBackground parallaxA={blobDrift} parallaxB={blobLift} />
      <FloatingShapes drift={shapeDrift} />
      <Nav />
      <Hero />

      <Section
        id="about"
        title="About"
        icon={<Code2 className="h-5 w-5 text-slate-200" />}
        subtitle="Software engineer with a passion for clean architecture and deployment."
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="space-y-4 text-slate-200/90 leading-relaxed">
            <p>
              I’m{" "}
              <span className="font-semibold text-white">
                Muhammad Fauzul Azim Bin Imran Hayat
              </span>
              , a full-stack software engineer who enjoys building systems that
              feel fast, stable, secure and easy to maintain.
            </p>
            <p>
              I’ve shipped real modules across web and mobile: REST APIs,
              background jobs/queues, dashboards, PDF/QR automation, and
              Docker-based deployments on Linux.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Pill>RESTful APIs</Pill>
              <Pill>SQL/NoSQL modeling</Pill>
              <Pill>Performance tuning</Pill>
              <Pill>Queues & cron</Pill>
              <Pill>Dockerized deployment</Pill>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-5">
            <div className="text-sm font-semibold text-white">Quick Info</div>
            <div className="mt-4 space-y-3 text-sm text-slate-200/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-300" />
                Kajang, Selangor
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-300" />
                <a
                  className="hover:underline"
                  href="mailto:fauzulazim7473@gmail.com"
                >
                  fauzulazim7473@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-300" />
                <a className="hover:underline" href="tel:+601140321539">
                  011-40321539
                </a>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <Button href="https://github.com/LRecodex">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
                <Button
                  variant="ghost"
                  href="https://www.linkedin.com/in/muhammad-fauzul-azim-imran-hayat-3263602a1"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        icon={<Layers className="h-5 w-5 text-slate-200" />}
        subtitle="A battle-tested stack for web, mobile, and system development."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition"
            >
              <div className="text-sm font-semibold text-white">
                {group.title}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <Pill key={it}>{it}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        title="Work Experience"
        icon={<Briefcase className="h-5 w-5 text-slate-200" />}
        subtitle="Hands-on experience building and maintaining production systems."
      >
        <div className="space-y-4">
          {experience.map((e) => (
            <div
              key={`${e.company}-${e.role}`}
              className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-white font-semibold">{e.role}</div>
                  <div className="text-slate-300">{e.company}</div>
                </div>
                <Pill>{e.period}</Pill>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                {e.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300/70 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
        icon={<Code2 className="h-5 w-5 text-slate-200" />}
        subtitle="Formal training that complements hands-on development experience."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-white font-semibold">{p.name}</div>
                  {p.period ? (
                    <div className="text-xs text-slate-400 mt-1">
                      {p.period}
                    </div>
                  ) : null}
                </div>
                <Pill>Featured</Pill>
              </div>
              <p className="mt-3 text-sm text-slate-200/90 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              {p.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((link) => (
                    <a
                      key={`${p.name}-${link.href}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/10 transition"
                    >
                      {link.kind === "repo" ? (
                        <Github className="h-3.5 w-3.5" />
                      ) : (
                        <Link className="h-3.5 w-3.5" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="education"
        title="Education"
        icon={<GraduationCap className="h-5 w-5 text-slate-200" />}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition"
            >
              <div className="text-white font-semibold">{ed.school}</div>
              <div className="text-slate-300 mt-1">{ed.program}</div>
              <div className="mt-3">
                <Pill>{ed.period}</Pill>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="certificates"
        title="Certificates"
        icon={<Award className="h-5 w-5 text-slate-200" />}
        subtitle="Proof of learning—kept compact."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <div
              key={`${c.title}-${c.date}`}
              className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:bg-white/5 transition"
            >
              <div className="text-white font-semibold leading-snug">
                {c.title}
              </div>
              <div className="mt-2 text-sm text-slate-300">{c.issuer}</div>
              {c.date ? (
                <div className="mt-3">
                  <Pill>{c.date}</Pill>
                </div>
              ) : null}
              {c.file ? (
                <div className={c.date ? "mt-3" : "mt-4"}>
                  {(() => {
                    const fileUrl = encodeURI(
                      `/docs/certificate/${c.file}`
                    );
                    return (
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/10 transition"
                        >
                          <Link className="h-3.5 w-3.5" />
                          View
                        </a>
                        <a
                          href={fileUrl}
                          download={c.file}
                          className="inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/10 transition"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download
                        </a>
                      </div>
                    );
                  })()}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        icon={<Mail className="h-5 w-5 text-slate-200" />}
        subtitle="Feel free to reach out for work, ideas, or questions."
      >
        <div className="grid lg:grid-cols-[1fr] gap-6 items-start">
          <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5">
            <div className="text-white font-semibold">
              Let’s build something great.
            </div>
            <p className="mt-2 text-sm text-slate-200/90">
              If you want someone who can ship end-to-end (backend, frontend,
              deployment), I’m happy to talk.
            </p>

            <div className="mt-4 space-y-3 text-sm text-slate-200/90">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-300" />
                <a
                  className="hover:underline"
                  href="mailto:fauzulazim7473@gmail.com"
                >
                  fauzulazim7473@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-300" />
                <a className="hover:underline" href="tel:+601140321539">
                  011-40321539
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-300" />
                Kajang, Selangor
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="https://github.com/LRecodex">
                <Github className="h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="ghost"
                href="https://www.linkedin.com/in/muhammad-fauzul-azim-imran-hayat-3263602a1"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 px-5 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-slate-300">
            © {new Date().getFullYear()} Muhammad Fauzul Azim • Built with React
            + Tailwind
          </div>
          <div className="text-xs text-slate-400">
            Turning ideas into production-ready systems.
          </div>
        </div>
      </footer>
    </div>
  );
}
