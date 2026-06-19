import { homeFaqs } from "../faq/faq";
import { reviews } from "../reviews/reviewsData";

const baseUrl = "https://dreams4u.in";
const organizationId = `${baseUrl}/#organization`;
const businessId = `${baseUrl}/#business`;
const ratingValue = (
  reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
).toFixed(1);

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "1361, Bhagat Singh Colony, Sector 4",
  addressLocality: "Ballabgarh, Faridabad",
  addressRegion: "Haryana",
  postalCode: "121004",
  addressCountry: "IN",
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Dreams4u",
      alternateName: "Dreams4U",
      url: `${baseUrl}/`,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/top-logo.webp`,
      },
      image: `${baseUrl}/images/dreams4u.webp`,
      description:
        "Dreams4u is a website design, web development, SEO and digital marketing company in Faridabad serving Delhi NCR and India.",
      email: "info@dreams4u.in",
      telephone: "+91-9667316333",
      address: postalAddress,
      areaServed: ["Faridabad", "Delhi NCR", "Haryana", "India"],
      sameAs: [
        "https://www.facebook.com/ak.karan.2818/",
        "https://www.instagram.com/dreams4u.in/",
        "https://github.com/ak-karan",
        "https://in.pinterest.com/dreams4uu/website-design/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9667316333",
        contactType: "sales and customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": businessId,
      name: "Dreams4u",
      url: `${baseUrl}/`,
      parentOrganization: {
        "@id": organizationId,
      },
      image: `${baseUrl}/images/dreams4u.webp`,
      logo: `${baseUrl}/images/top-logo.webp`,
      telephone: "+91-9667316333",
      email: "info@dreams4u.in",
      priceRange: "INR 8,000+",
      address: postalAddress,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4089,
        longitude: 77.3178,
      },
      areaServed: [
        { "@type": "City", name: "Faridabad" },
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
        { "@type": "State", name: "Haryana" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Website design",
        "Web development",
        "Search engine optimization",
        "Local SEO",
        "Digital marketing",
        "Ecommerce website development",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue,
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital services",
        itemListElement: [
          "Website design",
          "Website development",
          "SEO services",
          "Digital marketing",
          "Ecommerce development",
          "Website maintenance",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: "Dreams4u",
      alternateName: "Dreams4U",
      description:
        "Website design, development, SEO, and digital marketing services for businesses in Faridabad, Delhi NCR, and India.",
      inLanguage: "en-IN",
      publisher: {
        "@id": organizationId,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      url: `${baseUrl}/#faq`,
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    ...reviews.map((review) => ({
      "@type": "Review",
      "@id": `${baseUrl}/#review-${review.id}`,
      itemReviewed: {
        "@id": businessId,
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
    })),
  ],
};

export default homeSchema;
