import {
  Award,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Layers,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { skillItemMeta, skills, experience, projects, education, certificates } from "../data/portfolio";
import { cn } from "../lib/cn";
import Hero from "../components/home/Hero";
import Nav from "../components/layout/Nav";
import Button from "../components/ui/Button";
import Pill from "../components/ui/Pill";
import Section from "../components/ui/Section";
import SkillPill from "../components/ui/SkillPill";
import SpotlightCard from "../components/ui/SpotlightCard";
import ScrollProgress from "../components/ui/ScrollProgress";
import ScrollToTop from "../components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav variant="home" />
      <Hero />

      <Section
        id="about"
        index={1}
        title="About"
        icon={<Code2 className="h-5 w-5 text-slate-200" />}
        subtitle="Software engineer with a passion for clean architecture and deployment."
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="space-y-4 text-slate-200/90 leading-relaxed">
            <p>
              I'm{" "}
              <span className="font-semibold text-white">
                Muhammad Fauzul Azim Bin Imran Hayat
              </span>
              , a software engineer who enjoys building systems that
              feel fast, stable, secure and easy to maintain.
            </p>
            <p>
              I've shipped real modules across web and mobile: REST APIs,
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
        index={2}
        title="Skills"
        icon={<Layers className="h-5 w-5 text-slate-200" />}
        subtitle="A battle-tested stack for web, mobile, and system development."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <SpotlightCard key={group.title} className="p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                {group.icon ? (
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 items-center justify-center rounded-2xl ring-1 ring-white/10",
                      group.bg,
                    )}
                  >
                    <group.icon className={cn("h-4 w-4", group.tint)} />
                  </span>
                ) : null}
                {group.title}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((it) => (
                  <SkillPill key={it} label={it} meta={skillItemMeta[it]} />
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        index={3}
        title="Work Experience"
        icon={<Briefcase className="h-5 w-5 text-slate-200" />}
        subtitle="Hands-on experience building and maintaining production systems."
      >
        <div className="space-y-4">
          {experience.map((e) => (
            <SpotlightCard key={`${e.company}-${e.role}`} className="p-5">
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
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        index={4}
        title="Projects"
        icon={<Code2 className="h-5 w-5 text-slate-200" />}
        subtitle="Formal training that complements hands-on development experience."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <SpotlightCard key={p.name} className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-white font-semibold">{p.name}</div>
                  {/* {p.period ? (
                    <div className="text-xs text-slate-400 mt-1">
                      {p.period}
                    </div>
                  ) : null} */}
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
                  {p.links.map((item) => (
                    <a
                      key={`${p.name}-${item.href}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`group inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer select-none
                        ${item.kind === "repo"
                          ? "bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/20 hover:ring-white/40 hover:shadow-lg hover:shadow-white/5"
                          : "bg-indigo-500/20 ring-1 ring-indigo-400/40 text-indigo-300 hover:bg-indigo-500/30 hover:ring-indigo-400/60 hover:text-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10"
                        }`}
                    >
                      {item.kind === "repo" ? (
                        <Github className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
                      ) : (
                        <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section
        id="education"
        index={5}
        title="Education"
        icon={<GraduationCap className="h-5 w-5 text-slate-200" />}
        subtitle="Academic foundation supporting my software engineering journey."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((ed) => (
            <SpotlightCard key={ed.school} className="p-5">
              <div className="text-white font-semibold">{ed.school}</div>
              <div className="text-slate-300 mt-1">{ed.program}</div>
              <div className="mt-3">
                <Pill>{ed.period}</Pill>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section
        id="certificates"
        index={6}
        title="Certificates"
        icon={<Award className="h-5 w-5 text-slate-200" />}
        subtitle="Continuous learning through recognized certifications and training."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <SpotlightCard key={`${c.title}-${c.date}`} className="p-5">
              <div className="text-white font-semibold leading-snug">
                {c.title}
              </div>
              <div className="mt-2 text-sm text-slate-300">{c.issuer}</div>
              {c.date ? (
                <div className="mt-3">
                  <Pill>{c.date}</Pill>
                </div>
              ) : null}
            </SpotlightCard>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        index={7}
        title="Contact"
        icon={<Mail className="h-5 w-5 text-slate-200" />}
        subtitle="Feel free to reach out for work, ideas, or questions."
      >
        <div className="grid lg:grid-cols-[1fr] gap-6 items-start">
          <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5">
            <div className="text-white font-semibold">
              Let's build something great.
            </div>
            <p className="mt-2 text-sm text-slate-200/90">
              If you want someone who can ship end-to-end (backend, frontend,
              deployment), I'm happy to talk.
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
            &copy; {new Date().getFullYear()} Muhammad Fauzul Azim Bin Imran Hayat
          </div>
          <div className="text-xs text-slate-400">
            Turning ideas into production-ready systems.
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
