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
    company,
    projectType,
    budget,
    message,
    recipientEmail,
    subject,
  } = payload;

  if (!name || !email || !projectType || !message) {
    return json(400, { error: "Missing required fields" });
  }

  const toEmail = recipientEmail || "fauzulazim7473@gmail.com";
  const emailSubject = subject || `Freelance Project Inquiry - ${projectType}`;

  const textBody = [
    "New Freelance Inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget || "-"}`,
    "",
    "Project Details:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2>New Freelance Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "-")}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget || "-")}</p>
    <p><strong>Project Details:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
  `;

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
