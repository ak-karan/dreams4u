import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reviews from "../reviews/Reviews";
import { homeFaqs } from "../faq/faq";
import FAQSection from "../faq/FAQSection";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import homeSchema from "../seo/homeSchema";

const faridabadWebsiteGuide = [
  {
    heading: "A Faridabad website should create trust before the first call",
    body:
      "Customers in Faridabad usually check a business online before they call, visit, book, or ask for a quote. A professional website gives them one reliable place to understand your services, location, proof, pricing direction, and next step. Dreams4u designs websites that make this decision easier. The homepage introduces the offer clearly, service pages answer detailed questions, portfolio sections show real work, and contact actions stay easy to find on mobile. This matters for manufacturers, clinics, coaching centres, consultants, local shops, ecommerce sellers, travel businesses, real estate teams, and professional service providers that depend on serious enquiries.",
  },
  {
    heading: "Design and SEO are planned together",
    body:
      "A website can look attractive and still miss important search signals. We plan the page structure, headings, content depth, image alt text, internal links, schema, sitemap, and loading performance while the design is being shaped. This helps the website stay readable for customers and understandable for search engines. The primary homepage focus is Website Design Company in Faridabad, but the supporting content explains the real service in natural language instead of repeating one phrase unnaturally. Good SEO begins with useful content, crawlable pages, and a smooth experience for visitors who arrive from Google, Maps, referrals, social media, or ads.",
  },
  {
    heading: "Mobile-first experience for local buyers",
    body:
      "Most local buyers open a website from a phone. They want fast pages, readable text, visible buttons, and simple contact options. A slow or confusing website can lose an enquiry even when the business itself is excellent. Dreams4u builds responsive layouts for mobile, tablet, and desktop, with stable sections, compressed images, clear navigation, and practical calls to action. Visitors can move from the hero section to services, proof, FAQs, pricing, portfolio, and contact without feeling lost. This is especially important for Faridabad customers who compare vendors quickly and expect a business to look active, trustworthy, and easy to reach.",
  },
  {
    heading: "Content that supports real sales conversations",
    body:
      "A strong business website does not only say that a company is the best. It explains what the company does, who it helps, how the process works, what budget range may be suitable, and what the customer should prepare before starting. That kind of content reduces repetitive questions and improves lead quality. We write service sections, FAQs, portfolio notes, testimonials, and pricing guidance in a direct style so visitors can make an informed decision. For Faridabad businesses, this content can also mention service areas, industry type, local customer expectations, and practical website features such as forms, WhatsApp, ecommerce, booking, catalogues, or landing pages.",
  },
  {
    heading: "Technical quality after launch",
    body:
      "The launch is not the end of a website project. Content changes, images are added, offers expire, forms need testing, competitors improve, and search behaviour shifts. Dreams4u can support maintenance, speed checks, backups, content updates, blog publishing, SEO improvements, and new landing pages after the website is live. This keeps the website useful for customers and safer for the business. A maintained website also gives Google and AI-assisted search systems cleaner first-party information about the company. For a Faridabad brand that wants steady enquiries, ongoing care is often the difference between a website that only exists and a website that keeps working.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    text:
      "We understand your business, audience, services, service areas, competitors, goals, content readiness, and expected enquiry path before recommending a website structure.",
  },
  {
    title: "Planning",
    text:
      "We map pages, sections, CTAs, SEO targets, portfolio proof, FAQs, form requirements, and technical needs so the project has a clear direction.",
  },
  {
    title: "Content",
    text:
      "We prepare concise, useful copy for the homepage, services, proof sections, FAQs, metadata, local references, and conversion blocks.",
  },
  {
    title: "Design",
    text:
      "We create a responsive layout that feels professional, loads quickly, keeps text readable, and guides visitors toward calls, WhatsApp, or forms.",
  },
  {
    title: "Development",
    text:
      "We build clean pages with SEO basics, schema where useful, optimized images, tested forms, analytics readiness, and stable mobile layouts.",
  },
  {
    title: "Launch",
    text:
      "We check key pages, metadata, sitemap, contact actions, performance basics, and post-launch support needs before handing over the website.",
  },
];

const pricingPlans = [
  {
    name: "Starter Website",
    price: "From Rs. 10,000",
    fit: "Best for a new local business that needs a clean online presence quickly.",
    features: [
      "Focused homepage or compact business site",
      "Mobile responsive layout",
      "Basic SEO setup and contact actions",
      "Launch-ready content guidance",
    ],
  },
  {
    name: "Business Website",
    price: "From Rs. 20,000",
    fit: "Best for service businesses that need multiple pages, proof, FAQs, and stronger lead flow.",
    features: [
      "Homepage, service pages, about, portfolio, and contact",
      "SEO-ready headings, metadata, and internal links",
      "Testimonials, process, pricing guidance, and CTA sections",
      "Form, call, and WhatsApp enquiry paths",
    ],
  },
  {
    name: "Growth Website",
    price: "Custom quote",
    fit: "Best for ecommerce, custom features, content expansion, or local SEO page strategy.",
    features: [
      "Ecommerce, catalogue, landing pages, or custom workflows",
      "Advanced content and local SEO planning",
      "Performance, analytics, and maintenance support",
      "Ongoing page and campaign improvements",
    ],
  },
];

export default function Home() {
  const websiteUrl = "https://dreams4u.in";
  const phoneNumber = "+919667316333";
  const ogpost = "https://dreams4u.in/images/dreams4u.webp";

  const pageTitle = "Website Design Company in Faridabad | Dreams4U";
  const pageDescription =
    "Dreams4U is a website design company in Faridabad creating responsive, SEO-ready websites, ecommerce stores, and landing pages for local business growth.";

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={websiteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:image" content={ogpost} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogpost} />
        <script type="application/ld+json">{JSON.stringify(homeSchema)}</script>
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gray-100">
        {/* BACKGROUND IMAGE */}
        <div className="relative w-full h-auto">
          <img
            src="/images/Website-Design-Comapany-in-Faridabad.webp"
            alt="Affordable Website Design Company in Faridabad - Dreams4u"
            className="w-full h-auto block"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />

          {/* TEXT CONTENT - RESPONSIVE OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="ml-4 sm:ml-8 md:ml-20 max-w-2xl p-2 text-left sm:p-6">
              <h1
                className="text-base sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-white ml-1.5"
                style={{ textShadow: "0 20px 35px rgba(0,0,0,0.35)" }}
              >
                Website Design Company in Faridabad
              </h1>
              <p className="text-xs hidden md:block sm:text-sm md:text-base lg:text-lg font-medium mb-4 sm:mb-6 text-white/90 drop-shadow-md">
                Responsive, SEO-ready websites for Faridabad businesses that
                need better trust, clearer enquiries, and faster local growth.
              </p>
              <div className="md:flex hidden md:flex-col sm:flex-row items-start gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold transition-all hover:bg-white/20 hover:shadow-lg text-sm sm:text-base"
                >
                  View Our Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.5)] ring-1 ring-slate-200/80">
            <div className="relative grid gap-10 md:grid-cols-[1.05fr_0.95fr] p-8 md:p-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700">
                  Trusted Local Design Partner
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Why Choose Dreams4u for Website Design in Faridabad?
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl">
                    Dreams4u plans websites around clear business information,
                    responsive usability, fast loading, search visibility, and
                    straightforward enquiry journeys.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <p className="text-sm uppercase font-semibold text-cyan-600 mb-2">Fast Delivery</p>
                    <p className="text-gray-600">Ready website packages with quick turnaround for local businesses.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <p className="text-sm uppercase font-semibold text-blue-600 mb-2">Transparent Pricing</p>
                    <p className="text-gray-600">Written scope and planning estimates from Rs. 10,000 for focused small-business requirements.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 rounded-[1.5rem] bg-slate-50 p-6 md:p-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                    Local Expertise, Global Standards
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Based in Ballabgarh, we serve businesses across Faridabad, Ballabgarh, NIT, Badkhal, Sector 4, Sector 21, Sector 31, and surrounding NCR areas.
                  </p>
                  <p className="text-slate-600">
                    We combine local knowledge with international best practices in web design, SEO, and digital marketing to build websites that perform and convert.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <h5 className="font-semibold text-slate-900 mb-2">Website Design</h5>
                    <p className="text-sm text-slate-600">Custom, responsive websites that convert visitors into customers.</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <h5 className="font-semibold text-slate-900 mb-2">SEO Services</h5>
                    <p className="text-sm text-slate-600">Improve your Google rankings and get more organic traffic.</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <h5 className="font-semibold text-slate-900 mb-2">Digital Marketing</h5>
                    <p className="text-sm text-slate-600">Google Ads, social media marketing, and lead generation.</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <h5 className="font-semibold text-slate-900 mb-2">E-commerce</h5>
                    <p className="text-sm text-slate-600">Online stores with payment integration and inventory management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FARIDABAD WEBSITE DESIGN GUIDE ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">
                Faridabad Website Design
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                A practical website design company for serious local growth
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Dreams4u helps Faridabad businesses turn an online presence into
                a clearer sales asset. Every section is planned around customer
                trust, useful content, technical SEO, and simple enquiry paths.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[
                  ["Local focus", "Faridabad, Ballabgarh, NIT, Badkhal, and NCR service coverage"],
                  ["Business proof", "Portfolio, testimonials, process, pricing, and FAQs"],
                  ["Lead actions", "Call, WhatsApp, contact form, landing pages, and ecommerce flows"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="font-semibold text-slate-950">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-7">
              {faridabadWebsiteGuide.map((section) => (
                <article
                  key={section.heading}
                  className="border-b border-slate-200 pb-7 last:border-b-0 last:pb-0"
                >
                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-slate-600">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              How Dreams4u builds a website for Faridabad businesses
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A good website project needs more than a template. We keep the
              process clear so your team knows what is being written, designed,
              developed, tested, and launched at every stage.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 mb-3">
              Core Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Website Design & Development That Drives Business Growth
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
              We build modern, mobile-friendly websites for Faridabad businesses with strong branding, fast performance, and higher conversions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-40px_rgba(56,189,248,0.4)] transition hover:-translate-y-1 hover:bg-white/10">
              <div className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-200 mb-5">
                Business Websites
              </div>
              <p className="text-slate-200 mb-6">
                Professional websites for companies, clinics, coaching centers, and service providers with lead-focused pages.
              </p>
              <p className="text-sm font-semibold text-cyan-200">Planning starts around Rs. 10,000</p>
            </div>

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.35)] transition hover:-translate-y-1 hover:bg-white/10">
              <div className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-200 mb-5">
                E-commerce Websites
              </div>
              <p className="text-slate-200 mb-6">
                End-to-end online stores with catalog management, payment gateway integration, and sales-ready design.
              </p>
              <p className="text-sm font-semibold text-blue-200">Scope-based ecommerce pricing</p>
            </div>

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-40px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-white/10">
              <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-200 mb-5">
                SEO & Marketing
              </div>
              <p className="text-slate-200 mb-6">
                Local SEO, Google Ads, and digital marketing services built to help Faridabad brands rank higher and get more leads.
              </p>
              <p className="text-sm font-semibold text-emerald-200">Monthly scope based on goals</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-400 mb-4">
              Website scope can include responsive design, technical SEO,
              analytics readiness, and a documented maintenance option.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 px-8 py-3 rounded-xl text-white font-semibold transition hover:bg-cyan-400"
            >
              Get Free Website Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-700">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Website design pricing for Faridabad businesses
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Every project is quoted after a short requirement discussion
                because page count, content depth, ecommerce features,
                integrations, SEO scope, and maintenance needs can change the
                final cost. These ranges help you start with a practical budget.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center justify-center gap-2 bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Request a written quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className="flex flex-col border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-bold text-slate-950">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-2xl font-bold text-cyan-700">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {plan.fit}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                    {plan.features.map((feature) => (
                      <li key={feature} className="border-t border-slate-200 pt-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCAL SERVICE PAGES ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-600 mb-3">
              Local Website Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Faridabad-Focused Digital Pages
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Local website pages designed for search visibility, fast leads, and local customer trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Website Design Company in Faridabad",
                path: "/website-design-company-in-faridabad",
              },
              {
                title: "Website Development Company in Faridabad",
                path: "/website-development-company-in-faridabad",
              },
              {
                title: "SEO Services in Faridabad",
                path: "/seo-services-in-faridabad",
              },
              {
                title: "Digital Marketing Company in Faridabad",
                path: "/digital-marketing-company-in-faridabad",
              },
              {
                title: "Website Design Company in Delhi NCR",
                path: "/website-design-company-in-delhi-ncr",
              },
              {
                title: "Ecommerce Website Development",
                path: "/ecommerce-website-development-in-faridabad",
              },
              {
                title: "WordPress Website Development",
                path: "/wordpress-development-in-faridabad",
              },
              {
                title: "Custom Website Development",
                path: "/custom-website-development-in-faridabad",
              },
              {
                title: "Website Redesign Services",
                path: "/website-redesign-services-in-faridabad",
              },
              {
                title: "Landing Page Design Services",
                path: "/landing-page-design-services-in-faridabad",
              },
              {
                title: "Website Maintenance Services",
                path: "/website-maintenance-services-in-faridabad",
              },
            ].map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {page.title}
                  </h3>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                    Faridabad
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Optimized local service page for better Google visibility and nearby customer trust.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-cyan-600 font-semibold transition group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/works"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700"
            >
              Explore all service-area pages
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-cyan-600 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-100">
              Free Consultation
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Ready to build a better website for your Faridabad business?
            </h2>
            <p className="mt-4 text-lg leading-8 text-cyan-50">
              Share your current website, business type, target customers, and
              required pages. Dreams4u will suggest a practical structure,
              timeline, and budget direction before development starts.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white px-6 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
            >
              Start a website project
            </Link>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <div className="content-auto-section">
        <ContactForm />
      </div>

      {/* ================= REVIEWS ================= */}
      <div className="content-auto-section">
        <Reviews />
      </div>

      {/* ================= PORTFOLIO ================= */}
      <div className="content-auto-section">
        <Portfolio showMetadata={false} />
      </div>

      {/* ================= FAQ ================= */}
      <div className="content-auto-section">
        <FAQSection faqs={homeFaqs} />
      </div>
    </>
  );
}
