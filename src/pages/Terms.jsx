import React from "react";
import { Helmet } from "react-helmet-async";
import {
  DocumentTextIcon,
  ScaleIcon,
  UserIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

function Terms() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
    },
    {
      title: "Use License",
      content:
        "Permission is granted to temporarily view the materials on Dreams4U's website for personal, non-commercial transitory viewing only.",
    },
    {
      title: "Services Description",
      content:
        "Dreams4U provides website design, development, SEO, and digital marketing services. All descriptions of services are subject to change at our discretion.",
    },
    {
      title: "Payment Terms",
      content:
        "Payment terms will be specified in individual project proposals. Late payments may result in suspension of services.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, graphics, logos, and images, is the property of Dreams4U and protected by copyright laws.",
    },
    {
      title: "User Responsibilities",
      content:
        "You agree to provide accurate information and not use our services for any illegal or unauthorized purpose.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Dreams4U shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of our services.",
    },
    {
      title: "Termination",
      content:
        "We may terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
    },
    {
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the top of this page.",
    },
  ];

  const userResponsibilities = [
    "Provide accurate and complete information",
    "Maintain the confidentiality of your account",
    "Notify us immediately of any unauthorized use",
    "Comply with all applicable laws and regulations",
    "Not engage in any fraudulent or illegal activities",
  ];

  const prohibitedActivities = [
    "Violating any laws or regulations",
    "Infringing on intellectual property rights",
    "Distributing viruses or malicious code",
    "Attempting to gain unauthorized access",
    "Interfering with service functionality",
    "Harassing other users or our staff",
  ];

  return (
    <>
      <Helmet>
        <title>
          Terms and Conditions | Dreams4U - Website Services Faridabad
        </title>
        <meta
          name="description"
          content="Terms and Conditions for Dreams4U website design and development services. Read our terms of service, user agreements, and legal policies."
        />
        <link rel="canonical" href="https://dreams4u.in/terms" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            description:
              "Legal terms and conditions for Dreams4U website services",
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
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <ScaleIcon className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
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
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
            <div className="flex">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Important Legal Notice
                </h3>
                <p className="text-gray-700">
                  Please read these Terms and Conditions carefully before using
                  our website. By accessing or using our services, you agree to
                  be bound by these terms. If you disagree with any part of
                  these terms, you may not access our services.
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
                Welcome to Dreams4U ("Company", "we", "our", "us"). These Terms
                and Conditions ("Terms", "Terms and Conditions") govern your use
                of our website located at dreams4u.in (the "Service") operated
                by Dreams4U.
              </p>
              <p className="text-gray-700">
                Our Privacy Policy also governs your use of our Service and
                explains how we collect, safeguard and disclose information that
                results from your use of our web pages.
              </p>
              <p className="text-gray-700">
                Your agreement with us includes these Terms and our Privacy
                Policy ("Agreements"). You acknowledge that you have read and
                understood Agreements, and agree to be bound of them.
              </p>
            </div>
          </div>

          {/* Main Terms Sections */}
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4 flex-shrink-0">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-700">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <UserIcon className="h-8 w-8 text-green-500 mr-3" />
              User Responsibilities
            </h2>

            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-4">
                As a user of our services, you are responsible for the
                following:
              </p>
              <ul className="space-y-3">
                {userResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-8 w-8 text-red-500 mr-3" />
              Prohibited Activities
            </h2>

            <div className="bg-red-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                You may not use our services for any of the following purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Limitations */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <InformationCircleIcon className="h-8 w-8 text-purple-500 mr-3" />
              Service Limitations
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Availability
                </h3>
                <p className="text-gray-700">
                  We strive to maintain 99.9% service availability but do not
                  guarantee uninterrupted access to our services.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Accuracy
                </h3>
                <p className="text-gray-700">
                  While we make every effort to ensure information accuracy, we
                  cannot guarantee that all content is error-free.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Third-Party Services
                </h3>
                <p className="text-gray-700">
                  Our services may integrate with third-party services. We are
                  not responsible for their terms, policies, or practices.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <QuestionMarkCircleIcon className="h-8 w-8 mr-3" />
              Questions & Contact
            </h2>

            <div className="space-y-4">
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Email</h4>
                  <p>contact@dreams4u.in</p>
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
                  For legal notices, please send correspondence to our
                  registered office address above.
                </p>
              </div>
            </div>
          </div>

          {/* Acceptance Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-gray-100 px-6 py-3 rounded-full">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-gray-700">
                By using our services, you acknowledge that you have read,
                understood, and agree to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terms;
