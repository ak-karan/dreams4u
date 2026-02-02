const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://dreams4u.in/#business",
      name: "Dreams4u",
      url: "https://dreams4u.in/",
      logo: "https://dreams4u.in/logo.png",
      image: "https://dreams4u.inhttps://dreams4u.in/images/dreams4u.jpeg",
      telephone: "+91-9667316333",
      email: "info@dreams4u.in",
      priceRange: "₹8999 - ₹49999",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1361 Bhagat Singh Colony, Ballabgarh",
        addressLocality: "Faridabad",
        addressRegion: "Haryana",
        postalCode: "121004",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.4089,
        longitude: 77.3178,
      },
      sameAs: [
        "https://www.facebook.com/dreams4U.in",
        "https://www.instagram.com/dreams4U.in",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://dreams4u.in/#website",
      url: "https://dreams4u.in/",
      name: "Dreams4u",
      publisher: {
        "@id": "https://dreams4u.in/#business",
      },
    },

    {
      "@type": "FAQPage",
      "@id": "https://dreams4u.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the best website design company in Faridabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dreams4u is a top-rated website design company in Faridabad offering affordable and professional web development services.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide SEO and digital marketing services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Dreams4u provides complete SEO, digital marketing, and online branding services for businesses in Faridabad.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a website cost in Faridabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website development cost depends on features and requirements. At Dreams4u, pricing starts from ₹8999.",
          },
        },
      ],
    },
  ],
};

export default homeSchema;
