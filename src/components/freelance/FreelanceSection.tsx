import { useMemo, useState } from "react";
import { ArrowRight, Briefcase, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import type {
  FreelanceInquiryForm,
  ProjectTypeOption,
} from "../../types/freelance";
import { buildFreelanceMailto, sendFreelanceInquiry } from "../../services/freelanceEmail";
import { cn } from "../../lib/cn";
import {
  addOnRows,
  changePolicyRows,
  developmentRows,
  hostingRows,
  maintenanceRows,
  projectTypeGuides,
} from "../../data/freelancePricing";
import Button from "../ui/Button";
import Section from "../ui/Section";
import PricingTable from "./PricingTable";

export default function FreelanceSection() {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [form, setForm] = useState<FreelanceInquiryForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Static Website",
    budget: "",
    message: "",
  });

  const deliverySteps = [
    { title: "Discovery", detail: "Define users, scope, and business goals." },
    { title: "Planning", detail: "Confirm milestones, timeline, and quotation." },
    { title: "Build & Review", detail: "Develop features with revision checkpoints." },
    { title: "Launch", detail: "Deploy, handover, and 7 days free support." },
  ];

  const selectedTypeGuide = projectTypeGuides[form.projectType];
  const emailHref = useMemo(() => buildFreelanceMailto(form), [form]);

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendStatus({ type: "idle", message: "" });
    setIsSending(true);

    sendFreelanceInquiry(form)
      .then(() => {
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
      title="Freelance Packages"
      icon={<Briefcase className="h-5 w-5 text-slate-200" />}
      subtitle="Clear pricing, simple explanations, and direct inquiry."
    >
      <div className="grid xl:grid-cols-[1.45fr_0.55fr] gap-6 items-start">
        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-sky-500/15 via-emerald-500/10 to-rose-500/10 ring-1 ring-white/15">
            <div className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="relative space-y-3">
              <div className="rounded-2xl bg-amber-500/10 ring-1 ring-amber-300/30 px-4 py-3 text-xs text-amber-100 leading-relaxed">
                Development pricing is for build scope only. Domain, hosting, email services, and third-party subscriptions are covered by the client unless explicitly agreed otherwise.
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
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
            <div className="relative mt-4 hidden md:block">
              <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full w-1/3 bg-gradient-to-r from-sky-300 via-emerald-300 to-sky-300"
                  animate={{ x: ["-110%", "320%"] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-4 gap-3">
              {deliverySteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="text-xs text-sky-300 font-semibold">Step {idx + 1}</div>
                  <div className="mt-1 text-sm text-white font-medium">{step.title}</div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{step.detail}</p>
                </motion.div>
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
              <div className="text-white font-semibold text-lg">Tell Me About Your Project</div>
              <p className="mt-1 text-sm text-slate-300">
                Share your goals and required features. I will reply with the recommended scope, timeline, and estimate.
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
              <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2">Free initial consultation</div>
            </div>

            <Button href="/docs/web-dev/web_dev_pricing.pdf" variant="ghost">
              <Download className="h-4 w-4" /> View Pricing PDF
            </Button>
            <Button href="/quote-estimator" variant="ghost">
              <ArrowRight className="h-4 w-4" /> Try Quote Estimator
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
