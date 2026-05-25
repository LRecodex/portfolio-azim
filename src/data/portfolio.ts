import type { IconType } from "react-icons";
import {
  Braces,
  Boxes,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  SiApache,
  SiDart,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGraphql,
  SiGithub,
  SiGitlab,
  SiGtk,
  SiJavascript,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiNextdotjs,
  SiOpenapiinitiative,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedhatopenshift,
  SiSqlite,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { FiCpu, FiTerminal, FiWifi } from "react-icons/fi";

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Project = {
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

export type Education = {
  school: string;
  program: string;
  period: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  file?: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  tint: string;
  bg: string;
  items: string[];
};

export const skillItemMeta: Record<
  string,
  { icon: IconType; tint: string; bg: string }
> = {
  Java: { icon: FiCpu, tint: "text-red-200", bg: "bg-red-500/15" },
  PHP: { icon: SiPhp, tint: "text-indigo-200", bg: "bg-indigo-500/15" },
  JavaScript: {
    icon: SiJavascript,
    tint: "text-yellow-200",
    bg: "bg-yellow-500/15",
  },
  TypeScript: {
    icon: SiTypescript,
    tint: "text-sky-200",
    bg: "bg-sky-500/15",
  },
  Dart: { icon: SiDart, tint: "text-cyan-200", bg: "bg-cyan-500/15" },
  Python: { icon: SiPython, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
  "C#": { icon: SiDotnet, tint: "text-fuchsia-200", bg: "bg-fuchsia-500/15" },
  Laravel: { icon: SiLaravel, tint: "text-rose-200", bg: "bg-rose-500/15" },
  React: { icon: SiReact, tint: "text-sky-200", bg: "bg-sky-500/15" },
  "Next.js": {
    icon: SiNextdotjs,
    tint: "text-slate-100",
    bg: "bg-slate-500/25",
  },
  "Node.js (Express)": {
    icon: SiExpress,
    tint: "text-slate-100",
    bg: "bg-slate-500/25",
  },
  NestJS: { icon: SiNestjs, tint: "text-rose-200", bg: "bg-rose-500/15" },
  Flutter: { icon: SiFlutter, tint: "text-sky-200", bg: "bg-sky-500/15" },
  Django: { icon: SiDjango, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
  Flask: { icon: SiFlask, tint: "text-amber-200", bg: "bg-amber-500/15" },
  GTK: { icon: SiGtk, tint: "text-slate-200", bg: "bg-slate-500/20" },
  MySQL: { icon: SiMysql, tint: "text-blue-200", bg: "bg-blue-500/15" },
  PostgreSQL: { icon: SiPostgresql, tint: "text-indigo-200", bg: "bg-indigo-500/15" },
  Supabase: { icon: SiSupabase, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
  MongoDB: { icon: SiMongodb, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
  Firebase: { icon: SiFirebase, tint: "text-amber-200", bg: "bg-amber-500/15" },
  SQLite: { icon: SiSqlite, tint: "text-slate-200", bg: "bg-slate-500/20" },
  Prisma: { icon: SiPrisma, tint: "text-cyan-200", bg: "bg-cyan-500/15" },
  Docker: { icon: SiDocker, tint: "text-sky-200", bg: "bg-sky-500/15" },
  Kubernetes: { icon: SiKubernetes, tint: "text-indigo-200", bg: "bg-indigo-500/15" },
  OpenShift: {
    icon: SiRedhatopenshift,
    tint: "text-rose-200",
    bg: "bg-rose-500/15",
  },
  "Linux CLI": { icon: SiLinux, tint: "text-slate-200", bg: "bg-slate-500/20" },
  Apache: { icon: SiApache, tint: "text-rose-200", bg: "bg-rose-500/15" },
  Nginx: { icon: SiNginx, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
  SSH: { icon: FiTerminal, tint: "text-slate-200", bg: "bg-slate-500/20" },
  SFTP: { icon: FiTerminal, tint: "text-slate-200", bg: "bg-slate-500/20" },
  WebSocket: { icon: FiWifi, tint: "text-cyan-200", bg: "bg-cyan-500/15" },
  GitHub: { icon: SiGithub, tint: "text-slate-200", bg: "bg-slate-500/20" },
  GitLab: { icon: SiGitlab, tint: "text-orange-200", bg: "bg-orange-500/15" },
  Postman: { icon: SiPostman, tint: "text-amber-200", bg: "bg-amber-500/15" },
  "UI/UX": { icon: SiFigma, tint: "text-pink-200", bg: "bg-pink-500/15" },
  "REST API": {
    icon: SiOpenapiinitiative,
    tint: "text-sky-200",
    bg: "bg-sky-500/15",
  },
  GraphQL: { icon: SiGraphql, tint: "text-pink-200", bg: "bg-pink-500/15" },
  "PDF/QR": {
    icon: FiTerminal,
    tint: "text-slate-200",
    bg: "bg-slate-500/20",
  },
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    icon: Braces,
    tint: "text-sky-300",
    bg: "bg-sky-500/10",
    items: ["Java", "PHP", "JavaScript", "TypeScript", "Dart", "Python", "C#"],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    tint: "text-emerald-300",
    bg: "bg-emerald-500/10",
    items: [
      "Laravel",
      "React",
      "Next.js",
      "Node.js (Express)",
      "NestJS",
      "Flutter",
      "Django",
      "Flask",
      "GTK",
    ],
  },
  {
    title: "Data",
    icon: Database,
    tint: "text-amber-300",
    bg: "bg-amber-500/10",
    items: ["MySQL", "PostgreSQL", "Supabase", "MongoDB", "Firebase", "SQLite", "Prisma"],
  },
  {
    title: "DevOps",
    icon: Server,
    tint: "text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
    items: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Linux CLI",
      "Apache",
      "Nginx",
      "SSH",
      "SFTP",
    ],
  },
  {
    title: "Tooling",
    icon: Wrench,
    tint: "text-rose-300",
    bg: "bg-rose-500/10",
    items: ["GitHub", "GitLab", "Postman", "WebSocket", "REST API", "GraphQL", "UI/UX", "PDF/QR"],
  },
];

export const experience: Experience[] = [
  {
    company: "Blyon Group Berhad",
    role: "Software Engineer",
    period: "Feb 2026 - Current",
    bullets: [
      "Developed full-stack Laravel business modules with responsive interfaces and backend workflows.",
      "Built and maintained REST API integrations using Laravel and Node.js patterns with validation, error handling, and production reliability in mind.",
      "Optimized MySQL queries and application logic to improve performance across business operations.",
      "Collaborated with teams to troubleshoot production issues and deliver features efficiently.",
    ],
  },
  {
    company: "Bytes Security Malaysia PLT",
    role: "Software Engineer (Part-time Junior to Full-time)",
    period: "Dec 2024 - January 2026",
    bullets: [
      "Built and enhanced secure Laravel web applications with JavaScript-based interfaces.",
      "Implemented backend logic, authentication flows, validation, and database-driven features.",
      "Improved backend performance, code quality, and maintainability within project timelines.",
      "Implemented bug fixes and small features across Laravel and JavaScript codebases.",
      "Wrote unit and feature tests and refactored queries to reduce load and simplify maintenance.",
    ],
  },
  {
    company: "MSC Management Service Sdn Bhd",
    role: "Intern Full Stack Developer",
    period: "Dec 2024 - Jan 2025",
    bullets: [
      "Developed web and mobile modules using Laravel, Node.js, Express.js, and Flutter.",
      "Automated workflows improving operational efficiency by approximately 30%.",
      "Optimized database queries reducing execution time by approximately 40%.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Fintel (Finance Intelligence)",
    period: "Apr 2026 - Present",
    description:
      "Designed and developing an intelligent finance management system using Next.js, TypeScript, and MySQL. Includes an AI-driven budgeting engine that analyzes spending behavior, generates budgets, and provides savings recommendations.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Supabase Postgres",
      "Tailwind CSS",
      "Finance App",
    ],
    links: [
      {
        label: "Live Site",
        href: "https://fintel.fauzulazim.com",
        kind: "demo",
      },
    ],
  },
  {
    name: "BMS Fastentix",
    period: "Dec 2024 - Present",
    description:
      "Built a multi-tenant business platform including dashboards, inventory, reseller subscriptions, payment and invoice modules. Developed responsive admin interfaces, REST APIs, PDF/QR generation, and reporting workflows with production reliability improvements.",
    tags: ["Laravel", "JavaScript", "MySQL", "REST API", "Docker", "Linux", "Supervisor", "Postman"],
  },
  {
    name: "QR Generator",
    period: "2026",
    description:
      "Web-based QR Generator that creates polished, marketing-ready PNG files from URLs with live preview, optional center-logo branding, promo text overlays, social-ready presets (square/story/custom), and full color/size customization.",
    tags: [
      "Node.js",
      "Express",
      "Multer",
      "qrcode",
      "Sharp",
      "CORS",
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API",
      "FormData",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/LRecodex/QR-Gen",
        kind: "repo",
      },
    ],
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
      "Linux terminal application providing SSH and SFTP capabilities with a graphical interface. Built to simplify remote server access and file transfer in a single unified tool.",
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
    tags: ["React", "Web App", "Multiplayer", "Game Logic", "Supabase", "WebSocket"],
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
    name: "LRecodexTriple7",
    period: "Feb 2025",
    description:
      "Multiplayer Suit Cards game built as a web application. Supports real-time multiplayer gameplay and interactive UI for collaborative and competitive card game sessions.",
    tags: ["React", "Web App", "Multiplayer", "Game Logic", "Supabase"],
    links: [
      {
        label: "Live Site",
        href: "https://www.pieceoffun.fauzulazim.com",
        kind: "demo",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/LRecodex/3pieceoffun",
        kind: "repo",
      },
    ],
  },
  {
    name: "YKN (Yayasan Kebajikan Negara)",
    period: "Aug 2024 - Dec 2024",
    description:
      "Developed a welfare care and counselling system for YKN counsellors to manage programs, events, clients, appointments, assessments, referrals, and reporting workflows.",
    tags: ["Laravel", "REST API", "MySQL", "Dashboard", "Reporting"],
  },
  {
    name: "Mosque Financial Management System",
    period: "May 2023 - May 2024",
    description:
      "Developed a SaaS multi-tenant mosque finance system with cashbook, ledger, bank reconciliation, accounts payable/receivable, dashboards, and reporting, including subscription management and Stripe integration.",
    tags: ["Node.js", "Express", "React", "PostgreSQL", "SaaS", "Stripe"],
  },
];

export const education: Education[] = [
  {
    school: "University Malaysia Terengganu",
    program:
      "Bachelor of Computer Science (Software Engineering) with Honors",
    period: "Oct 2022 - Jan 2025",
  },
  {
    school: "Perak Matriculation College",
    program: "Pre-University Studies",
    period: "2021 - 2022",
  },
];

export const certificates: Certificate[] = [
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
    title: "Linux Security and Hardening Essential Training",
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
