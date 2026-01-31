import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const blogs = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function BlogDetail() {
  const { slug } = useParams();

  const file = blogs[`../content/blogs/${slug}.md`];
  if (!file) return <BlogNotFound />;

  const { data, content } = matter(file);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    image: data.image || "https://yourdomain.com/default-blog.jpg",
    datePublished: data.date || new Date().toISOString(),
    dateModified: data.updated || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: data.author || "Your Name",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Company",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yourdomain.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://yourdomain.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `https://yourdomain.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{data.title} | Your Company Blog</title>
        <meta name="description" content={data.description} />
        <meta name="keywords" content={data.tags || "React, SEO, JavaScript"} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://yourdomain.com/blog/${slug}`}
        />
        <meta property="og:image" content={data.image || "/default-og.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.description} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">›</span>
              <Link to="/blog" className="hover:text-blue-600">
                Blog
              </Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium truncate">
                {data.title}
              </span>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {data.category || "React"}
              </span>
              <span className="text-gray-500">•</span>
              <time className="text-gray-500">{data.date || "Recent"}</time>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">
                {data.readTime || "5 min read"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {data.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">{data.description}</p>

            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-medium">
                  {data.author || "Author Name"}
                </div>
                <div className="text-sm text-gray-500">Senior Developer</div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {data.image && (
            <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* Tags */}
          {data.tags && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.split(",").map((tag) => (
                  <span
                    key={tag.trim()}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                  >
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="mb-12 border-t pt-8">
            <h3 className="text-lg font-semibold mb-4">Share this article:</h3>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Twitter
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900">
                LinkedIn
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
                Copy Link
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add related posts logic here */}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Get the latest React and SEO tips directly in your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

function BlogNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
