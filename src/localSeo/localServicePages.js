import { createMetroServicePages } from "./metroServicePages.js";

const baseUrl = "https://dreams4u.in";
const phoneNumber = "+91-9667316333";
const whatsappUrl = "https://wa.me/919667316333";
const address = "1361, Bhagat Singh Colony, Sector 4, Ballabgarh, Faridabad";
const image = `${baseUrl}/images/Website-Design-Comapany-in-Faridabad.webp`;

const delhiAreas = [
  ["Saket", "south delhi", "selectwalk mall, coaching centres, clinics, boutiques, and neighbourhood service brands"],
  ["Malviya Nagar", "south delhi", "cafes, education businesses, consultants, and high-street retail stores"],
  ["Hauz Khas", "south delhi", "creative studios, restaurants, designers, and premium service businesses"],
  ["Greater Kailash", "south delhi", "luxury retail, wellness clinics, consultants, and professional brands"],
  ["Kalkaji", "south delhi", "local shops, coaching centres, healthcare providers, and service companies"],
  ["Nehru Place", "south delhi", "IT traders, software firms, laptop markets, and B2B technology businesses"],
  ["Vasant Kunj", "south delhi", "premium retail, schools, clinics, real estate consultants, and service brands"],
  ["Lajpat Nagar", "south delhi", "fashion stores, traders, coaching institutes, and local service providers"],
  ["Defence Colony", "south delhi", "restaurants, clinics, consultants, architects, and premium local brands"],
  ["Green Park", "south delhi", "healthcare, education, hospitality, and boutique service businesses"],
  ["Janakpuri", "west delhi", "coaching centres, clinics, retail brands, and established local companies"],
  ["Rajouri Garden", "west delhi", "fashion, restaurants, showrooms, event businesses, and local retailers"],
  ["Punjabi Bagh", "west delhi", "clinics, showrooms, consultants, restaurants, and premium service providers"],
  ["Tilak Nagar", "west delhi", "retail stores, institutes, wholesalers, and service businesses"],
  ["Uttam Nagar", "west delhi", "small businesses, coaching centres, property consultants, and local shops"],
  ["Paschim Vihar", "west delhi", "healthcare, schools, consultants, real estate, and family-run companies"],
  ["Dwarka", "south-west delhi", "startups, societies, clinics, schools, consultants, and ecommerce brands"],
  ["Vikaspuri", "west delhi", "coaching centres, clinics, retailers, and professional service firms"],
  ["Laxmi Nagar", "east delhi", "education institutes, finance consultants, shops, and local service companies"],
  ["Preet Vihar", "east delhi", "clinics, schools, consultants, retailers, and professional offices"],
  ["Mayur Vihar", "east delhi", "residential service providers, clinics, consultants, and local brands"],
  ["Shahdara", "east delhi", "manufacturers, traders, retailers, and service businesses"],
  ["Krishna Nagar", "east delhi", "retail stores, coaching institutes, clinics, and family businesses"],
  ["Anand Vihar", "east delhi", "transport-linked businesses, consultants, retailers, and service brands"],
  ["Rohini", "north delhi", "schools, clinics, ecommerce sellers, consultants, and local retailers"],
  ["Pitampura", "north delhi", "coaching centres, healthcare providers, IT firms, and professional services"],
  ["Model Town", "north delhi", "restaurants, clinics, boutiques, schools, and premium service businesses"],
  ["Civil Lines", "north delhi", "professional offices, institutes, consultants, and heritage-area businesses"],
  ["Kamla Nagar", "north delhi", "student-focused brands, cafes, retailers, and coaching businesses"],
  ["Ashok Vihar", "north delhi", "manufacturers, clinics, schools, retailers, and service providers"],
  ["Connaught Place", "central delhi", "corporate offices, agencies, finance firms, restaurants, and premium brands"],
  ["Karol Bagh", "central delhi", "jewellery, automotive, fashion, hospitality, and retail businesses"],
  ["Paharganj", "central delhi", "hotels, travel agencies, restaurants, exporters, and local shops"],
  ["Patel Nagar", "central delhi", "coaching centres, clinics, consultants, and local retailers"],
  ["Netaji Subhash Place", "north-west delhi", "IT offices, finance firms, restaurants, agencies, and B2B companies"],
  ["Shalimar Bagh", "north-west delhi", "clinics, schools, consultants, retailers, and residential service brands"],
  ["Rani Bagh", "north-west delhi", "retailers, small businesses, service providers, and local shops"],
  ["Najafgarh", "south-west delhi", "local businesses, schools, clinics, property consultants, and retailers"],
  ["Palam", "south-west delhi", "travel-linked businesses, local shops, service providers, and consultants"],
  ["Mahipalpur", "south-west delhi", "hotels, logistics businesses, travel agencies, and airport-area companies"],
];

const priorityDelhiAreas = new Set([
  "Connaught Place",
  "Nehru Place",
  "Dwarka",
  "Rohini",
  "Janakpuri",
  "Laxmi Nagar",
  "Rajouri Garden",
  "Saket",
  "Vasant Kunj",
  "Karol Bagh",
  "Pitampura",
  "Mayur Vihar",
]);

function slugifyArea(area) {
  return area.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function createDelhiLandingPage([area, zone, localReferences]) {
  const slug = `website-design-company-in-${slugifyArea(area)}`;
  const priority = priorityDelhiAreas.has(area);
  const focus = priority
    ? "high-intent commercial searches, faster enquiry journeys, and stronger service-page depth"
    : "local search visibility, clear service presentation, and practical lead generation";

  return {
    slug,
    title: `Website Design Company in ${area} | Web Development & SEO | Dreams4u`,
    h1: `Website Design Company in ${area}`,
    serviceType: "Website Design",
    city: "Delhi",
    badge: `${area} Delhi Landing Page`,
    areaServed: [area, "Delhi", "Faridabad", "NCR"],
    metaDescription: `Dreams4u offers website design, web development, ecommerce websites, SEO-friendly design, and local SEO services for businesses in ${area}, ${zone}.`,
    intro: `Dreams4u creates modern, responsive, and SEO-friendly websites for businesses in ${area}, ${zone}. The page strategy is built for companies that need professional website design, custom website development, ecommerce website development, and local SEO support without keyword stuffing or generic copy.`,
    imageAlt: `Website design company in ${area} by Dreams4u`,
    primaryOffer: `Businesses in ${area} compete in a busy Delhi market, so a website must quickly show credibility, services, pricing direction, reviews, and a clear contact path. We build fast-loading business websites, landing pages, ecommerce stores, and service pages that help visitors move from search to call, WhatsApp, or enquiry form.`,
    whyLocal: `${area} has demand from ${localReferences}. A local landing page should mention the real market, explain the offer, and support searches such as website designer near me, web development services near me, website design company in ${area}, and SEO friendly website design. We use location context naturally so the content remains useful for customers and search engines.`,
    approach: `For ${area}, our approach starts with keyword mapping, competitor review, audience questions, and page structure. We plan unique headings, service blocks, FAQs, testimonials, internal links, image alt text, schema, metadata, and conversion buttons. The result is a mobile-friendly, conversion-focused website page built around ${focus}.`,
    deliverables: [
      `Custom website design for ${area} businesses`,
      "Responsive design for mobile, tablet, and desktop",
      "SEO title, meta description, headings, and image alt text",
      "LocalBusiness, Service, FAQ, and breadcrumb schema",
      "Ecommerce, Shopify, WooCommerce, and online store planning",
      "Contact, WhatsApp, call, and lead-generation actions",
    ],
    sections: [
      {
        heading: `Website design for ${area} businesses`,
        body: `A strong business website in ${area} should feel professional, load quickly, and answer customer questions before they call. We create pages for startups, shops, consultants, clinics, schools, agencies, ecommerce sellers, and corporate teams with clear service copy, trust sections, portfolio proof, and simple enquiry actions.`,
      },
      {
        heading: "Web development, ecommerce, and maintenance support",
        body: `Dreams4u handles custom website development, corporate website development, small business website design, ecommerce website design, online store development, landing page design, website speed optimization, and website maintenance. We can also plan Shopify or WooCommerce builds when a business wants catalogue, cart, payment, and product SEO features.`,
      },
      {
        heading: `Local SEO signals for ${area}`,
        body: `The page content is written around useful intent: website design services in ${area}, web design agency ${area}, digital agency in Delhi, SEO company support, Google Business Profile optimization, and search engine optimization services. Keywords are placed in titles, descriptions, headings, FAQs, and body copy only where they read naturally.`,
      },
    ],
    faqs: [
      {
        question: `Do you provide website design services in ${area}?`,
        answer: `Yes. Dreams4u provides website design, web development, responsive design, ecommerce website development, and SEO-friendly website design for businesses in ${area}, Delhi.`,
      },
      {
        question: `Can you build an ecommerce website for a ${area} business?`,
        answer: `Yes. We build ecommerce websites, Shopify stores, WooCommerce stores, product pages, category pages, payment-ready stores, and online business websites for ${area} retailers and service brands.`,
      },
      {
        question: `Will my ${area} landing page have unique SEO content?`,
        answer: `Yes. We create a unique introduction, local business references, area-specific service content, FAQs, metadata, schema, and internal links so the page does not look like duplicate location copy.`,
      },
      {
        question: `Do you also help with SEO and Google Business Profile optimization?`,
        answer: `Yes. We support local SEO services, Google Business Profile optimization, search engine optimization services, Google ranking services, and conversion-focused content improvements.`,
      },
    ],
  };
}

function createDelhiLandingPages() {
  return delhiAreas.map(createDelhiLandingPage);
}

function createSharedServiceFaqs(page) {
  const location = page.seoLocation || page.city || "Faridabad";
  const service = page.serviceType;

  return [
    {
      question: `How much does ${service.toLowerCase()} cost?`,
      answer: `${service} cost depends on the number of pages, design depth, content, integrations, SEO scope, and support required. Dreams4u provides a written scope and quote after a short requirement discussion.`,
    },
    {
      question: `How long does a ${service.toLowerCase()} project take?`,
      answer: `A focused business website or landing page may take 1 to 3 weeks, while ecommerce and custom development usually need more time. The final schedule depends on scope, content readiness, feedback, and integrations.`,
    },
    {
      question: `Is ${service.toLowerCase()} mobile-friendly?`,
      answer: `Yes. Dreams4u plans responsive layouts, readable content, touch-friendly actions, optimized images, and tested forms for mobile, tablet, and desktop users.`,
    },
    {
      question: `Does the service include SEO setup?`,
      answer: `The agreed SEO setup can include titles, meta descriptions, heading structure, canonical URLs, internal links, image alt text, schema, sitemap checks, and crawl-friendly content.`,
    },
    {
      question: `Can you work with my existing website?`,
      answer: `Yes. We can audit an existing website, retain useful content, identify technical or conversion issues, and recommend whether focused improvements or a rebuild will give the better result.`,
    },
    {
      question: `Will I own the website and content after launch?`,
      answer: `Project ownership, source files, accounts, licences, and third-party services are documented in the proposal so responsibilities are clear before development begins.`,
    },
    {
      question: `Do you provide support after launch?`,
      answer: `Yes. Dreams4u offers maintenance options for content updates, security checks, backups, bug fixes, speed improvements, SEO updates, and new page requirements.`,
    },
    {
      question: `Do you serve businesses outside ${location}?`,
      answer: `Yes. Dreams4u is based in Faridabad and works with businesses across Delhi NCR and India through online discovery, content review, design approval, development, and support.`,
    },
  ];
}

export const localServicePages = [
  {
    slug: "website-design-company-in-faridabad",
    title: "Best Website Design Company in Faridabad | Dreams4u",
    h1: "Website Design Company in Faridabad",
    serviceType: "Website Design",
    metaDescription:
      "Dreams4u is a professional website design company in Faridabad offering responsive web development, ecommerce websites, SEO-ready pages, and local lead generation websites.",
    intro:
      "Dreams4u builds fast, mobile-friendly, and SEO-ready websites for Faridabad businesses that want better enquiries from Google, WhatsApp, and local search. Our website design work is planned around trust, clear messaging, strong calls to action, and a smooth browsing experience for customers on mobile and desktop.",
    imageAlt: "Website design company in Faridabad by Dreams4u",
    primaryOffer:
      "A professional website is more than a digital brochure. For a business in Faridabad, Ballabgarh, NIT, Badkhal, Sector 4, Sector 21, Sector 31, and nearby NCR markets, it is often the first place a customer checks before calling. We design websites that explain your services quickly, show credibility, load fast, and guide visitors to contact you.",
    whyLocal:
      "Local customers search with intent: website designer near me, website design company in Faridabad, business website developer in Ballabgarh, or web development services near me. Your page must answer those searches with location signals, service clarity, helpful content, and a clean technical base. Dreams4u combines design, content, image SEO, metadata, schema markup, and internal linking so the page is ready for both users and search engines.",
    approach:
      "Our process starts with understanding your service, target areas, competitors, and customer questions. We then plan page sections, headings, conversion blocks, enquiry buttons, portfolio proof, FAQs, and content depth. The design is responsive, compressed, and built for Core Web Vitals with lightweight layouts, optimized images, lazy loading where useful, and clean code.",
    deliverables: [
      "Custom homepage and service page design",
      "Responsive layout for mobile, tablet, and desktop",
      "SEO title, meta description, headings, and internal links",
      "LocalBusiness, Service, FAQ, and breadcrumb schema",
      "Image alt text and search-friendly file usage",
      "Contact, WhatsApp, call, and lead-generation actions",
    ],
    sections: [
      {
        heading: "Website design built for Faridabad buyers",
        body:
          "A Faridabad buyer usually compares several options before calling a web design agency. Your website must make the decision easy by showing what you do, who you help, how the process works, what budget ranges are possible, and why your business is trustworthy. We create layouts that are professional without being heavy, with clear service blocks, fast navigation, and simple enquiry paths. This helps manufacturers, coaching institutes, clinics, real estate consultants, local shops, travel agencies, and professional service providers present themselves with confidence.",
      },
      {
        heading: "SEO-friendly structure from the first draft",
        body:
          "Many websites look good but miss the basics that help Google understand them. We plan keyword-focused titles, readable headings, schema markup, internal links, alt text, page speed, and content sections before development is complete. Important phrases such as website design company in Faridabad, web designer in Ballabgarh, and website development services near me are used naturally inside useful content, not stuffed awkwardly. This gives your page a stronger chance to rank while still sounding human.",
      },
      {
        heading: "Conversion-focused website experience",
        body:
          "Traffic alone is not enough. A website should turn visitors into calls, WhatsApp messages, form submissions, and store visits. We place enquiry actions where users naturally need them, add trust-building sections, reduce unnecessary friction, and make contact details easy to find. Service pages link to the contact page, blog posts link to relevant services, and local pages connect with nearby Faridabad areas so search engines and visitors can move through the website smoothly.",
      },
    ],
    faqs: [
      {
        question: "Which is the best website design company in Faridabad?",
        answer:
          "Dreams4u is a Faridabad-based website design company offering responsive website design, web development, SEO-ready content, ecommerce websites, and maintenance support for local businesses.",
      },
      {
        question: "Do you design websites for Ballabgarh businesses?",
        answer:
          "Yes. We serve Ballabgarh, Sector 4, NIT, Badkhal, and other Faridabad areas with business websites, landing pages, service pages, and local SEO support.",
      },
      {
        question: "Will my website be SEO optimized?",
        answer:
          "Yes. We add optimized title tags, meta descriptions, heading structure, image alt text, internal links, schema markup, and speed-focused development practices.",
      },
    ],
  },
  {
    slug: "website-development-company-in-faridabad",
    title: "Website Development Company in Faridabad | Dreams4u",
    h1: "Website Development Company in Faridabad",
    serviceType: "Website Development",
    metaDescription:
      "Dreams4u is a website development company in Faridabad building fast business websites, ecommerce stores, custom web solutions, and SEO-ready platforms.",
    intro:
      "Dreams4u provides website development services in Faridabad for businesses that need a reliable, fast, secure, and easy-to-manage website. We develop business websites, ecommerce stores, landing pages, service portals, and custom web solutions with mobile usability, search visibility, and lead generation planned from the start.",
    imageAlt: "Website development company in Faridabad by Dreams4u",
    primaryOffer:
      "Website development turns your business requirements and approved design into a working digital platform. We handle responsive front-end development, forms, content structure, ecommerce functions, performance optimization, technical SEO, analytics readiness, and post-launch support so the website can support real business operations.",
    whyLocal:
      "Faridabad businesses often need practical website features such as enquiry forms, WhatsApp actions, product catalogues, dealer or service information, location pages, recruitment forms, blogs, and payment flows. Working with a Faridabad website development company makes discovery, content collection, communication, and ongoing support easier for local teams.",
    approach:
      "We start by documenting goals, pages, features, integrations, content ownership, and the customer journey. Development then moves through reusable components, responsive testing, form validation, image optimization, metadata, schema, crawl checks, and launch verification. The technology is selected according to the project rather than forcing every business into the same setup.",
    deliverables: [
      "Business, corporate, and service website development",
      "Responsive front-end development for all screen sizes",
      "Contact forms, WhatsApp actions, and lead capture flows",
      "Ecommerce, catalogue, blog, and landing page functionality",
      "Technical SEO, schema, sitemap, and performance setup",
      "Testing, deployment support, and maintenance options",
    ],
    sections: [
      {
        heading: "Business websites developed around clear goals",
        body:
          "A useful business website should do specific work: explain services, answer buyer questions, collect enquiries, support sales conversations, or enable online transactions. We translate those goals into page templates, navigation, content blocks, forms, and integrations that are simple for customers to use and practical for the business to maintain.",
      },
      {
        heading: "Fast, mobile-first, and search-ready development",
        body:
          "Development quality affects both customer experience and SEO. We use responsive layouts, compressed images, semantic headings, crawlable links, canonical tags, structured data, and performance-focused implementation. Important pages are built so search engines can understand the service, location, company, and relationship between supporting content.",
      },
      {
        heading: "Technology and support that fit the project",
        body:
          "A small local website, a WordPress content site, an ecommerce store, and a custom React application have different needs. Dreams4u recommends an approach based on editing requirements, integrations, scale, budget, and future plans. After launch, we can support content changes, technical fixes, SEO improvements, speed checks, and new features.",
      },
    ],
    faqs: [
      {
        question: "What websites does Dreams4u develop in Faridabad?",
        answer:
          "Dreams4u develops business websites, corporate websites, ecommerce stores, WordPress websites, landing pages, service portals, and custom React-based web experiences.",
      },
      {
        question: "Will my website work properly on mobile devices?",
        answer:
          "Yes. Every website is planned and tested for mobile, tablet, and desktop layouts, including navigation, forms, buttons, images, and content readability.",
      },
      {
        question: "Do you provide support after website launch?",
        answer:
          "Yes. Dreams4u offers website maintenance, content updates, technical fixes, performance improvements, and SEO support after launch.",
      },
    ],
  },
  {
    slug: "seo-services-in-faridabad",
    title: "Best SEO Services in Faridabad | Dreams4u",
    h1: "SEO Services in Faridabad",
    serviceType: "SEO Services",
    metaDescription:
      "Grow local traffic with Dreams4u SEO services in Faridabad. We improve on-page SEO, technical SEO, content SEO, local SEO, schema, speed, and Google visibility.",
    intro:
      "Dreams4u provides SEO services in Faridabad for businesses that want more visibility, qualified traffic, and regular enquiries without depending only on paid ads. We work on on-page SEO, technical SEO, content SEO, local SEO, internal linking, schema markup, and website speed so your site becomes easier for Google and customers to understand.",
    imageAlt: "SEO services in Faridabad by Dreams4u",
    primaryOffer:
      "SEO works best when the whole website supports the same goal. We review the pages, metadata, content, indexing signals, speed, image usage, internal links, schema, sitemap, and local signals. Then we create an action plan that focuses on ranking opportunities like seo company in Faridabad, website design company in Faridabad, ecommerce website company Faridabad, and website development services near me.",
    whyLocal:
      "Faridabad search behaviour is practical. People look for nearby vendors, compare reviews, check service details, and call the company that appears trustworthy. Local SEO helps your business appear for searches connected with Ballabgarh, NIT, Badkhal, Sector 4, Sector 21, Sector 31, and other active areas. We strengthen these signals through page copy, Google Business Profile guidance, local landing pages, contact details, and structured data.",
    approach:
      "Our SEO process begins with an audit, keyword mapping, competitor review, and technical checks. We then improve titles, meta descriptions, H1 and H2 usage, content depth, image alt tags, internal linking, FAQ sections, canonical tags, and schema markup. For long-term growth, we suggest blogs, service pages, and location pages that answer real customer questions and support local authority.",
    deliverables: [
      "SEO audit for on-page, technical, content, and local issues",
      "Keyword mapping for Faridabad and nearby service intent",
      "Optimized metadata, headings, URLs, and canonical tags",
      "Service, LocalBusiness, FAQ, and breadcrumb schema",
      "Content recommendations and internal link improvements",
      "Speed, image SEO, sitemap, and robots.txt checks",
    ],
    sections: [
      {
        heading: "On-page SEO that improves clarity",
        body:
          "On-page SEO is the foundation of ranking. We improve page titles, meta descriptions, headings, paragraph structure, calls to action, keyword placement, and internal links. The aim is to help Google understand which page should rank for which search while helping visitors find answers quickly. We avoid thin pages and write useful sections that explain services, process, pricing factors, local coverage, and FAQs.",
      },
      {
        heading: "Technical SEO and speed optimization",
        body:
          "A slow or technically weak website loses both rankings and leads. We check crawlability, sitemap health, robots rules, canonical tags, mobile responsiveness, image size, lazy loading, unused code, render-blocking assets, and structured data. Improvements are made carefully so the website stays stable while becoming easier to crawl and faster to load on real mobile networks.",
      },
      {
        heading: "Local SEO for Faridabad leads",
        body:
          "Local SEO connects your website with nearby customers. We optimize local service pages, add location-based content, include contact and address consistency, build internal links to area pages, and support Google Business Profile improvements. When someone searches web designer in Ballabgarh, SEO company in Faridabad, or website development services near me, your website needs strong local relevance, not generic national copy.",
      },
    ],
    faqs: [
      {
        question: "Do you provide local SEO services in Faridabad?",
        answer:
          "Yes. Dreams4u provides local SEO for Faridabad businesses, including location pages, Google Business Profile guidance, local keywords, schema, and content improvements.",
      },
      {
        question: "How long does SEO take?",
        answer:
          "Some technical and on-page improvements can show movement quickly, while stable local rankings usually need consistent work for 3 to 6 months depending on competition.",
      },
      {
        question: "Can SEO work with my existing website?",
        answer:
          "Yes. We can audit and improve your current website, or rebuild important pages if the structure, speed, or content is holding rankings back.",
      },
    ],
  },
  {
    slug: "ecommerce-website-development-in-faridabad",
    title: "Best Ecommerce Website Development in Faridabad | Dreams4u",
    h1: "Ecommerce Website Development in Faridabad",
    serviceType: "Ecommerce Website Development",
    metaDescription:
      "Dreams4u builds ecommerce websites in Faridabad with responsive design, product SEO, payment integration, fast performance, and conversion-focused shopping experiences.",
    intro:
      "Dreams4u offers ecommerce website development in Faridabad for retailers, wholesalers, manufacturers, boutique brands, jewellery stores, apparel businesses, and service companies that want to sell online with confidence. We build clean, secure, mobile-first ecommerce websites focused on product discovery, trust, speed, and easy checkout.",
    imageAlt: "Ecommerce website development in Faridabad by Dreams4u",
    primaryOffer:
      "An ecommerce website must do more than display products. It should help customers search, compare, trust, add to cart, pay, and return for future purchases. We plan category pages, product pages, product images, shipping information, payment flow, customer support links, and SEO structure so your store can grow beyond social media messages.",
    whyLocal:
      "Faridabad has many businesses that can sell locally and across India: fashion, parts, tools, gifts, gems, home products, industrial supplies, and custom goods. A local ecommerce website gives these businesses control over branding, data, product presentation, and search visibility. Keywords such as ecommerce website company Faridabad and website development services near me help attract customers who are ready to discuss a store project.",
    approach:
      "We start with catalogue planning, payment and delivery needs, user journey, product SEO, and admin requirements. Then we create responsive layouts, optimized images, secure forms, clear navigation, schema markup, and conversion-focused content. We can also connect ecommerce pages with SEO services, digital marketing campaigns, and maintenance support after launch.",
    deliverables: [
      "Responsive ecommerce website design and development",
      "Category, product, cart, and checkout planning",
      "Payment gateway and enquiry-based buying flows",
      "Product SEO, image alt text, and structured data",
      "Internal links to SEO, maintenance, and contact pages",
      "Post-launch support for updates and improvements",
    ],
    sections: [
      {
        heading: "Ecommerce stores planned for real buyers",
        body:
          "Online shoppers need confidence before they buy. We design ecommerce pages with clear product information, visible pricing or enquiry options, easy navigation, mobile-friendly filters, trust blocks, return information, and fast checkout paths. The store experience is kept practical and focused, so customers can move from product interest to purchase or enquiry without confusion.",
      },
      {
        heading: "Product SEO and category visibility",
        body:
          "Ecommerce SEO depends on strong category pages, descriptive product names, clean URLs, image alt text, useful descriptions, and structured data. We avoid generic copy and help you explain materials, usage, benefits, sizing, delivery, and support. This creates better landing pages for Google and better buying information for customers.",
      },
      {
        heading: "Scalable support for Faridabad businesses",
        body:
          "Your ecommerce store may start small, but it should not feel trapped. We plan for future products, new categories, seasonal offers, analytics, marketing pages, and maintenance needs. Businesses in Ballabgarh, NIT, Sector 4, and wider Faridabad can use the website for local pickup, NCR delivery, national shipping, or catalogue-based enquiries.",
      },
    ],
    faqs: [
      {
        question: "Do you build ecommerce websites in Faridabad?",
        answer:
          "Yes. Dreams4u builds ecommerce websites for Faridabad businesses with product pages, categories, payment options, responsive design, SEO setup, and support.",
      },
      {
        question: "Can you optimize product pages for SEO?",
        answer:
          "Yes. We optimize product titles, descriptions, images, alt tags, category content, schema, and internal links for better search visibility.",
      },
      {
        question: "Can I manage products after launch?",
        answer:
          "Yes. We can build stores with admin-friendly product management and provide training or maintenance support based on your package.",
      },
    ],
  },
  {
    slug: "wordpress-development-in-faridabad",
    title: "Best WordPress Development in Faridabad | Dreams4u",
    h1: "WordPress Development in Faridabad",
    serviceType: "WordPress Development",
    metaDescription:
      "Get WordPress development in Faridabad with Dreams4u. We create SEO-friendly business websites, blogs, landing pages, ecommerce stores, and secure WordPress maintenance.",
    intro:
      "Dreams4u provides WordPress development in Faridabad for businesses that want a flexible, easy-to-update, SEO-friendly website. We build WordPress websites for service providers, local shops, consultants, educational institutes, clinics, agencies, and ecommerce brands that need professional design with simple content management.",
    imageAlt: "WordPress development in Faridabad by Dreams4u",
    primaryOffer:
      "WordPress is powerful when it is planned correctly. We focus on clean design, lightweight plugins, responsive layouts, secure setup, optimized images, useful content blocks, and search-friendly page structure. Your website can include service pages, blogs, landing pages, contact forms, galleries, portfolios, and ecommerce functionality.",
    whyLocal:
      "Many Faridabad businesses need regular content updates for offers, new services, photos, testimonials, and blogs. WordPress makes this easier, but a poorly configured WordPress site can become slow and insecure. We build with performance, SEO, and maintenance in mind so your website remains useful after launch.",
    approach:
      "Our WordPress process includes requirement planning, theme or custom layout selection, page structure, content migration if needed, plugin selection, SEO setup, schema guidance, speed checks, security basics, backup planning, and admin training. We also connect important pages internally so users can move from blog to service page and from service page to contact page.",
    deliverables: [
      "Custom WordPress website setup",
      "Responsive pages, blog structure, and contact forms",
      "SEO plugin configuration and metadata setup",
      "Speed, image, cache, and security recommendations",
      "Service pages for Faridabad local SEO",
      "Training and maintenance support options",
    ],
    sections: [
      {
        heading: "WordPress websites that are easy to manage",
        body:
          "A business website should not become difficult every time you need to update text or add a blog. We structure WordPress pages so your team can manage common edits without damaging the layout. At the same time, design consistency, mobile responsiveness, SEO headings, and calls to action remain protected through a clean setup.",
      },
      {
        heading: "Balanced plugins and better performance",
        body:
          "WordPress speed problems often come from too many plugins, heavy themes, oversized images, and unmanaged scripts. We keep the build lean, choose plugins carefully, compress images, use caching where appropriate, and keep the structure simple. This supports better Core Web Vitals and a smoother mobile experience.",
      },
      {
        heading: "Local SEO content inside WordPress",
        body:
          "WordPress is excellent for content SEO when pages are planned well. We create service pages, location sections, blog categories, FAQ blocks, and internal links around search intent such as website design company in Faridabad, SEO services in Faridabad, and web designer in Ballabgarh. This gives the website room to grow over time.",
      },
    ],
    faqs: [
      {
        question: "Do you create WordPress websites in Faridabad?",
        answer:
          "Yes. Dreams4u creates WordPress websites for businesses in Faridabad, Ballabgarh, NIT, Badkhal, and nearby areas.",
      },
      {
        question: "Will my WordPress website be fast?",
        answer:
          "We use lightweight design, optimized images, careful plugin selection, caching guidance, and responsive layouts to improve WordPress speed.",
      },
      {
        question: "Can you maintain an existing WordPress website?",
        answer:
          "Yes. We can update, secure, optimize, redesign, and maintain existing WordPress websites.",
      },
    ],
  },
  {
    slug: "digital-marketing-company-in-faridabad",
    title: "Digital Marketing Company in Faridabad | Dreams4u",
    h1: "Digital Marketing Company in Faridabad",
    serviceType: "Digital Marketing",
    metaDescription:
      "Dreams4u is a digital marketing company in Faridabad providing SEO, local SEO, website content, landing pages, campaigns, and lead generation strategy.",
    intro:
      "Dreams4u is a digital marketing company in Faridabad helping businesses build a stronger online presence and generate better quality leads. We combine SEO, local SEO, website content, landing pages, campaign planning, analytics, and conversion improvements so marketing activity connects with real customer searches and measurable enquiries.",
    imageAlt: "Digital marketing services in Faridabad by Dreams4u",
    primaryOffer:
      "Digital marketing becomes effective when your website, content, SEO, ads, and local visibility work together. We help Faridabad businesses build that foundation with clear service pages, strong calls to action, useful blog topics, Google-friendly structure, and campaign landing pages that support enquiries.",
    whyLocal:
      "A Faridabad customer may discover your business through Google, social media, maps, WhatsApp, a blog post, or a referral. Each touchpoint should lead to a website page that answers questions and makes contact easy. We optimize for local phrases like SEO company in Faridabad, digital marketing services in Faridabad, website design company in Faridabad, and website development services near me.",
    approach:
      "We begin by understanding your audience, services, competition, and sales process. Then we plan the right mix of SEO, content, local pages, landing pages, internal links, and measurement. The goal is practical growth: more relevant visits, better enquiries, stronger trust, and clearer reporting.",
    deliverables: [
      "SEO and local SEO campaign planning",
      "Website content and landing page strategy",
      "Blog topics based on customer questions",
      "Internal links between blogs, services, and contact pages",
      "Conversion tracking and enquiry-focused improvements",
      "Ongoing optimization recommendations",
    ],
    sections: [
      {
        heading: "Marketing built around your website",
        body:
          "Your website should be the centre of your digital marketing. Social media, ads, Google searches, and local listings should all lead to pages that explain your offer and convert visitors. We improve those pages first so campaigns have a stronger destination and customers can understand your business quickly.",
      },
      {
        heading: "Content that supports ranking and trust",
        body:
          "Content SEO is not about adding random keywords. It is about answering the questions customers ask before they buy. We plan service pages, FAQs, case-study style sections, and blog posts around pricing, process, benefits, mistakes, comparisons, and local intent. This builds topical authority and helps users feel more confident.",
      },
      {
        heading: "Local lead generation for Faridabad businesses",
        body:
          "We focus on enquiries that matter: calls, WhatsApp messages, contact forms, appointment requests, and store visits. Local SEO pages, Google Business Profile guidance, internal links, and location-based content help connect your business with customers in Ballabgarh, NIT, Badkhal, Sector 4, and wider Faridabad.",
      },
    ],
    faqs: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "Dreams4u offers SEO, local SEO, content planning, landing pages, website optimization, campaign strategy, and lead-generation improvements.",
      },
      {
        question: "Can digital marketing help a local Faridabad business?",
        answer:
          "Yes. Local businesses can use SEO, local pages, Google visibility, content, and conversion-focused pages to generate more enquiries.",
      },
      {
        question: "Do you create landing pages for campaigns?",
        answer:
          "Yes. We create landing pages with optimized content, metadata, schema, fast loading, and clear calls to action.",
      },
    ],
  },
  {
    slug: "website-design-company-in-delhi-ncr",
    title: "Website Design Company in Delhi NCR | Dreams4u",
    h1: "Website Design Company in Delhi NCR",
    serviceType: "Website Design",
    city: "Delhi NCR",
    seoLocation: "Delhi NCR",
    badge: "Delhi NCR Website Design",
    areaServed: [
      "Delhi",
      "Faridabad",
      "Gurugram",
      "Noida",
      "Greater Noida",
      "Ghaziabad",
    ],
    metaDescription:
      "Dreams4u is a website design company serving Delhi NCR with responsive business websites, ecommerce design, web development, SEO, and maintenance.",
    intro:
      "Dreams4u provides website design and development services across Delhi NCR for businesses that need a professional, responsive, fast, and SEO-ready website. We work with companies in Delhi, Faridabad, Gurugram, Noida, Greater Noida, and Ghaziabad, as well as teams serving customers across India.",
    imageAlt: "Website design company in Delhi NCR by Dreams4u",
    primaryOffer:
      "Delhi NCR is a large and competitive market, so a website must communicate value quickly. We design business websites, corporate websites, ecommerce stores, landing pages, and local service pages that make services clear, establish trust, and guide visitors toward a call, WhatsApp message, form submission, appointment, or purchase.",
    whyLocal:
      "Customers across Delhi NCR compare several providers before making contact. Strong local pages, accurate company details, useful service content, fast mobile performance, and clear proof help a business stand out. We map location intent carefully so one useful regional page supports the wider NCR offer without copying city pages or stuffing place names.",
    approach:
      "Our process covers discovery, competitor and audience review, sitemap planning, content structure, responsive UI design, development, technical SEO, schema, performance checks, and launch support. Each project is planned around the client's market, sales process, content resources, and future growth rather than a fixed template.",
    deliverables: [
      "Custom business and corporate website design",
      "Responsive layouts for mobile, tablet, and desktop",
      "Web development, forms, and lead-generation actions",
      "SEO-ready metadata, internal links, and structured data",
      "Ecommerce and campaign landing page design",
      "Launch checks, analytics readiness, and maintenance support",
    ],
    sections: [
      {
        heading: "Website design for a competitive Delhi NCR market",
        body:
          "Businesses in Delhi NCR serve varied audiences, from neighbourhood customers to national procurement teams. We create page structures that help each audience understand the offer, industries served, process, service area, and next step. The visual design supports credibility while keeping the content easy to scan on mobile.",
      },
      {
        heading: "One connected design, development, and SEO process",
        body:
          "Design decisions affect development, speed, accessibility, conversions, and search visibility. Dreams4u plans these areas together. Headings, navigation, content blocks, internal links, images, forms, and schema are considered before launch so the finished website is not only attractive but also usable and discoverable.",
      },
      {
        heading: "Serving Delhi, Faridabad, Gurugram, Noida, and beyond",
        body:
          "Dreams4u is based in Faridabad and serves clients throughout Delhi NCR and India. Meetings, content reviews, and project approvals can be handled remotely, while local market knowledge supports businesses targeting Delhi, Faridabad, Gurugram, Noida, Greater Noida, Ghaziabad, and surrounding areas.",
      },
    ],
    faqs: [
      {
        question: "Does Dreams4u provide website design across Delhi NCR?",
        answer:
          "Yes. Dreams4u serves businesses in Delhi, Faridabad, Gurugram, Noida, Greater Noida, Ghaziabad, and other Delhi NCR locations.",
      },
      {
        question: "Can you design a website for clients across India?",
        answer:
          "Yes. Project discovery, content review, design approvals, development, and support can be managed remotely for businesses anywhere in India.",
      },
      {
        question: "Do Delhi NCR website projects include SEO setup?",
        answer:
          "SEO scope depends on the package, but Dreams4u can include metadata, heading structure, internal links, schema, sitemap, image optimization, and local service content.",
      },
    ],
  },
  {
    slug: "website-maintenance-services-in-faridabad",
    title: "Best Website Maintenance Services in Faridabad | Dreams4u",
    h1: "Website Maintenance Services in Faridabad",
    serviceType: "Website Maintenance Services",
    metaDescription:
      "Keep your website fast, secure, updated, and SEO-ready with Dreams4u website maintenance services in Faridabad for business, WordPress, ecommerce, and service websites.",
    intro:
      "Dreams4u provides website maintenance services in Faridabad for businesses that want their websites to stay secure, fast, updated, and search-friendly after launch. We support business websites, WordPress websites, ecommerce stores, landing pages, blogs, and service websites with regular improvements and issue handling.",
    imageAlt: "Website maintenance services in Faridabad by Dreams4u",
    primaryOffer:
      "A website needs ongoing care. Content becomes outdated, plugins need updates, images get added without compression, links break, forms fail, and SEO opportunities change. Our maintenance service keeps the website healthy so it continues to support calls, enquiries, rankings, and customer trust.",
    whyLocal:
      "Faridabad businesses often depend on their website for daily leads. If a contact form stops working or a page loads slowly, potential customers may go to a competitor. Maintenance protects that business pipeline with routine checks, updates, content edits, backup guidance, speed improvements, and SEO refinements.",
    approach:
      "We review the website structure, technology, forms, content, speed, analytics signals, SEO tags, images, sitemap, and user journey. Then we handle updates, fixes, new sections, blog uploads, internal links, alt text, schema adjustments, and performance improvements based on the website type and package.",
    deliverables: [
      "Website content updates and page edits",
      "WordPress plugin, theme, and security checks",
      "Speed, image compression, and lazy-loading improvements",
      "Broken link, form, sitemap, and SEO tag checks",
      "Blog publishing and internal linking support",
      "Technical fixes and monthly improvement recommendations",
    ],
    sections: [
      {
        heading: "Maintenance that protects leads",
        body:
          "Your website is often the first step before a customer calls. Regular maintenance ensures that buttons work, forms submit correctly, pages load quickly, contact details are current, and service information remains accurate. This protects the trust you have built and reduces missed opportunities from avoidable website problems.",
      },
      {
        heading: "SEO updates after launch",
        body:
          "SEO is not a one-time checklist. Search behaviour changes, competitors update pages, and new keywords become useful. We improve title tags, meta descriptions, headings, image alt text, FAQs, internal links, schema markup, and content sections over time. This keeps important pages aligned with Faridabad local search demand.",
      },
      {
        heading: "Speed and technical health",
        body:
          "New images, scripts, plugins, and content can slow a website down. We monitor technical health, reduce avoidable weight, compress images, recommend caching, and clean obvious issues. Better speed supports user experience, Google crawling, and lead generation, especially for mobile users searching for services near them.",
      },
    ],
    faqs: [
      {
        question: "Do you maintain websites in Faridabad?",
        answer:
          "Yes. Dreams4u maintains business websites, WordPress sites, ecommerce stores, landing pages, and blogs for Faridabad businesses.",
      },
      {
        question: "Can maintenance improve SEO?",
        answer:
          "Yes. Regular updates to metadata, content, internal links, images, schema, and page speed can improve the website's SEO health.",
      },
      {
        question: "Do you fix existing website issues?",
        answer:
          "Yes. We can fix broken forms, layout issues, speed problems, outdated content, technical SEO issues, and WordPress-related problems.",
      },
    ],
  },
  {
    slug: "custom-website-development-in-faridabad",
    title: "Custom Website Development in Faridabad | Dreams4u",
    h1: "Custom Website Development in Faridabad",
    serviceType: "Custom Website Development",
    metaDescription:
      "Custom website development in Faridabad for portals, integrations, business workflows, React applications, and scalable SEO-ready websites by Dreams4u.",
    intro:
      "Dreams4u develops custom websites for Faridabad businesses that need more than a standard theme. We plan the interface, data flow, integrations, content structure, performance, security, and future maintenance around the way the business actually works.",
    imageAlt: "Custom website development in Faridabad by Dreams4u",
    primaryOffer:
      "Custom development is useful when a website needs special enquiry workflows, searchable catalogues, dashboards, calculators, bookings, role-based access, API connections, or a distinctive content experience. The project starts with requirements and user journeys, not a preselected template.",
    whyLocal:
      "Manufacturers, distributors, clinics, educators, professional firms, and growing retailers in Faridabad often have processes that generic website builders cannot represent cleanly. A custom build can connect those processes with a faster customer journey while keeping ownership, SEO, and future expansion in view.",
    approach:
      "We document users, pages, actions, data, integrations, permissions, search requirements, and success measures before development. Work is delivered in reviewable stages, followed by responsive testing, accessibility checks, technical SEO, structured data, performance checks, deployment, and handover.",
    deliverables: [
      "Requirements, sitemap, user flows, and technical scope",
      "Custom responsive interface and reusable components",
      "Forms, APIs, dashboards, catalogues, or workflow features",
      "Technical SEO, metadata, schema, and crawlable navigation",
      "Performance, accessibility, security, and browser testing",
      "Deployment, documentation, training, and support options",
    ],
    sections: [
      {
        heading: "When a custom website is the right choice",
        body:
          "A custom build makes sense when the website must support a unique process, integrate with another system, scale to many content types, or provide an app-like experience. We first test whether a reliable existing platform can meet the need, then recommend custom development only where it creates meaningful business value.",
      },
      {
        heading: "Architecture built for search and expansion",
        body:
          "Custom functionality should not hide important content from search engines. Public pages use semantic HTML, stable URLs, descriptive headings, internal links, metadata, canonical tags, and structured data. Reusable components make it easier to add services, locations, resources, and conversion pages later.",
      },
      {
        heading: "A maintainable handover",
        body:
          "The finished website includes a clear deployment and maintenance path. Accounts, external services, update responsibilities, backups, monitoring, and future feature work are documented so the project does not become dependent on hidden knowledge.",
      },
    ],
    faqs: [
      {
        question: "What is a custom website?",
        answer:
          "A custom website is designed and developed around specific business requirements instead of relying only on a ready-made theme or fixed page builder.",
      },
      {
        question: "Can you build custom React websites in Faridabad?",
        answer:
          "Yes. Dreams4u can build React-based websites and interfaces when the project benefits from reusable components, interactive features, integrations, or app-like behaviour.",
      },
      {
        question: "Can a custom website be SEO-friendly?",
        answer:
          "Yes. SEO is planned through crawlable pages, clean URLs, metadata, semantic headings, internal links, structured data, optimized media, and prerendering or server rendering where appropriate.",
      },
    ],
  },
  {
    slug: "website-redesign-services-in-faridabad",
    title: "Website Redesign Services in Faridabad | Dreams4u",
    h1: "Website Redesign Services in Faridabad",
    serviceType: "Website Redesign Services",
    metaDescription:
      "Website redesign services in Faridabad focused on better usability, mobile performance, conversions, SEO migration, content clarity, and Core Web Vitals.",
    intro:
      "Dreams4u redesigns outdated, slow, confusing, or low-converting websites for Faridabad businesses. The redesign keeps useful brand and search assets, improves the customer journey, and gives every important page a clearer purpose.",
    imageAlt: "Website redesign services in Faridabad by Dreams4u",
    primaryOffer:
      "A redesign should solve measurable problems rather than only change colours. We review navigation, page intent, mobile layouts, content gaps, calls to action, forms, image weight, technical SEO, analytics signals, and existing rankings before deciding what to retain, rewrite, merge, or remove.",
    whyLocal:
      "Many established Faridabad businesses have websites that were built before mobile-first buying became normal. A focused redesign can make services easier to understand, improve trust for local customers, and protect valuable URLs while adding stronger location, proof, and enquiry content.",
    approach:
      "The process begins with a content and URL inventory. We map old pages to the new structure, preserve or redirect useful URLs, prototype the main user journeys, rebuild responsive layouts, optimize media, test forms, validate metadata and schema, and monitor the launch for crawl or usability issues.",
    deliverables: [
      "Website, content, analytics, and SEO migration audit",
      "Revised sitemap, navigation, and conversion journeys",
      "Responsive redesign for high-priority page templates",
      "Content consolidation, metadata, and redirect mapping",
      "Image, JavaScript, CSS, and Core Web Vitals improvements",
      "Pre-launch testing and post-launch monitoring plan",
    ],
    sections: [
      {
        heading: "Redesign decisions based on evidence",
        body:
          "Useful pages, links, enquiries, and search visibility should not be discarded because a new layout is being introduced. We inventory the current site and use available analytics, Search Console data, customer questions, and sales feedback to prioritize the redesign.",
      },
      {
        heading: "SEO migration without avoidable losses",
        body:
          "Changing URLs or deleting content without a map can damage visibility. We preserve strong URLs where possible, use permanent redirects where necessary, update canonicals and internal links, regenerate the sitemap, and check that important content remains crawlable after launch.",
      },
      {
        heading: "Faster paths to enquiry",
        body:
          "The new design places service details, proof, FAQs, contact options, and calls to action where visitors need them. Forms are shorter, mobile interactions are easier, and visual effects are kept subordinate to clarity and speed.",
      },
    ],
    faqs: [
      {
        question: "Can you redesign a website without losing SEO?",
        answer:
          "A redesign cannot guarantee unchanged rankings, but careful URL preservation, redirects, content mapping, metadata, internal links, and crawl checks can reduce avoidable SEO loss.",
      },
      {
        question: "Should every old page be kept?",
        answer:
          "No. Thin, duplicate, or obsolete pages can be merged or removed after checking traffic, links, rankings, business value, and the correct redirect destination.",
      },
      {
        question: "Will the redesigned website load faster?",
        answer:
          "Performance is part of the redesign scope through image optimization, lighter components, reduced third-party code, stable layouts, caching, and mobile testing.",
      },
    ],
  },
  {
    slug: "landing-page-design-services-in-faridabad",
    title: "Landing Page Design Services in Faridabad | Dreams4u",
    h1: "Landing Page Design Services in Faridabad",
    serviceType: "Landing Page Design Services",
    metaDescription:
      "Conversion-focused landing page design in Faridabad for Google Ads, local SEO, product launches, lead generation, WhatsApp enquiries, and campaigns.",
    intro:
      "Dreams4u designs focused landing pages for Faridabad businesses running ads, launching services, collecting leads, promoting offers, or targeting a specific local search. Each page connects one audience, one offer, and one primary action.",
    imageAlt: "Landing page design services in Faridabad by Dreams4u",
    primaryOffer:
      "A landing page removes the distractions of a general homepage and gives campaign visitors the exact information they need. We combine a clear offer, relevant proof, benefit-led sections, objection-handling FAQs, a short form, phone or WhatsApp actions, and analytics-ready events.",
    whyLocal:
      "Faridabad campaigns often target a specific service, sector, industrial audience, or neighbourhood. Matching the page copy to that intent can improve message clarity and lead quality. Local contact details and realistic service coverage also build confidence before a visitor calls.",
    approach:
      "We define the traffic source, search intent, audience, offer, proof, objections, and conversion event first. The page is then written, designed, developed, optimized for mobile speed, connected to forms or analytics, and tested across common screen sizes before the campaign starts.",
    deliverables: [
      "Campaign message, keyword, and audience alignment",
      "Responsive landing page copy and visual design",
      "Lead form, call, WhatsApp, booking, or purchase action",
      "FAQ, Service, and breadcrumb structured data",
      "Fast media, stable layout, and mobile usability checks",
      "Analytics and conversion tracking implementation support",
    ],
    sections: [
      {
        heading: "One page, one primary conversion goal",
        body:
          "High-performing landing pages make the next step obvious. The page can support a quote request, consultation booking, WhatsApp conversation, phone call, product purchase, or event registration, but the hierarchy keeps one action primary.",
      },
      {
        heading: "Content that answers buying questions",
        body:
          "The page explains the offer, who it is for, important inclusions, expected process, proof, common objections, and what happens after enquiry. Specific information is more persuasive than exaggerated claims or a long list of unrelated keywords.",
      },
      {
        heading: "Speed and measurement from launch",
        body:
          "Campaign traffic is expensive, so landing pages are kept lean. Images are compressed, nonessential scripts are limited, layout shifts are controlled, and form or click events can be measured so future changes are based on real behaviour.",
      },
    ],
    faqs: [
      {
        question: "How is a landing page different from a homepage?",
        answer:
          "A homepage introduces the wider business, while a landing page is focused on one audience, campaign, offer, and conversion action.",
      },
      {
        question: "Can you create landing pages for Google Ads?",
        answer:
          "Yes. We align the page with the campaign message, keywords, audience, form, call tracking requirements, and mobile experience.",
      },
      {
        question: "Can a landing page rank in organic search?",
        answer:
          "It can when the page provides substantial, unique value and fits the website structure, although short campaign-only pages are usually built primarily for paid traffic and conversion.",
      },
    ],
  },
  ...createDelhiLandingPages(),
  ...createMetroServicePages(),
].map((page) => ({
  ...page,
  routePath: `/${page.slug}`,
  canonicalUrl: `${baseUrl}/${page.slug}`,
  phoneNumber,
  whatsappUrl,
  address,
  image,
  faqs: [...page.faqs, ...createSharedServiceFaqs(page)]
    .filter(
      (faq, index, faqs) =>
        faqs.findIndex((item) => item.question === faq.question) === index,
    )
    .slice(0, 12)
    .map((faq, index) => ({
    id: `${page.slug}-faq-${index + 1}`,
    category: index === 0 ? "services" : index === 1 ? "seo" : "timeline",
    ...faq,
    })),
}));

export const localServicePageMap = localServicePages.reduce((acc, page) => {
  acc[page.slug] = page;
  return acc;
}, {});
