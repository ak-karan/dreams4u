import React from "react";
import { Helmet } from "react-helmet-async";
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function BusinessWebsitePage() {
  const features = [
    {
      icon: <BuildingOfficeIcon className="h-10 w-10" />,
      title: "Professional Business Design",
      description:
        "Clean, modern designs that reflect your brand identity and build customer trust.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Mobile Responsive",
      description:
        "Flawless performance across all devices - mobile, tablet, and desktop.",
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Analytics Integration",
      description:
        "Track visitor behavior, conversions, and business metrics with integrated analytics.",
    },
    {
      icon: <CreditCardIcon className="h-10 w-10" />,
      title: "Payment Gateway",
      description:
        "Secure payment processing with multiple payment options for customer convenience.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "SSL Security",
      description:
        "Enterprise-grade security with SSL certificates to protect customer data.",
    },
    {
      icon: <ShoppingCartIcon className="h-10 w-10" />,
      title: "E-commerce Ready",
      description:
        "Complete online store setup with inventory management and order processing.",
    },
  ];

  const websiteTypes = [
    {
      title: "Corporate Websites",
      description:
        "Professional websites for companies to showcase services and build credibility.",
      price: "₹ 15,000 - ₹ 50,000",
    },
    {
      title: "E-commerce Websites",
      description:
        "Complete online stores with product catalogs, cart, and secure checkout.",
      price: "₹ 25,000 - ₹ 1,50,000",
    },
    {
      title: "Service Business Websites",
      description:
        "Websites for service-based businesses with booking systems and client portals.",
      price: "₹ 18,000 - ₹ 60,000",
    },
    {
      title: "Startup Websites",
      description:
        "Fast, scalable websites for startups to establish online presence quickly.",
      price: "₹ 12,000 - ₹ 40,000",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description:
        "Understanding your business goals, target audience, and competition.",
    },
    {
      step: "02",
      title: "Strategy Planning",
      description:
        "Creating a comprehensive plan for design, features, and marketing.",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Creating visually appealing designs and coding robust functionality.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Rigorous testing across devices and platforms before going live.",
    },
    {
      step: "05",
      title: "SEO & Marketing",
      description:
        "Optimizing for search engines and implementing marketing strategies.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Business Website Development in Faridabad | Professional Company
          Websites
        </title>
        <meta
          name="description"
          content="Get a professional business website in Faridabad. We design responsive, SEO-optimized websites for companies, startups, and enterprises. Boost your online presence today!"
        />
        <meta
          name="keywords"
          content="business website Faridabad, company website, corporate website development, professional website design, business website design, website development company Faridabad, responsive business website"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/business-website"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Professional Business Website Development | Dreams4U"
        />
        <meta
          property="og:description"
          content="Create a powerful online presence with our business website development services in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/business-website"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business Website Development",
            serviceType: "Website Design & Development",
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
              priceRange: "₹ 12,000 - ₹ 1,50,000",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Business Website Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Corporate Website",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Website",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional{" "}
              <span className="text-yellow-400">Business Website</span>{" "}
              Development in Faridabad
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Transform your business with a custom website that attracts
              customers, builds credibility, and drives growth. We create
              responsive, SEO-friendly websites tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Free Website Consultation
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Call: +91-96673-16333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-700">94%</div>
              <div className="text-gray-600">Clients Recommend Us</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">250+</div>
              <div className="text-gray-600">Business Websites Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-700">30 Days</div>
              <div className="text-gray-600">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Business Website Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Your Business Needs a Professional Website
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In today's digital age, a website is your business's most valuable
              asset. Here's why:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <GlobeAltIcon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Online Presence</h3>
              <p className="text-gray-600">
                Your website works round the clock, allowing customers to find
                and engage with your business anytime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <UserGroupIcon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Builds Credibility</h3>
              <p className="text-gray-600">
                A professional website establishes trust and makes your business
                appear more legitimate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <ArrowTrendingUpIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Generates Leads</h3>
              <p className="text-gray-600">
                Convert visitors into customers with optimized call-to-actions
                and lead capture forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Features of Our Business Websites
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We include essential features that help your business succeed
              online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business Website Packages
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the perfect website solution for your business needs and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {websiteTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-2">
                    {type.price}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-center mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Responsive Design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">SEO Optimized</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Contact Forms</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Website Development Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensure your business website meets all
              objectives.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>
            <div className="space-y-12">
              {process.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mb-6 lg:mb-0">
                    <div className="bg-yellow-500 text-gray-900 rounded-full w-20 h-20 flex items-center justify-center">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-6">
              Ready to Launch Your Business Online?
            </h2>
            <p className="text-xl mb-8">
              Don't let your competitors get ahead. Get a professional business
              website that works for you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
              >
                Start Your Project Today
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
              >
                Call Now: +91-96673-16333
              </a>
            </div>
            <p className="mt-6 text-blue-200">
              Free domain & hosting for first year* | 30-day money-back
              guarantee
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Business Website FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about business website development answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does a business website cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                Business website costs range from ₹12,000 for basic websites to
                ₹1,50,000+ for complex e-commerce sites. The final price depends
                on features, design complexity, and functionality requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How long does it take to build a business website?
              </h3>
              <p className="text-gray-600">
                Simple business websites take 2-3 weeks, while complex
                e-commerce sites take 4-8 weeks. We provide a detailed timeline
                during the consultation phase.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Do you provide website maintenance services?
              </h3>
              <p className="text-gray-600">
                Yes, we offer monthly and annual maintenance packages that
                include updates, security patches, backups, and technical
                support to keep your website running smoothly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Will my website be mobile-friendly?
              </h3>
              <p className="text-gray-600">
                Absolutely! All our business websites are built with responsive
                design, ensuring perfect display and functionality on mobile
                phones, tablets, and desktops.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessWebsitePage;
