import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Monitor,
  Code,
  Search,
  ShoppingCart,
  Smartphone,
  Globe,
  Palette,
  Shield,
  Zap,
  Users,
  Cloud,
  ArrowRight,
  TrendingUp,
  Layout,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design in Faridabad",
    desc: "Modern, responsive and fast-loading website designs for local businesses in Faridabad.",
    features: ["UI/UX Design", "Responsive Layout", "Custom Graphics"],
    price: "₹8K+",
    color: "from-cyan-500 to-blue-500",
    path: "/services/web-development",
  },
  {
    icon: Code,
    title: "React JS Development",
    desc: "High-performance React JS websites with clean UI and scalable architecture.",
    features: ["Next.js", "TypeScript", "State Management"],
    price: "₹15K+",
    color: "from-purple-500 to-pink-500",
    path: "/services/react-development",
  },
  {
    icon: Search,
    title: "SEO Services",
    desc: "Rank your website on Google with local SEO strategies and on-page optimization.",
    features: ["Keyword Research", "On-page SEO", "Local SEO"],
    price: "₹5K+",
    color: "from-green-500 to-emerald-500",
    path: "/services/search-engine-optimization",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Online stores with secure payment gateway and smooth user experience.",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking"],
    price: "₹25K+",
    color: "from-yellow-500 to-orange-500",
    path: "/services/ecommerce",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive Design",
    desc: "Pixel-perfect design that works smoothly on mobile, tablet and desktop.",
    features: ["Mobile-First", "Touch Optimization", "Fast Loading"],
    price: "₹10K+",
    color: "from-red-500 to-rose-500",
    path: "/services/mobile-responsive",
  },
  {
    icon: Globe,
    title: "Business Website",
    desc: "Professional websites tailored for Faridabad startups and service providers.",
    features: ["Brand Identity", "Contact Forms", "Google Maps"],
    price: "₹12K+",
    color: "from-indigo-500 to-violet-500",
    path: "/services/business-website",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centric designs that enhance engagement and drive conversions.",
    features: ["Wireframing", "Prototyping", "User Testing"],
    price: "₹8K+",
    color: "from-amber-500 to-orange-500",
    path: "/services/ui-ux",
  },
  {
    icon: Shield,
    title: "Website Security",
    desc: "Advanced security measures to protect your website from threats.",
    features: ["SSL Certificates", "Firewall", "Regular Updates"],
    price: "₹6K+",
    color: "from-lime-500 to-green-500",
    path: "/services/website-security",
  },
  {
    icon: Cloud,
    title: "Hosting & Maintenance",
    desc: "Reliable hosting solutions with 24/7 monitoring and support.",
    features: ["99.9% Uptime", "Daily Backups", "Tech Support"],
    price: "₹2K/month",
    color: "from-blue-500 to-cyan-500",
    path: "/services/annual-maintenance",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Services",
    desc: "Grow your business online with result-driven digital marketing strategies.",
    features: ["Google Ads", "Social Media Marketing", "Lead Generation"],
    price: "₹7K+",
    color: "from-pink-500 to-rose-500",
    path: "/services/digital-marketing",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Scalable and user-friendly Android & iOS mobile applications for your business.",
    features: ["Android App", "iOS App", "Cross-Platform Apps"],
    price: "₹40K+",
    color: "from-teal-500 to-cyan-500",
    path: "/services/app-development",
  },
  {
    icon: Layout,
    title: "Custom Website Design",
    desc: "Creative and brand-focused website designs tailored to your business needs.",
    features: ["Custom UI Design", "Brand Consistency", "Conversion Focused"],
    price: "₹10K+",
    color: "from-violet-500 to-purple-500",
    path: "/services/custom-website-design",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(path);
  };

  const handleCTAClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <Helmet>
        <title>
          Website Design Services in Faridabad | Professional Web Development
        </title>
        <meta
          name="description"
          content="Professional website design and development services in Faridabad. Get custom websites, e-commerce solutions, SEO, and digital marketing services for your business growth."
        />
        <meta
          name="keywords"
          content="website design Faridabad, web development services, SEO services Faridabad, e-commerce website, mobile responsive design, digital marketing Faridabad"
        />
        <link rel="canonical" href="https://dreams4u.in/services" />
      </Helmet>

      <section
        className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-cyan-50/30"
        id="services"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
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
              <Zap className="w-4 h-4" />
              Our Services
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Website Design Services
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">
                in Faridabad
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We help Faridabad businesses grow online with SEO-friendly and
              conversion-focused websites.
              <span className="block mt-2 text-cyan-600 font-semibold">
                95% Client Satisfaction • 50+ Projects • 100% On-Time Delivery
              </span>
            </p>
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { value: "50+", label: "Projects Completed", icon: "🏆" },
              { value: "45+", label: "Happy Clients", icon: "😊" },
              { value: "<2s", label: "Avg. Load Time", icon: "⚡" },
              { value: "95%", label: "SEO Score", icon: "📈" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon with Gradient */}
                    <div
                      className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${service.color} rounded-2xl text-white shadow-lg mb-6`}
                    >
                      <service.icon className="w-8 h-8" />
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm font-bold rounded-full border border-gray-200">
                        {service.price}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <div className="w-4 h-px bg-gray-300 flex-grow"></div>
                        <span>Key Features</span>
                        <div className="w-4 h-px bg-gray-300 flex-grow"></div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button - Using Link component */}
                    <Link to={service.path} className="mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group/btn`}
                      >
                        <span>Learn More</span>
                        <motion.div
                          animate={{ x: hoveredIndex === index ? 5 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 shadow-2xl shadow-cyan-500/25 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Ready to Transform Your Digital Presence?
                  </h3>
                  <p className="text-cyan-100 mb-6">
                    Get a free website audit and consultation. Let's discuss how
                    we can help your business grow online.
                  </p>
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-cyan-200" />
                    <span className="text-cyan-100">
                      Trusted by 45+ Faridabad Businesses
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={() => handleCTAClick("/contact")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-8 py-4 bg-white text-cyan-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    Get Free Audit
                  </motion.button>
                  <motion.button
                    onClick={() => handleCTAClick("/portfolio")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                  >
                    View Portfolio
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
