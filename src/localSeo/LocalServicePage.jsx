import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import FAQSection from "../faq/FAQSection";
import FAQSchema from "../faq/FAQSchema";
import NotFound from "../pages/NotFound";
import { localServicePageMap, localServicePages } from "./localServicePages";

const relatedLinks = [
  { name: "Website Design", path: "/services/website-design" },
  { name: "SEO Optimization", path: "/services/search-engine-optimization" },
  { name: "Ecommerce Solutions", path: "/services/ecommerce" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Website Maintenance", path: "/services/annual-maintenance" },
  { name: "Contact Dreams4u", path: "/contact" },
];

function buildSchemas(page) {
  const servedAreas = page.areaServed || [
    "Faridabad",
    "Ballabgarh",
    "NIT Faridabad",
    "Badkhal",
  ];
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.serviceType,
    description: page.metaDescription,
    image: page.image,
    url: page.canonicalUrl,
    areaServed: servedAreas.map((name) => ({ "@type": "Place", name })),
    provider: {
      "@type": "LocalBusiness",
      name: "Dreams4u",
      url: "https://dreams4u.in",
      telephone: page.phoneNumber,
      image: page.image,
      priceRange: "Rs. 8,000+",
      address: {
        "@type": "PostalAddress",
        streetAddress: page.address,
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121004",
        addressCountry: "IN",
      },
    },
  };

  const breadcrumbSchema = {
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
        name: page.h1,
        item: page.canonicalUrl,
      },
    ],
  };

  return { serviceSchema, breadcrumbSchema };
}

export default function LocalServicePage() {
  const { serviceSlug } = useParams();
  const page = localServicePageMap[serviceSlug];

  if (!page) {
    return <NotFound />;
  }

  const { serviceSchema, breadcrumbSchema } = buildSchemas(page);
  const otherLocalPages = localServicePages.filter((item) => item.slug !== page.slug);

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywords} />
        <link rel="canonical" href={page.canonicalUrl} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={page.canonicalUrl} />
        <meta property="og:image" content={page.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={page.image} />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <FAQSchema faqs={page.faqs} />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-cyan-200">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">{page.h1}</span>
            </div>
            <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/30">
              {page.badge || "Faridabad Local SEO Page"}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Get Free Consultation
              </Link>
              <a
                href={`tel:${page.phoneNumber.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Call {page.phoneNumber}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/20">
            <img
              src={page.image}
              alt={page.imageAlt}
              width="900"
              height="620"
              className="h-full min-h-[320px] w-full object-cover"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Local Growth
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Built for rankings, speed, and enquiries
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                {page.primaryOffer}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {page.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-5">
                  <CheckCircleIcon className="h-7 w-7 text-cyan-600" />
                  <p className="mt-3 font-medium leading-7 text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <MapPinIcon className="h-9 w-9 text-cyan-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Why local SEO matters
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{page.whyLocal}</p>
            </article>
            <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <SparklesIcon className="h-9 w-9 text-cyan-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Our working approach
              </h2>
              <p className="mt-4 leading-7 text-slate-600">{page.approach}</p>
            </article>
            <article className="rounded-3xl bg-slate-950 p-8 text-white">
              <PhoneIcon className="h-9 w-9 text-cyan-300" />
              <h2 className="mt-5 text-2xl font-bold">
                Need a quick audit?
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                Share your website URL and target area. We will review metadata,
                page speed, content depth, internal links, schema, and local
                keyword gaps before suggesting the next improvement.
              </p>
              <a
                href={page.whatsappUrl}
                className="mt-6 inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Dreams4u
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {page.sections.map((section) => (
            <article key={section.heading} className="border-b border-slate-200 py-8 last:border-b-0">
              <h2 className="text-3xl font-bold text-slate-900">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            SEO, Content, Local Signals
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Complete optimization checklist for {page.serviceType}
          </h2>
          <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Every {page.serviceType.toLowerCase()} page should have a focused
              title tag, helpful meta description, one clear H1, logical H2
              sections, descriptive image alt text, crawlable internal links,
              clean canonical URL, and schema markup. We use these signals to
              connect the page with Faridabad service intent while keeping the
              copy readable for real customers. The page is written to answer
              what the service includes, who it is for, how the process works,
              what local areas are served, and what action the visitor should
              take next.
            </p>
            <p>
              Content SEO is handled with depth instead of keyword stuffing.
              Search terms such as website design company in Faridabad, web
              designer in Ballabgarh, ecommerce website company Faridabad, SEO
              company in Faridabad, and website development services near me are
              placed where they make sense. The surrounding content explains
              benefits, use cases, deliverables, local coverage, technical
              checks, FAQs, and conversion points so Google receives enough
              context and visitors receive enough confidence.
            </p>
            <p>
              Technical SEO and speed are reviewed together. Images use
              descriptive names, width and height attributes, meaningful alt
              text, and lazy loading where the image is not the main visual.
              Static assets are cached for a long duration, pages are
              prerendered into HTML, sitemap and robots.txt are regenerated, and
              structured data is included in the head. This helps the page load
              faster, become easier to crawl, and present stronger information
              in search results.
            </p>
            <p>
              Local SEO needs consistent trust signals. The page includes
              Dreams4u contact details, Faridabad service coverage, references
              to Ballabgarh, NIT, Badkhal, and nearby sectors, links to related
              services, and a clear path to the contact page. These internal
              links help users move from research to enquiry and help search
              engines understand the relationship between services, blog
              content, and local landing pages.
            </p>
            <p>
              After publishing, the page should be checked in Google Search
              Console, PageSpeed Insights, Rich Results Test, and analytics.
              Real SEO performance depends on crawl status, competition,
              backlinks, Google Business Profile strength, reviews, and ongoing
              content updates. The page is built with best-practice on-page,
              technical, content, local, and schema foundations so future
              improvements can build on a clean base.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Internal Links
              </p>
              <h2 className="mt-4 text-3xl font-bold">
                Explore related Dreams4u services
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                These links help visitors and search engines understand how our
                website design, SEO, ecommerce, digital marketing, maintenance,
                and contact pages support each other.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 font-semibold transition hover:border-cyan-300 hover:bg-white/10"
                >
                  {link.name}
                  <ArrowRightIcon className="h-5 w-5 text-cyan-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">
            More local SEO pages in Faridabad
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {otherLocalPages.map((item) => (
              <Link
                key={item.slug}
                to={item.routePath}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-400 hover:shadow-md"
              >
                <p className="text-lg font-semibold text-slate-900">
                  {item.h1}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={page.faqs} />
    </>
  );
}
