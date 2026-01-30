import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  FireIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ServerIcon,
  KeyIcon,
  DocumentMagnifyingGlassIcon,
  BellAlertIcon,
  UserGroupIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

function SecurityPage() {
  const services = [
    {
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      title: "SSL Certificate Installation",
      description:
        "Install and configure SSL certificates for HTTPS encryption and data security.",
    },
    {
      icon: <LockClosedIcon className="h-10 w-10" />,
      title: "Web Application Firewall",
      description:
        "Protect your website from DDoS attacks, SQL injection, and XSS attacks.",
    },
    {
      icon: <FireIcon className="h-10 w-10" />,
      title: "Malware Detection & Removal",
      description:
        "Regular malware scanning and immediate removal of malicious code.",
    },
    {
      icon: <DocumentMagnifyingGlassIcon className="h-10 w-10" />,
      title: "Security Audits",
      description:
        "Comprehensive security audits to identify vulnerabilities and risks.",
    },
    {
      icon: <KeyIcon className="h-10 w-10" />,
      title: "Two-Factor Authentication",
      description:
        "Implement 2FA for admin access and user accounts for enhanced security.",
    },
    {
      icon: <ServerIcon className="h-10 w-10" />,
      title: "Server Security Hardening",
      description:
        "Secure server configuration and regular security patches installation.",
    },
  ];

  const threats = [
    {
      name: "Malware Attacks",
      description:
        "Viruses, ransomware, and malicious scripts that can harm your website.",
    },
    {
      name: "DDoS Attacks",
      description:
        "Distributed Denial of Service attacks that overwhelm your server.",
    },
    {
      name: "SQL Injection",
      description:
        "Attackers inject malicious SQL code to access your database.",
    },
    {
      name: "XSS Attacks",
      description:
        "Cross-site scripting attacks that steal user data and cookies.",
    },
    {
      name: "Brute Force Attacks",
      description:
        "Repeated login attempts to guess passwords and gain access.",
    },
    {
      name: "Phishing Attacks",
      description:
        "Fake websites and emails designed to steal sensitive information.",
    },
  ];

  const securityPackages = [
    {
      name: "Basic Security",
      price: "₹ 2,999/year",
      features: [
        "SSL Certificate",
        "Basic Firewall",
        "Monthly Malware Scan",
        "Security Headers",
        "Email Support",
      ],
      bestFor: "Small Business Websites",
    },
    {
      name: "Advanced Security",
      price: "₹ 8,999/year",
      features: [
        "Premium SSL Certificate",
        "Advanced Firewall",
        "Weekly Malware Scans",
        "DDoS Protection",
        "Security Audits",
        "Priority Support",
        "Daily Backups",
      ],
      bestFor: "E-commerce & Business Sites",
      popular: true,
    },
    {
      name: "Enterprise Security",
      price: "₹ 19,999/year",
      features: [
        "Extended Validation SSL",
        "Enterprise Firewall",
        "Real-time Monitoring",
        "24/7 Security Team",
        "Penetration Testing",
        "Custom Security Rules",
        "Hourly Backups",
        "Dedicated Security Manager",
      ],
      bestFor: "Large Enterprise Websites",
    },
  ];

  const securityTips = [
    "Use strong, unique passwords for all accounts",
    "Keep all software and plugins updated",
    "Regularly backup your website data",
    "Implement SSL encryption",
    "Use a web application firewall",
    "Enable two-factor authentication",
    "Monitor website traffic and logs",
    "Restrict file upload permissions",
  ];

  return (
    <>
      <Helmet>
        <title>
          Website Security Services in Faridabad | SSL, Firewall, Malware
          Protection
        </title>
        <meta
          name="description"
          content="Professional website security services in Faridabad. Protect your website from hackers, malware, and cyber attacks with SSL certificates, firewall protection, security audits, and regular monitoring."
        />
        <meta
          name="keywords"
          content="website security Faridabad, SSL certificate installation, malware protection, firewall security, website security audit, DDoS protection, cyber security services, web security solutions"
        />
        <link
          rel="canonical"
          href="https://dreams4u.in/services/website-security"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Website Security Services | Dreams4U"
        />
        <meta
          property="og:description"
          content="Protect your website from cyber threats with our comprehensive security services in Faridabad."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dreams4u.in/services/website-security"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website Security Services",
            serviceType: "Cyber Security",
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
              priceRange: "₹ 2,999 - ₹ 19,999",
            },
            areaServed: {
              "@type": "City",
              name: "Faridabad",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-800 to-rose-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Security Services in{" "}
              <span className="text-yellow-400">Faridabad</span>
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Protect your website from hackers, malware, and cyber attacks with
              our comprehensive security solutions. Don't risk your business
              data and reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Get Security Audit
              </a>
              <a
                href="tel:+919667316333"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Emergency: +91-96673-16333
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Stats */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-700">30,000+</div>
              <div className="text-gray-700">Websites Hacked Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">₹ 17.5Lakh</div>
              <div className="text-gray-700">Avg. Cost of Data Breach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">43%</div>
              <div className="text-gray-700">Target Small Businesses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">94%</div>
              <div className="text-gray-700">Malware via Websites</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Website Security Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Website Security is Critical
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A security breach can destroy your business reputation and cause
              significant financial losses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <ExclamationTriangleIcon className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Protect Customer Data</h3>
              <p className="text-gray-600">
                Secure sensitive customer information including personal details
                and payment data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <ShieldExclamationIcon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Maintain SEO Rankings</h3>
              <p className="text-gray-600">
                Google penalizes hacked websites, causing significant drops in
                search rankings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <UserGroupIcon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Preserve Business Reputation
              </h3>
              <p className="text-gray-600">
                Security breaches damage customer trust and can lead to business
                closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Threats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Common Website Security Threats
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Understanding these threats is the first step in protecting your
              website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <ExclamationTriangleIcon className="h-8 w-8 text-red-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{threat.name}</h3>
                <p className="text-gray-300 text-sm">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Security Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Website Security Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your website from all
              types of threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="/contact"
                  className="text-red-600 hover:text-red-800 font-medium inline-flex items-center"
                >
                  Secure My Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Website Security Packages
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the security package that best fits your website needs and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg ${pkg.popular ? "ring-4 ring-red-400 transform scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {pkg.name}
                </h3>
                <div className="text-red-700 text-sm mb-2">{pkg.bestFor}</div>
                <div className="text-3xl font-bold text-red-600 mb-6">
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
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Get Protected
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Website Security Tips
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these best practices to enhance your website security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityTips.map((tip, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <BellAlertIcon className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-6">
            Website Hacked? Need Emergency Help?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We provide 24/7 emergency security response and malware removal
            services. Don't wait - the longer a hack remains, the more damage it
            causes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919667316333"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105"
            >
              Emergency Call Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 font-bold py-4 px-10 rounded-lg text-lg transition duration-300"
            >
              Contact Security Team
            </a>
          </div>
          <p className="mt-6 text-red-200">
            Average response time: 2 hours | 99% malware removal success rate
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Website Security FAQs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about website security answered.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How much does website security cost in Faridabad?
              </h3>
              <p className="text-gray-600">
                Basic security packages start from ₹2,999/year, while
                comprehensive enterprise security solutions cost up to
                ₹19,999/year. The cost depends on your website's size,
                complexity, and security requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How often should I scan my website for malware?
              </h3>
              <p className="text-gray-600">
                We recommend daily or weekly malware scans depending on your
                website traffic and sensitivity. E-commerce sites should be
                scanned daily, while brochure websites can be scanned weekly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                What is an SSL certificate and why do I need it?
              </h3>
              <p className="text-gray-600">
                SSL (Secure Sockets Layer) encrypts data between your website
                and visitors. It's essential for protecting sensitive
                information, builds trust with visitors, and is required for
                Google ranking. All modern websites need SSL certificates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                How quickly can you respond to a security breach?
              </h3>
              <p className="text-gray-600">
                Our emergency response team can begin working on security
                breaches within 2 hours of contact. We have a 99% success rate
                in malware removal and website restoration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SecurityPage;
