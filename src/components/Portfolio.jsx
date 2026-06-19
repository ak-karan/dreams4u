import { ArrowRight, ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { portfolioList } from "./portfolioList";

export default function Portfolio({ showMetadata = true }) {
  const project = portfolioList[0];
  const Heading = showMetadata ? "h1" : "h2";
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Apparel Clinic Ecommerce Website",
    url: "https://apparelclinic.com/",
    image: "https://dreams4u.in/images/apparelclinic.webp",
    creator: {
      "@type": "Organization",
      name: "Dreams4u",
      url: "https://dreams4u.in/",
    },
  };

  return (
    <>
      {showMetadata && (
        <Helmet>
          <title>Apparel Clinic Ecommerce Project | Dreams4u Portfolio</title>
          <meta
            name="description"
            content="View Apparel Clinic, the verified ecommerce website project featured in the Dreams4u website design and development portfolio."
          />
          <link rel="canonical" href="https://dreams4u.in/portfolio" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}

      <section
        className="bg-white py-16 lg:py-20"
        aria-labelledby="portfolio-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cyan-700">
              Verified portfolio project
            </p>
            <Heading
              id="portfolio-heading"
              className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl"
            >
              Apparel Clinic Ecommerce Website
            </Heading>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A live apparel ecommerce project focused on clear product
              discovery, responsive shopping journeys, brand presentation, and
              a maintainable online catalogue.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <a
              href={project.urls}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden border border-slate-200 bg-slate-100"
              aria-label="Open Apparel Clinic website"
            >
              <img
                src={project.imageurl}
                alt="Apparel Clinic ecommerce website project"
                width="1200"
                height="760"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Project focus
              </h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="border-b border-slate-200 pb-3">Responsive ecommerce experience</li>
                <li className="border-b border-slate-200 pb-3">Product and category discovery</li>
                <li className="border-b border-slate-200 pb-3">Clear customer buying actions</li>
                <li className="border-b border-slate-200 pb-3">Performance and SEO review framework</li>
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={project.urls}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Visit live project <ExternalLink className="h-4 w-4" />
                </a>
                <Link
                  to="/blog/apparel-clinic-ecommerce-website-case-study"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 px-5 py-3 font-semibold text-slate-900 hover:border-cyan-500"
                >
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
