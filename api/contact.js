import nodemailer from "nodemailer";

const MAX_LENGTHS = {
  name: 100,
  phone: 30,
  service: 100,
  message: 2000,
};

function cleanText(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character],
  );
}

function buildWhatsAppUrl({ name, phone, service, message }) {
  const text = [
    "New website enquiry",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Message: ${message || "N/A"}`,
  ].join("\n");

  return `https://wa.me/919667316333?text=${encodeURIComponent(text)}`;
}

async function sendWithTimeout(transporter, mail, timeoutMs = 8000) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      transporter.close();
      const error = new Error("SMTP delivery timed out");
      error.code = "ETIMEDOUT";
      reject(error);
    }, timeoutMs);
  });

  try {
    return await Promise.race([transporter.sendMail(mail), timeout]);
  } finally {
    clearTimeout(timeoutId);
  }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  let body;

  try {
    body =
      typeof req.body === "string"
        ? JSON.parse(req.body || "{}")
        : req.body || {};
  } catch {
    return res.status(400).json({ message: "Invalid request body" });
  }

  // Silently accept bot submissions so the honeypot is not disclosed.
  if (body.website || body.company) {
    return res.status(200).json({ success: true });
  }

  const name = cleanText(body.name, MAX_LENGTHS.name);
  const phone = cleanText(body.phone, MAX_LENGTHS.phone);
  const service = cleanText(body.service, MAX_LENGTHS.service);
  const message = cleanText(body.message, MAX_LENGTHS.message);
  const whatsappUrl = buildWhatsAppUrl({ name, phone, service, message });

  if (!name || !phone || !service) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  console.info("Contact request received", {
    service,
    hasMessage: Boolean(message),
  });

  const {
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_TO,
    EMAIL_HOST = "smtp.hostinger.com",
    EMAIL_PORT = "465",
    CONTACT_DELIVERY,
  } = process.env;

  if (
    CONTACT_DELIVERY !== "email" ||
    !EMAIL_USER ||
    !EMAIL_PASS ||
    !EMAIL_TO
  ) {
    console.info("Contact request handed off", { delivery: "whatsapp" });
    return res.status(200).json({
      success: true,
      delivery: "whatsapp",
      whatsappUrl,
    });
  }

  try {
    const port = Number.parseInt(EMAIL_PORT, 10) || 465;
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port,
      secure: port === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      connectionTimeout: 5000,
      greetingTimeout: 5000,
      socketTimeout: 8000,
      dnsTimeout: 3000,
    });

    await sendWithTimeout(transporter, {
      from: `"Dreams4U Website" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: `New Contact Request - ${service.replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong> ${escapeHtml(message || "N/A").replace(/\n/g, "<br>")}</p>
      `,
      text: [
        "New Contact Form Submission",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        `Message: ${message || "N/A"}`,
      ].join("\n"),
    });

    transporter.close();
    console.info("Contact request delivered", { delivery: "email" });
    return res.status(200).json({ success: true, delivery: "email" });
  } catch (error) {
    console.error("Contact email failed", {
      code: error.code,
      responseCode: error.responseCode,
      command: error.command,
    });
    console.info("Contact request handed off", {
      delivery: "whatsapp",
      reason: "email-failed",
    });
    return res.status(200).json({
      success: true,
      delivery: "whatsapp",
      whatsappUrl,
    });
  }
}
