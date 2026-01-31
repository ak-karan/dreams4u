import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getBlogs } from "../utils/getBlogs";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  return (
    <>
      <Helmet>
        <title>Blogs | Web Development & SEO Tips</title>
        <meta
          name="description"
          content="Learn web development, SEO optimization, React tips, and best practices from industry experts."
        />
        <meta
          name="keywords"
          content="React, SEO, JavaScript, Web Development"
        />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert insights on React development, SEO optimization, web
              performance, and industry best practices.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-10 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-3 h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blog/${blog.slug}`}>
                  {/* Blog Image */}
                  <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
                    <div className="text-4xl">📄</div>
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
                      {blog.category || "React"}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{blog.readTime || "5 min read"}</span>
                      </div>
                      <span>{blog.date || "Recent"}</span>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-6">
                      <span className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                        Read more
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                1
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>

          {/* SEO Content Section */}
          <div className="mt-16 bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-4">About Our Tech Blog</h2>
            <div className="prose max-w-none">
              <p>
                Welcome to our comprehensive blog covering React development,
                SEO optimization, JavaScript best practices, and web
                performance. Our articles are written by industry experts with
                years of experience in creating high-performance web
                applications.
              </p>
              <h3>Topics We Cover:</h3>
              <ul>
                <li>React SEO optimization techniques</li>
                <li>Server-side rendering vs static generation</li>
                <li>Performance optimization tips</li>
                <li>Modern JavaScript patterns</li>
                <li>Web accessibility standards</li>
              </ul>
              <p>
                Whether you're a beginner or an experienced developer, you'll
                find valuable insights to improve your skills and build better
                web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
