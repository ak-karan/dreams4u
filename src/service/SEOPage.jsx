import React from "react";
import { Helmet } from "react-helmet-async";
import {
  CheckCircleIcon,
  RocketLaunchIcon,
  DocumentMagnifyingGlassIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  HashtagIcon,
  LinkIcon,
  PencilSquareIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function SEOPage() {
  const services = [
    {
      icon: <DocumentMagnifyingGlassIcon className="h-10 w-10" />,
      title: "Technical SEO Audit",
      description:
        "Comprehensive analysis of your website's technical health, speed, and structure.",
    },
    {
      icon: <PencilSquareIcon className="h-10 w-10" />,
      title: "On-Page SEO Optimization",
      description:
        "Optimize title tags, meta descriptions, headers, and content for target keywords.",
    },
    {
      icon: <LinkIcon className="h-10 w-10" />,
      title: "Off-Page SEO & Link Building",
      description:
        "Build high-quality backlinks from authoritative websites to boost domain authority.",
    },
    {
      icon: <HashtagIcon className="h-10 w-10" />,
      title: "Local SEO Optimization",
      description:
        "Optimize for local searches with Google My Business, citations, and local keywords.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Mobile SEO Optimization",
      description:
        "Ensure your website is mobile-friendly and passes Google's mobile-first indexing.",
    },
    {
      icon: <Cog6ToothIcon className="h-10 w-10" />,
      title: "SEO Analytics & Reporting",
      description:
        "Monthly performance reports with rankings, traffic, and conversion tracking.",
    },
  ];

  const seoPackages = [
    {
      name: "Local SEO Starter",
      price: "₹ 5,999/month",
      features: [
        "Keyword Research (10 keywords)",
        "On-Page Optimization",
        "Google My Business Setup",
        "Monthly Performance Report",
        "Basic Technical Audit",
        "15 Days Support",
      ],
      bestFor: "Small Local Businesses",
    },
    {
      name: "Business SEO Pro",
      price: "₹ 14,999/month",
      features: [
        "Comprehensive Keyword Research",
        "Full On-Page & Technical SEO",
        "Local SEO Optimization",
        "Content Strategy (2 articles/month)",
        "Backlink Building",
        "Weekly Progress Reports",
        "Competitor Analysis",
        "30 Days Priority Support",
      ],
      bestFor: "Medium Businesses",
      popular: true,
    },
    {
      name: "Enterprise SEO Suite",
      price: "₹ 29,999/month",
      features: [
        "Advanced Technical SEO Audit",
        "Full-Scale Content Strategy",
        "Premium Link Building",
        "E-commerce SEO",
        "International SEO",
        "Custom Analytics Dashboard",
        "Dedicated SEO Manager",
        "24/7 Support",
      ],
      bestFor: "Large Enterprises & E-commerce",
    },
  ];

  const industries = [
    {
      name: "Healthcare & Medical",
      keywords: "doctors, hospitals, clinics in Faridabad",
    },
    {
      name: "Real Estate",
      keywords: "property, builders, apartments in Faridabad",
    },
    {
      name: "Education & Coaching",
      keywords: "schools, institutes, tuition in Faridabad",
    },
    {
      name: "Restaurants & Food",
      keywords: "restaurants, cafes, food delivery Faridabad",
    },
    {
      name: "Retail & Shopping",
      keywords: "shops, stores, shopping in Faridabad",
    },
    {
      name: "Professional Services",
      keywords: "lawyers, accountants, consultants Faridabad",
    },
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analysis",
      description:
        "Comprehensive analysis of current SEO performance and opportunities",
    },
    {
      step: "02",
      title: "Keyword Research",
      description:
        "Identify high-value keywords for your business and location",
    },
    {
      step: "03",
      title: "On-Page Optimization",
      description: "Optimize website content, meta tags, and structure",
    },
    {
      step: "04",
      title: "Content Strategy",
      description: "Create SEO-friendly content that attracts and converts",
    },
    {
      step: "05",
      title: "Link Building",
      description: "Build authoritative backlinks to boost domain authority",
    },
    {
      step: "06",
      title: "Monitoring & Reporting",
      description: "Track rankings, traffic, and provide monthly reports",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SEO Services in Faridabad | Search Engine Optimization Agency
        </title>
        <meta
          name="description"
          content="Professional SEO services in Faridabad. Improve your Google rankings, drive organic traffic, and grow your business with our proven SEO strategies. Get more customers from local searches."
        />
        <meta
          name="keywords"
          content="SEO services Faridabad, search engine optimization, local SEO, Google ranking, organic traffic, SEO company Faridabad, digital marketing, website optimization"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/search-engine-optimization"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="SEO Services in Faridabad | Dreams4U"
        />
        <meta
          property="og:description"
          content="Get more customers from Google with our expert SEO services in Faridabad. Improve rankings and drive organic traffic."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/search-engine-optimization"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO Services",
            serviceType: "Search Engine Optimization",
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
              priceRange: "₹ 5,999 - ₹ 29,999",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "SEO Packages",
              itemListElement: seoPackages.map((pkg) => ({
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
      <section className="relative bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO Services in <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Rank higher on Google, drive organic traffic, and get more
              customers with our proven SEO strategies. We help Faridabad
              businesses dominate local search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Free SEO Audit
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

      {/* SEO Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-700">93%</div>
              <div className="text-gray-600">
                Online Experiences Start with Search
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">75%</div>
              <div className="text-gray-600">Never Scroll Past First Page</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">46%</div>
              <div className="text-gray-600">
                Google Searches Have Local Intent
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">5x</div>
              <div className="text-gray-600">More Clicks Than Paid Ads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why SEO is Essential for Faridabad Businesses
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Search Engine Optimization is the most cost-effective way to
              attract qualified customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <CurrencyDollarIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Cost-Effective Marketing
              </h3>
              <p className="text-gray-600">
                SEO provides long-term results at a fraction of the cost of paid
                advertising.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <UserGroupIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Targeted Traffic</h3>
              <p className="text-gray-600">
                Attract visitors who are actively searching for your products or
                services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <BuildingOfficeIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Builds Credibility</h3>
              <p className="text-gray-600">
                Top rankings establish your business as an authority in your
                industry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <ClockIcon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Marketing</h3>
              <p className="text-gray-600">
                Your website works for you round the clock, attracting customers
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Comprehensive SEO Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide complete SEO solutions to improve your search rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100"
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

      {/* SEO Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SEO Packages for Faridabad Businesses
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the perfect SEO package for your business goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg ${pkg.popular ? "ring-4 ring-purple-400 transform scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="bg-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {pkg.name}
                </h3>
                <div className="text-purple-700 text-sm mb-2">
                  {pkg.bestFor}
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-6">
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
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
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

      {/* Industries We Serve */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Industries We Serve in Faridabad
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We have expertise in SEO for various industries in Faridabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <BuildingOfficeIcon className="h-8 w-8 mb-4 text-purple-300" />
                <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                <p className="text-purple-200 text-sm">
                  Keywords: {industry.keywords}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our 6-Step SEO Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure consistent SEO results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 text-purple-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Focus */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPinIcon className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Local SEO for Faridabad Businesses
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in helping Faridabad businesses dominate local
              search results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">46%</div>
              <p className="text-gray-600">
                of all Google searches have local intent
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">88%</div>
              <p className="text-gray-600">
                of local mobile searches visit within 24 hours
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-purple-700 mb-2">72%</div>
              <p className="text-gray-600">
                of local searchers visit within 5 miles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Dominate Google Search Results?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a free SEO audit and discover how we can help you rank higher
            and get more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Get Free SEO Audit
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
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
              SEO Services FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about SEO services answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much do SEO services cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                SEO packages start from ₹5,999/month for local businesses to
                ₹29,999+/month for enterprise solutions. The cost depends on
                competition, industry, and the scope of work required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to see SEO results?
              </h3>
              <p className="text-gray-600">
                Initial improvements can be seen in 2-3 months, while
                significant results typically take 4-6 months. SEO is a
                long-term strategy that builds over time and provides
                sustainable results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                What's the difference between local SEO and national SEO?
              </h3>
              <p className="text-gray-600">
                Local SEO targets customers in a specific geographic area (like
                Faridabad), while national SEO targets customers across the
                country. Local SEO focuses on Google My Business, local
                citations, and location-specific keywords.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you guarantee #1 rankings on Google?
              </h3>
              <p className="text-gray-600">
                No ethical SEO company can guarantee #1 rankings as Google's
                algorithm changes frequently. However, we guarantee improved
                rankings, increased organic traffic, and better visibility based
                on our proven strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SEOPage;
