import React from "react";
import { Helmet } from "react-helmet-async";
import {
  MagnifyingGlassIcon,
  HashtagIcon,
  MegaphoneIcon,
  VideoCameraIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

function DigitalMarketing() {
  const services = [
    {
      icon: <MagnifyingGlassIcon className="h-10 w-10" />,
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's visibility on Google and drive organic traffic with our comprehensive SEO strategies.",
    },
    {
      icon: <CurrencyDollarIcon className="h-10 w-10" />,
      title: "Pay-Per-Click Advertising",
      description:
        "Launch targeted Google Ads, Facebook Ads, and Instagram Ads campaigns for immediate results.",
    },
    {
      icon: <HashtagIcon className="h-10 w-10" />,
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage customers across Facebook, Instagram, LinkedIn, and Twitter.",
    },
    {
      icon: <MegaphoneIcon className="h-10 w-10" />,
      title: "Content Marketing",
      description:
        "Create valuable content that attracts, engages, and converts your target audience.",
    },
    {
      icon: <EnvelopeIcon className="h-10 w-10" />,
      title: "Email Marketing",
      description:
        "Nurture leads and retain customers with personalized email campaigns and automation.",
    },
    {
      icon: <VideoCameraIcon className="h-10 w-10" />,
      title: "Video Marketing",
      description:
        "Create engaging video content for YouTube, social media, and website to boost conversions.",
    },
  ];

  const benefits = [
    {
      title: "Increased Website Traffic",
      description:
        "Drive targeted visitors to your website through SEO and paid advertising.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Convert visitors into customers with optimized landing pages and CTAs.",
    },
    {
      title: "Better ROI Tracking",
      description:
        "Monitor campaign performance and measure return on investment with detailed analytics.",
    },
    {
      title: "Brand Authority",
      description:
        "Establish your brand as an industry leader through consistent content and engagement.",
    },
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "₹ 8,999/month",
      features: [
        "Basic SEO Optimization",
        "Social Media Management (2 platforms)",
        "Monthly Performance Report",
        "Google Analytics Setup",
        "15 Days Support",
      ],
      recommended: false,
    },
    {
      name: "Business Package",
      price: "₹ 19,999/month",
      features: [
        "Advanced SEO Strategy",
        "Social Media Marketing (4 platforms)",
        "Google/Facebook Ads Management",
        "Weekly Performance Reports",
        "Content Creation (4 posts/week)",
        "Email Marketing Campaigns",
        "30 Days Support",
      ],
      recommended: true,
    },
    {
      name: "Enterprise Package",
      price: "₹ 39,999/month",
      features: [
        "Comprehensive SEO Audit",
        "Full Funnel Digital Marketing",
        "Video Marketing Strategy",
        "Daily Campaign Monitoring",
        "Dedicated Account Manager",
        "Competitor Analysis",
        "Custom Reporting Dashboard",
        "24/7 Priority Support",
      ],
      recommended: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Digital Marketing Services in Faridabad | SEO, PPC, SMM Agency
        </title>
        <meta
          name="description"
          content="Top digital marketing agency in Faridabad offering SEO, PPC, social media marketing, and content marketing services. Grow your business online with guaranteed results!"
        />
        <meta
          name="keywords"
          content="digital marketing Faridabad, SEO services Faridabad, social media marketing, Google Ads management, PPC advertising, content marketing, email marketing, digital marketing agency"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/digital-marketing"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Digital Marketing Services in Faridabad | Dreams4U"
        />
        <meta
          property="og:description"
          content="Drive growth with our comprehensive digital marketing solutions including SEO, PPC, and social media marketing."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/digital-marketing"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Marketing Services",
            serviceType: "Digital Marketing",
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
              priceRange: "₹ 8,999 - ₹ 39,999",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing Packages",
              itemListElement: packages.map((pkg) => ({
                "@type": "Offer",
                name: pkg.name,
                price: pkg.price,
                itemOffered: {
                  "@type": "Service",
                  name: pkg.name,
                },
              })),
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-pink-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Marketing Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Drive growth, generate leads, and increase revenue with our
              data-driven digital marketing strategies. We help businesses in
              Faridabad succeed online through SEO, PPC, and social media
              marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Free Marketing Audit
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
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
              <div className="text-3xl font-bold text-purple-700">150%</div>
              <div className="text-gray-600">Average Traffic Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">300+</div>
              <div className="text-gray-600">Campaigns Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">4.8/5</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">₹ 2.5Cr+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Digital Marketing is Essential for Your Business
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In today's digital world, traditional marketing alone isn't
              enough. Here's why you need digital marketing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to grow your online
              presence and drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/contact"
                  className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Packages */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Digital Marketing Packages
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 text-gray-900 ${pkg.recommended ? "ring-4 ring-yellow-400 transform scale-105" : ""}`}
              >
                {pkg.recommended && (
                  <div className="bg-yellow-500 text-gray-900 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-purple-700 mb-6">
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full text-center font-bold py-3 rounded-lg transition duration-300 ${
                    pkg.recommended
                      ? "bg-purple-700 hover:bg-purple-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Get Started
                </a>
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
              Our 5-Step Digital Marketing Process
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            {[
              {
                number: "01",
                title: "Discovery & Analysis",
                desc: "Understand your business goals and audit current presence",
              },
              {
                number: "02",
                title: "Strategy Development",
                desc: "Create customized marketing strategy and plan",
              },
              {
                number: "03",
                title: "Implementation",
                desc: "Execute campaigns across selected channels",
              },
              {
                number: "04",
                title: "Monitoring",
                desc: "Track performance and optimize campaigns",
              },
              {
                number: "05",
                title: "Reporting",
                desc: "Provide detailed reports and insights",
              },
            ].map((step, index) => (
              <div key={index} className="text-center mb-8 md:mb-0 flex-1 px-4">
                <div className="bg-purple-100 text-purple-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute right-0 top-8 w-full h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Skyrocket Your Business Growth?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free digital marketing audit and discover how we can help you
            achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Get Free Strategy Session
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
            >
              Call Now: +91-96673-16333
            </a>
          </div>
          <p className="mt-6 text-purple-200">
            Free marketing audit for first-time clients | Performance-based
            pricing available
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Digital Marketing FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about digital marketing services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does digital marketing cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                Digital marketing packages start from ₹8,999/month for basic
                services to ₹39,999+/month for comprehensive campaigns. We offer
                customized solutions based on your business size and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to see results from SEO?
              </h3>
              <p className="text-gray-600">
                SEO is a long-term strategy. Initial improvements can be seen in
                2-3 months, while significant results typically take 4-6 months.
                PPC campaigns show immediate results within days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you provide performance reports?
              </h3>
              <p className="text-gray-600">
                Yes, we provide detailed monthly performance reports showing
                traffic, conversions, ROI, and campaign effectiveness. Our
                clients have 24/7 access to their campaign dashboard.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Can you handle marketing for multiple locations?
              </h3>
              <p className="text-gray-600">
                Absolutely! We specialize in multi-location digital marketing
                strategies and can create geo-targeted campaigns for businesses
                with multiple branches or service areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We have expertise in digital marketing for various industries in
              Faridabad and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Healthcare & Medical",
              "Real Estate",
              "Education & Coaching",
              "Retail & E-commerce",
              "Restaurants & Food",
              "Manufacturing",
              "Professional Services",
              "Technology & IT",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-purple-50 p-4 rounded-lg text-center transition-colors duration-300"
              >
                <GlobeAltIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <span className="font-medium text-gray-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalMarketing;
