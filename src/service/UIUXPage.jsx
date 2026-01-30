import React from "react";
import { Helmet } from "react-helmet-async";
import {
  PencilSquareIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

function UIUXPage() {
  const services = [
    {
      icon: <PencilSquareIcon className="h-10 w-10" />,
      title: "User Research & Analysis",
      description:
        "Understand user needs, behaviors, and pain points through comprehensive research.",
    },
    {
      icon: <ComputerDesktopIcon className="h-10 w-10" />,
      title: "Wireframing & Prototyping",
      description:
        "Create low and high-fidelity prototypes to visualize user flows and interactions.",
    },
    {
      icon: <PaintBrushIcon className="h-10 w-10" />,
      title: "Visual UI Design",
      description:
        "Design beautiful, consistent interfaces with proper color schemes and typography.",
    },
    {
      icon: <CursorArrowRaysIcon className="h-10 w-10" />,
      title: "Interaction Design",
      description:
        "Design intuitive interactions, animations, and micro-interactions for better engagement.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Responsive Design",
      description:
        "Create designs that work perfectly across all devices and screen sizes.",
    },
    {
      icon: <PuzzlePieceIcon className="h-10 w-10" />,
      title: "Design Systems",
      description:
        "Build comprehensive design systems for consistency and scalability.",
    },
  ];

  const benefits = [
    {
      title: "Increased User Engagement",
      description:
        "Well-designed interfaces keep users engaged and reduce bounce rates.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Optimized user flows lead to more conversions and business growth.",
    },
    {
      title: "Reduced Development Costs",
      description:
        "Clear designs minimize rework and streamline development processes.",
    },
    {
      title: "Competitive Advantage",
      description: "Superior user experience sets you apart from competitors.",
    },
  ];

  const designProcess = [
    {
      phase: "Discover",
      steps: [
        "User Research",
        "Competitor Analysis",
        "User Personas",
        "Journey Mapping",
      ],
    },
    {
      phase: "Define",
      steps: [
        "Information Architecture",
        "User Flows",
        "Wireframing",
        "Content Strategy",
      ],
    },
    {
      phase: "Design",
      steps: [
        "Visual Design",
        "Prototyping",
        "Interaction Design",
        "Responsive Design",
      ],
    },
    {
      phase: "Test",
      steps: [
        "Usability Testing",
        "User Feedback",
        "A/B Testing",
        "Performance Analysis",
      ],
    },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Adobe Creative Suite",
    "Miro",
    "Zeplin",
    "Proto.io",
    "Webflow",
    "Marvel",
  ];

  const portfolioItems = [
    {
      category: "E-commerce Platform",
      description: "Complete redesign increasing conversions by 45%",
    },
    {
      category: "Healthcare App",
      description: "Mobile app design with 4.8-star user rating",
    },
    {
      category: "SAAS Dashboard",
      description: "Complex dashboard simplifying user workflows",
    },
    {
      category: "Educational Website",
      description: "Responsive design for better student engagement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          UI/UX Design Services in Faridabad | User Interface Design Agency
        </title>
        <meta
          name="description"
          content="Professional UI/UX design services in Faridabad. Create beautiful, user-friendly interfaces that enhance user experience, drive conversions, and improve customer satisfaction for your website or app."
        />
        <meta
          name="keywords"
          content="UI/UX design Faridabad, user experience design, user interface design, website design agency, mobile app design, wireframing, prototyping, responsive design, design thinking"
        />
        <link rel="canonical" href="https://dreams4u.in/services/ui-ux" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="UI/UX Design Services in Faridabad | Dreams4U"
        />
        <meta
          property="og:description"
          content="Create exceptional user experiences with our professional UI/UX design services in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dreams4u.in/services/ui-ux" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "UI/UX Design Services",
            serviceType: "Design Services",
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
              priceRange: "₹ 8,000 - ₹ 50,000",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-800 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              UI/UX Design Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-pink-100">
              Create beautiful, intuitive, and user-friendly designs that
              enhance user experience, drive conversions, and make your digital
              products stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Design Consultation
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
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
              <div className="text-3xl font-bold text-pink-700">75%</div>
              <div className="text-gray-600">Judgment Based on Design</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">88%</div>
              <div className="text-gray-600">Less Likely to Return</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">50%</div>
              <div className="text-gray-600">Increase in Conversions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-700">2.6x</div>
              <div className="text-gray-600">Higher Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why UI/UX Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why UI/UX Design is Crucial for Your Business
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Great design isn't just about looks—it's about creating meaningful
              experiences that drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-pink-500"
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

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our UI/UX Design Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions to create exceptional user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-pink-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/contact"
                  className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center"
                >
                  Learn More →
                </a>
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
              Our Design Thinking Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a systematic design process to ensure exceptional
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100"
              >
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {phase.phase}
                </h3>
                <ul className="space-y-2">
                  {phase.steps.map((step, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Tools We Master</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We use industry-standard tools to create pixel-perfect designs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Design Portfolio Highlights
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Examples of successful design projects we've delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
              >
                <SparklesIcon className="h-8 w-8 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {item.category}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI vs UX Explanation */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UI vs UX: Understanding the Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-100 text-pink-600 p-3 rounded-lg">
                  <EyeIcon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">UI Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>User Interface</strong> focuses on the visual aspects of
                a product—how it looks and feels.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500 mr-2" />
                  Visual design and aesthetics
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500 mr-2" />
                  Color schemes and typography
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500 mr-2" />
                  Button styles and icons
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500 mr-2" />
                  Spacing and layout
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-rose-100 text-rose-600 p-3 rounded-lg">
                  <CursorArrowRaysIcon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">UX Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>User Experience</strong> focuses on the overall feel and
                functionality—how it works and performs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-rose-500 mr-2" />
                  User research and testing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-rose-500 mr-2" />
                  Information architecture
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-rose-500 mr-2" />
                  User flows and journey mapping
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-rose-500 mr-2" />
                  Usability and accessibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <PaintBrushIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's create designs that not only look beautiful but also deliver
            exceptional user experiences and business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Start Design Project
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-pink-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
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
              UI/UX Design FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about UI/UX design services answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does UI/UX design cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                UI/UX design projects start from ₹8,000 for basic wireframes to
                ₹50,000+ for comprehensive design systems. The cost depends on
                project complexity, number of screens, and research
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does a typical UI/UX design project take?
              </h3>
              <p className="text-gray-600">
                Basic website design takes 2-3 weeks, mobile app design takes
                3-4 weeks, and complex enterprise applications can take 6-8
                weeks. We provide detailed timelines during the initial
                consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you provide design handoff to developers?
              </h3>
              <p className="text-gray-600">
                Yes, we provide complete design handoff packages including style
                guides, component libraries, specifications, and assets. We also
                offer developer collaboration to ensure smooth implementation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                What's included in your UI/UX design services?
              </h3>
              <p className="text-gray-600">
                Our services include user research, wireframing, prototyping,
                visual design, responsive design, usability testing, and design
                system creation. We tailor our services to meet your specific
                project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UIUXPage;
