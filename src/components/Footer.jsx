import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Send,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "./navbar";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
  ];

  const features = [
    { icon: <Clock size={16} />, text: "24/7 Support" },
    { icon: <Shield size={16} />, text: "Data Secure" },
    { icon: <Send size={16} />, text: "Fast Delivery" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative -top-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-700 rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Stay Updated with Latest Trends
              </h3>
              <p className="text-cyan-100">
                Subscribe to our newsletter for web design tips, SEO insights,
                and exclusive offers.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                Subscribe <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img
                  src="/images/Logo.png"
                  alt="Dreams4U Logo"
                  className="h-12"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Dreams4U
                </span>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              We transform ideas into digital masterpieces. As Faridabad's
              premier web design agency, we deliver innovative solutions that
              drive growth and success.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="text-cyan-400">{feature.icon}</div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 flex items-center gap-2">
              <ChevronRight size={20} className="text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 flex items-center gap-2">
              <ChevronRight size={20} className="text-cyan-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li
                  key={service.path}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400"
                    />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 flex items-center gap-2">
              <ChevronRight size={20} className="text-cyan-400" />
              Contact Us
            </h4>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    1361, Bhagat Singh Colony, Sector 4<br />
                    Ballabhgarh, Faridabad
                    <br />
                    Haryana 121004
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg">
                  <Phone size={20} className="text-cyan-400" />
                </div>
                <a
                  href="tel:+919667316333"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  +91 9667316333
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <a
                  href="mailto:info@dreams4u.in"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  info@dreams4u.in
                </a>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold text-gray-300 mb-3">
                  Follow Us
                </h5>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 rounded-lg transition-all duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Dreams4U. All rights reserved. Made with{" "}
              <Heart size={14} className="inline text-red-500 animate-pulse" />{" "}
              in Faridabad
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Cookie Policy
              </Link>
              <span className="text-gray-600">•</span>
              <span className="text-cyan-400 font-semibold flex items-center gap-1">
                <Shield size={14} />
                ISO 27001 Certified
              </span>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl shadow-cyan-500/30 z-50"
          aria-label="Back to top"
        >
          <ChevronRight className="w-6 h-6 rotate-270" />
        </motion.button>
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 right-4 text-gray-800 text-sm opacity-10">
        <span className="font-bold text-lg">DREAMS4U</span>
      </div>
    </footer>
  );
}

export default Footer;
