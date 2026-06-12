import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

const canonicalUrl = "https://dreams4u.in/about-dreams4u";

const services = [
  {
    name: "Website Design",
    description:
      "Responsive business websites, landing pages, corporate websites, and UI/UX design.",
    icon: Building2,
    path: "/website-design-company-in-faridabad",
  },
  {
    name: "Web Development",
    description:
      "Business websites, ecommerce stores, WordPress websites, and custom web solutions.",
    icon: Globe2,
    path: "/website-development-company-in-faridabad",
  },
  {
    name: "SEO Services",
    description:
      "On-page SEO, technical SEO, local SEO, content planning, and search visibility improvements.",
    icon: Search,
    path: "/seo-services-in-faridabad",
  },
  {
    name: "Digital Marketing",
    description:
      "Landing pages, campaign planning, local lead generation, content, and conversion support.",
    icon: TrendingUp,
    path: "/digital-marketing-company-in-faridabad",
  },
  {
    name: "Ecommerce Development",
    description:
      "Product catalogues, online stores, payment-ready buying flows, and product SEO.",
    icon: ShoppingCart,
    path: "/ecommerce-website-development-in-faridabad",
  },
  {
    name: "Website Maintenance",
    description:
      "Content updates, technical fixes, performance improvements, and ongoing website support.",
    icon: Wrench,
    path: "/website-maintenance-services-in-faridabad",
  },
];

const clientTypes = [
  "Small businesses and local service providers",
  "Startups and entrepreneurs",
  "Manufacturers, traders, and B2B companies",
  "Doctors, clinics, schools, and coaching institutes",
  "Real estate, travel, hospitality, and professional services",
  "Retailers and ecommerce brands",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${canonicalUrl}/#webpage`,
      url: canonicalUrl,
      name: "About Dreams4u",
      description:
        "Company information, services, client types, service areas, and contact details for Dreams4u.",
      about: {
        "@id": "https://dreams4u.in/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://dreams4u.in/#organization",
      name: "Dreams4u",
      alternateName: "Dreams4U",
      url: "https://dreams4u.in/",
      logo: "https://dreams4u.in/images/Logo.webp",
      description:
        "Dreams4u is a website design, web development, SEO and digital marketing company in Faridabad serving Delhi NCR and India.",
      telephone: "+91-9667316333",
      email: "info@dreams4u.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1361, Bhagat Singh Colony, Sector 4",
        addressLocality: "Ballabgarh, Faridabad",
        addressRegion: "Haryana",
        postalCode: "121004",
        addressCountry: "IN",
      },
      areaServed: ["Faridabad", "Delhi NCR", "Haryana", "India"],
      sameAs: [
        "https://www.facebook.com/Dreams4u.in/",
        "https://www.instagram.com/dreams4u.in/",
      ],
    },
    {
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
          name: "About Dreams4u",
          item: canonicalUrl,
        },
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Dreams4u | Web Design, Development, SEO & Marketing</title>
        <meta
          name="description"
          content="Dreams4u is a Faridabad website design, web development, SEO and digital marketing company serving Delhi NCR and businesses across India."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="About Dreams4u" />
        <meta
          property="og:description"
          content="Learn what Dreams4u does, where we work, who we serve, and how to contact our Faridabad team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://dreams4u.in/images/dreams4u.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              About Dreams4u
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              A Faridabad digital company focused on useful business growth
            </h1>
            <p className="mt-6 text-xl leading-9 text-slate-200">
              Dreams4U is a website design, web development, SEO and digital
              marketing company in Faridabad serving Delhi NCR and India.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              We help businesses build a clear and credible online presence
              through responsive websites, search-friendly content, local SEO,
              ecommerce solutions, digital marketing, and ongoing website
              support.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Discuss Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+919667316333"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                +91 9667316333
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <article className="rounded-3xl border border-slate-200 p-7">
            <Building2 className="h-9 w-9 text-cyan-600" />
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              What Dreams4u is
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Dreams4u is a digital services company based in Ballabgarh,
              Faridabad. We plan, design, develop, optimize, and maintain
              websites that help businesses explain their services, earn trust,
              and generate enquiries.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-7">
            <MapPin className="h-9 w-9 text-cyan-600" />
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Where we serve
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Our primary market is Faridabad and Ballabgarh. We also serve
              Delhi NCR, including Delhi, Gurugram, Noida, Greater Noida, and
              Ghaziabad, and work remotely with clients across India.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 p-7">
            <Users className="h-9 w-9 text-cyan-600" />
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              How we work
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We begin with the business goal, customer questions, required
              pages, features, and target locations. The project then moves
              through content planning, design, development, SEO setup, testing,
              launch, and support.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              What Dreams4u does
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our services cover the main parts of building and growing a
              business online. Scope is selected according to the client's
              goals, current website, budget, and internal resources.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.path}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                >
                  <Icon className="h-8 w-8 text-cyan-600" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-700">
                    View service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Client Types
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Businesses we work with
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Dreams4u works with organizations that need a new website, a
              stronger local search presence, clearer content, online sales, or
              ongoing digital support.
            </p>
            <div className="mt-7 space-y-4">
              {clientTypes.map((clientType) => (
                <div key={clientType} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-600" />
                  <p className="leading-7 text-slate-700">{clientType}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl bg-slate-950 p-8 text-white lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact Details
            </p>
            <h2 className="mt-4 text-3xl font-bold">Contact Dreams4u</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Share your business type, required pages, target locations, and
              current website URL if available. We will use that information to
              discuss the right scope.
            </p>
            <address className="mt-8 space-y-5 not-italic">
              <a
                href="tel:+919667316333"
                className="flex items-center gap-4 text-slate-200 hover:text-cyan-300"
              >
                <Phone className="h-6 w-6 text-cyan-300" />
                +91 9667316333
              </a>
              <a
                href="mailto:info@dreams4u.in"
                className="flex items-center gap-4 text-slate-200 hover:text-cyan-300"
              >
                <Mail className="h-6 w-6 text-cyan-300" />
                info@dreams4u.in
              </a>
              <div className="flex items-start gap-4 text-slate-200">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-cyan-300" />
                <span>
                  1361, Bhagat Singh Colony, Sector 4, Ballabgarh, Faridabad,
                  Haryana 121004, India
                </span>
              </div>
            </address>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Open Contact Form
              <ArrowRight className="h-5 w-5" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
