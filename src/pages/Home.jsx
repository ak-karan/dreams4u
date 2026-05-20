import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Services from "../service/Services";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "../reviews/Reviews";
import { homeFaqs } from "../faq/faq";
import FAQSection from "../faq/FAQSection";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import homeSchema from "../seo/homeSchema";

export default function Home() {
  const companyName = "Dreams4u";
  const websiteUrl = "https://dreams4u.in";
  const phoneNumber = "+919717030244";
  const callnow = "Call Now"
  const location = "Faridabad, Haryana";
  const ogpost = "https://dreams4u.in/images/dreams4u.webp";

  const pageTitle = `Best Website Design Company in Faridabad | Affordable Web Design`;
  const pageDescription = `Dreams4u - Top-rated website design company in Faridabad offering affordable web design, SEO services, digital marketing, e-commerce solutions & mobile-responsive development. Call +91-9717030244`;
  const keywords = `website design company Faridabad, web development Faridabad, SEO services Faridabad, digital marketing Faridabad, e-commerce website Faridabad, responsive web design Faridabad, ${companyName}, Dreams4u Faridabad`;

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
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
            src="/images/Website-Design-Comapany-in-Faridabad.png"
            alt="Affordable Website Design Company in Faridabad - Dreams4u"
            className="w-full h-auto block"
            loading="lazy"
            width="1920"
            height="1080"
          />

          {/* TEXT CONTENT - RESPONSIVE OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-start">
            <div className="ml-4 sm:ml-8 md:ml-20 text-left p-2 sm:p-6 animate-fade-up max-w-2xl">
              <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl uppercase leading-tight mb-4 sm:mb-6 animate-letter text-white tracking-[0.02em] ml-1.5"
                style={{ textShadow: '0 20px 35px rgba(0,0,0,0.35)' }}
              >
                {["We Build Modern", "Websites that", "grow your Business"].map(
                  (line, lineIndex) => (
                    <div key={lineIndex}>
                      {line.split("").map((char, i) => (
                        <span key={i} style={{ "--i": lineIndex * 30 + i }}>
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                    </div>
                  ),
                )}
              </h1>
              <p className="text-xs hidden md:block sm:text-sm md:text-base lg:text-lg font-medium mb-4 sm:mb-6 text-white/90 drop-shadow-md">
                Beautiful Design. Powerful Performance.
                <br /> Result That Matter.
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
            <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full bg-cyan-100 opacity-70 blur-3xl"></div>
            <div className="pointer-events-none absolute -left-16 bottom-10 h-40 w-40 rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
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
                    With over 5 years of experience serving Faridabad businesses, Dreams4u delivers websites that look premium, load fast, and convert visitors into customers.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <p className="text-sm uppercase font-semibold text-cyan-600 mb-2">Fast Delivery</p>
                    <p className="text-gray-600">Ready website packages with quick turnaround for local businesses.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <p className="text-sm uppercase font-semibold text-blue-600 mb-2">Transparent Pricing</p>
                    <p className="text-gray-600">Clear costs from ₹8,000 so you know exactly what you pay for.</p>
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
              <p className="text-sm font-semibold text-cyan-200">Starting from ₹12,000</p>
            </div>

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.35)] transition hover:-translate-y-1 hover:bg-white/10">
              <div className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-200 mb-5">
                E-commerce Websites
              </div>
              <p className="text-slate-200 mb-6">
                End-to-end online stores with catalog management, payment gateway integration, and sales-ready design.
              </p>
              <p className="text-sm font-semibold text-blue-200">Starting from ₹25,000</p>
            </div>

            <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_-40px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-white/10">
              <div className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-200 mb-5">
                SEO & Marketing
              </div>
              <p className="text-slate-200 mb-6">
                Local SEO, Google Ads, and digital marketing services built to help Faridabad brands rank higher and get more leads.
              </p>
              <p className="text-sm font-semibold text-emerald-200">Starting from ₹5,000/month</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-slate-400 mb-4">
              All our websites are mobile-responsive, SEO-optimized, and include 6 months of free maintenance.
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
                title: "SEO Services in Faridabad",
                path: "/seo-services-in-faridabad",
              },
              {
                title: "Ecommerce Website Development in Faridabad",
                path: "/ecommerce-website-development-in-faridabad",
              },
              {
                title: "WordPress Development in Faridabad",
                path: "/wordpress-development-in-faridabad",
              },
              {
                title: "Digital Marketing Services in Faridabad",
                path: "/digital-marketing-services-in-faridabad",
              },
              {
                title: "Website Maintenance Services in Faridabad",
                path: "/website-maintenance-services-in-faridabad",
              },
            ].map((page) => (
              <a
                key={page.path}
                href={page.path}
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <ContactForm />

      {/* ================= SERVICES ================= */}
      <section aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Our Web Services
        </h2>
        <Services />
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChooseUs />

      {/* ================= REVIEWS ================= */}
      <section aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="sr-only">
          Customer Reviews
        </h2>
        <Reviews />
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section aria-labelledby="portfolio-heading">
        <h2 id="portfolio-heading" className="sr-only">
          Our Portfolio
        </h2>
        <Portfolio />
      </section>

      {/* ================= FAQ ================= */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
}
