import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaUser,
  FaPhone,
  FaChevronDown,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  "Web Development",
  "SEO Optimization",
  "Digital Marketing",
  "App Development",
  "UI / UX Design",
  "E-commerce Solutions",
  "Brand Identity",
  "Social Media Marketing",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", service: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert("Failed to send message. Try again.");
      console.error(error);
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
                {/* NAME */}
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
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
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
