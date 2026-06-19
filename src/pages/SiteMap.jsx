import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { services } from "../components/navbar";
import { faridabadAreas } from "../faridabad/faridabadAreas";
import { localServicePages } from "../localSeo/localServicePages";
import { getBlogs } from "../utils/getBlogs";

const corePages = [
  ["Home", "/"],
  ["About Dreams4u", "/about-dreams4u"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Faridabad Service Areas", "/faridabad"],
  ["All Location Pages", "/works"],
  ["Contact", "/contact"],
];

const extraServicePages = [
  ["Website Security", "/services/website-security"],
];

function LinkGroup({ title, links }) {
  return (
    <section aria-labelledby={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}>
      <h2
        id={`${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-heading`}
        className="text-2xl font-bold text-slate-900"
      >
        {title}
      </h2>
      <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(([name, path]) => (
          <li key={path}>
            <Link
              to={path}
              className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-cyan-700"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SiteMap() {
  const allPosts = getBlogs().sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const guideLinks = allPosts
    .filter((post) => post.category !== "Case Study")
    .map((post) => [post.title, `/blog/${post.slug}`]);
  const caseStudyLinks = allPosts
    .filter((post) => post.category === "Case Study")
    .map((post) => [post.title, `/blog/${post.slug}`]);
  const faridabadServiceLinks = localServicePages
    .filter((page) => page.city !== "Delhi")
    .map((page) => [page.h1, page.routePath]);
  const delhiServiceLinks = localServicePages
    .filter((page) => page.city === "Delhi")
    .map((page) => [page.h1, page.routePath]);

  return (
    <>
      <Helmet>
        <title>HTML Sitemap | All Dreams4u Website Pages</title>
        <meta
          name="description"
          content="Browse every public Dreams4u page, including services, Faridabad and Delhi locations, website guides, case studies, portfolio, and company information."
        />
        <link rel="canonical" href="https://dreams4u.in/sitemap" />
      </Helmet>

      <main className="bg-white py-16">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <header className="max-w-3xl">
            <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
              Dreams4u Website Sitemap
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A complete directory of public pages for visitors, search engines,
              and AI tools that follow standard crawlable links.
            </p>
          </header>

          <LinkGroup title="Company and Resources" links={corePages} />
          <LinkGroup
            title="General Services"
            links={[
              ...services.map((service) => [service.name, service.path]),
              ...extraServicePages,
            ]}
          />
          <LinkGroup title="Faridabad and NCR Services" links={faridabadServiceLinks} />
          <LinkGroup
            title="Faridabad Areas"
            links={faridabadAreas.map((area) => [area.displayName, area.routePath])}
          />
          <LinkGroup title="Delhi Service Areas" links={delhiServiceLinks} />
          <LinkGroup title="Website and SEO Guides" links={guideLinks} />
          <LinkGroup title="Case Studies" links={caseStudyLinks} />
          <LinkGroup
            title="Policies"
            links={[
              ["Privacy Policy", "/privacy"],
              ["Terms of Service", "/terms"],
              ["Cookie Policy", "/cookies"],
              ["AI Resource File", "/llms.txt"],
              ["XML Sitemap", "/sitemap.xml"],
            ]}
          />
        </div>
      </main>
    </>
  );
}
