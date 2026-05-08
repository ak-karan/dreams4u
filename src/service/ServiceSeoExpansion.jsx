import React from "react";
import { Link } from "react-router-dom";

const content = {
  services: {
    title: "Complete SEO-ready service planning for Faridabad businesses",
    paragraphs: [
      "A service page should do more than list what an agency offers. It should explain the business problem, show how the service solves it, guide visitors toward the right solution, and help Google understand the page clearly. Dreams4u plans every service around on-page SEO, technical SEO, content SEO, local SEO, internal linking, page speed, mobile usability, and conversion flow. That means a visitor searching for website design company in Faridabad, web designer in Ballabgarh, SEO company in Faridabad, ecommerce website company Faridabad, or website development services near me can quickly understand which service fits their requirement.",
      "For local businesses in Faridabad, service clarity is very important. A manufacturer, clinic, coaching institute, shop, real estate consultant, repair company, or professional service provider may not need the same website structure. Some businesses need a simple lead-generation website, some need ecommerce, some need monthly SEO, and some need maintenance for an existing WordPress website. Our service pages connect these options through internal links, clear headings, helpful descriptions, calls to action, and location signals so both users and search engines can move through the website easily.",
      "We also treat speed and accessibility as part of service quality. Images should have meaningful alt text, pages should load quickly, text should remain readable on mobile, buttons should be easy to tap, and important contact actions should be visible without confusion. These improvements support better user experience, stronger Core Web Vitals, and higher trust for local visitors. When the website is easy to use, users spend more time exploring services and are more likely to contact the business.",
      "The service hub links visitors to focused pages such as website design, ecommerce, SEO, digital marketing, maintenance, mobile responsive design, and business websites. It also links with local SEO pages for Faridabad service intent. This structure improves crawl depth and helps Google connect your main services with location-specific demand. A strong hub page becomes the centre of your website architecture instead of a simple list of cards.",
    ],
  },
  ecommerce: {
    title: "Ecommerce SEO, performance, and conversion strategy",
    paragraphs: [
      "An ecommerce website needs more planning than a normal brochure website because every category, product, image, and checkout step affects sales. Dreams4u builds ecommerce websites in Faridabad with a focus on fast product discovery, simple navigation, clean product pages, secure payment flow, and search-friendly content. The page structure should help customers understand what you sell, compare products, check delivery or enquiry options, and complete the action without friction.",
      "Product SEO is a major part of ecommerce growth. Category pages need unique content, product pages need useful descriptions, images need descriptive alt tags, and important buying questions should be answered before checkout. Instead of using thin manufacturer copy, we help businesses explain product benefits, materials, use cases, sizing, warranty, delivery, and support. This gives Google stronger content to index and gives customers more confidence before they buy or send an enquiry.",
      "Speed is especially important for ecommerce because slow pages reduce conversions. We focus on compressed images, stable layouts, lazy loading for non-critical images, clean code, caching, and mobile-first design. Many Faridabad customers browse from phones, so the product grid, filters, cart, WhatsApp button, and checkout experience must work smoothly on small screens. A fast mobile store can improve both ranking potential and sales.",
      "Local ecommerce also has a strong opportunity in Faridabad, Ballabgarh, NIT, Badkhal, and nearby NCR areas. Businesses can use the website for local pickup, catalogue enquiries, online payments, shipping across India, or hybrid selling through WhatsApp and website forms. Internal links from ecommerce pages to SEO, digital marketing, maintenance, and contact pages help visitors understand the full growth plan after launch.",
    ],
  },
  maintenance: {
    title: "Ongoing website health, SEO safety, and speed support",
    paragraphs: [
      "Website maintenance is not only about fixing errors after something breaks. A healthy business website needs regular checks for speed, security, forms, content, images, backups, links, SEO tags, schema, and mobile usability. Dreams4u helps Faridabad businesses keep their websites updated so they continue to generate enquiries from Google, WhatsApp, phone calls, and contact forms.",
      "Without maintenance, small problems can quietly damage performance. A plugin update may break a layout, an oversized image may slow down a service page, an old phone number may lose leads, a broken form may stop enquiries, and outdated content may weaken trust. Maintenance protects the value of the website after launch by checking these details before they become expensive problems.",
      "SEO maintenance is also important. Google rankings are affected by fresh content, crawlability, page speed, structured data, internal links, and user experience. We review title tags, meta descriptions, heading structure, image alt text, FAQ content, sitemap status, robots rules, and local keyword opportunities. This helps important pages stay aligned with searches such as website maintenance services in Faridabad, website support near me, WordPress maintenance Faridabad, and website speed optimization.",
      "A maintenance plan is useful for WordPress websites, ecommerce stores, landing pages, portfolio sites, and custom business websites. It can include content updates, blog publishing, backup checks, uptime monitoring, malware scans, speed improvements, and technical fixes. For local businesses in Ballabgarh, NIT, Sector 4, and wider Faridabad, this ongoing care keeps the website reliable and ready for customers every day.",
    ],
  },
  mobile: {
    title: "Mobile-first UX, accessibility, and local search performance",
    paragraphs: [
      "Most local customers check a website on mobile before calling, visiting, or sending a WhatsApp message. Mobile responsive design is therefore not optional for Faridabad businesses. A mobile-friendly page should load quickly, show readable text, avoid layout shifts, keep buttons easy to tap, display images correctly, and make contact actions visible without forcing the user to search.",
      "Google uses mobile-first indexing, which means the mobile version of your content matters deeply for SEO. If your desktop website looks good but the mobile version hides content, breaks headings, loads slowly, or makes navigation difficult, rankings and conversions can suffer. Dreams4u designs responsive websites that preserve important content, metadata, schema, headings, internal links, and calls to action across devices.",
      "Mobile performance also affects trust. A visitor searching for website design company in Faridabad, web designer in Ballabgarh, ecommerce website company Faridabad, or SEO company in Faridabad may compare several agencies quickly. If your website opens slowly or feels hard to use, that visitor may leave before reading your offer. Clean responsive sections, compressed images, optimized assets, and predictable layouts help reduce bounce rate.",
      "Accessibility is part of mobile quality. Text needs enough contrast, buttons need clear labels, tap targets need comfortable spacing, forms should be simple, and important information should not overlap on small screens. These improvements help more users complete actions and also make the website feel professional. A responsive website becomes stronger when design, speed, SEO, and accessibility are planned together.",
    ],
  },
};

export default function ServiceSeoExpansion({ variant }) {
  const item = content[variant];

  if (!item) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
          SEO Content Depth
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          {item.title}
        </h2>
        <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600">
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/website-design-company-in-faridabad"
            className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
          >
            Website Design Faridabad
          </Link>
          <Link
            to="/seo-services-in-faridabad"
            className="rounded-xl border border-cyan-600 px-5 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
          >
            SEO Services Faridabad
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            Contact Dreams4u
          </Link>
        </div>
      </div>
    </section>
  );
}
