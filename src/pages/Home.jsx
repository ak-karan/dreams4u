import React from "react";
import homeImage from "../assets/images/Website-design-company.jpg";
import bulbHome from "../assets/images/bulb.png";
import lap1Home from "../assets/images/lap1Home.png";
import lap2Home from "../assets/images/lap2Home.png";
import lap3Home from "../assets/images/lap3Home.png";
import Services from "../service/Services";
import WhyChooseUs from "./WhyChooseUs";
import Reviews from "../reviews/Reviews";
import FAQSchema from "../faq/FAQSchema";
import { homeFaqs } from "../faq/faq";
import FAQSection from "../faq/FAQSection";
import LocalBusinessSchema from "../faq/LocalBusinessSchema";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const companyName = "Dreams4u";
  const websiteUrl = "https://dreams4u.in";
  const phoneNumber = "+919667316333";
  const location = "Faridabad, Haryana";

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
        <meta name="author" content={companyName} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* Location & Business */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Faridabad" />
        <meta name="geo.position" content="28.4089;77.3178" />
        <meta name="ICBM" content="28.4089, 77.3178" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${websiteUrl}${homeImage}`} />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:site_name" content={companyName} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:phone_number" content={phoneNumber} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${websiteUrl}${homeImage}`} />
        <meta name="twitter:site" content="@Dreams4uIndia" />{" "}
        {/* Add if you have Twitter */}
        <meta name="twitter:creator" content="@Dreams4uIndia" />{" "}
        {/* Add if you have Twitter */}
        {/* Canonical URL */}
        <link rel="canonical" href={websiteUrl} />
        {/* Alternate Language Versions (if applicable) */}
        <link rel="alternate" href={websiteUrl} hreflang="en-in" />
        <link rel="alternate" href={websiteUrl} hreflang="en" />
        <link rel="alternate" href={websiteUrl} hreflang="x-default" />
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: pageTitle,
            description: pageDescription,
            url: websiteUrl,
            image: `${websiteUrl}${homeImage}`,
            author: {
              "@type": "Organization",
              name: companyName,
              url: websiteUrl,
              telephone: phoneNumber,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },
            },
            publisher: {
              "@type": "Organization",
              name: companyName,
              url: websiteUrl,
              logo: {
                "@type": "ImageObject",
                url: `${websiteUrl}/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": websiteUrl,
            },
          })}
        </script>
      </Helmet>

      {/* ================= SCHEMA MARKUP ================= */}
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gray-100">
        {/* BACKGROUND IMAGE */}
        <img
          src={homeImage}
          alt="Professional Website Design Company in Faridabad - Dreams4u"
          className="w-full h-auto"
          loading="eager"
          width="1920"
          height="1080"
        />

        {/* BULB */}
        <img
          src={bulbHome}
          alt="Creative Web Solutions"
          className="absolute top-10 left-[47%] md:top-[29%] md:left-[47%] w-3 md:w-10 animate-swing"
          loading="lazy"
          width="40"
          height="40"
        />

        {/* FLOATING IMAGES */}
        <img
          src={lap1Home}
          alt="Web Design Services Faridabad"
          className="absolute w-12 md:w-44 animate-float delay-200 md:top-90 md:left-195 top-25 left-49"
          loading="lazy"
          width="176"
          height="132"
        />

        <img
          src={lap2Home}
          alt="Website Development Company"
          className="absolute w-8 md:w-32 animate-float delay-500 md:top-52 md:left-175 top-15 left-48"
          loading="lazy"
          width="128"
          height="96"
        />

        <img
          src={lap3Home}
          alt="Digital Marketing Services Faridabad"
          className="absolute w-7 md:w-28 animate-float delay-700 md:top-14 md:left-214 top-5 left-53"
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
              {phoneNumber}
            </a>
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
