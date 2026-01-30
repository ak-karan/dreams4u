import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", service: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-600 to-violet-700 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
              <FaPaperPlane className="w-4 h-4" />
              Get Started
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's Build Something{" "}
              <span className="relative">
                <span className="relative z-10">Amazing</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-cyan-400 to-transparent -z-0 opacity-50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </span>{" "}
              Together
            </h2>

            <p className="text-xl text-cyan-100 leading-relaxed max-w-xl">
              Share your vision with us, and let's transform your ideas into a
              stunning digital reality. We're here to help you succeed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              {[
                { value: "24h", label: "Response Time" },
                { value: "95%", label: "Satisfaction" },
                { value: "50+", label: "Projects Done" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                >
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-cyan-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mt-8"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">Simran Rajput</div>
                  <div className="text-sm text-cyan-200">CEO, Dreams4u</div>
                </div>
              </div>
              <p className="text-cyan-100 italic">
                "Dreams4u delivered beyond expectations. Their attention to
                detail and professional approach made all the difference!"
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-1 border border-white/20 shadow-2xl">
              {/* Form Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-3xl blur-xl opacity-50"></div>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-3xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center p-8"
                    >
                      <FaCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Thank You!
                      </h3>
                      <p className="text-green-100">
                        We'll contact you within 24 hours.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Get A Free Quote
                  </h3>
                  <p className="text-cyan-200">
                    Fill the form below and we'll get back to you soon
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-300 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-300 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative">
                    <div className="relative">
                      <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-300 w-5 h-5 pointer-events-none" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-800">
                          Select Service
                        </option>
                        {services.map((service, index) => (
                          <option
                            key={index}
                            value={service}
                            className="bg-gray-800"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="4"
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl text-lg transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:shadow-2xl hover:shadow-cyan-500/25"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        <FaPaperPlane className="w-5 h-5" />
                        Submit Request
                      </div>
                    )}
                  </motion.button>
                </form>

                {/* Privacy Note */}
                <p className="text-center text-cyan-200 text-sm mt-6">
                  Your information is secure. We never share your details.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Import this at the top
import { AnimatePresence } from "framer-motion";

export default ContactForm;
