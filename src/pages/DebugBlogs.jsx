// src/pages/DebugBlogs.jsx
import { useParams } from "react-router-dom";

const blogs = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function DebugBlogs() {
  const { slug } = useParams();
  const allBlogs = Object.keys(blogs);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Debug: Available Blogs
      </h1>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Current URL Parameters:</h2>
        <p className="text-gray-700">
          <strong>Slug from URL:</strong>{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">
            {slug || "none"}
          </code>
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Looking for file:</strong>{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">
            ../content/blogs/{slug || "slug"}.md
          </code>
        </p>
        <p className="text-gray-700 mt-2">
          <strong>File exists:</strong>
          <span
            className={`ml-2 px-3 py-1 rounded ${blogs[`../content/blogs/${slug}.md`] ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {blogs[`../content/blogs/${slug}.md`] ? "✅ Yes" : "❌ No"}
          </span>
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          All Blog Files Found:
        </h2>
        <div className="bg-white border rounded-lg p-4">
          <p className="text-gray-600 mb-2">
            Total blogs found:{" "}
            <span className="font-bold">{allBlogs.length}</span>
          </p>
          <ul className="space-y-2">
            {allBlogs.map((path, idx) => {
              const blogSlug = path.split("/").pop().replace(".md", "");
              return (
                <li
                  key={idx}
                  className="flex items-center p-3 hover:bg-gray-50 rounded"
                >
                  <div className="flex-1">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {path}
                    </code>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`/blog/${blogSlug}`}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                    >
                      Test Link
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800">
          Troubleshooting:
        </h3>
        <ul className="list-disc pl-5 text-yellow-700 space-y-1">
          <li>
            Check if <code>seo-small-business-2026.md</code> is in the list
            above
          </li>
          <li>Click "Test Link" to try accessing the blog</li>
          <li>
            Verify file exists in <code>content/blogs/</code> folder
          </li>
          <li>Check browser console (F12) for any errors</li>
        </ul>
      </div>
    </div>
  );
}
