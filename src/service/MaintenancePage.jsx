import React from "react";
import { Helmet } from "react-helmet-async";
import {
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  ServerIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

function MaintenancePage() {
  const services = [
    {
      icon: <WrenchScrewdriverIcon className="h-10 w-10" />,
      title: "Regular Updates",
      description:
        "Keep your website secure with the latest software updates and patches.",
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "Security Monitoring",
      description:
        "24/7 security monitoring and malware scanning to protect your website.",
    },
    {
      icon: <CloudArrowUpIcon className="h-10 w-10" />,
      title: "Daily Backups",
      description:
        "Automated daily backups to ensure your data is always safe and recoverable.",
    },
    {
      icon: <ArrowPathIcon className="h-10 w-10" />,
      title: "Performance Optimization",
      description:
        "Regular speed optimization and performance tuning for faster loading.",
    },
    {
      icon: <ServerIcon className="h-10 w-10" />,
      title: "Uptime Monitoring",
      description:
        "Continuous monitoring to ensure 99.9% uptime and immediate issue resolution.",
    },
    {
      icon: <ChartBarIcon className="h-10 w-10" />,
      title: "Analytics Reports",
      description:
        "Monthly performance reports showing traffic, uptime, and security status.",
    },
  ];

  const plans = [
    {
      name: "Basic Care",
      price: "₹ 1,999/month",
      features: [
        "Weekly Updates",
        "Monthly Backups",
        "Basic Security Scan",
        "Email Support",
        "Uptime Monitoring",
      ],
      bestFor: "Small Business Websites",
    },
    {
      name: "Professional Care",
      price: "₹ 3,999/month",
      features: [
        "Daily Updates",
        "Daily Backups",
        "Advanced Security",
        "Priority Support",
        "Performance Optimization",
        "Monthly Reports",
      ],
      bestFor: "E-commerce & Business Sites",
      popular: true,
    },
    {
      name: "Enterprise Care",
      price: "₹ 7,999/month",
      features: [
        "Real-time Updates",
        "Hourly Backups",
        "Enterprise Security",
        "24/7 Support",
        "Advanced Optimization",
        "Weekly Reports",
        "Dedicated Manager",
      ],
      bestFor: "Large Enterprise Websites",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Website Maintenance Services in Faridabad | Annual Maintenance Plans
        </title>
        <meta
          name="description"
          content="Professional website maintenance services in Faridabad. Keep your website secure, updated, and running smoothly with our monthly/annual maintenance plans."
        />
        <meta
          name="keywords"
          content="website maintenance Faridabad, website updates, security monitoring, website backup services, performance optimization, website support, annual maintenance contract"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/annual-maintenance"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Maintenance Services",
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
          })}
        </script>
      </Helmet>

      <section className="relative bg-gradient-to-r from-gray-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Maintenance Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8">
              Keep your website secure, fast, and up-to-date with our
              comprehensive maintenance plans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MaintenancePage;
