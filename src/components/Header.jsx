import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "./navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-cyan-400" />
              <a
                href="tel:+919667316333"
                className="hover:text-cyan-400 transition-colors"
              >
                +91 9667316333
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Mail className="w-3 h-3 text-cyan-400" />
              <a
                href="mailto:info@dreams4u.in"
                className="hover:text-cyan-400 transition-colors"
              >
                info@dreams4u.in
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>Mon-Sat: 9AM - 8PM</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-cyan-300">
              <Shield className="w-3 h-3" />
              <span className="text-xs">ISO 27001 Certified</span>
            </div>
            <div className="h-4 w-px bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-3 h-3 text-yellow-400" />
              <span className="text-xs">50+ Projects Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 py-2"
            : "bg-gradient-to-r from-white via-gray-50 to-white py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            {!scrolled && (
              <div className="hidden lg:block">
                <Link to="/">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Dreams4U
                  </div>
                  <div className="text-xs text-gray-500 -mt-1">
                    Digital Excellence
                  </div>
                </Link>
              </div>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-cyan-600 transition-colors group">
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-6 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                  >
                    {/* Mega Menu Header */}
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-5 h-5" />
                        <div>
                          <h3 className="font-bold">Our Services</h3>
                          <p className="text-sm text-cyan-100">
                            Transform your digital presence
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="p-4 grid grid-cols-2 gap-3">
                      {services.slice(0, 6).map((service, index) => (
                        <motion.div
                          key={service.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <NavLink
                            to={service.path}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 group transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              <service.icon className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800 group-hover:text-cyan-700">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                Learn more →
                              </div>
                            </div>
                          </NavLink>
                        </motion.div>
                      ))}
                    </div>

                    {/* View All Button */}
                    <div className="p-4 border-t border-gray-100">
                      <Link
                        to="/services"
                        className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-xl hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700 transition-all group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Navigation Links */}
            {[
              { path: "/about", label: "About Us" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/blog", label: "Blog" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <motion.div
                key={item.path}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-semibold relative group ${
                      isActive
                        ? "text-cyan-600"
                        : "text-gray-700 hover:text-cyan-600"
                    }`
                  }
                >
                  {item.label}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 ${
                      location.pathname === item.path
                        ? "w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://wa.me/919667316333"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.a>

            <motion.a
              href="tel:+919667316333"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Mobile Services Accordion */}
                <div className="mb-6">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-cyan-600" />
                      <span className="font-semibold text-gray-800">
                        Services
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 ml-4 space-y-3">
                          {services.map((service) => (
                            <NavLink
                              key={service.path}
                              to={service.path}
                              onClick={() => {
                                setMenuOpen(false);
                                setServicesOpen(false);
                              }}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-8 h-8 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                                <service.icon className="w-4 h-4 text-cyan-600" />
                              </div>
                              <span className="font-medium text-gray-700">
                                {service.name}
                              </span>
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {[
                    { path: "/", label: "Home", icon: "🏠" },
                    { path: "/about", label: "About Us", icon: "👥" },
                    { path: "/portfolio", label: "Portfolio", icon: "🎯" },
                    { path: "/blog", label: "Blog", icon: "📝" },
                    { path: "/contact", label: "Contact", icon: "📞" },
                  ].map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 p-4 rounded-xl transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 border-l-4 border-cyan-500"
                            : "hover:bg-gray-50 text-gray-700"
                        }`
                      }
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-semibold">{item.label}</span>
                    </NavLink>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-600" />
                    Quick Contact
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="tel:+919667316333"
                      className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Us</div>
                        <div className="text-sm text-gray-600">
                          +91 9667316333
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/919667316333"
                      className="flex items-center gap-3 p-3 bg-white rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <FaWhatsapp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm text-gray-600">
                          Instant Chat
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-sm text-gray-600">
                          Faridabad, Haryana
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
