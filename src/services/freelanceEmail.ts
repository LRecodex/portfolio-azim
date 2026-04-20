import type { FreelanceInquiryForm } from "../types/freelance";

export function buildFreelanceMailto(form: FreelanceInquiryForm) {
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
}

export async function sendFreelanceInquiry(form: FreelanceInquiryForm) {
  const payload = {
    ...form,
    recipientEmail: "fauzulazim7473@gmail.com",
    subject: `Freelance Project Inquiry - ${form.projectType}`,
  };

  const response = await fetch("/.netlify/functions/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => null)) as
      | { error?: string }
      | null;
    throw new Error(errorBody?.error || "Failed to send email.");
  }
}
