import { useMemo, useState } from "react";
import { Calculator, Sparkles } from "lucide-react";
import Nav from "../components/layout/Nav";
import Button from "../components/ui/Button";
import Section from "../components/ui/Section";
import {
  estimateQuote,
  formatRm,
  projectTypeGuides,
  type QuoteEstimatorInput,
} from "../data/freelancePricing";
import type { ProjectTypeOption } from "../types/freelance";

export default function QuoteEstimatorPage() {
  const defaultInput: QuoteEstimatorInput = {
    projectType: "Static Website",
    pages: 5,
    complexity: "Standard",
    hasAdminPanel: true,
    needsAuth: false,
    thirdPartyIntegrations: 0,
    multilingual: false,
    seoSetup: true,
    analyticsSetup: true,
    maintenancePlan: "Basic",
    urgency: "Normal",
  };

  const [input, setInput] = useState<QuoteEstimatorInput>(defaultInput);

  const [pagesInput, setPagesInput] = useState(String(input.pages));
  const [integrationsInput, setIntegrationsInput] = useState(
    String(input.thirdPartyIntegrations),
  );

  const result = useMemo(() => estimateQuote(input), [input]);
  const guide = projectTypeGuides[input.projectType];

  const handlePagesChange = (value: string) => {
    if (!/^\d*$/.test(value)) {
      return;
    }

    setPagesInput(value);
    if (value === "") {
      return;
    }

    const parsed = Math.max(1, Math.min(200, Number(value)));
    setInput((prev) => ({ ...prev, pages: parsed }));
  };

  const handlePagesBlur = () => {
    const parsed = Number(pagesInput);
    const normalized = Number.isFinite(parsed)
      ? Math.max(1, Math.min(200, parsed))
      : input.pages;

    setPagesInput(String(normalized));
    setInput((prev) => ({ ...prev, pages: normalized }));
  };

  const handleIntegrationsChange = (value: string) => {
    if (!/^\d*$/.test(value)) {
      return;
    }

    setIntegrationsInput(value);
    if (value === "") {
      return;
    }

    const parsed = Math.max(0, Math.min(10, Number(value)));
    setInput((prev) => ({ ...prev, thirdPartyIntegrations: parsed }));
  };

  const handleIntegrationsBlur = () => {
    const parsed = Number(integrationsInput);
    const normalized = Number.isFinite(parsed)
      ? Math.max(0, Math.min(10, parsed))
      : input.thirdPartyIntegrations;

    setIntegrationsInput(String(normalized));
    setInput((prev) => ({ ...prev, thirdPartyIntegrations: normalized }));
  };

  const handleReset = () => {
    setInput(defaultInput);
    setPagesInput(String(defaultInput.pages));
    setIntegrationsInput(String(defaultInput.thirdPartyIntegrations));
  };

  return (
    <>
      <Nav variant="estimator" />

      <header className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-cyan-500/15 via-slate-900/75 to-blue-500/10 ring-1 ring-white/15">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
            Quote Estimator
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Instant Project Budget Estimator
          </h1>
          <p className="mt-3 max-w-3xl text-slate-200/90">
            Get a quick budget range based on your project details. This follows
            the same pricing bands used on the freelance page.
          </p>
          <p className="mt-2 max-w-3xl text-xs text-slate-300">
            Tip: start with project type + pages, then enable only the features you truly need.
          </p>
        </div>
      </header>

      <Section
        id="estimator"
        title="Estimate Your Budget"
        icon={<Calculator className="h-5 w-5 text-slate-200" />}
        subtitle="Adjust project details and get a clear estimated range in real time."
      >
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5">
          <div className="rounded-3xl bg-slate-950/45 ring-1 ring-white/10 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-4 py-3">
              <p className="text-xs text-slate-300">
                Fill the scope below to get your estimated budget range.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl bg-white/5 px-3 py-1.5 text-xs text-slate-200 ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Reset to Defaults
              </button>
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-400">Project Basics</div>
            <div>
              <label className="text-xs text-slate-400">Project Type</label>
              <select
                value={input.projectType}
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev,
                    projectType: e.target.value as ProjectTypeOption,
                  }))
                }
                className="mt-1 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-cyan-300/40"
              >
                <option className="text-slate-900">Static Website</option>
                <option className="text-slate-900">Dynamic Website</option>
                <option className="text-slate-900">Web Application</option>
              </select>
              <p className="mt-2 text-xs text-slate-300">{guide.summary}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400">Estimated Pages</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={pagesInput}
                  onChange={(e) => handlePagesChange(e.target.value)}
                  onBlur={handlePagesBlur}
                  placeholder="e.g. 6"
                  className="mt-1 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-cyan-300/40"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400">Complexity</label>
                <select
                  value={input.complexity}
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      complexity: e.target.value as QuoteEstimatorInput["complexity"],
                    }))
                  }
                  className="mt-1 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-cyan-300/40"
                >
                  <option className="text-slate-900">Basic</option>
                  <option className="text-slate-900">Standard</option>
                  <option className="text-slate-900">Advanced</option>
                </select>
              </div>
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-400">Features</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2 text-sm text-slate-200 inline-flex items-center justify-between gap-3">
                Admin Panel (CMS/Dashboard)
                <input
                  type="checkbox"
                  checked={input.hasAdminPanel}
                  onChange={(e) =>
                    setInput((p) => ({ ...p, hasAdminPanel: e.target.checked }))
                  }
                />
              </label>
              <label className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2 text-sm text-slate-200 inline-flex items-center justify-between gap-3">
                Login / User Accounts
                <input
                  type="checkbox"
                  checked={input.needsAuth}
                  onChange={(e) =>
                    setInput((p) => ({ ...p, needsAuth: e.target.checked }))
                  }
                />
              </label>
              <label className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2 text-sm text-slate-200 inline-flex items-center justify-between gap-3">
                Multi-language
                <input
                  type="checkbox"
                  checked={input.multilingual}
                  onChange={(e) =>
                    setInput((p) => ({ ...p, multilingual: e.target.checked }))
                  }
                />
              </label>
              <label className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2 text-sm text-slate-200 inline-flex items-center justify-between gap-3">
                SEO Setup
                <input
                  type="checkbox"
                  checked={input.seoSetup}
                  onChange={(e) =>
                    setInput((p) => ({ ...p, seoSetup: e.target.checked }))
                  }
                />
              </label>
              <label className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 px-3 py-2 text-sm text-slate-200 inline-flex items-center justify-between gap-3">
                Analytics Setup
                <input
                  type="checkbox"
                  checked={input.analyticsSetup}
                  onChange={(e) =>
                    setInput((p) => ({ ...p, analyticsSetup: e.target.checked }))
                  }
                />
              </label>
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-400">Delivery & Support</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-slate-400">
                  3rd Party Integrations
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={integrationsInput}
                  onChange={(e) => handleIntegrationsChange(e.target.value)}
                  onBlur={handleIntegrationsBlur}
                  placeholder="e.g. 2"
                  className="mt-1 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-cyan-300/40"
                />
                <p className="mt-1 text-[11px] text-slate-400">
                  Includes payment gateway, email/API services, maps, and other external integrations.
                </p>
              </div>
              <div>
                <label className="text-xs text-slate-400">Urgency</label>
                <select
                  value={input.urgency}
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      urgency: e.target.value as QuoteEstimatorInput["urgency"],
                    }))
                  }
                  className="mt-1 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-cyan-300/40"
                >
                  <option className="text-slate-900">Normal</option>
                  <option className="text-slate-900">Fast-track</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400">Maintenance Plan</label>
              <select
                value={input.maintenancePlan}
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev,
                    maintenancePlan: e.target.value as QuoteEstimatorInput["maintenancePlan"],
                  }))
                }
                className="mt-1 w-full rounded-2xl bg-white/5 ring-1 ring-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-cyan-300/40"
              >
                <option className="text-slate-900">Self Maintain</option>
                <option className="text-slate-900">Basic</option>
                <option className="text-slate-900">Standard</option>
                <option className="text-slate-900">Premium</option>
              </select>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950/45 ring-1 ring-white/10 p-5 space-y-4 shadow-[0_30px_100px_-60px_rgba(56,189,248,0.6)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 ring-1 ring-cyan-300/25 px-3 py-1 text-xs text-cyan-100">
              <Sparkles className="h-3.5 w-3.5" /> Live Estimate
            </div>

            <div className="rounded-2xl bg-amber-500/10 ring-1 ring-amber-300/30 px-4 py-3">
              <p className="text-xs text-amber-100 leading-relaxed">
                This is an estimation only. Final pricing may be different and may not reflect current market price.
              </p>
              <p className="mt-2 text-xs text-amber-100/90 leading-relaxed">
                Domain, hosting, email services, and third-party subscription fees are covered by the client and are not included in this build estimate.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4">
              <div className="text-xs text-slate-400">Estimated Build (One-Time)</div>
              <div className="mt-1 text-2xl font-semibold text-white">
                {formatRm(result.oneTimeMin)} - {formatRm(result.oneTimeMax)}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4">
                <div className="text-xs text-slate-400">Estimated Yearly Ops</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {formatRm(result.yearlyMin)} - {formatRm(result.yearlyMax)}
                </div>
              </div>
              <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4">
                <div className="text-xs text-slate-400">Maintenance (Monthly)</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {formatRm(result.monthly)}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4 space-y-2">
              {result.notes.map((note, idx) => (
                <p key={idx} className="text-xs text-slate-300">
                  {note}
                </p>
              ))}
            </div>

            <Button href="/freelance" variant="ghost">
              Back to Freelance Page
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
