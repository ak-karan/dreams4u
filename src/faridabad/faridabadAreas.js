const officeAddress = "1361, Bhagat Singh Colony, Sector 4, Ballabgarh, Faridabad";
const phoneNumber = "+91-9667316333";
const whatsappNumber = "919667316333";
const baseUrl = "https://dreams4u.in";
const baseImage = `${baseUrl}/images/dreams4u.webp`;

const sectorNumbers = [
  21, 31, 41, 42, 43, 49, 24, 27, 58, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
];

const areaHighlights = {
  Badkhal: [
    "Local lead generation for service businesses around Badkhal and nearby residential pockets",
    "Fast mobile-first websites for cafes, clinics, coaching centers, and real estate consultants",
    "Google-ready on-page SEO setup focused on Faridabad location intent",
  ],
  Ballabgarh: [
    "Business websites for Ballabgarh manufacturers, traders, wholesalers, and local brands",
    "SEO landing pages built for calls, WhatsApp leads, and location-specific discovery",
    "Scalable design setup for companies serving both Ballabgarh and wider NCR markets",
  ],
  NIT: [
    "High-conversion websites for NIT Faridabad shops, institutes, agencies, and B2B firms",
    "Location-focused SEO copy targeting customers searching nearby services",
    "Speed-optimized pages that perform well on mobile and local search traffic",
  ],
};

function createSectorHighlights(sectorNumber) {
  return [
    `Dedicated web design and SEO support for businesses targeting Sector ${sectorNumber}, Faridabad`,
    `Landing-page content structured for local ranking signals, map relevance, and call enquiries`,
    "Professional website setup for startups, clinics, builders, consultants, and retail stores",
  ];
}

function createLocationFaqs(locationName, displayName) {
  return [
    {
      question: `Do you create business websites for ${displayName}?`,
      answer: `Yes, Dreams4u creates custom business websites for startups, local shops, service providers, manufacturers, consultants, and growing brands in ${displayName}, Faridabad.`,
    },
    {
      question: `Can you optimize my website for local SEO in ${displayName}?`,
      answer: `Yes, we optimize title tags, headings, service content, internal links, schema markup, and location intent so your website has a stronger local SEO presence in ${displayName}.`,
    },
    {
      question: `How much time does a website project usually take for ${displayName}?`,
      answer: `Most standard business websites for ${displayName} clients are delivered in around 7 to 21 days, depending on page count, content readiness, features, and revisions.`,
    },
    {
      question: `Can I get website design, SEO, and digital marketing together for ${displayName}?`,
      answer: `Yes, we provide complete digital growth support for ${displayName} businesses, including website design, development, local SEO, content updates, and digital marketing strategy.`,
    },
  ].map((faq, index) => ({
    id: `${locationName}-faq-${index + 1}`,
    category: index === 1 ? "seo" : index === 2 ? "timeline" : "services",
    ...faq,
  }));
}

function createLocationData(name, slug, type) {
  const displayName = type === "sector" ? `Sector ${name}` : name;
  const keywordName = type === "sector" ? `sector ${name}` : name.toLowerCase();
  const routePath = `/faridabad/${slug}`;
  const title = `Website Design Company in ${displayName}, Faridabad | SEO Services | Dreams4u`;
  const description = `Dreams4u offers website design, web development, local SEO, and digital marketing services in ${displayName}, Faridabad. Build a fast, mobile-friendly business website and generate more local leads.`;
  const keywords = [
    `website design company in ${displayName} Faridabad`,
    `web development in ${displayName} Faridabad`,
    `SEO services in ${displayName} Faridabad`,
    `digital marketing in ${displayName} Faridabad`,
    `business website in ${keywordName} Faridabad`,
    `local SEO company ${displayName} Faridabad`,
  ].join(", ");

  const highlights =
    type === "sector" ? createSectorHighlights(name) : areaHighlights[name];

  const nearby =
    type === "sector"
      ? ["badkhal", "ballabgarh", "nit"]
      : sectorNumbers.slice(0, 6).map((number) => `sector-${number}`);

  return {
    name,
    slug,
    type,
    displayName,
    routePath,
    title,
    description,
    keywords,
    canonicalUrl: `${baseUrl}${routePath}`,
    image: baseImage,
    officeAddress,
    phoneNumber,
    whatsappUrl: `https://wa.me/${whatsappNumber}`,
    highlights,
    nearby,
    faqs: createLocationFaqs(slug, displayName),
  };
}

const priorityAreas = [
  createLocationData("Badkhal", "badkhal", "area"),
  createLocationData("Ballabgarh", "ballabgarh", "area"),
  createLocationData("NIT", "nit", "area"),
];

const sectorAreas = sectorNumbers.map((number) =>
  createLocationData(String(number), `sector-${number}`, "sector"),
);

export const faridabadAreas = [...priorityAreas, ...sectorAreas];

export const faridabadAreaMap = faridabadAreas.reduce((acc, area) => {
  acc[area.slug] = area;
  return acc;
}, {});

export const faridabadHubMeta = {
  title: "Faridabad Website Design & SEO Areas | Dreams4u",
  description:
    "Explore Faridabad area pages by Dreams4u for website design, web development, SEO, and digital marketing services across Badkhal, Ballabgarh, NIT, and major Faridabad sectors.",
  canonicalUrl: `${baseUrl}/faridabad`,
  image: baseImage,
};
