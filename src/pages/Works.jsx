import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { faridabadAreas } from "../faridabad/faridabadAreas";
import { localServicePages } from "../localSeo/localServicePages";
import { priorityMetroSlugs } from "../localSeo/metroServicePages.js";

const delhiPages = localServicePages.filter((page) => page.city === "Delhi");
const gurgaonPages = localServicePages.filter((page) => page.city === "Gurgaon");
const noidaPages = localServicePages.filter((page) => page.city === "Noida");
const faridabadServicePages = localServicePages.filter(
  (page) => !["Delhi", "Gurgaon", "Noida"].includes(page.city),
);

const priorityDelhiAreas = [
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
];

const priorityDelhiPages = delhiPages.filter((page) =>
  priorityDelhiAreas.some((area) => page.h1.includes(area)),
);

const otherDelhiPages = delhiPages.filter(
  (page) => !priorityDelhiPages.some((priority) => priority.slug === page.slug),
);

const priorityMetroSlugSet = new Set(priorityMetroSlugs);
const priorityGurgaonPages = gurgaonPages.filter((page) =>
  priorityMetroSlugSet.has(page.slug),
);
const otherGurgaonPages = gurgaonPages.filter(
  (page) => !priorityMetroSlugSet.has(page.slug),
);
const priorityNoidaPages = noidaPages.filter((page) =>
  priorityMetroSlugSet.has(page.slug),
);
const otherNoidaPages = noidaPages.filter(
  (page) => !priorityMetroSlugSet.has(page.slug),
);

function LinkGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="group flex min-h-[92px] items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
        >
          <div>
            <p className="font-semibold leading-6 text-slate-900">
              {item.name}
            </p>
            {item.description && (
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            )}
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-cyan-600 transition group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

export default function Works() {
  const faridabadServices = faridabadServicePages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: page.serviceType,
  }));

  const faridabadAreaLinks = [
    {
      name: "Faridabad Hub",
      path: "/faridabad",
      description: "All Faridabad local website design and SEO areas",
    },
    ...faridabadAreas.map((area) => ({
      name: area.displayName,
      path: area.routePath,
      description: "Website design and SEO area page",
    })),
  ];

  const priorityDelhiLinks = priorityDelhiPages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: "Priority Delhi commercial landing page",
  }));

  const otherDelhiLinks = otherDelhiPages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: "Delhi website design landing page",
  }));

  const priorityGurgaonLinks = priorityGurgaonPages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: "Priority Gurgaon website design landing page",
  }));

  const otherGurgaonLinks = otherGurgaonPages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: "Gurgaon website design area page",
  }));

  const priorityNoidaLinks = priorityNoidaPages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: "Priority Noida website design landing page",
  }));

  const otherNoidaLinks = otherNoidaPages.map((page) => ({
    name: page.h1,
    path: page.routePath,
    description: "Noida website design sector page",
  }));

  return (
    <>
      <Helmet>
        <title>Works | Website Design Location Pages in Faridabad & Delhi</title>
        <meta
          name="description"
          content="Explore Dreams4u website design location pages for Faridabad, Delhi, Gurgaon, and Noida service-area search visibility."
        />
        <link rel="canonical" href="https://dreams4u.in/works" />
      </Helmet>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/30">
              <MapPin className="h-4 w-4" />
              Local SEO Pages
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Works
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Explore Dreams4u local website design pages for Faridabad,
              Faridabad sectors, Delhi commercial areas, Gurgaon business
              locations, and Noida sectors. These pages are organized for
              customers and search engines, with unique local content instead of
              repeated area-name copy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Faridabad Service Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Website design, SEO, ecommerce, and maintenance
            </h2>
            <div className="mt-7">
              <LinkGrid items={faridabadServices} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Faridabad Local Areas
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Area and sector landing pages
            </h2>
            <div className="mt-7">
              <LinkGrid items={faridabadAreaLinks} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Priority Delhi Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              High-value commercial areas
            </h2>
            <div className="mt-7">
              <LinkGrid items={priorityDelhiLinks} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Delhi Landing Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              South, West, East, North, Central, and South-West Delhi
            </h2>
            <div className="mt-7">
              <LinkGrid items={otherDelhiLinks} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Priority Gurgaon Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Gurgaon, Cyber City, Golf Course Road, Sohna Road, DLF, and Udyog Vihar
            </h2>
            <div className="mt-7">
              <LinkGrid items={priorityGurgaonLinks} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Gurgaon Area Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Gurugram sectors and neighbourhoods
            </h2>
            <div className="mt-7">
              <LinkGrid items={otherGurgaonLinks} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Priority Noida Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Sector 18, 62, 63, 125, 137, and 150
            </h2>
            <div className="mt-7">
              <LinkGrid items={priorityNoidaLinks} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Noida Sector Pages
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Noida business, residential, and expressway sectors
            </h2>
            <div className="mt-7">
              <LinkGrid items={otherNoidaLinks} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
