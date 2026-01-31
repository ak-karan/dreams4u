import React from "react";
import { Helmet } from "react-helmet-async";
import {
  CheckCircleIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CurrencyRupeeIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ShoppingCartIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
  DeviceTabletIcon,
  CursorArrowRaysIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  DocumentCheckIcon,
  PresentationChartLineIcon,
  TruckIcon,
  CreditCardIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "../components/ContactForm";

function CustomWebsiteDesign() {
  const pageTitle =
    "Custom Website Design Services in Faridabad | Professional Web Design Company";
  const pageDescription =
    "Get custom website design services in Faridabad. Professional, responsive, SEO-friendly websites tailored to your business needs. Start from ₹8999.";

  const features = [
    {
      icon: <PaintBrushIcon className="w-10 h-10" />,
      title: "Unique Design",
      description: "100% custom designs that reflect your brand identity",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-10 h-10" />,
      title: "Mobile Responsive",
      description: "Perfect display on all devices - mobile, tablet, desktop",
    },
    {
      icon: <BoltIcon className="w-10 h-10" />,
      title: "Fast Loading",
      description: "Optimized for speed with 90+ Google PageSpeed score",
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Secure & Safe",
      description: "SSL certificates & security measures included",
    },
    {
      icon: <CodeBracketIcon className="w-10 h-10" />,
      title: "Clean Code",
      description: "SEO-friendly, well-structured codebase",
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      title: "SEO Ready",
      description: "Built with SEO best practices for better rankings",
    },
  ];

  const packages = [
    {
      name: "Basic Website",
      price: "₹8,999",
      icon: <ComputerDesktopIcon className="w-12 h-12" />,
      features: [
        "5 Custom Web Pages",
        "Mobile Responsive Design",
        "Contact Form",
        "Basic SEO Setup",
        "Social Media Integration",
        "1 Month Free Support",
        "Loading Speed < 3s",
      ],
      bestFor: "Startups & Small Businesses",
      color: "from-blue-50 to-cyan-50",
    },
    {
      name: "Business Website",
      price: "₹18,999",
      icon: <PresentationChartLineIcon className="w-12 h-12" />,
      features: [
        "10-15 Custom Pages",
        "Advanced Responsive Design",
        "CMS Integration",
        "Advanced SEO Setup",
        "WhatsApp Integration",
        "3 Months Free Support",
        "Loading Speed < 2s",
        "Google Analytics Setup",
      ],
      bestFor: "Growing Businesses",
      popular: true,
      color: "from-cyan-50 to-blue-50",
    },
    {
      name: "E-commerce Website",
      price: "₹34,999",
      icon: <ShoppingCartIcon className="w-12 h-12" />,
      features: [
        "Unlimited Products",
        "Secure Payment Gateway",
        "Inventory Management",
        "Order Tracking System",
        "Advanced Security",
        "6 Months Free Support",
        "Loading Speed < 1.5s",
        "Multi-language Support",
      ],
      bestFor: "Online Stores",
      color: "from-indigo-50 to-purple-50",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
      title: "Requirement Analysis",
      description:
        "We understand your business needs, target audience, and goals",
    },
    {
      step: "02",
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Design & Planning",
      description: "Create wireframes and design mockups for your approval",
    },
    {
      step: "03",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Development",
      description: "Convert designs into fully functional website",
    },
    {
      step: "04",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: "Testing & Review",
      description: "Rigorous testing on all devices and browsers",
    },
    {
      step: "05",
      icon: <PaperAirplaneIcon className="w-8 h-8" />,
      title: "Launch & Support",
      description: "Go live with ongoing maintenance and support",
    },
  ];

  // Custom Database Icon Component
  const DatabaseIcon = ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>
  );

  // Custom Cloud Icon Component
  const CloudIcon = ({ className = "w-6 h-6" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
      />
    </svg>
  );

  const technologies = [
    { name: "React.js", icon: <CubeIcon className="w-6 h-6" /> },
    { name: "Next.js", icon: <ArrowPathIcon className="w-6 h-6" /> },
    { name: "Vue.js", icon: <CursorArrowRaysIcon className="w-6 h-6" /> },
    { name: "Node.js", icon: <CodeBracketIcon className="w-6 h-6" /> },
    { name: "MongoDB", icon: <DocumentCheckIcon className="w-6 h-6" /> },
    { name: "MySQL", icon: <DatabaseIcon className="w-6 h-6" /> },
    { name: "WordPress", icon: <GlobeAltIcon className="w-6 h-6" /> },
    { name: "Shopify", icon: <ShoppingCartIcon className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <PaintBrushIcon className="w-6 h-6" /> },
    { name: "AWS", icon: <CloudIcon className="w-6 h-6" /> },
  ];

  const benefits = [
    {
      icon: <CurrencyRupeeIcon className="w-8 h-8" />,
      title: "Cost Effective",
      description: "Get premium quality at affordable prices",
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your website live in 7-15 days",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "24/7 customer support available",
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      title: "Free Maintenance",
      description: "1-6 months free maintenance included",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="custom website design Faridabad, professional web design, responsive website development, web design company Faridabad, e-commerce website design"
        />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="service" />

        {/* Twitter */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://dreams4u.in/services/custom-website-design"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <PaintBrushIcon className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional{" "}
              <span className="text-blue-600">Custom Website Design</span>{" "}
              Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transform your business with stunning, high-performing websites
              designed specifically for your needs. We create digital
              experiences that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <CalendarIcon className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a
                href="tel:+919667316333"
                className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                +91 96673-16333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Custom Website Design?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We don't just build websites, we create digital solutions that
              drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl mb-6">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Affordable Website Design Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages
              include free domain & hosting for 1 year*
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${pkg.color} rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                  pkg.popular
                    ? "border-2 border-blue-500 relative"
                    : "border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-8 ${pkg.popular ? "pt-12" : ""}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-6">
                    <div className="text-blue-600">{pkg.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-blue-600">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 ml-2">one-time</span>
                  </div>

                  <p className="text-gray-600 mb-6 font-medium">
                    Perfect for: {pkg.bestFor}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              * Terms and conditions apply. Contact for custom requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step Website Design Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Transparent process with regular updates and 100% satisfaction
              guarantee
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div className="absolute top-10 -z-10 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-gray-100 opacity-50">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We use the latest technologies to build fast, secure, and scalable
              websites
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="text-blue-600 mr-3 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-gray-800 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <PaperAirplaneIcon className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Dream Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and quote for your custom website design
              project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919667316333"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call Now: +91 96673-16333
              </a>
              <a
                href="mailto:info@dreams4u.in"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            <p className="mt-6 text-blue-100">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomWebsiteDesign;
