import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Rocket,
  Heart,
  Shield,
  Zap,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Dreams4u | Web Design Company in Faridabad</title>
        <meta
          name="description"
          content="Dreams4u is a leading web design company in Faridabad. We create professional, SEO-friendly websites that drive business growth. Learn about our mission, vision, and approach."
        />
        <meta
          name="keywords"
          content="web design company Faridabad, website development Faridabad, SEO services Faridabad, web design agency, digital marketing Faridabad, Dreams4u about"
        />
        <meta
          property="og:title"
          content="About Dreams4u | Professional Web Design Company"
        />
        <meta
          property="og:description"
          content="Transforming businesses with innovative web solutions in Faridabad. Professional, responsive, and high-performance websites."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dreams4u",
            url: "https://dreams4u.in/about",
            logo: "/images/dreams4u.jpg",
            description:
              "Professional web design and development company in Faridabad",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Faridabad",
              addressRegion: "Haryana",
              postalCode: "121004",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+919667316333",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: "Hindi, English",
            },
            sameAs: [
              "https://www.facebook.com/Dreams4u.in/",
              "https://www.instagram.com/dreams4u.in/",
            ],
          })}
        </script>
      </Helmet>

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50 to-cyan-50/30">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25">
              <Sparkles className="w-4 h-4" />
              About Us
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Crafting Digital Excellence
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-700">
                in Faridabad & Beyond
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We transform your vision into a powerful digital reality that
              drives growth and success.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Our Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Story
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    At <strong className="text-cyan-600">Dreams4u</strong>, we
                    believe every business deserves a powerful digital identity.
                    We specialize in designing and developing professional,
                    high-quality websites that combine
                    <span className="font-semibold text-gray-900">
                      {" "}
                      creativity, performance, and functionality
                    </span>
                    .
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Our approach is simple — we understand your vision, align it
                    with modern technology, and transform it into a digital
                    experience that delivers real results. From new website
                    development to service-based platforms, we focus on
                    <span className="font-semibold text-gray-900">
                      {" "}
                      clean design, strong performance, and long-term value
                    </span>
                    .
                  </p>

                  <div className="flex items-center gap-3 text-sm text-cyan-600 font-semibold">
                    <Zap className="w-4 h-4" />
                    <span>50+ Projects Delivered</span>
                    <span className="text-gray-400">•</span>
                    <span>45+ Happy Clients</span>
                    <span className="text-gray-400">•</span>
                    <span>100% Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To create{" "}
                      <strong>innovative, scalable, and result-driven</strong>{" "}
                      web solutions that help brands grow, connect with their
                      audience, and succeed in the digital world.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      To become a{" "}
                      <strong>globally trusted web development company</strong>,
                      known for creativity, quality, and building long-term
                      digital partnerships.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Values & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Core Values */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Our Core Values
                </h2>

                <div className="grid gap-6">
                  {[
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Client-Centric Approach",
                      description:
                        "Your success is our priority. We listen, understand, and deliver exactly what you need.",
                      color: "from-cyan-500 to-blue-500",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "Quality & Excellence",
                      description:
                        "We never compromise on quality. Every project meets the highest standards of excellence.",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: <Rocket className="w-5 h-5" />,
                      title: "Innovation & Technology",
                      description:
                        "Using cutting-edge technologies to create future-ready solutions.",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5" />,
                      title: "Transparency & Trust",
                      description:
                        "Clear communication and honest partnerships built on trust.",
                      color: "from-amber-500 to-orange-500",
                    },
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      className="flex gap-4 group hover:bg-gray-50 p-4 rounded-2xl transition-all"
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <div className="text-white">{value.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Our Impact in Numbers
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "50+", label: "Projects", icon: "🚀" },
                    { value: "45+", label: "Happy Clients", icon: "😊" },
                    { value: "95%", label: "Satisfaction", icon: "⭐" },
                    { value: "100%", label: "On-Time Delivery", icon: "⏱️" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                      <div className="text-xl mt-2">{stat.icon}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Dreams4u?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're not just a web design company - we're your digital growth
                partners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Local Expertise",
                  description:
                    "Based in Faridabad, we understand the local market and business needs.",
                  icon: "📍",
                },
                {
                  title: "SEO-First Approach",
                  description:
                    "Every website is built with SEO best practices for better rankings.",
                  icon: "🔍",
                },
                {
                  title: "24/7 Support",
                  description:
                    "Round-the-clock support to ensure your website runs smoothly.",
                  icon: "🛡️",
                },
                {
                  title: "Modern Technology",
                  description:
                    "Using React.js, Next.js, and latest frameworks for superior performance.",
                  icon: "⚡",
                },
                {
                  title: "Custom Solutions",
                  description:
                    "Tailored websites that match your unique business requirements.",
                  icon: "🎨",
                },
                {
                  title: "Affordable Pricing",
                  description:
                    "High-quality solutions at competitive prices for Faridabad businesses.",
                  icon: "💰",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 shadow-2xl shadow-cyan-500/25">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Digital Journey?
              </h3>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your business with a powerful
                website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-700 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg group"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <span>View Our Work</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
