import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import FAQSection from "../faq/FAQSection";
import FAQSchema from "../faq/FAQSchema";
import NotFound from "../pages/NotFound";
import { faridabadAreaMap } from "./faridabadAreas";

const servicePoints = [
  "Custom business website design",
  "Responsive web development",
  "On-page and local SEO optimization",
  "Lead generation landing pages",
  "Website redesign and maintenance",
  "Google-friendly content structure",
];

const workProcess = [
  {
    title: "Business Discovery",
    description:
      "We understand your services, target audience, and the exact local market you want to reach.",
  },
  {
    title: "Page Planning",
    description:
      "We create a structure focused on trust, speed, service clarity, and conversion-ready SEO sections.",
  },
  {
    title: "Design and Development",
    description:
      "Your website is built to look professional on mobile, tablet, and desktop without sacrificing speed.",
  },
  {
    title: "SEO Launch Setup",
    description:
      "We finalize metadata, schema, page copy, internal links, and call-to-action flow for stronger local discoverability.",
  },
];

function buildServiceSchema(area) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Website Design and SEO Services in ${area.displayName}, Faridabad`,
    description: area.description,
    areaServed: {
      "@type": "Place",
      name: `${area.displayName}, Faridabad`,
    },
    serviceType: "Website Design, Web Development, SEO and Digital Marketing",
    provider: {
      "@type": "LocalBusiness",
      name: "Dreams4u",
      url: "https://dreams4u.in",
      telephone: area.phoneNumber,
      image: area.image,
      address: {
        "@type": "PostalAddress",
        streetAddress: area.officeAddress,
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121004",
        addressCountry: "IN",
      },
    },
  };
}

function buildBreadcrumbSchema(area) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dreams4u.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Faridabad",
        item: "https://dreams4u.in/faridabad",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.displayName,
        item: area.canonicalUrl,
      },
    ],
  };
}

export default function FaridabadLocationPage() {
  const { areaSlug } = useParams();
  const area = faridabadAreaMap[areaSlug];

  if (!area) {
    return <NotFound />;
  }

  const nearbyAreas = area.nearby
    .map((slug) => faridabadAreaMap[slug])
    .filter(Boolean);

  const serviceSchema = buildServiceSchema(area);
  const breadcrumbSchema = buildBreadcrumbSchema(area);

  return (
    <>
      <Helmet>
        <title>{area.title}</title>
        <meta name="description" content={area.description} />
        <meta name="keywords" content={area.keywords} />
        <link rel="canonical" href={area.canonicalUrl} />
        <meta property="og:title" content={area.title} />
        <meta property="og:description" content={area.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={area.canonicalUrl} />
        <meta property="og:image" content={area.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={area.title} />
        <meta name="twitter:description" content={area.description} />
        <meta name="twitter:image" content={area.image} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <FAQSchema faqs={area.faqs} />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-cyan-200">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link to="/faridabad" className="hover:text-white">
              Faridabad
            </Link>
            <span>/</span>
            <span className="text-white">{area.displayName}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/30">
                Local Website Design + SEO
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                Website Design Company in {area.displayName}, Faridabad
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                Dreams4u helps businesses in {area.displayName}, Faridabad with
                fast websites, local SEO pages, conversion-focused design, and
                digital growth support that turns visitors into enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Get Free Consultation
                </a>
                <a
                  href={`tel:${area.phoneNumber.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Call {area.phoneNumber}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl bg-white/5 p-5">
                  <MapPinIcon className="h-8 w-8 text-cyan-300" />
                  <h2 className="mt-3 text-lg font-semibold">Area Focus</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    SEO-ready website pages crafted for {area.displayName},
                    Faridabad searches and local enquiries.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <GlobeAltIcon className="h-8 w-8 text-cyan-300" />
                  <h2 className="mt-3 text-lg font-semibold">What We Build</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Business websites, service pages, landing pages, portfolio
                    sites, and SEO content sections for local growth.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-5">
                  <PhoneIcon className="h-8 w-8 text-cyan-300" />
                  <h2 className="mt-3 text-lg font-semibold">Quick Contact</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Talk directly with our team for website planning, redesign,
                    or local SEO support in {area.displayName}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Why Businesses Choose Us
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Strong local pages for {area.displayName}
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We combine design quality, conversion strategy, and on-page SEO
                fundamentals so your business website looks professional and
                performs better in local search.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-6 md:grid-cols-3">
              {area.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-3xl border border-slate-200 p-6 shadow-sm"
                >
                  <CheckBadgeIcon className="h-8 w-8 text-cyan-600" />
                  <p className="mt-4 leading-7 text-slate-700">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Services in {area.displayName}
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Complete website and SEO support for local businesses
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicePoints.map((service) => (
              <div
                key={service}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <ArrowRightIcon className="h-7 w-7 text-cyan-600" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {service}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Tailored for businesses that want better visibility and more
                  enquiries from {area.displayName}, Faridabad.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Our Process
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                How we build location-focused pages that convert
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Every project is planned for clarity, trust, mobile usability,
                and local SEO relevance so your audience in {area.displayName}
                can quickly understand your offer and contact you.
              </p>
            </div>

            <div className="grid gap-5">
              {workProcess.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Start Your Project
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Need a website or SEO help in {area.displayName}, Faridabad?
              </h2>
              <p className="mt-3 max-w-3xl text-slate-300">
                We can plan a new website, improve your current pages, or build
                a local SEO strategy designed around your business goals.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={area.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                WhatsApp Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Send Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <RocketLaunchIcon className="h-8 w-8 text-cyan-600" />
            <h2 className="text-3xl font-bold text-slate-900">
              Nearby Faridabad pages
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {nearbyAreas.map((nearbyArea) => (
              <Link
                key={nearbyArea.slug}
                to={nearbyArea.routePath}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-400 hover:shadow-md"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {nearbyArea.displayName}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Explore website design and local SEO services in{" "}
                  {nearbyArea.displayName}, Faridabad.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={area.faqs} />
    </>
  );
}
