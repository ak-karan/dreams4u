import React from "react";
import { Helmet } from "react-helmet-async";
import CountUp from "react-countup";
import {
  CodeBracketIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const WebDevelopment = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="h-10 w-10" />,
      title: "Custom Website Development",
      description:
        "Tailor-made websites built from scratch to match your unique business requirements.",
    },
    {
      icon: <ServerIcon className="h-10 w-10" />,
      title: "Full-Stack Development",
      description:
        "Complete solutions with modern frontend and robust backend technologies.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Responsive Web Design",
      description:
        "Websites that work perfectly on all devices - mobile, tablet, and desktop.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "Secure Web Applications",
      description:
        "Enterprise-grade security with SSL, firewalls, and regular security updates.",
    },
    {
      icon: <BoltIcon className="h-10 w-10" />,
      title: "Performance Optimization",
      description:
        "Fast-loading websites with optimized code, images, and server configuration.",
    },
    {
      icon: <GlobeAltIcon className="h-10 w-10" />,
      title: "SEO-Friendly Development",
      description:
        "Websites built with SEO best practices for better Google rankings.",
    },
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PHP",
    "Laravel",
    "Python",
    "Django",
    "WordPress",
    "Shopify",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const developmentProcess = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understanding your business goals, target audience, and technical requirements.",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description:
        "Creating detailed project plan, architecture, and technology stack selection.",
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes for approval.",
    },
    {
      step: "04",
      title: "Development",
      description:
        "Coding with clean, maintainable code following best practices.",
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing across devices, browsers, and performance metrics.",
    },
    {
      step: "06",
      title: "Deployment & Support",
      description:
        "Launching the website and providing ongoing maintenance and support.",
    },
  ];

  const projectTypes = [
    {
      type: "Corporate Websites",
      description:
        "Professional websites for companies to establish online presence.",
    },
    {
      type: "E-commerce Stores",
      description:
        "Online stores with shopping cart, payment gateway, and inventory management.",
    },
    {
      type: "Web Applications",
      description:
        "Custom web applications for business processes and workflows.",
    },
    {
      type: "SAAS Platforms",
      description: "Subscription-based software as a service applications.",
    },
    {
      type: "Portfolio Websites",
      description:
        "Showcase websites for professionals, artists, and creatives.",
    },
    {
      type: "Educational Platforms",
      description: "Learning management systems and educational websites.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Web Development Services in Faridabad | Custom Website Development
        </title>
        <meta
          name="description"
          content="Professional web development services in Faridabad. We build custom websites, e-commerce solutions, web applications, and SAAS platforms using modern technologies. Get a free consultation today!"
        />
        <meta
          name="keywords"
          content="web development Faridabad, website development company, custom website development, web application development, responsive web design, full-stack development, web development services"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/web-development"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Web Development Services in Faridabad | Dreams4U"
        />
        <meta
          property="og:description"
          content="Professional web development services for businesses in Faridabad. Custom websites, e-commerce solutions, and web applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/web-development"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development Services",
            serviceType: "Web Development",
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
              priceRange: "₹ 8,000 - ₹ 2,00,000",
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
              Web Development Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-cyan-100">
              Build powerful, scalable, and feature-rich websites and web
              applications that drive business growth. We create digital
              solutions that work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Start Your Project
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
              <div className="text-3xl font-bold text-cyan-700">
                <CountUp start={0} end={100} duration={2} suffix="+" />
              </div>
              <div className="text-gray-600">Websites Developed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">
                <CountUp
                  start={0}
                  end={3}
                  duration={2}
                  decimals={1}
                  suffix="s"
                />
              </div>
              <div className="text-gray-600">Average Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">
                <CountUp
                  start={0}
                  end={99.9}
                  duration={2}
                  decimals={1}
                  suffix="%"
                />
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-700">
                <CountUp start={0} end={24} duration={2} />
                /7
              </div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative solutions to deliver
              exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <UserGroupIcon className="h-12 w-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Expert Development Team
              </h3>
              <p className="text-gray-600">
                Our team of certified developers brings years of experience in
                modern web technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CurrencyDollarIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-600">
                Get premium web development services at competitive prices
                without compromising quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ChartBarIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Result-Driven Approach</h3>
              <p className="text-gray-600">
                We focus on delivering websites that drive business results and
                ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions for businesses of all
              sizes.
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
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We use modern technologies to build robust and scalable web
              solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-cyan-50 hover:bg-cyan-100 text-cyan-800 hover:text-cyan-900 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-cyan-200 hover:border-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Types of Web Projects We Develop
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We have experience in developing various types of web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <DocumentTextIcon className="h-8 w-8 mb-4 text-cyan-300" />
                <h3 className="text-lg font-bold mb-2">{project.type}</h3>
                <p className="text-cyan-200 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Web Development Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure quality and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a powerful web
            solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Start Your Web Project
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
              Web Development FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about web development services answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does web development cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                Web development costs range from ₹8,000 for basic websites to
                ₹2,00,000+ for complex web applications. The final cost depends
                on features, complexity, design requirements, and functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to develop a website?
              </h3>
              <p className="text-gray-600">
                Basic websites take 2-3 weeks, business websites take 3-4 weeks,
                e-commerce sites take 4-8 weeks, and custom web applications can
                take 2-6 months depending on complexity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you provide website maintenance and support?
              </h3>
              <p className="text-gray-600">
                Yes, we offer monthly and annual maintenance packages that
                include updates, security patches, backups, technical support,
                and performance monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                What technologies do you use for web development?
              </h3>
              <p className="text-gray-600">
                We use modern technologies including React, Next.js, Vue.js for
                frontend; Node.js, PHP, Python for backend; MongoDB, MySQL for
                databases; and various CMS platforms like WordPress for specific
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
