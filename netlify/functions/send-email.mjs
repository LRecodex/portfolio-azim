const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

function json(statusCode, payload) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || "Portfolio Contact";

  if (!apiKey || !senderEmail) {
    return json(500, {
      error:
        "Server email is not configured. Missing BREVO_API_KEY or BREVO_SENDER_EMAIL.",
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const {
    name,
    email,
    phone,
    company,
    projectType,
    budget,
    message,
    recipientEmail,
    subject,
  } = payload;

  if (!name || !email || !phone || !projectType || !message) {
    return json(400, { error: "Missing required fields" });
  }

  const toEmail = recipientEmail || "fauzulazim7473@gmail.com";
  const emailSubject = subject || `Freelance Project Inquiry - ${projectType}`;

  const submittedAt = new Date().toLocaleString("en-MY", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kuala_Lumpur",
  });

  const textBody = [
    "New Freelance Project Inquiry",
    "",
    `Submitted: ${submittedAt} (Asia/Kuala_Lumpur)`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Company: ${company || "-"}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget || "-"}`,
    "",
    "Project Details",
    "---------------",
    message,
    "",
    "This message was sent from https://fauzulazim.com/freelance",
  ].join("\n");

  const htmlBody = `
  <div style="margin:0;padding:0;background:#f4f6fb;font-family:Inter,Arial,sans-serif;color:#0f172a;">
    <div style="max-width:680px;margin:24px auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
      <div style="padding:20px 24px;background:linear-gradient(120deg,#0f172a,#1e293b);color:#ffffff;">
        <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">Fauzul Portfolio</p>
        <h2 style="margin:8px 0 0 0;font-size:20px;line-height:1.3;">New Freelance Project Inquiry</h2>
      </div>
      <div style="padding:20px 24px;">
        <p style="margin:0 0 14px 0;font-size:14px;color:#334155;">
          Submitted on <strong>${escapeHtml(submittedAt)}</strong> (Asia/Kuala_Lumpur)
        </p>
        <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#64748b;width:150px;">Name</td><td style="padding:8px 0;color:#0f172a;font-weight:600;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;color:#0f172a;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;color:#0f172a;">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Company</td><td style="padding:8px 0;color:#0f172a;">${escapeHtml(company || "-")}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Project Type</td><td style="padding:8px 0;color:#0f172a;">${escapeHtml(projectType)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;">Budget</td><td style="padding:8px 0;color:#0f172a;">${escapeHtml(budget || "-")}</td></tr>
        </table>

        <div style="margin-top:16px;padding:14px;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
          <p style="margin:0 0 8px 0;font-size:13px;color:#475569;font-weight:600;">Project Details</p>
          <pre style="margin:0;white-space:pre-wrap;font-family:Inter,Arial,sans-serif;font-size:14px;color:#0f172a;line-height:1.55;">${escapeHtml(message)}</pre>
        </div>
      </div>
      <div style="padding:12px 24px;border-top:1px solid #e2e8f0;background:#f8fafc;font-size:12px;color:#64748b;">
        Sent from <a href="https://fauzulazim.com/freelance" style="color:#2563eb;text-decoration:none;">fauzulazim.com/freelance</a>
      </div>
    </div>
  </div>`;

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          email: senderEmail,
          name: senderName,
        },
        to: [{ email: toEmail }],
        replyTo: { email, name },
        subject: emailSubject,
        textContent: textBody,
        htmlContent: htmlBody,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return json(502, {
        error:
          errorData?.message ||
          "Email provider rejected the request. Please try again later.",
      });
    }

    return json(200, { ok: true, message: "Email sent." });
  } catch {
    return json(500, {
      error: "Failed to contact email provider. Please try again later.",
    });
  }
}
