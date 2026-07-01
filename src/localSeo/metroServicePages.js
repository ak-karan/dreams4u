const gurgaonAreas = [
  "Cyber City",
  "Golf Course Road",
  "Sohna Road",
  "DLF Phase 1",
  "DLF Phase 2",
  "DLF Phase 3",
  "DLF Phase 4",
  "DLF Phase 5",
  "Udyog Vihar",
  "Udyog Vihar Phase 1",
  "Udyog Vihar Phase 2",
  "Udyog Vihar Phase 3",
  "Udyog Vihar Phase 4",
  "Udyog Vihar Phase 5",
  "MG Road",
  "Golf Course Extension Road",
  "Sector 14",
  "Sector 29",
  "Sector 31",
  "Sector 38",
  "Sector 45",
  "Sector 46",
  "Sector 47",
  "Sector 48",
  "Sector 49",
  "Sector 50",
  "Sector 51",
  "Sector 52",
  "Sector 54",
  "Sector 56",
  "Sector 57",
  "Sector 67",
  "Sector 70",
  "Sector 82",
  "Sector 83",
  "Sector 84",
  "Sector 85",
  "Sector 86",
  "Sector 90",
  "Sector 92",
  "Sector 102",
  "Sushant Lok 1",
  "Sushant Lok 2",
  "Palam Vihar",
  "New Palam Vihar",
  "South City 1",
  "South City 2",
  "Nirvana Country",
  "Ardee City",
  "Rosewood City",
];

const noidaAreas = [
  "Sector 1",
  "Sector 2",
  "Sector 3",
  "Sector 4",
  "Sector 5",
  "Sector 6",
  "Sector 10",
  "Sector 12",
  "Sector 15",
  "Sector 16",
  "Sector 18",
  "Sector 22",
  "Sector 27",
  "Sector 32",
  "Sector 37",
  "Sector 41",
  "Sector 44",
  "Sector 45",
  "Sector 46",
  "Sector 47",
  "Sector 50",
  "Sector 51",
  "Sector 52",
  "Sector 55",
  "Sector 56",
  "Sector 57",
  "Sector 61",
  "Sector 62",
  "Sector 63",
  "Sector 71",
  "Sector 72",
  "Sector 73",
  "Sector 74",
  "Sector 75",
  "Sector 76",
  "Sector 77",
  "Sector 78",
  "Sector 79",
  "Sector 81",
  "Sector 82",
  "Sector 93",
  "Sector 100",
  "Sector 104",
  "Sector 105",
  "Sector 107",
  "Sector 110",
  "Sector 119",
  "Sector 120",
  "Sector 121",
  "Sector 122",
  "Sector 125",
  "Sector 126",
  "Sector 128",
  "Sector 132",
  "Sector 135",
  "Sector 137",
  "Sector 142",
  "Sector 143",
  "Sector 144",
  "Sector 150",
];

export const priorityMetroSlugs = [
  "website-design-company-in-gurgaon",
  "website-design-company-in-cyber-city",
  "website-design-company-in-golf-course-road",
  "website-design-company-in-sohna-road",
  "website-design-company-in-dlf-phase-1",
  "website-design-company-in-dlf-phase-2",
  "website-design-company-in-dlf-phase-3",
  "website-design-company-in-dlf-phase-4",
  "website-design-company-in-dlf-phase-5",
  "website-design-company-in-udyog-vihar",
  "website-design-company-in-udyog-vihar-phase-1",
  "website-design-company-in-udyog-vihar-phase-2",
  "website-design-company-in-udyog-vihar-phase-3",
  "website-design-company-in-udyog-vihar-phase-4",
  "website-design-company-in-udyog-vihar-phase-5",
  "website-design-company-in-noida",
  "website-design-company-in-sector-18-noida",
  "website-design-company-in-sector-62-noida",
  "website-design-company-in-sector-63-noida",
  "website-design-company-in-sector-125-noida",
  "website-design-company-in-sector-137-noida",
  "website-design-company-in-sector-150-noida",
];

const priorityMetroSlugSet = new Set(priorityMetroSlugs);

function slugifyArea(area) {
  return area
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getSectorNumber(area) {
  const match = area.match(/^Sector\s+(\d+)$/i);
  return match ? Number(match[1]) : null;
}

function createGurgaonSlug(area) {
  if (area === "Gurgaon") {
    return "website-design-company-in-gurgaon";
  }

  const base = slugifyArea(area);
  return getSectorNumber(area)
    ? `website-design-company-in-${base}-gurgaon`
    : `website-design-company-in-${base}`;
}

function createNoidaSlug(area) {
  if (area === "Noida") {
    return "website-design-company-in-noida";
  }

  return `website-design-company-in-${slugifyArea(area)}-noida`;
}

function getGurgaonProfile(area) {
  const sector = getSectorNumber(area);

  if (area === "Gurgaon") {
    return {
      market: "a city-wide mix of corporate offices, industrial units, startups, local services, schools, clinics, consultants, restaurants, and ecommerce teams",
      audience: "buyers who compare several vendors before calling and want clear proof, service details, pricing direction, and a quick enquiry route",
      designAngle: "a polished NCR business website with strong first-screen clarity, mobile performance, trust sections, and service pages that can scale by location",
      proofAngle: "portfolio work, process clarity, review snippets, practical pricing guidance, and easy WhatsApp or call actions",
      seoAngle: "Gurgaon website design searches, local service intent, nearby commercial corridors, and service-area internal linking",
    };
  }

  if (area === "Cyber City") {
    return {
      market: "corporate teams, SaaS companies, consultants, finance offices, coworking-led startups, hospitality brands, and B2B service providers",
      audience: "decision makers who expect a modern website, sharp messaging, performance, and credible case-study style proof",
      designAngle: "enterprise-grade presentation without unnecessary visual weight, built around lead capture, authority, and fast navigation",
      proofAngle: "clear service pages, client-fit statements, process checkpoints, business outcomes, and polished portfolio sections",
      seoAngle: "Cyber City corporate search intent, B2B website design, conversion pages, and local NCR authority signals",
    };
  }

  if (area.startsWith("DLF Phase")) {
    return {
      market: "premium residential brands, clinics, consultants, real estate offices, boutiques, fitness studios, cafes, and professional service firms",
      audience: "customers who want to trust the business before visiting, booking, calling, or sending an enquiry",
      designAngle: "a refined brand-first website with crisp service explanations, local proof, fast mobile layouts, and simple appointment or enquiry actions",
      proofAngle: "before-after work, testimonials, service inclusions, location clarity, and visual consistency across pages",
      seoAngle: "DLF Phase local searches, premium service intent, Google Business Profile support, and neighbourhood landing pages",
    };
  }

  if (area === "MG Road") {
    return {
      market: "retail stores, showrooms, restaurants, coaching centres, clinics, consultants, and metro-connected local service brands",
      audience: "walk-in and search-led customers who need quick confirmation of services, timings, location, offers, and contact details",
      designAngle: "a clean local business website that makes the offer obvious and supports calls, directions, WhatsApp, and lead forms",
      proofAngle: "store information, product or service highlights, customer reviews, gallery sections, and clear enquiry prompts",
      seoAngle: "MG Road Gurgaon local searches, map-led discovery, retail intent, and service page depth",
    };
  }

  if (area === "Golf Course Road" || area === "Golf Course Extension Road") {
    return {
      market: "premium offices, real estate consultants, healthcare providers, education brands, lifestyle businesses, and service companies",
      audience: "high-intent customers who compare brand quality, trust signals, reviews, service depth, and responsiveness",
      designAngle: "a premium but fast website experience with strong content hierarchy, elegant visuals, and persuasive service journeys",
      proofAngle: "portfolio snapshots, team credibility, local service coverage, review excerpts, and transparent consultation paths",
      seoAngle: `${area} search demand, premium local service keywords, conversion copy, and internal links to supporting guides`,
    };
  }

  if (area === "Sohna Road") {
    return {
      market: "real estate, schools, clinics, coaching institutes, restaurants, home services, local retailers, and growing service companies",
      audience: "nearby residents and business buyers who want fast answers, proof, price direction, and easy contact options",
      designAngle: "a practical lead-generation website with service pages, FAQs, reviews, location cues, and mobile-first contact actions",
      proofAngle: "local references, testimonial blocks, service packages, enquiry forms, and WhatsApp support",
      seoAngle: "Sohna Road local search intent, residential and commercial service terms, and area-specific landing page content",
    };
  }

  if (area.startsWith("Udyog Vihar")) {
    return {
      market: "manufacturers, exporters, logistics teams, industrial suppliers, B2B service providers, and corporate support companies",
      audience: "procurement teams and business buyers who need capabilities, certifications, product details, contact clarity, and downloadable information",
      designAngle: "a B2B website structure with capability pages, product or service categories, enquiry forms, quick contact options, and technical SEO foundations",
      proofAngle: "industries served, project photos, process information, specifications, trust badges, and conversion-focused contact pages",
      seoAngle: "Udyog Vihar industrial search demand, B2B website design, supplier discovery, and product-led content architecture",
    };
  }

  if (area.includes("Sushant Lok") || area.includes("South City") || area === "Nirvana Country" || area === "Ardee City" || area === "Rosewood City") {
    return {
      market: "clinics, coaching centres, wellness brands, consultants, boutiques, local service providers, and home-service businesses",
      audience: "families, professionals, and local buyers who usually check reviews, services, location, pricing hints, and appointment options before calling",
      designAngle: "a trust-led local website with readable pages, local proof, appointment CTAs, and content that answers real customer questions",
      proofAngle: "reviews, gallery images, service inclusions, team notes, FAQs, and Google-ready contact details",
      seoAngle: `${area} neighbourhood searches, service near me intent, local content depth, and internal links from city pages`,
    };
  }

  if (area.includes("Palam Vihar")) {
    return {
      market: "travel-linked services, clinics, schools, consultants, repair providers, retailers, property advisors, and neighbourhood brands",
      audience: "local customers who value quick mobile access, location clarity, service explanation, and verified contact options",
      designAngle: "a mobile-friendly website with a direct offer, fast pages, trust-building sections, and clear call or WhatsApp buttons",
      proofAngle: "service-area copy, reviews, useful FAQs, address details, and simple lead forms",
      seoAngle: "Palam Vihar local discovery, neighbourhood service searches, and page-level SEO basics",
    };
  }

  if (sector && sector >= 82) {
    return {
      market: "newer residential sectors, real estate services, schools, clinics, home improvement providers, local retailers, and society-focused businesses",
      audience: "residents and local buyers who use mobile search to shortlist dependable nearby providers",
      designAngle: "a lightweight local website that presents services clearly, adds trust proof, and makes enquiries easy from mobile devices",
      proofAngle: "coverage notes, customer reviews, project photos, FAQs, package ranges, and quick contact actions",
      seoAngle: `${area} Gurgaon local searches, service-area pages, residential demand, and useful FAQ content`,
    };
  }

  if (sector && sector >= 45) {
    return {
      market: "clinics, institutes, property consultants, cafes, wellness studios, retailers, and professional service providers",
      audience: "nearby searchers who compare services, trust signals, response speed, and website quality before contacting a business",
      designAngle: "a conversion-focused local website with strong headings, service summaries, testimonials, and short enquiry paths",
      proofAngle: "reviews, portfolio work, local area cues, service packages, and visible phone or WhatsApp options",
      seoAngle: `${area} Gurgaon search intent, service pages, Google Business Profile support, and internal linking`,
    };
  }

  return {
    market: "established local businesses, consultants, institutes, clinics, retailers, service providers, and growing family-run companies",
    audience: "customers who need to understand the offer quickly and verify the business before calling",
    designAngle: "a clear business website with responsive design, local SEO basics, proof sections, and simple enquiry actions",
    proofAngle: "testimonials, service details, portfolio blocks, pricing guidance, FAQs, and contact information",
    seoAngle: `${area} Gurgaon local search intent, service clarity, and crawlable pages connected to the wider NCR website structure`,
  };
}

function getNoidaProfile(area) {
  const sector = getSectorNumber(area);

  if (area === "Noida") {
    return {
      market: "IT companies, industrial suppliers, education brands, healthcare providers, ecommerce teams, real estate firms, retail stores, and local service businesses",
      audience: "buyers who compare credibility, mobile experience, page speed, service depth, and easy enquiry options before choosing a vendor",
      designAngle: "a city-wide business website strategy with clear service pages, fast pages, local SEO structure, and conversion-focused contact paths",
      proofAngle: "portfolio proof, process clarity, testimonials, pricing ranges, service-area content, and strong internal links",
      seoAngle: "Noida website design searches, sector-level demand, IT and industrial service intent, and NCR local authority",
    };
  }

  if (area === "Sector 18") {
    return {
      market: "retail brands, restaurants, salons, showrooms, entertainment businesses, local services, and high-footfall commercial teams",
      audience: "customers who search on mobile and want a quick view of products, services, offers, location, and contact options",
      designAngle: "a sharp commercial website with visual proof, fast product or service discovery, and clear calls, forms, or WhatsApp actions",
      proofAngle: "gallery sections, offers, reviews, store details, service highlights, and portfolio links",
      seoAngle: "Sector 18 Noida retail search intent, map-led discovery, and landing pages built around high-intent local customers",
    };
  }

  if (area === "Sector 62" || area === "Sector 63") {
    return {
      market: "IT companies, software teams, training institutes, B2B service providers, industrial suppliers, agencies, and corporate offices",
      audience: "business buyers who expect technical clarity, professional design, proof of delivery, and reliable contact paths",
      designAngle: "a B2B-ready website with service architecture, lead forms, case-study sections, speed optimization, and technical SEO basics",
      proofAngle: "capabilities, industries served, case studies, testimonials, service details, and analytics-ready enquiry flows",
      seoAngle: `${area} Noida IT and B2B search intent, sector-level web design pages, and local service schema`,
    };
  }

  if ([125, 126, 128, 132, 135, 137, 142, 143, 144, 150].includes(sector)) {
    return {
      market: "expressway offices, education and institutional brands, real estate teams, clinics, high-rise service providers, ecommerce sellers, and professional firms",
      audience: "mobile-first searchers and business teams who need fast answers, credible proof, location clarity, and responsive follow-up",
      designAngle: "a modern website with service clusters, local proof, appointment or lead actions, and content depth for Noida Expressway demand",
      proofAngle: "project examples, service coverage, review snippets, FAQs, pricing direction, and clear consultation steps",
      seoAngle: `${area} Noida Expressway search demand, sector-specific pages, and conversion-focused local SEO`,
    };
  }

  if (sector && sector <= 16) {
    return {
      market: "industrial offices, service providers, traders, consultants, clinics, institutes, and local companies near central Noida corridors",
      audience: "customers and B2B buyers who want accurate services, quick contact details, and trust proof before visiting or calling",
      designAngle: "a practical website with clean navigation, service pages, local landing content, and phone or WhatsApp actions above the fold",
      proofAngle: "business profile, service list, area coverage, reviews, and simple enquiry forms",
      seoAngle: `${area} Noida business searches, local service visibility, and crawlable content structure`,
    };
  }

  if (sector && sector >= 70 && sector <= 82) {
    return {
      market: "residential societies, local clinics, schools, home-service companies, retailers, restaurants, tutors, and real estate consultants",
      audience: "nearby residents who use search to shortlist trusted local providers and compare reviews, services, and response speed",
      designAngle: "a local lead-generation website with mobile-first pages, trust sections, FAQs, service-area copy, and direct enquiry buttons",
      proofAngle: "reviews, service packages, coverage notes, photos, portfolio links, and clear next steps",
      seoAngle: `${area} Noida local searches, residential service intent, and internal links from Noida city pages`,
    };
  }

  return {
    market: "local shops, professional firms, clinics, institutes, property consultants, service providers, and growing Noida businesses",
    audience: "search-led customers who need a clear offer, proof, pricing signals, and an easy way to contact the business",
    designAngle: "a responsive website that keeps content easy to scan, supports SEO basics, and turns local visitors into enquiries",
    proofAngle: "testimonials, portfolio sections, FAQs, service details, and location-specific contact information",
    seoAngle: `${area} Noida local intent, service-area relevance, page speed, and structured internal links`,
  };
}

function getDisplayLocation(area, city) {
  if (area === city) {
    return city;
  }

  if (city === "Noida") {
    return `${area} Noida`;
  }

  if (getSectorNumber(area)) {
    return `${area} Gurgaon`;
  }

  return area;
}

function createMetaDescription(displayLocation) {
  return `Dreams4u builds responsive, SEO-ready websites for ${displayLocation} businesses with web design, ecommerce, local SEO, and lead generation support.`;
}

function createMetroLandingPage(area, city) {
  const slug = city === "Gurgaon" ? createGurgaonSlug(area) : createNoidaSlug(area);
  const displayLocation = getDisplayLocation(area, city);
  const profile = city === "Gurgaon" ? getGurgaonProfile(area) : getNoidaProfile(area);
  const priority = priorityMetroSlugSet.has(slug);
  const cityLabel = city === "Gurgaon" ? "Gurgaon (Gurugram)" : "Noida";
  const shortCity = city === "Gurgaon" ? "Gurgaon" : "Noida";
  const marketFocus = priority
    ? "priority commercial search visibility, stronger enquiry quality, and a page that feels written for the local market"
    : "local discovery, service clarity, and a practical website journey for nearby customers";

  const sections = [
    {
      heading: `Website design for ${displayLocation} businesses`,
      body: `${displayLocation} has demand from ${profile.market}. A useful website for this market cannot be a thin copy of another location page. It should explain the business, show proof, answer common questions, load quickly on mobile, and give visitors a direct path to call, WhatsApp, or submit an enquiry. Dreams4u plans the page structure around ${profile.designAngle}, so the website supports real buying decisions instead of only looking decorative.`,
    },
    {
      heading: `Local SEO content planned around ${displayLocation}`,
      body: `The page copy uses ${profile.seoAngle}. We add a focused title, natural headings, helpful FAQs, internal links, image alt text, and structured data so search engines can understand the offer and location. The content is written for people first: it mentions the local market, common customer expectations, and the kind of proof a visitor needs before choosing a website design company.`,
    },
    {
      heading: "Design, development, and conversion flow",
      body: `A business website should move from attention to trust to action. We map the hero section, service blocks, portfolio proof, pricing guidance, testimonials, process steps, and contact actions before development starts. For ${displayLocation}, the conversion flow is shaped around ${profile.audience}. This keeps the website fast, readable, and focused on enquiries rather than unnecessary effects.`,
    },
  ];

  if (priority) {
    sections.push({
      heading: `Why ${displayLocation} is a priority location`,
      body: `${displayLocation} is a high-intent area for businesses that need stronger online credibility and a reliable enquiry system. We give these priority pages deeper local context, clearer service positioning, and more specific proof sections. The goal is to help a visitor understand why Dreams4u is relevant for ${shortCity}, what kind of website can support their sales process, and how quickly the conversation can move from idea to scoped proposal.`,
    });
  }

  return {
    slug,
    title: `Website Design Company in ${displayLocation} | Dreams4u`,
    h1: `Website Design Company in ${displayLocation}`,
    serviceType: "Website Design",
    city,
    seoLocation: displayLocation,
    metroCity: shortCity,
    isPriorityMetro: priority,
    badge: priority
      ? `${displayLocation} Priority Landing Page`
      : `${displayLocation} Local Landing Page`,
    areaServed: [displayLocation, cityLabel, "Delhi NCR", "Faridabad"],
    metaDescription: createMetaDescription(displayLocation),
    intro: `Dreams4u provides website design, web development, ecommerce website design, and SEO-ready landing pages for businesses in ${displayLocation}. The page strategy is built around ${profile.market}, with content, design, and technical SEO planned to support enquiries from Google, referrals, ads, and local discovery.`,
    imageAlt: `Website design company in ${displayLocation} by Dreams4u`,
    primaryOffer: `A website for ${displayLocation} should do more than display a logo and phone number. It should explain services, show credibility, guide users to the right action, and make the business easier to trust. Dreams4u builds responsive business websites, ecommerce stores, landing pages, and service pages with ${profile.proofAngle}.`,
    whyLocal: `${displayLocation} customers often compare several options before making contact. Some arrive from Google, some from Maps, some from referrals, and some from social media. Local content helps them confirm that the business understands ${shortCity}, serves the right audience, and can support their exact requirement. Our approach keeps the location references natural, useful, and specific enough to avoid duplicate page problems.`,
    approach: `For ${displayLocation}, we start with the business goal, target customers, services, proof, competitors, and required conversion action. Then we plan a sitemap, section order, copy, visuals, forms, schema, metadata, and internal links. The result is a mobile-friendly website built for ${marketFocus}.`,
    deliverables: [
      `Custom website design for ${displayLocation} businesses`,
      `Responsive layouts for mobile users in ${shortCity}`,
      "SEO title, meta description, headings, and internal links",
      "LocalBusiness, Service, FAQ, and breadcrumb schema",
      "Portfolio, testimonials, pricing guidance, and CTA sections",
      "Contact form, WhatsApp, call, and lead-generation actions",
    ],
    sections,
    faqs: [
      {
        question: `Do you provide website design services in ${displayLocation}?`,
        answer: `Yes. Dreams4u provides website design, web development, ecommerce website design, landing pages, and SEO-friendly website design for businesses targeting ${displayLocation}.`,
      },
      {
        question: `Can you create a unique local page for a ${displayLocation} business?`,
        answer: `Yes. We write area-specific copy with local business context, relevant FAQs, proof sections, metadata, schema, and internal links so the page does not feel like repeated city-name content.`,
      },
      {
        question: `What type of website works best for ${displayLocation}?`,
        answer: `The right website depends on the business model. Many ${displayLocation} businesses need a service website with strong lead actions, while retailers may need ecommerce, catalogue, booking, or campaign landing pages.`,
      },
      {
        question: `Do you also support SEO after the website launch?`,
        answer: `Yes. Dreams4u can support local SEO, content updates, technical SEO, Google Business Profile improvements, blog planning, and new location pages after launch.`,
      },
    ],
  };
}

export function createMetroServicePages() {
  const gurgaonPages = ["Gurgaon", ...gurgaonAreas].map((area) =>
    createMetroLandingPage(area, "Gurgaon"),
  );
  const noidaPages = ["Noida", ...noidaAreas].map((area) =>
    createMetroLandingPage(area, "Noida"),
  );

  return [...gurgaonPages, ...noidaPages];
}
