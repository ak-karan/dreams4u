import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShoppingCartIcon,
  CreditCardIcon,
  TruckIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

function EcommercePage() {
  const features = [
    {
      icon: <ShoppingCartIcon className="h-10 w-10" />,
      title: "Product Catalog Management",
      description:
        "Organize products with categories, filters, and search functionality for easy navigation.",
    },
    {
      icon: <CreditCardIcon className="h-10 w-10" />,
      title: "Secure Payment Gateway",
      description:
        "Multiple payment options including UPI, credit/debit cards, net banking, and wallets.",
    },
    {
      icon: <TruckIcon className="h-10 w-10" />,
      title: "Order & Shipping Management",
      description:
        "Automated order processing, shipping integration, and real-time tracking.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "SSL Security",
      description:
        "Enterprise-grade security with SSL certificates to protect customer transactions.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-10 w-10" />,
      title: "Mobile-Optimized Store",
      description:
        "Responsive design that works perfectly on all mobile devices and tablets.",
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Analytics Dashboard",
      description:
        "Track sales, customer behavior, inventory, and business performance in real-time.",
    },
  ];

  const platforms = [
    {
      name: "Shopify Store",
      description: "Quick setup, easy management, perfect for beginners",
      price: "₹ 25,000 - ₹ 75,000",
    },
    {
      name: "Magento Store",
      description: "Enterprise-level solution for large businesses",
      price: "₹ 50,000 - ₹ 2,00,000",
    },
    {
      name: "WooCommerce Store",
      description: "Customizable WordPress-based e-commerce",
      price: "₹ 30,000 - ₹ 1,00,000",
    },
    {
      name: "Custom E-commerce",
      description: "Fully custom built from scratch",
      price: "₹ 75,000 - ₹ 5,00,000",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understand your products, target audience, and business goals.",
    },
    {
      step: "02",
      title: "Platform Selection",
      description: "Choose the right e-commerce platform based on your needs.",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Create user-friendly design and develop all features.",
    },
    {
      step: "04",
      title: "Payment Integration",
      description: "Integrate secure payment gateways and shipping solutions.",
    },
    {
      step: "05",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to live server.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          E-commerce Website Development in Faridabad | Online Store Solutions
        </title>
        <meta
          name="description"
          content="Professional e-commerce website development in Faridabad. Create online stores with payment gateway, inventory management, and mobile responsiveness. Start selling online today!"
        />
        <meta
          name="keywords"
          content="e-commerce website Faridabad, online store development, Shopify store, Magento development, WooCommerce website, payment gateway integration, e-commerce solutions Faridabad"
        />
        <link rel="canonical" href="https://dreams4u.in/services/ecommerce" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="E-commerce Website Development | Dreams4U"
        />
        <meta
          property="og:description"
          content="Build your online store with our expert e-commerce development services in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/ecommerce"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "E-commerce Website Development",
            serviceType: "E-commerce Solutions",
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
              priceRange: "₹ 25,000 - ₹ 5,00,000",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-commerce Website Development in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-orange-100">
              Launch your online store and start selling products 24/7. We
              create feature-rich e-commerce websites with secure payment
              gateways, inventory management, and mobile optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Start Your Online Store
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
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
              <div className="text-3xl font-bold text-red-600">₹ 5Cr+</div>
              <div className="text-gray-600">Online Sales Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">80+</div>
              <div className="text-gray-600">Online Stores Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete E-commerce Features
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to run a successful online store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-red-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Platforms */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your E-commerce Platform
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We work with all major e-commerce platforms to suit your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300"
              >
                <CubeIcon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <div className="text-red-700 font-bold mb-6">
                  {platform.price}
                </div>
                <a
                  href="/contact"
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              E-commerce Development Process
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our systematic approach ensures your online store launches
              successfully.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCartIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your custom e-commerce website and reach customers across India.
            Free consultation and quote available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Launch Your Store
            </a>
            <a
              href="tel:+919667316333"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
            >
              Call Now: +91-96673-16333
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default EcommercePage;
