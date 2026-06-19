import { Helmet } from "react-helmet-async";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { getBlogs } from "../utils/getBlogs";

export default function CaseStudies() {
  const caseStudies = getBlogs()
    .filter((post) => post.category === "Case Study")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Dreams4u Website and SEO Case Studies",
    url: "https://dreams4u.in/case-studies",
    description:
      "Evidence-based website design, SEO, structured data, ecommerce, content, and performance implementation case studies from Dreams4u.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: caseStudies.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://dreams4u.in/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <Helmet>
        <title>Website Design & SEO Case Studies | Dreams4u</title>
        <meta
          name="description"
          content="Explore factual Dreams4u case studies covering ecommerce design, Faridabad service pages, AI search structure, Core Web Vitals, and internal linking."
        />
        <link rel="canonical" href="https://dreams4u.in/case-studies" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
              <BarChart3 className="h-5 w-5" />
              Evidence-led project notes
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Website Design and SEO Case Studies
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Detailed implementation notes with scope, decisions, validation,
              and honest outcome boundaries. Results are included only when the
              available data supports them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {caseStudies.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt=""
                  width="720"
                  height="420"
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-cover"
                />
              )}
              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-700">
                  {post.readTime || "8 min"} read
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {post.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-700"
                >
                  Read case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
