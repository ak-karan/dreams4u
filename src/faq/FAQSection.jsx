import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaGlobe,
  FaMobileAlt,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const categories = [
  { id: "all", label: "All Questions", icon: <FaGlobe /> },
  { id: "pricing", label: "Pricing", icon: <FaMobileAlt /> },
  { id: "timeline", label: "Timeline", icon: <FaClock /> },
  { id: "seo", label: "SEO", icon: <FaRocket /> },
  { id: "services", label: "Services", icon: <FaShieldAlt /> },
];

const FAQSection = ({ faqs = homeFaqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25">
            <FaSearch className="w-4 h-4" />
            FAQ Center
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Frequently Asked Questions
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our web design and
            development services in Faridabad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Column - Left 2/3 */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all shadow-lg"
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg"
                      : "bg-white text-gray-700 border-gray-300 hover:border-cyan-400"
                  }`}
                >
                  <span className="text-sm">{category.icon}</span>
                  <span className="text-sm font-medium">{category.label}</span>
                </button>
              ))}
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                      <motion.div
                        key={faq.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                          isOpen
                            ? "border-cyan-500"
                            : "border-transparent hover:border-cyan-200"
                        }`}
                      >
                        <motion.button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full flex justify-between items-center p-6 text-left"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <div className="flex-1 pr-8">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                                  isOpen
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                    : "bg-cyan-100 text-cyan-600"
                                }`}
                              >
                                {faq.id}
                              </span>
                              <span className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {faq.question}
                            </h3>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                              isOpen
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                                {faq.details && (
                                  <div className="mt-4 p-4 bg-cyan-50 rounded-xl">
                                    <p className="text-sm text-cyan-700">
                                      {faq.details}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <FaSearch className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-500">
                      Try searching with different keywords or browse all
                      categories
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Still have questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our team is here to
                help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                  Contact Support
                </button>
                <button className="px-6 py-3 bg-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>

          {/* Map Column - Right 1/3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-500" />
                  Our Location
                </h3>
                <p className="text-gray-600 mt-2">Visit us in Faridabad</p>
              </div>

              <div className="relative h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.4090196783773!2d77.32319177390553!3d28.34648119701596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbcc9a9095d1%3A0x62086d3c2f197ba8!2sDreams4u!5e0!3m2!1sen!2sin!4v1769553681406!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dreams4u Location"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-sm font-semibold text-gray-900">
                      Dreams4u Office
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      1361, Bhagat Singh Colony, Sector 4, Ballabhgarh,
                      Faridabad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <FaPhoneAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Call Us</p>
                    <a
                      href="tel:+919667316333"
                      className="text-lg font-semibold hover:text-cyan-400 transition-colors"
                    >
                      +91 9667316333
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email Us</p>
                    <a
                      href="mailto:info@dreams4u.in"
                      className="text-lg font-semibold hover:text-cyan-400 transition-colors"
                    >
                      info@dreams4u.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Business Hours</p>
                    <p className="text-lg font-semibold">
                      Mon - Sat: 9AM - 8PM
                    </p>
                    <p className="text-sm text-gray-400">Sunday: 10AM - 6PM</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Get Directions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
