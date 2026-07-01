import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  "Website Design",
  "Web Development",
  "Ecommerce Website Development",
  "WordPress Website Development",
  "Custom Website Development",
  "Website Redesign",
  "Landing Page Design",
  "Website Maintenance",
  "SEO Services",
];

function buildWhatsAppUrl({ name, phone, service, message }) {
  const text = [
    "New website enquiry",
    `Name: ${name.trim()}`,
    `Phone: ${phone.trim()}`,
    `Service: ${service.trim()}`,
    `Message: ${message.trim() || "N/A"}`,
  ].join("\n");

  return `https://wa.me/919667316333?text=${encodeURIComponent(text)}`;
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmitError("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 12000);
      let res;

      try {
        res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          signal: controller.signal,
        });
      } catch {
        window.location.assign(buildWhatsAppUrl(formData));
        return;
      } finally {
        window.clearTimeout(timeoutId);
      }

      const result = await res.json().catch(() => ({}));

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Message could not be sent.");
      }

      if (result.delivery === "whatsapp" && result.whatsappUrl) {
        window.location.assign(result.whatsappUrl);
        return;
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
        website: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setSubmitError(
        error.message ||
          "Message could not be sent. Please call or WhatsApp us.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Something Amazing
            </h2>

            <p className="text-cyan-100 text-lg">
              Share your vision with us and we’ll turn it into reality.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              {/* SUCCESS MESSAGE */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-green-500/20 backdrop-blur-xl rounded-3xl"
                  >
                    <div className="text-center">
                      <FaCheckCircle className="text-green-400 w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Thank You!</h3>
                      <p>We’ll contact you soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                {/* 🔒 Honeypot Field (SPAM protection) */}
                <input
                  type="text"
                  name="website"
                  value={formData.website || ""}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
                {/* NAME */}
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    autoComplete="name"
                    maxLength="100"
                    required
                    className="w-full pl-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white"
                  />
                </div>

                {/* PHONE */}
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength="30"
                    required
                    className="w-full pl-12 py-4 bg-white/10 border border-white/20 rounded-xl text-white"
                  />
                </div>

                {/* SERVICE */}
                <div className="relative">
                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300 pointer-events-none" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white appearance-none"
                  >
                    <option value="" className="bg-gray-800">
                      Select Service
                    </option>
                    {services.map((s, i) => (
                      <option key={i} value={s} className="bg-gray-800">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="4"
                  maxLength="2000"
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white resize-none"
                />

                {submitError && (
                  <div
                    className="rounded-xl border border-red-200/30 bg-red-500/20 px-4 py-3 text-sm text-white"
                    role="alert"
                    aria-live="assertive"
                  >
                    {submitError}{" "}
                    <a
                      href="tel:+919667316333"
                      className="font-semibold underline"
                    >
                      Call +91 9667316333
                    </a>
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Opening enquiry..." : "Submit Request"}
                </button>
                <p className="text-center text-xs leading-5 text-cyan-100">
                  If email delivery is unavailable, your enquiry opens in
                  WhatsApp so you can send it directly.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
