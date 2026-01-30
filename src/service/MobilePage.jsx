import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  DevicePhoneMobileIcon,
  BoltIcon,
  CheckCircleIcon,
  ArrowsPointingOutIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function MobilePage() {
  const features = [
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Mobile-First Design",
      description:
        "We design for mobile devices first, then scale up to tablets and desktops for optimal performance.",
    },
    {
      icon: <ArrowsPointingOutIcon className="h-10 w-10" />,
      title: "Flexible Grid Layouts",
      description:
        "Responsive grid systems that adapt to any screen size and orientation.",
    },
    {
      icon: <BoltIcon className="h-10 w-10" />,
      title: "Fast Loading Speed",
      description:
        "Optimized images, minified code, and lazy loading for lightning-fast mobile performance.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "Touch-Optimized Interface",
      description:
        "Larger buttons, proper spacing, and touch-friendly navigation for mobile users.",
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Google Mobile-Friendly Test",
      description:
        "All our websites pass Google's mobile-friendly test for better search rankings.",
    },
    {
      icon: <GlobeAltIcon className="h-10 w-10" />,
      title: "Cross-Browser Compatibility",
      description:
        "Consistent performance across Chrome, Safari, Firefox, and Edge browsers.",
    },
  ];

  const benefits = [
    {
      title: "Better Google Rankings",
      description:
        "Mobile-friendly websites rank higher in Google search results, especially for local searches.",
    },
    {
      title: "Improved User Experience",
      description:
        "Visitors stay longer and engage more with mobile-optimized websites.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Mobile-responsive designs lead to more calls, form submissions, and purchases.",
    },
    {
      title: "Wider Audience Reach",
      description:
        "Reach the 60%+ internet users who browse primarily on mobile devices.",
    },
  ];

  const testingDevices = [
    "iPhone 12-15 Pro Max",
    "Samsung Galaxy S21-S23",
    "iPad Pro",
    "Google Pixel",
    "Various Android Tablets",
    "Desktop Screens (HD to 4K)",
  ];

  const responsiveTechniques = [
    {
      technique: "Flexbox & CSS Grid",
      description: "Modern layout systems for flexible and responsive designs",
    },
    {
      technique: "Media Queries",
      description: "CSS techniques to adapt layouts to different screen sizes",
    },
    {
      technique: "Viewport Meta Tag",
      description: "Proper viewport configuration for mobile devices",
    },
    {
      technique: "Responsive Images",
      description: "Images that load appropriate sizes for each device",
    },
    {
      technique: "Mobile Navigation",
      description: "Hamburger menus and touch-friendly navigation",
    },
    {
      technique: "Performance Optimization",
      description: "Code splitting and lazy loading for mobile",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Mobile Responsive Website Design in Faridabad | Mobile-Friendly
          Websites
        </title>
        <meta
          name="description"
          content="Professional mobile responsive website design services in Faridabad. Get Google-friendly, fast-loading websites that work perfectly on all mobile devices, tablets, and desktops."
        />
        <meta
          name="keywords"
          content="mobile responsive website Faridabad, mobile-friendly website design, responsive web design, mobile optimization, responsive website development, mobile-first design Faridabad"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/mobile-responsive"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Mobile Responsive Website Design | Dreams4U"
        />
        <meta
          property="og:description"
          content="Create mobile-friendly websites that work perfectly on all devices with our responsive design services in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/mobile-responsive"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Mobile Responsive Website Design",
            serviceType: "Web Design & Development",
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
              priceRange: "₹ 10,000 - ₹ 50,000",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
            description:
              "Professional mobile responsive website design services for businesses in Faridabad",
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-teal-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Responsive Website Design in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Ensure your website looks and works perfectly on all devices -
              mobile phones, tablets, and desktops. Get Google-friendly
              responsive designs that boost your search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Mobile Website Audit
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
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
              <div className="text-3xl font-bold text-green-700">60%+</div>
              <div className="text-gray-600">Website Traffic from Mobile</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">90%+</div>
              <div className="text-gray-600">Google Ranking Boost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">2-3s</div>
              <div className="text-gray-600">Mobile Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">100%</div>
              <div className="text-gray-600">Mobile-Friendly Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile Responsive Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Mobile Responsive Design is Crucial
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In today's mobile-first world, your website must work perfectly on
              all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow"
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mobile Responsive Features
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We implement advanced responsive techniques for seamless user
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Techniques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Responsive Web Design Techniques
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We use modern techniques to ensure perfect display on all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsiveTechniques.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.technique}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Testing */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Device Testing
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We test your website on real devices to ensure perfect
              performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {testingDevices.map((device, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center"
              >
                <DevicePhoneMobileIcon className="h-8 w-8 mx-auto mb-2 text-green-300" />
                <span className="text-sm">{device}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mobile Responsive Design Process
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {[
              {
                number: "01",
                title: "Mobile Analysis",
                desc: "Analyze current mobile performance and user behavior",
              },
              {
                number: "02",
                title: "Design Strategy",
                desc: "Create mobile-first design approach and wireframes",
              },
              {
                number: "03",
                title: "Responsive Development",
                desc: "Code with responsive frameworks and techniques",
              },
              {
                number: "04",
                title: "Device Testing",
                desc: "Test on real devices and emulators",
              },
              {
                number: "05",
                title: "Performance Optimization",
                desc: "Optimize for mobile speed and SEO",
              },
            ].map((step, index) => (
              <div key={index} className="text-center flex-1">
                <div className="bg-green-100 text-green-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <DevicePhoneMobileIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Is Your Website Mobile-Friendly?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free mobile website audit and discover how to improve your
            mobile user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Get Free Mobile Audit
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
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
              Mobile Responsive Design FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about mobile responsive websites answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Why is mobile responsive design important for SEO?
              </h3>
              <p className="text-gray-600">
                Google uses mobile-first indexing, meaning it primarily uses the
                mobile version of content for indexing and ranking.
                Mobile-friendly websites rank higher in search results,
                especially for local searches in Faridabad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does mobile responsive website design cost in
                Faridabad?
              </h3>
              <p className="text-gray-600">
                Mobile responsive design typically adds 20-30% to the base
                website cost. For existing websites, conversion to responsive
                design starts from ₹10,000, while new responsive websites start
                from ₹25,000 depending on complexity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to make a website mobile responsive?
              </h3>
              <p className="text-gray-600">
                Converting an existing website to responsive design takes 1-3
                weeks. Building a new responsive website from scratch takes 2-4
                weeks depending on the number of pages and features required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you test websites on actual mobile devices?
              </h3>
              <p className="text-gray-600">
                Yes, we test all websites on real iOS and Android devices, not
                just simulators. We also use Google's Mobile-Friendly Test tool
                to ensure 100% compliance with Google's mobile standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobilePage;
