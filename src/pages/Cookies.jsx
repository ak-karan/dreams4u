import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheckIcon,
  RocketLaunchIcon,
  InformationCircleIcon,
  UserIcon,
  LockClosedIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";
function Cookies() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description:
        "Required for the website to function properly. Cannot be turned off.",
      examples: ["Session management", "Security features", "Load balancing"],
    },
    {
      name: "Performance Cookies",
      description: "Help us understand how visitors interact with our website.",
      examples: ["Page visits", "Time spent on pages", "Error tracking"],
    },
    {
      name: "Functional Cookies",
      description:
        "Remember your preferences and settings for a better experience.",
      examples: ["Language preferences", "Region settings", "Layout choices"],
    },
    {
      name: "Marketing Cookies",
      description:
        "Used to track visitors across websites for advertising purposes.",
      examples: [
        "Ad targeting",
        "Campaign measurement",
        "Social media integration",
      ],
    },
  ];

  const cookieManagement = [
    {
      browser: "Google Chrome",
      steps: [
        "Click the three dots → Settings → Privacy and security → Cookies and other site data",
      ],
    },
    {
      browser: "Mozilla Firefox",
      steps: ["Menu → Options → Privacy & Security → Cookies and Site Data"],
    },
    {
      browser: "Safari",
      steps: ["Safari → Preferences → Privacy → Cookies and website data"],
    },
    {
      browser: "Microsoft Edge",
      steps: [
        "Three dots → Settings → Cookies and site permissions → Cookies and data stored",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Cookie Policy | Dreams4U - Website Design Services Faridabad
        </title>
        <meta
          name="description"
          content="Cookie policy for Dreams4U website. Learn about the cookies we use, how we use them, and how you can manage your cookie preferences."
        />
        <link rel="canonical" href="https://dreams4u.in/cookies" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cookie Policy",
            description: "Cookie policy and information for Dreams4U website",
            publisher: {
              "@type": "Organization",
              name: "Dreams4U",
            },
          })}
        </script>
      </Helmet>

      {/* Main Content with proper padding for header */}
      <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <RocketLaunchIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-start mb-6">
              <InformationCircleIcon className="h-8 w-8 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Introduction
                </h2>
                <p className="text-gray-700">
                  This Cookie Policy explains how Dreams4U ("we", "us", or
                  "our") uses cookies and similar technologies on our website.
                  By using our website, you consent to the use of cookies as
                  described in this policy.
                </p>
              </div>
            </div>
          </div>

          {/* What are Cookies */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-8 w-8 text-green-500 mr-3" />
              What Are Cookies?
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile) when you visit a website. They
                help the website remember information about your visit, which
                can make it easier to visit the site again and make the site
                more useful to you.
              </p>
            </div>
          </div>

          {/* Types of Cookies We Use */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Types of Cookies We Use
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {cookie.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  <div className="space-y-2">
                    {cookie.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserIcon className="h-8 w-8 text-purple-500 mr-3" />
              How We Use Cookies
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Website Functionality
                  </h3>
                  <p className="text-gray-700">
                    To enable basic functions like page navigation and access to
                    secure areas of the website.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Performance Analysis
                  </h3>
                  <p className="text-gray-700">
                    To analyze how visitors use our website and improve its
                    performance and user experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 text-green-800 rounded-lg p-3 mr-4 flex-shrink-0">
                  <span className="font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Preferences
                  </h3>
                  <p className="text-gray-700">
                    To remember your preferences and settings for future visits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <DeviceTabletIcon className="h-8 w-8 text-red-500 mr-3" />
              Managing Your Cookies
            </h2>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-4">
                You can control and/or delete cookies as you wish. You can
                delete all cookies that are already on your computer and you can
                set most browsers to prevent them from being placed.
              </p>
              <p className="text-gray-700">
                However, if you do this, you may have to manually adjust some
                preferences every time you visit a site and some services and
                functionalities may not work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieManagement.map((browser, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {browser.browser}
                  </h3>
                  <ul className="space-y-2">
                    {browser.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="text-blue-500 mr-2">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LockClosedIcon className="h-8 w-8 text-orange-500 mr-3" />
              Third-Party Cookies
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                We may also use various third-party cookies to report usage
                statistics of the website, deliver advertisements on and through
                the website, and so on.
              </p>
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Third-Party Services We Use:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Google Analytics for website analytics
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Google Ads for advertising
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Social media platforms (Facebook, Instagram, LinkedIn)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about our Cookie Policy, please contact
              us:
            </p>
            <div className="space-y-3">
              <p>📧 Email: contact@dreams4u.in</p>
              <p>📞 Phone: +91-96673-16333</p>
              <p>
                🏢 Address: 1361 Bhaghat Singh Colony, Ballabgarh, Faridabad,
                Haryana 121004
              </p>
            </div>
          </div>

          {/* Policy Update Notice */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              We may update this Cookie Policy from time to time. We will notify
              you of any changes by posting the new Cookie Policy on this page
              and updating the "Last Updated" date.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cookies;
