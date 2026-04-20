import type { FreelancePricingRow, ProjectTypeOption } from "../types/freelance";

export type MaintenancePlan = "Self Maintain" | "Basic" | "Standard" | "Premium";
export type ComplexityLevel = "Basic" | "Standard" | "Advanced";
export type UrgencyLevel = "Normal" | "Fast-track";

export type ProjectTypeGuide = {
  summary: string;
  bestFor: string;
  examples: string;
  budget: string;
};

export type QuoteEstimatorInput = {
  projectType: ProjectTypeOption;
  pages: number;
  complexity: ComplexityLevel;
  hasAdminPanel: boolean;
  needsAuth: boolean;
  thirdPartyIntegrations: number;
  multilingual: boolean;
  seoSetup: boolean;
  analyticsSetup: boolean;
  maintenancePlan: MaintenancePlan;
  urgency: UrgencyLevel;
};

export type QuoteEstimatorResult = {
  oneTimeMin: number;
  oneTimeMax: number;
  yearlyMin: number;
  yearlyMax: number;
  monthly: number;
  notes: string[];
};

export const developmentRows: FreelancePricingRow[] = [
  { item: "Static Website", price: "RM 800 to RM 2,500", details: "1 to 2 revision rounds" },
  { item: "Dynamic Website", price: "RM 2,500 to RM 7,000", details: "2 to 3 revision rounds" },
  { item: "Web Application", price: "RM 8,000 to RM 15,000+", details: "3 to 5 revision rounds" },
];

export const hostingRows: FreelancePricingRow[] = [
  { item: "Domain", price: "RM 50 to RM 150 / year", details: ".com / .com.my" },
  { item: "Static Hosting", price: "FREE to RM 100 / year", details: "Netlify / Vercel" },
  { item: "Dynamic Hosting", price: "RM 300 to RM 800 / year", details: "Shared hosting / VPS" },
  { item: "VPS Server", price: "RM 800 to RM 2,000+ / year", details: "Recommended for web apps" },
];

export const maintenanceRows: FreelancePricingRow[] = [
  { item: "Self Maintain", price: "FREE", details: "Client handles everything" },
  { item: "Basic", price: "RM 100 / month", details: "Backup + updates" },
  { item: "Standard", price: "RM 200 / month", details: "Support + updates (2 minor changes/month)" },
  { item: "Premium", price: "RM 400 / month", details: "Full support (5 minor changes/month)" },
];

export const addOnRows: FreelancePricingRow[] = [
  { item: "Domain Setup", price: "RM 50 to RM 150", details: "Register domain" },
  { item: "Hosting Setup", price: "RM 100 to RM 300", details: "Deploy website" },
  { item: "Extra Page", price: "RM 150 to RM 300", details: "Per page" },
  { item: "Content Upload", price: "RM 100 to RM 300", details: "Upload content" },
  { item: "Payment Integration", price: "RM 500 to RM 1,000", details: "FPX / Stripe" },
];

export const changePolicyRows: FreelancePricingRow[] = [
  { item: "Minor", price: "RM 50 to RM 100", details: "Text/image change" },
  { item: "Medium", price: "RM 100 to RM 300", details: "Layout adjustment" },
  { item: "Major", price: "RM 300 to RM 1,000+", details: "New page" },
  { item: "Feature", price: "Quote", details: "Login/payment system" },
];

export const projectTypeGuides: Record<ProjectTypeOption, ProjectTypeGuide> = {
  "Static Website": {
    summary: "Best for simple company profiles and landing pages that rarely change.",
    bestFor: "Portfolio, personal brand, corporate brochure site",
    examples: "Landing page, company profile, event microsite",
    budget: "RM 800 to RM 2,500",
  },
  "Dynamic Website": {
    summary: "Best for content that updates regularly and needs admin control.",
    bestFor: "Company site with blog/news, listing pages, CMS updates",
    examples: "Blog/news portal, product catalog, booking/registration site",
    budget: "RM 2,500 to RM 7,000",
  },
  "Web Application": {
    summary: "Best for business operations, workflows, and custom product logic.",
    bestFor: "Internal systems, dashboards, SaaS MVP, portal systems",
    examples: "Point of Sale (POS), CRM/ERP dashboard, membership portal",
    budget: "RM 8,000 to RM 15,000+",
  },
};

const complexityMultiplier: Record<ComplexityLevel, number> = {
  Basic: 1,
  Standard: 1.2,
  Advanced: 1.45,
};

const maintenanceMonthly: Record<MaintenancePlan, number> = {
  "Self Maintain": 0,
  Basic: 100,
  Standard: 200,
  Premium: 400,
};

const baseBuildRange: Record<ProjectTypeOption, { min: number; max: number; includedPages: number }> = {
  "Static Website": { min: 800, max: 2500, includedPages: 3 },
  "Dynamic Website": { min: 2500, max: 7000, includedPages: 8 },
  "Web Application": { min: 8000, max: 15000, includedPages: 12 },
};

const annualOpsRange: Record<ProjectTypeOption, { min: number; max: number }> = {
  "Static Website": { min: 50, max: 250 },
  "Dynamic Website": { min: 350, max: 950 },
  "Web Application": { min: 850, max: 2150 },
};

function round(value: number) {
  return Math.round(value / 50) * 50;
}

export function formatRm(value: number) {
  return `RM ${value.toLocaleString("en-MY")}`;
}

export function estimateQuote(input: QuoteEstimatorInput): QuoteEstimatorResult {
  const base = baseBuildRange[input.projectType];
  const extraPages = Math.max(0, input.pages - base.includedPages);

  let min = base.min;
  let max = base.max;

  min += extraPages * 150;
  max += extraPages * 300;

  if (input.needsAuth) {
    min += 700;
    max += 1500;
  }

  if (input.hasAdminPanel) {
    min += 900;
    max += 2200;
  }

  if (input.thirdPartyIntegrations > 0) {
    min += input.thirdPartyIntegrations * 300;
    max += input.thirdPartyIntegrations * 1200;
  }

  if (input.multilingual) {
    min += 400;
    max += 1400;
  }

  if (input.seoSetup) {
    min += 250;
    max += 600;
  }

  if (input.analyticsSetup) {
    min += 150;
    max += 350;
  }

  const complexity = complexityMultiplier[input.complexity];
  min *= complexity;
  max *= complexity;

  if (input.urgency === "Fast-track") {
    min *= 1.15;
    max *= 1.3;
  }

  const yearly = annualOpsRange[input.projectType];

  const notes = [
    "Estimate range is based on current public freelance pricing bands.",
    "Final quote is confirmed after scope lock (features, integrations, timeline).",
  ];

  if (input.urgency === "Fast-track") {
    notes.push("Fast-track timeline increases effort and cost.");
  }
  if (input.thirdPartyIntegrations >= 3) {
    notes.push("Multiple third-party integrations can increase testing and QA scope.");
  }

  return {
    oneTimeMin: round(min),
    oneTimeMax: round(max),
    yearlyMin: yearly.min,
    yearlyMax: yearly.max,
    monthly: maintenanceMonthly[input.maintenancePlan],
    notes,
  };
}
