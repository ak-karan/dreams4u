import React from "react";
// import homeImage from "../../public/images/Website-design-company.webp";
// import bulbHome from "../assets/images/bulb.webp";
// import lap1Home from "../assets/images/lap1Home.webp";
// import lap2Home from "../assets/images/lap2Home.webp";
// import lap3Home from "../assets/images/lap3Home.webp";
import Services from "../service/Services";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "../reviews/Reviews";
// import FAQSchema from "../faq/FAQSchema";
import { homeFaqs } from "../faq/faq";
import FAQSection from "../faq/FAQSection";
// import LocalBusinessSchema from "../faq/LocalBusinessSchema";
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

  const pageTitle = `Best Website Design Company in Faridabad | ${companyName}`;
  const pageDescription = `${companyName} - Top-rated website design company in Faridabad offering affordable website design, SEO, digital marketing, e-commerce solutions & mobile-responsive development services. Call ${phoneNumber}`;
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
        <img
          src="/images/Website-design-company.webp"
          alt="Professional Website Design Company in Faridabad - Dreams4u"
          className="w-full h-auto"
          loading="lazy"
          width="1920"
          height="1080"
        />

        {/* BULB */}
        <img
          src="/images/bulb.webp"
          alt="Creative Web Solutions"
          className="absolute top-10 left-[47%] md:top-[29%] md:left-[47%] w-3 md:w-10 animate-swing"
          loading="lazy"
          width="40"
          height="40"
        />

        {/* FLOATING IMAGES */}
        <img
          src="/images/lap1Home.webp"
          alt="Web Design Services Faridabad"
          className="absolute w-12 md:w-44 animate-float delay-200 md:top-90 md:left-195 top-25 left-72"
          loading="lazy"
          width="176"
          height="132"
        />

        <img
          src="/images/lap2Home.webp"
          alt="Website Development Company"
          className="absolute w-8 md:w-32 animate-float delay-500 md:top-52 md:left-175 top-15 left-64"
          loading="lazy"
          width="128"
          height="96"
        />

        <img
          src="/images/lap3Home.webp"
          alt="Digital Marketing Services Faridabad"
          className="absolute w-7 md:w-28 animate-float delay-700 md:top-14 md:left-214 top-5 left-74"
          loading="lazy"
          width="112"
          height="84"
        />

        {/* TEXT CONTENT */}
        <div className="md:absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="md:ml-20 text-center md:text-left p-6 animate-fade-up max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-6 animate-letter">
              {["Best Website", "Design Company", "in Faridabad"].map(
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
            <p className="text-lg md:text-xl font-medium mb-8 block">
              Affordable Website, SEO & Digital Marketing
              <br /> Services in Faridabad
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-cyan-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              aria-label={`Call ${companyName} at ${phoneNumber}`}
            >
              {callnow}
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Dreams4u for Your Website Design in Faridabad?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 5 years of experience serving Faridabad businesses, Dreams4u has become the trusted choice for website design, development, and digital marketing services. We understand the unique needs of local businesses and deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Local Expertise, Global Standards
              </h3>
              <p className="text-gray-600 mb-6">
                Based in Ballabgarh, Faridabad, we serve businesses across Faridabad, Ballabgarh, NIT, Badkhal, Sector 4, Sector 21, Sector 31, and surrounding NCR areas. Our team understands the local market dynamics, customer behavior, and competitive landscape specific to Faridabad businesses.
              </p>
              <p className="text-gray-600 mb-6">
                We combine this local knowledge with international best practices in web design, SEO, and digital marketing to create websites that not only look professional but also perform exceptionally well in search results and convert visitors into customers.
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Our Commitment to Faridabad Businesses:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Affordable pricing starting from ₹8,000</li>
                <li>• Fast turnaround time (7-15 days for basic websites)</li>
                <li>• Free consultation and website audit</li>
                <li>• Ongoing support and maintenance services</li>
                <li>• SEO-optimized websites from day one</li>
                <li>• Mobile-responsive design for all devices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Complete Digital Solutions Under One Roof
              </h3>
              <p className="text-gray-600 mb-6">
                Unlike other agencies that specialize in just one service, Dreams4u offers a complete suite of digital services designed to grow your business online. From initial website design to ongoing SEO and digital marketing, we handle everything so you can focus on your core business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Website Design</h5>
                  <p className="text-sm text-gray-600">Custom, responsive websites that convert visitors into customers.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">SEO Services</h5>
                  <p className="text-sm text-gray-600">Improve your Google rankings and get more organic traffic.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Digital Marketing</h5>
                  <p className="text-sm text-gray-600">Google Ads, social media marketing, and lead generation.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">E-commerce</h5>
                  <p className="text-sm text-gray-600">Online stores with payment integration and inventory management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Website Design & Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in creating websites that not only look great but also drive business results. Our services are tailored for Faridabad businesses looking to establish a strong online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Websites</h3>
              <p className="text-gray-600 mb-4">
                Professional websites for companies, clinics, coaching centers, real estate consultants, and service providers in Faridabad. Includes contact forms, service pages, and lead generation features.
              </p>
              <p className="text-sm font-medium text-cyan-600">Starting from ₹12,000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">E-commerce Websites</h3>
              <p className="text-gray-600 mb-4">
                Complete online stores with product catalogs, shopping carts, payment gateways, and inventory management. Perfect for retailers, wholesalers, and online businesses in Faridabad.
              </p>
              <p className="text-sm font-medium text-cyan-600">Starting from ₹25,000</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">SEO & Digital Marketing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive SEO services including on-page optimization, local SEO for Faridabad, Google Ads campaigns, and social media marketing to drive targeted traffic to your website.
              </p>
              <p className="text-sm font-medium text-cyan-600">Starting from ₹5,000/month</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All our websites are mobile-responsive, SEO-optimized, and include 6 months of free maintenance. We use modern technologies like React, Node.js, and WordPress to ensure fast loading and excellent user experience.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\D/g, "")}`}
              className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Local Website Services in Faridabad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the Faridabad-specific services we offer for website design, SEO, ecommerce, WordPress development, digital marketing, and maintenance.
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
                className="rounded-3xl border border-gray-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {page.title}
                </h3>
                <p className="text-gray-600">
                  Learn how Dreams4u helps Faridabad businesses grow with local service pages that are optimized for search and conversions.
                </p>
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
