import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import BlogNotFound from "./BlogNotFound";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  ChevronUp,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
  BookOpen,
} from "lucide-react";
/* =======================
   LOAD ALL BLOG FILES
======================= */
const blogs = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

/* =======================
   BLOG DETAIL PAGE
======================= */
export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const params = new URLSearchParams(location.search);
  const activeTag = params.get("tag");

  /* ---------- Scroll to top button ---------- */
  // useEffect(() => {
  //   const onScroll = () => setShowTop(window.scrollY > 500);
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  /* ---------- Find blog by slug ---------- */
  const blogEntry = Object.entries(blogs).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  );

  if (!blogEntry) return <BlogNotFound />;

  const [, file] = blogEntry;
  const { data, content } = matter(file);

  /* ---------- Helpers ---------- */
  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Recent";

  const tags = Array.isArray(data.tags)
    ? data.tags
    : data.tags?.split(",").map((t) => t.trim()) || [];

  const shareUrl = `https://dreams4u.in/blog/${slug}`;
  const faqs = Array.isArray(data.faqs) ? data.faqs : [];
  const relatedPosts = Object.entries(blogs)
    .map(([path, raw]) => {
      const { data: postData } = matter(raw);
      return {
        slug: path.split("/").pop().replace(".md", ""),
        ...postData,
      };
    })
    .filter((post) => post.slug !== slug && post.category === data.category)
    .slice(0, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    image: data.image ? `https://dreams4u.in${data.image}` : undefined,
    datePublished: data.date,
    dateModified: data.updated || data.date,
    author: {
      "@type": "Organization",
      name: data.author || "Dreams4u Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Dreams4u",
      logo: {
        "@type": "ImageObject",
        url: "https://dreams4u.in/images/top-logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://dreams4u.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://dreams4u.in/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: shareUrl,
      },
    ],
  };
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const share = (platform) => {
    const text = encodeURIComponent(data.title);
    const url = encodeURIComponent(shareUrl);

    const links = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(links[platform], "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* =======================
     RENDER
  ======================= */
  return (
    <>
      <Helmet>
        <title>{data.title} | Dreams4U Blog</title>
        <meta name="description" content={data.description} />
        {data.tags && <meta name="keywords" content={tags.join(", ")} />}
        <link rel="canonical" href={shareUrl} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        {data.image && <meta property="og:image" content={`https://dreams4u.in${data.image}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        {data.image && <meta name="twitter:image" content={`https://dreams4u.in${data.image}`} />}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700"
        >
          <ChevronUp />
        </button>
      )}

      {/* Top bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </button>

          <div className="flex gap-2">
            <button onClick={() => share("twitter")} className="icon-btn">
              <Twitter size={18} />
            </button>
            <button onClick={() => share("linkedin")} className="icon-btn">
              <Linkedin size={18} />
            </button>
            <button onClick={copyLink} className="icon-btn relative">
              {copied ? <Check size={18} /> : <LinkIcon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Page */}
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-10">
          {/* HERO */}
          <section className="mb-12">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              {data.category || "SEO"}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {data.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">{data.description}</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {formatDate(data.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {data.readTime || "5 min"} read
              </span>
              <span className="flex items-center gap-2">
                <User size={16} /> {data.author || "Dreams4U Team"}
              </span>
            </div>
          </section>

          {/* IMAGE */}
          {data.image && (
            <div className="mb-14 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-96 object-cover"
                width="1024"
                height="576"
                loading="eager"
                decoding="async"
                fetchpriority="high"
              />
            </div>
          )}

          {/* CONTENT */}
          <div className="bg-white rounded-3xl shadow-sm border p-6 md:p-10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-3xl font-bold mt-10 mb-4" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-2xl font-semibold mt-8 mb-3" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="text-gray-700 leading-relaxed my-5"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc space-y-2 pl-6 my-5" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal space-y-2 pl-6 my-5" {...props} />
                ),
                a: ({ node, href = "", ...props }) =>
                  href.startsWith("/") ? (
                    <Link
                      to={href}
                      className="font-medium text-blue-700 underline underline-offset-4"
                      {...props}
                    />
                  ) : (
                    <a
                      href={href}
                      className="font-medium text-blue-700 underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                      {...props}
                    />
                  ),
                table: ({ node, ...props }) => (
                  <div className="my-8 overflow-x-auto">
                    <table
                      className="w-full min-w-[640px] border-collapse text-left text-sm"
                      {...props}
                    />
                  </div>
                ),
                th: ({ node, ...props }) => (
                  <th
                    className="border border-slate-300 bg-slate-100 px-4 py-3 font-semibold text-slate-900"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="border border-slate-300 px-4 py-3 align-top text-slate-700"
                    {...props}
                  />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded-r-xl italic my-8"
                    {...props}
                  />
                ),
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    loading="lazy"
                    width="1024"
                    height="576"
                    decoding="async"
                    className="my-8 w-full rounded-2xl object-cover"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          {faqs.length > 0 && (
            <section className="mt-12" aria-labelledby="article-faq-heading">
              <h2
                id="article-faq-heading"
                className="text-3xl font-bold text-slate-900"
              >
                Frequently Asked Questions
              </h2>
              <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900">
                      {faq.question}
                    </summary>
                    <p className="mt-3 leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedPosts.length > 0 && (
            <section className="mt-12" aria-labelledby="related-posts-heading">
              <h2
                id="related-posts-heading"
                className="text-3xl font-bold text-slate-900"
              >
                Related Guides
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="border border-slate-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-md"
                  >
                    <p className="font-semibold leading-6 text-slate-900">
                      {post.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {post.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* TAGS */}
          {tags.length > 0 && (
            <div className="mt-12">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Tag size={18} /> Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${activeTag === tag ? "" : tag}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-blue-100 rounded-full text-sm"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Want Your Business to Rank on Google?
            </h3>
            <p className="text-blue-100 mb-6">
              Get a free SEO audit and grow your traffic with Dreams4U.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl"
            >
              Get Free SEO Audit
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

/* =======================
   BLOG NOT FOUND
======================= */
<BlogNotFound />;
