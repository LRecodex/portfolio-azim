import React, { useMemo, useRef, useState } from "react";
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
  Braces,
  Boxes,
  Database,
  Server,
  Wrench,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiPython,
  SiDotnet,
  SiLaravel,
  SiReact,
  SiExpress,
  SiFlutter,
  SiDjango,
  SiFlask,
  SiGtk,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSqlite,
  SiDocker,
  SiKubernetes,
  SiRedhatopenshift,
  SiLinux,
  SiApache,
  SiNginx,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiOpenapiinitiative,
  SiFigma,
} from "react-icons/si";
import { FiTerminal, FiWifi, FiCpu } from "react-icons/fi";

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

type FreelancePricingRow = {
  item: string;
  price: string;
  details: string;
};

type ProjectTypeOption =
  | "Static Website"
  | "Dynamic Website"
  | "Web Application";

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

function SkillPill({
  label,
  meta,
}: {
  label: string;
  meta?: { icon: IconType; tint: string; bg: string };
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-200">
      {meta ? (
        <span
          className={cn(
            "inline-flex h-5 w-5 items-center justify-center rounded-full",
            meta.bg,
          )}
        >
          <meta.icon className={cn("h-3.5 w-3.5", meta.tint)} />
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      )}
      {label}
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

function PricingTable({
  title,
  rows,
}: {
  title: string;
  rows: FreelancePricingRow[];
}) {
  return (
    <div className="rounded-3xl bg-slate-950/45 ring-1 ring-white/10 overflow-hidden shadow-[0_20px_80px_-50px_rgba(15,23,42,0.95)]">
      <div className="px-5 py-4 text-white font-semibold border-b border-white/10 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-sky-300/90" />
        {title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.8fr_1.2fr] gap-2 px-5 py-2 border-b border-white/10 bg-white/[0.03] text-[11px] tracking-wide uppercase text-slate-400">
        <div>Item</div>
        <div>Price</div>
        <div>Details</div>
      </div>
      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div
            key={`${title}-${row.item}`}
            className="grid grid-cols-1 md:grid-cols-[1.1fr_0.8fr_1.2fr] gap-2 px-5 py-3 md:items-center"
          >
            <div className="text-sm text-slate-100 font-medium">{row.item}</div>
            <div className="text-sm text-slate-200/90">{row.price}</div>
            <div className="text-sm text-slate-300 leading-relaxed">{row.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FreelanceSection() {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [form, setForm] = useState<{
    name: string;
    email: string;
    phone: string;
    company: string;
    projectType: ProjectTypeOption;
    budget: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Static Website",
    budget: "",
    message: "",
  });

  const developmentRows: FreelancePricingRow[] = [
    { item: "Static Website", price: "RM 800 ± RM 2,500", details: "1 ± 2 revision rounds" },
    { item: "Dynamic Website", price: "RM 2,500 ± RM 7,000", details: "2 ± 3 revision rounds" },
    { item: "Web Application", price: "RM 8,000 ± RM 15,000+", details: "3 ± 5 revision rounds" },
  ];

  const hostingRows: FreelancePricingRow[] = [
    { item: "Domain", price: "RM 50 ± RM 150 / year", details: ".com / .com.my" },
    { item: "Static Hosting", price: "FREE ± RM 100 / year", details: "Netlify / Vercel" },
    { item: "Dynamic Hosting", price: "RM 300 ± RM 800 / year", details: "Shared hosting / VPS" },
    { item: "VPS Server", price: "RM 800 ± RM 2,000+ / year", details: "Recommended for web apps" },
  ];

  const maintenanceRows: FreelancePricingRow[] = [
    { item: "Self Maintain", price: "FREE", details: "Client handles everything" },
    { item: "Basic", price: "RM 100 / month", details: "Backup + updates" },
    { item: "Standard", price: "RM 200 / month", details: "Support + updates (2 minor changes/month)" },
    { item: "Premium", price: "RM 400 / month", details: "Full support (5 minor changes/month)" },
  ];

  const addOnRows: FreelancePricingRow[] = [
    { item: "Domain Setup", price: "RM 50 ± RM 150", details: "Register domain" },
    { item: "Hosting Setup", price: "RM 100 ± RM 300", details: "Deploy website" },
    { item: "Extra Page", price: "RM 150 ± RM 300", details: "Per page" },
    { item: "Content Upload", price: "RM 100 ± RM 300", details: "Upload content" },
    { item: "Payment Integration", price: "RM 500 ± RM 1,000", details: "FPX / Stripe" },
  ];

  const changePolicyRows: FreelancePricingRow[] = [
    { item: "Minor", price: "RM 50 ± RM 100", details: "Text/image change" },
    { item: "Medium", price: "RM 100 ± RM 300", details: "Layout adjustment" },
    { item: "Major", price: "RM 300 ± RM 1,000+", details: "New page" },
    { item: "Feature", price: "Quote", details: "Login/payment system" },
  ];

  const projectTypeGuides: Record<
    ProjectTypeOption,
    { summary: string; bestFor: string; examples: string; budget: string }
  > = {
    "Static Website": {
      summary: "Best for simple company profiles and landing pages that rarely change.",
      bestFor: "Portfolio, personal brand, corporate brochure site",
      examples: "Home, About, Services, Contact form",
      budget: "RM 800 ± RM 2,500",
    },
    "Dynamic Website": {
      summary: "Best for content that updates regularly and needs admin control.",
      bestFor: "Company site with blog/news, listing pages, CMS updates",
      examples: "Admin panel, editable pages, lead capture and filtering",
      budget: "RM 2,500 ± RM 7,000",
    },
    "Web Application": {
      summary: "Best for business operations, workflows, and custom product logic.",
      bestFor: "Internal systems, dashboards, SaaS MVP, portal systems",
      examples: "User login, role permissions, automation, payment flow",
      budget: "RM 8,000 ± RM 15,000+",
    },
  };

  const deliverySteps = [
    { title: "Discovery", detail: "Define users, scope, and business goals." },
    { title: "Planning", detail: "Confirm milestones, timeline, and quotation." },
    { title: "Build & Review", detail: "Develop features with revision checkpoints." },
    { title: "Launch", detail: "Deploy, handover, and 7 days free support." },
  ];

  const selectedTypeGuide = projectTypeGuides[form.projectType];

  const emailHref = useMemo(() => {
    const subject = `Freelance Project Inquiry - ${form.projectType}`;
    const body = [
      "Hi Fauzul,",
      "",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Company: ${form.company || "-"}`,
      `Project Type: ${form.projectType}`,
      `Budget: ${form.budget || "-"}`,
      "",
      "Project Details:",
      form.message || "-",
      "",
      "Thanks.",
    ].join("\n");

    return `mailto:fauzulazim7473@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendStatus({ type: "idle", message: "" });
    setIsSending(true);

    const payload = {
      ...form,
      recipientEmail: "fauzulazim7473@gmail.com",
      subject: `Freelance Project Inquiry - ${form.projectType}`,
    };

    fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorBody = (await response.json().catch(() => null)) as { error?: string } | null;
          throw new Error(errorBody?.error || "Failed to send email.");
        }
        setSendStatus({
          type: "success",
          message: "Email sent successfully. I will get back to you soon.",
        });
      })
      .catch((error: unknown) => {
        const fallbackMessage =
          error instanceof Error
            ? error.message
            : "Failed to send email. Please use the draft email fallback.";
        setSendStatus({
          type: "error",
          message: `${fallbackMessage} You can still use 'Open Draft Email'.`,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <Section
      id="freelance"
      title="Freelance Studio"
      icon={<Briefcase className="h-5 w-5 text-slate-200" />}
      subtitle="Product-grade web solutions with clear scope, transparent pricing, and guided decisions."
    >
      <div className="grid xl:grid-cols-[1.45fr_0.55fr] gap-6 items-start">
        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-rose-500/10 ring-1 ring-white/15">
            <div className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="relative grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-slate-950/45 ring-1 ring-white/10 p-4">
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Timeline Planning</div>
                <div className="mt-1 text-sm font-medium text-white">Project-dependent and scoped upfront</div>
              </div>
              <div className="rounded-2xl bg-slate-950/45 ring-1 ring-white/10 p-4">
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Engagement Model</div>
                <div className="mt-1 text-sm font-medium text-white">Fixed scope or phased MVP</div>
              </div>
              <div className="rounded-2xl bg-slate-950/45 ring-1 ring-white/10 p-4">
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Support Window</div>
                <div className="mt-1 text-sm font-medium text-white">7 days free post-launch</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5">
            <h3 className="text-white font-semibold">Not sure what to choose?</h3>
            <p className="mt-2 text-sm text-slate-300">
              If you are deciding between Static, Dynamic, and Web App, use this quick guide.
            </p>
            <div className="mt-4 grid lg:grid-cols-3 gap-4">
              {Object.entries(projectTypeGuides).map(([type, guide]) => (
                <motion.div
                  key={type}
                  whileHover={{ y: -3 }}
                  className={cn(
                    "rounded-2xl p-4 ring-1 transition",
                    form.projectType === type ? "bg-sky-500/10 ring-sky-300/35" : "bg-white/[0.03] ring-white/10",
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-white font-semibold">{type}</div>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-slate-200">{guide.budget}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">{guide.summary}</p>
                  <p className="mt-3 text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">Best for:</span> {guide.bestFor}
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">Typical scope:</span> {guide.examples}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5">
            <h3 className="text-white font-semibold">How your project moves from idea to launch</h3>
            <div className="mt-4 grid md:grid-cols-4 gap-3">
              {deliverySteps.map((step, idx) => (
                <div key={step.title} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4">
                  <div className="text-xs text-sky-300 font-semibold">Step {idx + 1}</div>
                  <div className="mt-1 text-sm text-white font-medium">{step.title}</div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-4">
            <PricingTable title="Development (One-Time Cost)" rows={developmentRows} />
            <PricingTable title="Hosting & Domain (Yearly)" rows={hostingRows} />
            <PricingTable title="Maintenance (Monthly)" rows={maintenanceRows} />
            <PricingTable title="Revision & Change Policy" rows={changePolicyRows} />
          </div>

          <PricingTable title="Add-ons" rows={addOnRows} />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5">
              <div className="text-white font-semibold">Design Scope</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>Basic layout design is included.</li>
                <li>Client Figma/reference files are welcome.</li>
                <li>Full branding system is not included by default.</li>
                <li>Major design pivots are quoted separately.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-950/40 ring-1 ring-white/10 p-5">
              <div className="text-white font-semibold">Commercial Terms</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200/90">
                <li>50% upfront, 50% upon completion.</li>
                <li>Hosting and maintenance are separate from build cost.</li>
                <li>Client provides content unless agreed otherwise.</li>
                <li>Ownership transfers after full payment.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4 xl:sticky xl:top-24">
          <form
            onSubmit={handleEmailSubmit}
            className="rounded-3xl bg-slate-950/45 ring-1 ring-white/10 p-5 space-y-3 shadow-[0_30px_120px_-70px_rgba(56,189,248,0.5)]"
          >
            <div>
              <div className="text-white font-semibold text-lg">Start Your Project Brief</div>
              <p className="mt-1 text-sm text-slate-300">
                Tell me what you want to build. You will get a practical proposal, timeline, and quote direction.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <input
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
                className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-sky-300/40"
                required
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Your email"
                className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-sky-300/40"
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Phone number"
                className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-sky-300/40"
                required
              />
              <input
                value={form.company}
                onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
                placeholder="Company (optional)"
                className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-sky-300/40"
              />
            </div>

            <select
              value={form.projectType}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  projectType: e.target.value as ProjectTypeOption,
                }))
              }
              className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-sky-300/40"
            >
              <option className="text-slate-900" value="Static Website">Static Website</option>
              <option className="text-slate-900" value="Dynamic Website">Dynamic Website</option>
              <option className="text-slate-900" value="Web Application">Web Application</option>
            </select>

            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-3 text-xs text-slate-300 leading-relaxed">
              <span className="text-white font-medium">{form.projectType}:</span> {selectedTypeGuide.summary}
              <br />
              <span className="text-slate-400">Best for:</span> {selectedTypeGuide.bestFor}
            </div>

            <input
              value={form.budget}
              onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
              placeholder="Budget (e.g. RM 3,000 - RM 5,000)"
              className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-sky-300/40"
            />

            <textarea
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              placeholder="Project details: goals, pages/features, target launch date"
              rows={6}
              className="w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-sky-300/40"
              required
            />

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white text-slate-950 px-4 py-2.5 text-sm font-medium hover:bg-slate-200 transition disabled:opacity-70"
            >
              <Mail className="h-4 w-4" />
              {isSending ? "Sending..." : "Send Project Inquiry"}
            </button>

            <a
              href={emailHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 text-slate-100 ring-1 ring-white/10 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
            >
              <ArrowRight className="h-4 w-4" />
              Open Draft Email
            </a>

            {sendStatus.type !== "idle" ? (
              <div
                className={cn(
                  "rounded-2xl px-3 py-2 text-xs ring-1",
                  sendStatus.type === "success"
                    ? "bg-emerald-500/10 text-emerald-200 ring-emerald-300/20"
                    : "bg-rose-500/10 text-rose-200 ring-rose-300/20",
                )}
              >
                {sendStatus.message}
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2">Response within 24h</div>
              <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2">No obligation consultation</div>
            </div>

            <Button href="/docs/web-dev/web_dev_pricing.pdf" variant="ghost">
              <Download className="h-4 w-4" /> View Pricing PDF
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Nav({ variant = "home" }: { variant?: "home" | "freelance" }) {
  const items =
    variant === "freelance"
      ? [
          { href: "/", label: "Home" },
          { href: "/freelance", label: "Freelance" },
          { href: "/#contact", label: "Contact" },
        ]
      : [
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#projects", label: "Projects" },
          { href: "#education", label: "Education" },
          { href: "#certificates", label: "Certificates" },
          { href: "/freelance", label: "Freelance" },
          { href: "#contact", label: "Contact" },
        ];

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 group">
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
              key={it.href}
              href={it.href}
              className="px-3 py-2 rounded-xl text-sm text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              {it.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm hover:bg-white/10 transition"
            href={variant === "freelance" ? "/" : "/freelance"}
          >
            <ArrowRight className="h-4 w-4" />
            {variant === "freelance" ? "Back To Portfolio" : "Freelance Rates"}
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
              Full-stack Software Developer experienced in Laravel/PHP, React
              (Vite), Node.js, and Flutter-shipping production modules, REST
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

export default function App() {
  const { scrollY } = useScroll();
  const blobDrift = useTransform(scrollY, [0, 900], [0, -120]);
  const blobLift = useTransform(scrollY, [0, 900], [0, 80]);
  const shapeDrift = useTransform(scrollY, [0, 900], [0, -60]);

  const skillItemMeta: Record<
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
    "Node.js (Express)": {
      icon: SiExpress,
      tint: "text-slate-100",
      bg: "bg-slate-500/25",
    },
    Flutter: { icon: SiFlutter, tint: "text-sky-200", bg: "bg-sky-500/15" },
    Django: { icon: SiDjango, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
    Flask: { icon: SiFlask, tint: "text-amber-200", bg: "bg-amber-500/15" },
    GTK: { icon: SiGtk, tint: "text-slate-200", bg: "bg-slate-500/20" },
    MySQL: { icon: SiMysql, tint: "text-blue-200", bg: "bg-blue-500/15" },
    PostgreSQL: { icon: SiPostgresql, tint: "text-indigo-200", bg: "bg-indigo-500/15" },
    MongoDB: { icon: SiMongodb, tint: "text-emerald-200", bg: "bg-emerald-500/15" },
    Firebase: { icon: SiFirebase, tint: "text-amber-200", bg: "bg-amber-500/15" },
    SQLite: { icon: SiSqlite, tint: "text-slate-200", bg: "bg-slate-500/20" },
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
    "PDF/QR": {
      icon: FiTerminal,
      tint: "text-slate-200",
      bg: "bg-slate-500/20",
    },
  };

  const skills = useMemo(
    () => [
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
          "Node.js (Express)",
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
        items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
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
        items: ["GitHub", "GitLab", "Postman", "WebSocket", "REST API", "UI/UX", "PDF/QR"],
      },
    ],
    [],
  );

  const experience: Experience[] = [
    {
      company: "Blyon Group Berhad",
      role: "Software Engineer",
      period: "Feb 2026 - Current",
      bullets: [
        "Developing and maintaining secure, scalable web applications using Laravel and modern JavaScript frameworks.",
        "Designed and optimized backend architectures, improving database performance and reducing query execution time.",
        "Implemented API integrations and enhanced system reliability through robust error handling and validation.",
        "Collaborating with cross-functional teams to deliver high-quality features and resolve production issues efficiently.",
      ],
    },
    {
      company: "Bytes Security Malaysia PLT",
      role: "Software Engineer",
      period: "Feb 2025 - January 2026",
      bullets: [
        "Contributed to secure web application development using Laravel and JavaScript frameworks.",
        "Optimized backend processes and database queries to improve efficiency and code quality.",
        "Collaborated with cross-functional teams to troubleshoot and deliver fixes/features on time.",
      ],
    },

    {
      company: "Bytes Security Malaysia PLT",
      role: "Part-time Junior Software Engineer",
      period: "Dec 2024 - Jan 2025",
      bullets: [
        "Implemented bug fixes and small features across Laravel and JavaScript codebases.",
        "Wrote unit/feature tests and refactored queries to reduce load and simplify maintenance.",
      ],
    },
    {
      company: "MSC Management Service Sdn Bhd",
      role: "Intern Full Stack Developer",
      period: "Dec 2024 - Jan 2025",
      bullets: [
        "Developed and maintained web/mobile apps using Laravel, Node.js, and Flutter.",
        "Automated workflows for counseling session registration and case management (+30% efficiency).",
        "Designed REST APIs and improved DB performance (reduced query time up to ~40%).",
      ],
    },
  ];

  const projects: Project[] = [
    {
      name: "BMS Fastentix",
      period: "Dec 2024 - Present",
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
        "Built scalable modules for operational workflows, reporting, and integrations in a production environment.",
      tags: ["Laravel", "REST API", "MySQL"],
    },
    {
      name: "Mosque Financial Management System",
      period: "May 2023 - May 2024",
      description:
        "Finance management features with structured data modeling and clear user flows for tracking and reporting.",
      tags: ["Web App", "SQL", "Node.js", "Express", "Docker", "PostgreSQL"],
    },
  ];

  const education: Education[] = [
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

  const pathname =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";
  const isFreelancePage = pathname === "/freelance";

  if (isFreelancePage) {
    return (
      <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        <AnimatedBackground parallaxA={blobDrift} parallaxB={blobLift} />
        <FloatingShapes drift={shapeDrift} />
        <Nav variant="freelance" />

        <header className="relative">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-2">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500/20 via-slate-900/70 to-emerald-500/15 ring-1 ring-white/15 p-6 sm:p-8">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Freelance Services
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Prototype-To-Production Web Builds
                </h1>
                <p className="mt-3 max-w-3xl text-slate-200/90">
                  This page is designed like a mini product discovery experience so clients can quickly understand
                  what they need, estimate budget range, and submit a guided brief in minutes.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-slate-100">User-friendly scope guidance</span>
                  <span className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-slate-100">Transparent pricing bands</span>
                  <span className="rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-slate-100">Fast one-click inquiry</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <FreelanceSection />

        <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 px-5 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-slate-300">
              &copy; {new Date().getFullYear()} Muhammad Fauzul Azim Bin Imran Hayat
            </div>
            <a
              href="/"
              className="text-xs text-slate-300 hover:text-white transition"
            >
              Back to main portfolio
            </a>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <AnimatedBackground parallaxA={blobDrift} parallaxB={blobLift} />
      <FloatingShapes drift={shapeDrift} />
      <Nav variant="home" />
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
              I'm{" "}
              <span className="font-semibold text-white">
                Muhammad Fauzul Azim Bin Imran Hayat
              </span>
              , a full-stack software engineer who enjoys building systems that
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
        subtitle="Academic foundation supporting my software engineering journey."
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
        subtitle="Continuous learning through recognized certifications and training."
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
              {c.file ? null : null}
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
    </div>
  );
}
