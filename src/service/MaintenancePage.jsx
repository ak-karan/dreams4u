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
import ServiceSeoExpansion from "./ServiceSeoExpansion";

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
          Website Maintenance & Support Services in Faridabad | Keep Sites Secure
        </title>
        <meta
          name="description"
          content="Professional website maintenance services in Faridabad. Keep your site secure, fast and updated with monthly maintenance plans for business websites and e-commerce stores."
        />
        <meta
          name="keywords"
          content="website maintenance Faridabad, website support, website updates, security monitoring, website backup, performance optimization, annual maintenance, WordPress support"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/annual-maintenance"
        />
        <meta
          property="og:title"
          content="Website Maintenance & Support Services | Keep Sites Secure"
        />
        <meta
          property="og:description"
          content="Keep your Faridabad website secure, fast and up-to-date with Dreams4u maintenance plans."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/annual-maintenance"
        />
        <meta
          property="og:image"
          content="https://dreams4u.in/images/website-design-company-faridabad.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Website Maintenance Services in Faridabad | Dreams4u"
        />
        <meta
          name="twitter:description"
          content="Keep your Faridabad website secure and fast with Dreams4u website maintenance plans."
        />
        <meta
          name="twitter:image"
          content="https://dreams4u.in/images/website-design-company-faridabad.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Maintenance Services",
            serviceType: "Website Maintenance",
            description:
              "Best website maintenance services in Faridabad for business websites, ecommerce stores, and WordPress sites.",
            provider: {
              "@type": "LocalBusiness",
              name: "Dreams4u",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121004",
                addressCountry: "IN",
              },
              telephone: "+91-96673-16333",
            },
            areaServed: [
              { "@type": "City", name: "Faridabad" },
              { "@type": "Place", name: "Ballabgarh" },
              { "@type": "Place", name: "NIT Faridabad" },
              { "@type": "Place", name: "Badkhal" },
            ],
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

      <ServiceSeoExpansion variant="maintenance" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-100 p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why website maintenance is essential for Faridabad businesses
              </h2>
              <p className="text-slate-600 leading-8 mb-4">
                A website is not a one-time project. It needs regular updates,
                security checks, performance tuning, and content refreshes.
                Without maintenance, websites can slow down, stop working on
                mobile devices, lose search engine visibility, or become
                vulnerable to hacks.
              </p>
              <p className="text-slate-600 leading-8 mb-4">
                Dreams4u helps Faridabad businesses keep their websites healthy.
                Our maintenance plans include plugin and CMS updates, daily
                backups, uptime monitoring, and on-page SEO checks so your site
                stays fast and ranks better in local search results.
              </p>
              <p className="text-slate-600 leading-8">
                This is especially important for ecommerce stores, booking
                websites, and WordPress sites. When the site is updated,
                secure, and loading quickly, it builds trust with customers and
                improves conversion rates from traffic generated through local
                searches.
              </p>
            </div>
            <div className="rounded-3xl bg-cyan-950 p-10 text-white shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Our Faridabad maintenance plans include:</h3>
              <ul className="space-y-3 text-slate-100">
                <li>• Regular core software updates and plugin patching</li>
                <li>• Daily backups stored securely offsite</li>
                <li>• Malware scans, firewall checks and security hardening</li>
                <li>• Speed improvements, caching updates and image compression</li>
                <li>• Uptime monitoring and fast issue resolution</li>
                <li>• Monthly reports, SEO health checks, and content updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Website maintenance that protects your Google traffic
            </h2>
            <p className="text-slate-600 leading-8 mb-6">
              Regular maintenance keeps your website fast, secure, and aligned
              with search engine best practices. That means local customers in
              Faridabad can find your services more easily for searches such as
              "website maintenance services in Faridabad" and "website support
              near me."
            </p>
            <p className="text-slate-600 leading-8 mb-8">
              If a website is slow, outdated, or broken, search rankings can
              drop quickly. Our team fixes issues before they affect visitors,
              so your site continues to generate enquiries from Google, WhatsApp,
              and contact form leads.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-4 text-white font-semibold shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700"
            >
              Book a Free Website Maintenance Audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default MaintenancePage;
