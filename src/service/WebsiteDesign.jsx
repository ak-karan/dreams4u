import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ComputerDesktopIcon,
  EyeIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function WebsiteDesign() {
  const services = [
    {
      icon: <PaintBrushIcon className="h-10 w-10" />,
      title: "Custom Website Design",
      description:
        "Unique designs tailored to your brand identity and business goals.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Responsive Web Design",
      description:
        "Designs that work perfectly on all devices - mobile, tablet, and desktop.",
    },
    {
      icon: <SparklesIcon className="h-10 w-10" />,
      title: "UI/UX Design",
      description:
        "User-centered designs focusing on intuitive navigation and beautiful interfaces.",
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Conversion-Focused Design",
      description:
        "Designs optimized to convert visitors into customers and leads.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "SEO-Friendly Design",
      description:
        "Designs built with SEO best practices for better Google rankings.",
    },
    {
      icon: <BoltIcon className="h-10 w-10" />,
      title: "Fast Loading Design",
      description:
        "Optimized designs that load quickly for better user experience.",
    },
  ];

  const designPackages = [
    {
      name: "Basic Website Design",
      price: "₹ 8,000",
      features: [
        "Custom Design (5 Pages)",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "1 Month Support",
      ],
      bestFor: "Startups & Individuals",
    },
    {
      name: "Business Website Design",
      price: "₹ 18,000",
      features: [
        "Custom Design (10 Pages)",
        "Mobile Responsive",
        "Advanced SEO Setup",
        "Multiple Contact Forms",
        "Gallery/Portfolio",
        "Blog Setup",
        "Google Analytics",
        "3 Months Support",
      ],
      bestFor: "Small & Medium Businesses",
      popular: true,
    },
    {
      name: "Premium Website Design",
      price: "₹ 35,000",
      features: [
        "Custom Design (Unlimited Pages)",
        "Mobile Responsive",
        "Complete SEO Optimization",
        "E-commerce Ready",
        "Custom Animations",
        "Advanced Features",
        "Performance Optimization",
        "6 Months Support",
      ],
      bestFor: "Enterprises & E-commerce",
    },
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "Understand your business, competitors, and target audience.",
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Create structural layouts and user flow diagrams.",
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Develop color schemes, typography, and visual elements.",
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Build interactive prototypes for testing and feedback.",
    },
    {
      step: "05",
      title: "Development Ready",
      description: "Prepare final designs with specifications for developers.",
    },
  ];

  const benefits = [
    {
      title: "Professional Image",
      description:
        "A well-designed website establishes credibility and trust with visitors.",
    },
    {
      title: "Better User Experience",
      description:
        "Intuitive designs keep visitors engaged and reduce bounce rates.",
    },
    {
      title: "Higher Conversions",
      description:
        "Strategic design elements guide visitors toward desired actions.",
    },
    {
      title: "Mobile Accessibility",
      description:
        "Reach the growing number of users browsing on mobile devices.",
    },
  ];

  const designPrinciples = [
    "Simplicity & Clarity",
    "Consistency & Harmony",
    "Visual Hierarchy",
    "Color Psychology",
    "Typography Readability",
    "Whitespace Balance",
    "Intuitive Navigation",
    "Accessibility Standards",
  ];

  return (
    <>
      <Helmet>
        <title>
          Website Design Services in Faridabad | Professional Web Design Agency
        </title>
        <meta
          name="description"
          content="Professional website design services in Faridabad. Get custom, responsive, and SEO-friendly website designs that convert visitors into customers. Modern designs for businesses of all sizes."
        />
        <meta
          name="keywords"
          content="website design Faridabad, web design services, custom website design, responsive web design, UI/UX design, professional website design, website design company Faridabad"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/website-design"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Website Design Services in Faridabad | Dreams4U"
        />
        <meta
          property="og:description"
          content="Create stunning, responsive websites with our professional design services in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/website-design"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Design Services",
            serviceType: "Web Design",
            provider: {
              "@type": "LocalBusiness",
              name: "Dreams4U",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121004",
                addressCountry: "IN",
              },
              telephone: "+91-96673-16333",
              priceRange: "₹ 8,000 - ₹ 35,000",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Design Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Create stunning, responsive, and conversion-focused websites that
              attract, engage, and convert visitors into loyal customers for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Free Design Consultation
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-cyan-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Call: +91-96673-16333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-700">75%</div>
              <div className="text-gray-600">Credibility Based on Design</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">50%</div>
              <div className="text-gray-600">Higher Conversion Rates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">94%</div>
              <div className="text-gray-600">
                First Impressions Design-Based
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">2.6x</div>
              <div className="text-gray-600">
                More Time Spent on Good Design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional Design Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Professional Website Design is Essential
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your website design creates the first impression and significantly
              impacts business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-cyan-500"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Website Design Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions to create exceptional websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-cyan-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/contact"
                  className="text-cyan-600 hover:text-cyan-800 font-medium inline-flex items-center"
                >
                  View Examples →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Website Design Packages
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the perfect design package for your business needs and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg ${pkg.popular ? "ring-4 ring-cyan-400 transform scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {pkg.name}
                </h3>
                <div className="text-cyan-700 text-sm mb-2">{pkg.bestFor}</div>
                <div className="text-3xl font-bold text-cyan-600 mb-6">
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full text-center font-bold py-3 rounded-lg transition duration-300 ${
                    pkg.popular
                      ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Select Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <PaintBrushIcon className="h-16 w-16 text-cyan-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Design Principles
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow proven design principles to create effective and
              beautiful websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <SparklesIcon className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
                <span className="font-medium text-gray-800">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our 5-Step Design Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure exceptional design results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-100 text-cyan-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <EyeIcon className="h-16 w-16 mx-auto mb-6 text-cyan-300" />
            <h2 className="text-3xl font-bold mb-4">
              Design Transformation Impact
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              See how professional design can transform your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">
                Before Redesign
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Outdated design and layout</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Poor mobile responsiveness</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>Low conversion rates</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <span>High bounce rates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-300">
                After Redesign
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Modern, professional design</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Perfect mobile experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>50%+ increase in conversions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Lower bounce rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <ComputerDesktopIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready for a Website Design Makeover?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your online presence with a professionally designed
            website that attracts customers and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Start Your Design Project
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
            >
              Call Now: +91-96673-16333
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Website Design FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about website design services answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does website design cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                Website design packages start from ₹8,000 for basic designs to
                ₹35,000+ for premium designs. The cost depends on the number of
                pages, design complexity, and additional features required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to design a website?
              </h3>
              <p className="text-gray-600">
                Basic website design takes 2-3 weeks, standard business websites
                take 3-4 weeks, and complex designs can take 4-6 weeks. The
                timeline depends on project complexity and client feedback
                speed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you design websites for specific industries?
              </h3>
              <p className="text-gray-600">
                Yes, we have experience designing websites for various
                industries in Faridabad including healthcare, education, real
                estate, retail, restaurants, professional services, and
                manufacturing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                What's included in your website design services?
              </h3>
              <p className="text-gray-600">
                Our services include research, wireframing, visual design,
                responsive design, SEO-friendly structure, conversion
                optimization, and design handoff for development. We also
                provide design revisions based on your feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsiteDesign;
