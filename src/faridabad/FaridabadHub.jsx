import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { faridabadAreas, faridabadHubMeta } from "./faridabadAreas";

function buildHubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Faridabad Website Design and SEO Areas",
    url: faridabadHubMeta.canonicalUrl,
    description: faridabadHubMeta.description,
    hasPart: faridabadAreas.map((area) => ({
      "@type": "WebPage",
      name: area.displayName,
      url: area.canonicalUrl,
    })),
  };
}

export default function FaridabadHub() {
  const schema = buildHubSchema();
  const primaryAreas = faridabadAreas.filter((area) => area.type === "area");
  const sectors = faridabadAreas.filter((area) => area.type === "sector");

  return (
    <>
      <Helmet>
        <title>{faridabadHubMeta.title}</title>
        <meta name="description" content={faridabadHubMeta.description} />
        <link rel="canonical" href={faridabadHubMeta.canonicalUrl} />
        <meta property="og:title" content={faridabadHubMeta.title} />
        <meta property="og:description" content={faridabadHubMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={faridabadHubMeta.canonicalUrl} />
        <meta property="og:image" content={faridabadHubMeta.image} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-slate-950 py-18 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/30">
            Faridabad Service Areas
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Website Design and SEO Services Across Faridabad
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Explore dedicated location pages for Badkhal, Ballabgarh, NIT, and
            major Faridabad sectors. Each page is built to target local website
            design, web development, and SEO service intent.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Main Faridabad Areas
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {primaryAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={area.routePath}
                  className="rounded-3xl border border-slate-200 p-6 shadow-sm transition hover:border-cyan-400 hover:shadow-md"
                >
                  <MapPinIcon className="h-8 w-8 text-cyan-600" />
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {area.displayName}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Dedicated landing page for website design, SEO, and local
                    business growth in {area.displayName}, Faridabad.
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Faridabad Sector Pages
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sectors.map((area) => (
                <Link
                  key={area.slug}
                  to={area.routePath}
                  className="rounded-2xl border border-slate-200 px-5 py-4 font-semibold text-slate-800 transition hover:border-cyan-400 hover:text-cyan-700"
                >
                  {area.displayName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
