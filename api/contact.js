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
  if (body.company) {
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

  const {
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_TO,
    EMAIL_HOST = "smtp.hostinger.com",
    CONTACT_DELIVERY,
  } = process.env;

  if (
    CONTACT_DELIVERY === "whatsapp" ||
    !EMAIL_USER ||
    !EMAIL_PASS ||
    !EMAIL_TO
  ) {
    if (CONTACT_DELIVERY !== "whatsapp") {
      console.error("Contact form email configuration is incomplete");
    }
    return res.status(200).json({
      success: true,
      delivery: "whatsapp",
      whatsappUrl,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
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

    return res.status(200).json({ success: true, delivery: "email" });
  } catch (error) {
    console.error("Contact email failed", {
      code: error.code,
      responseCode: error.responseCode,
      command: error.command,
    });
    return res.status(200).json({
      success: true,
      delivery: "whatsapp",
      whatsappUrl,
    });
  }
}
