import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  UserIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  TrashIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

function Privacy() {
  const dataCategories = [
    {
      type: "Personal Information",
      examples: ["Name", "Email address", "Phone number", "Business address"],
      purpose: "To contact you and provide services",
    },
    {
      type: "Usage Data",
      examples: ["IP address", "Browser type", "Pages visited", "Time spent"],
      purpose: "To improve website performance and user experience",
    },
    {
      type: "Cookies Data",
      examples: ["Session cookies", "Preference cookies", "Security cookies"],
      purpose: "To remember your preferences and enhance security",
    },
    {
      type: "Communication Data",
      examples: [
        "Email correspondence",
        "Contact form submissions",
        "Chat messages",
      ],
      purpose: "To respond to your inquiries and provide support",
    },
  ];

  const dataProtection = [
    {
      measure: "SSL Encryption",
      description:
        "All data transmissions are encrypted using SSL/TLS technology",
    },
    {
      measure: "Secure Servers",
      description: "Data stored on secure servers with firewall protection",
    },
    {
      measure: "Access Control",
      description:
        "Limited access to personal data to authorized personnel only",
    },
    {
      measure: "Regular Audits",
      description: "Regular security audits and vulnerability assessments",
    },
  ];

  const userRights = [
    {
      right: "Right to Access",
      description: "Request copies of your personal data",
    },
    {
      right: "Right to Rectification",
      description: "Request correction of inaccurate data",
    },
    {
      right: "Right to Erasure",
      description: "Request deletion of your personal data",
    },
    {
      right: "Right to Restrict",
      description: "Request restriction of data processing",
    },
    {
      right: "Right to Object",
      description: "Object to our processing of your data",
    },
    {
      right: "Right to Data Portability",
      description: "Request transfer of your data to another organization",
    },
  ];

  const thirdParties = [
    {
      service: "Google Analytics",
      purpose: "Website traffic analysis",
    },
    {
      service: "Google Ads",
      purpose: "Advertising and marketing",
    },
    {
      service: "Payment Processors",
      purpose: "Secure payment processing",
    },
    {
      service: "Email Service Providers",
      purpose: "Communication and marketing",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dreams4U - Website Services Faridabad</title>
        <meta
          name="description"
          content="Privacy Policy for Dreams4U website design and development services. Learn how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://dreams4u.in/privacy" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Privacy policy and data protection information for Dreams4U",
            datePublished: "2024-01-01",
            publisher: {
              "@type": "Organization",
              name: "Dreams4U",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                postalCode: "121004",
                addressCountry: "IN",
              },
            },
          })}
        </script>
      </Helmet>

      {/* Main Content with proper padding for header */}
      <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-6">
              <ShieldCheckIcon className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center text-gray-600">
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              <p className="text-xl">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex">
              <InformationCircleIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Your Privacy Matters
                </h3>
                <p className="text-gray-700">
                  At Dreams4U, we are committed to protecting your privacy and
                  personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Dreams4U ("we", "our", "us") operates the dreams4u.in website
                (the "Service"). This page informs you of our policies regarding
                the collection, use, and disclosure of personal data when you
                use our Service.
              </p>
              <p className="text-gray-700">
                We use your data to provide and improve the Service. By using
                the Service, you agree to the collection and use of information
                in accordance with this policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <EyeIcon className="h-8 w-8 text-purple-500 mr-3" />
              Information We Collect
            </h2>

            <div className="space-y-6">
              {dataCategories.map((category, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.type}
                  </h3>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Examples:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <span className="font-medium text-purple-700">
                      Purpose:{" "}
                    </span>
                    <span className="text-gray-700">{category.purpose}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <CheckCircleIcon className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Service Provision
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Provide and maintain our services</li>
                  <li>• Process your transactions</li>
                  <li>• Send service-related communications</li>
                  <li>• Respond to your inquiries</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <ArrowPathIcon className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Improvement & Analysis
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Improve our website and services</li>
                  <li>• Analyze usage patterns</li>
                  <li>• Develop new features</li>
                  <li>• Conduct research and analysis</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <DevicePhoneMobileIcon className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Marketing & Communication
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Send promotional materials</li>
                  <li>• Provide updates about our services</li>
                  <li>• Conduct marketing campaigns</li>
                  <li>• Share relevant content</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl">
                <ShieldCheckIcon className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Security & Legal
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Protect against fraudulent activity</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Enforce our terms and policies</li>
                  <li>• Protect our rights and property</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection Measures */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LockClosedIcon className="h-8 w-8 text-blue-500 mr-3" />
              Data Protection Measures
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataProtection.map((protection, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 text-blue-800 rounded-lg p-2 mr-3">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {protection.measure}
                    </h3>
                  </div>
                  <p className="text-gray-700">{protection.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Your Data Rights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserIcon className="h-8 w-8 text-green-500 mr-3" />
              Your Data Protection Rights
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                Under data protection laws, you have rights including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userRights.map((right, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-900 mb-2">
                      {right.right}
                    </h3>
                    <p className="text-gray-700 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-6 rounded-xl mt-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  How to Exercise Your Rights
                </h3>
                <p className="text-gray-700 mb-4">
                  To exercise any of these rights, please contact us using the
                  information provided below. We will respond to your request
                  within 30 days.
                </p>
                <div className="flex items-center text-green-700">
                  <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                  <span className="text-sm">
                    We may require verification of your identity before
                    processing requests
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Sharing */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrashIcon className="h-8 w-8 text-orange-500 mr-3" />
              Third-Party Data Sharing
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                We may share your information with third parties in the
                following circumstances:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {thirdParties.map((party, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {party.service}
                    </h3>
                    <p className="text-gray-700">{party.purpose}</p>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-900 mb-3">
                  Important Notes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • We only share necessary information with trusted partners
                  </li>
                  <li>• Third parties are required to protect your data</li>
                  <li>• We do not sell your personal information</li>
                  <li>• You can opt-out of marketing communications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookies Policy Link */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cookies Policy
            </h2>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track
                activity on our Service and hold certain information. For
                detailed information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy page.
              </p>
              <a
                href="/cookies"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View Cookies Policy →
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <QuestionMarkCircleIcon className="h-8 w-8 mr-3" />
              Contact Us
            </h2>

            <div className="space-y-4">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Email</h4>
                  <p>privacy@dreams4u.in</p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Phone</h4>
                  <p>+91-96673-16333</p>
                </div>

                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Address</h4>
                  <p className="text-sm">
                    1361 Bhaghat Singh Colony, Ballabgarh, Faridabad, Haryana
                    121004
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm">
                  For data protection requests, please include "Privacy Request"
                  in your subject line.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-gray-100 px-6 py-3 rounded-full">
              <InformationCircleIcon className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;
