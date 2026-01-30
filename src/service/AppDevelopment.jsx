import React from "react";
import { Helmet } from "react-helmet-async";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function AppDevelopment() {
  const services = [
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "iOS App Development",
      description:
        "Native iOS apps using Swift and SwiftUI for optimal performance and seamless Apple ecosystem integration.",
    },
    {
      icon: <GlobeAltIcon className="h-10 w-10" />,
      title: "Android App Development",
      description:
        "Native Android apps using Kotlin and Jetpack Compose for superior performance and material design.",
    },
    {
      icon: <CodeBracketIcon className="h-10 w-10" />,
      title: "Cross-Platform Apps",
      description:
        "React Native and Flutter apps for cost-effective development across iOS and Android platforms.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "App Security",
      description:
        "End-to-end encryption, secure authentication, and compliance with data protection regulations.",
    },
    {
      icon: <ArrowPathIcon className="h-10 w-10" />,
      title: "App Maintenance",
      description:
        "Regular updates, bug fixes, performance optimization, and ongoing support services.",
    },
    {
      icon: <RocketLaunchIcon className="h-10 w-10" />,
      title: "App Store Optimization",
      description:
        "Increase visibility with strategic ASO, keyword optimization, and compelling store listings.",
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Java",
    "Firebase",
    "AWS Amplify",
    "Redux",
    "GraphQL",
    "MongoDB",
    "Node.js",
    "TypeScript",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Understanding requirements, market research, and creating detailed project roadmap.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description:
        "Creating intuitive wireframes, prototypes, and user-centered design mockups.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Agile development with weekly sprints, code reviews, and quality assurance.",
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description:
        "Rigorous testing across devices, app store submission, and launch management.",
    },
    {
      step: "05",
      title: "Maintenance & Support",
      description:
        "Post-launch support, regular updates, and performance monitoring.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Mobile App Development Services in Faridabad | iOS & Android Apps
        </title>
        <meta
          name="description"
          content="Professional mobile app development company in Faridabad. We create custom iOS, Android, and cross-platform apps with cutting-edge technology. Get a free consultation today!"
        />
        <meta
          name="keywords"
          content="app development Faridabad, mobile app developers, iOS app development, Android apps, React Native, Flutter, app development company, custom mobile apps"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/app-development"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Mobile App Development Services | Dreams4U"
        />
        <meta
          property="og:description"
          content="Create powerful mobile applications with our expert app development team in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/app-development"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Mobile App Development Services",
            serviceType: "App Development",
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
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
            offers: {
              "@type": "Offer",
              priceRange: "₹ 25,000 - ₹ 5,00,000",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile App Development Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Transform your ideas into powerful mobile applications with our
              expert app development team. We create seamless, scalable, and
              high-performance apps for iOS, Android, and cross-platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Call Now: +91-96673-16333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our App Development Services?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative design to deliver
              exceptional mobile experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CurrencyDollarIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Cost-Effective Solutions
              </h3>
              <p className="text-gray-600">
                Get premium app development services at competitive prices
                without compromising on quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ClockIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fast Development Time</h3>
              <p className="text-gray-600">
                Agile development methodology ensures faster time-to-market for
                your mobile application.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <UserGroupIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of certified developers brings years of experience in
                mobile app development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our App Development Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our App Development Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app solutions tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our App Development Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure quality and timely delivery of
              your mobile application.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mb-6 lg:mb-0">
                    <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center">
                      <span className="text-2xl font-bold">{step.step}</span>
                    </div>
                  </div>

                  <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to build robust and
              scalable mobile applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-800 px-6 py-3 rounded-full font-medium transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Dream Mobile App?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Let's discuss
            your app idea and bring it to life!
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
              Call: +91-96673-16333
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does mobile app development cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                App development costs vary based on features, complexity, and
                platform. Basic apps start from ₹25,000, while enterprise-level
                solutions can go up to ₹5,00,000+. Contact us for a detailed
                custom quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to develop a mobile app?
              </h3>
              <p className="text-gray-600">
                A basic app takes 4-6 weeks, medium complexity apps take 8-12
                weeks, and complex enterprise apps can take 3-6 months. We
                follow agile methodology to ensure timely delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you provide app maintenance and support?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive app maintenance packages including
                bug fixes, updates, performance optimization, and technical
                support to ensure your app runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppDevelopment;
