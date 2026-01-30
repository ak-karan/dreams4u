import React from "react";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dreams4u",
    image: "https://yourwebsite.com/logo.png",
    telephone: "+91-9667316333",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Faridabad",
      addressRegion: "HR",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "4",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
