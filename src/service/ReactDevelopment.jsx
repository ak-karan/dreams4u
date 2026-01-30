import React from "react";
import { Helmet } from "react-helmet-async";
import {
  CodeBracketIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const ReactDevelopment = () => {
  const services = [
    {
      icon: <CodeBracketIcon className="h-10 w-10" />,
      title: "React JS Web Applications",
      description:
        "Build single-page applications (SPAs) with React JS for seamless user experiences.",
    },
    {
      icon: <BoltIcon className="h-10 w-10" />,
      title: "Next.js Development",
      description:
        "Server-side rendering and static site generation for optimal SEO and performance.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "React Native Mobile Apps",
      description:
        "Cross-platform mobile applications using React Native for iOS and Android.",
    },
    {
      icon: <ServerIcon className="h-10 w-10" />,
      title: "Full-Stack React Solutions",
      description:
        "Complete solutions with React frontend and Node.js/Express backend.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "Code Review & Optimization",
      description:
        "Performance optimization, security audits, and code quality improvements.",
    },
    {
      icon: <CpuChipIcon className="h-10 w-10" />,
      title: "State Management",
      description:
        "Implement Redux, Context API, or Zustand for complex state management.",
    },
  ];

  const technologies = [
    "React JS",
    "Next.js",
    "TypeScript",
    "Redux",
    "Context API",
    "React Router",
    "Material-UI",
    "Tailwind CSS",
    "Styled Components",
    "GraphQL",
    "REST API",
    "Jest",
    "React Testing Library",
    "Vite",
    "Webpack",
  ];

  const benefits = [
    {
      title: "Fast Performance",
      description:
        "Virtual DOM ensures fast rendering and optimal user experience.",
    },
    {
      title: "SEO Friendly",
      description:
        "Next.js provides server-side rendering for better SEO results.",
    },
    {
      title: "Reusable Components",
      description:
        "Component-based architecture for code reusability and maintenance.",
    },
    {
      title: "Large Community",
      description:
        "Access to vast ecosystem of libraries and community support.",
    },
  ];

  const projects = [
    {
      type: "E-commerce Dashboard",
      tech: "React + Redux + Material-UI",
    },
    {
      type: "Real Estate Portal",
      tech: "Next.js + TypeScript + Tailwind",
    },
    {
      type: "Healthcare Application",
      tech: "React Native + Firebase",
    },
    {
      type: "SAAS Platform",
      tech: "React + Node.js + MongoDB",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          React JS Development Services in Faridabad | Next.js Development
        </title>
        <meta
          name="description"
          content="Expert React JS development services in Faridabad. We build high-performance React applications, Next.js websites, React Native mobile apps, and custom React solutions for businesses."
        />
        <meta
          name="keywords"
          content="React JS development Faridabad, Next.js development, React Native apps, React development company, frontend development, web application development, custom React solutions"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/react-development"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="React JS Development Services | Dreams4U"
        />
        <meta
          property="og:description"
          content="Professional React JS and Next.js development services in Faridabad for modern web applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/react-development"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "React JS Development Services",
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
              priceRange: "₹ 15,000 - ₹ 2,00,000",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React JS Development Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Build fast, scalable, and modern web applications with React JS
              and Next.js. We create high-performance applications that deliver
              exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Start React Project
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
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
              <div className="text-3xl font-bold text-blue-700">40+</div>
              <div className="text-gray-600">React Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">5+ Years</div>
              <div className="text-gray-600">React Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">&lt;2s</div>
              <div className="text-gray-600">Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why React JS */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose React JS for Your Project?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              React JS is the most popular frontend library for building modern
              web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500"
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

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our React Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive React JS solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              React Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with the latest React ecosystem technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-50 hover:bg-blue-100 text-blue-800 hover:text-blue-900 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-blue-200 hover:border-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">React Project Examples</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Types of projects we've built with React JS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <DocumentTextIcon className="h-8 w-8 mb-4 text-blue-300" />
                <h3 className="text-lg font-bold mb-2">{project.type}</h3>
                <p className="text-blue-200 text-sm">{project.tech}</p>
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
              Our React Development Process
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {[
              {
                number: "01",
                title: "Requirement Analysis",
                desc: "Understand project goals and technical requirements",
              },
              {
                number: "02",
                title: "Architecture Planning",
                desc: "Design component structure and state management",
              },
              {
                number: "03",
                title: "UI/UX Design",
                desc: "Create wireframes and design prototypes",
              },
              {
                number: "04",
                title: "Development",
                desc: "Code implementation with React best practices",
              },
              {
                number: "05",
                title: "Testing & Deployment",
                desc: "Quality assurance and production deployment",
              },
            ].map((step, index) => (
              <div key={index} className="text-center flex-1">
                <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build with React JS?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a
            high-performance React application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
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
              React Development FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about React JS development answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does React JS development cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                React development projects start from ₹15,000 for basic
                applications and go up to ₹2,00,000+ for complex enterprise
                solutions. The cost depends on features, complexity, and project
                duration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                What's the difference between React JS and Next.js?
              </h3>
              <p className="text-gray-600">
                React JS is a JavaScript library for building user interfaces,
                while Next.js is a React framework that adds server-side
                rendering, static site generation, and other features. Next.js
                is better for SEO and performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you provide React Native mobile app development?
              </h3>
              <p className="text-gray-600">
                Yes, we develop cross-platform mobile applications using React
                Native. This allows us to build apps for both iOS and Android
                with a single codebase, reducing development time and cost.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to develop a React application?
              </h3>
              <p className="text-gray-600">
                A basic React application takes 2-4 weeks, medium complexity
                projects take 4-8 weeks, and complex enterprise applications can
                take 2-6 months. We follow agile methodology with regular
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactDevelopment;
