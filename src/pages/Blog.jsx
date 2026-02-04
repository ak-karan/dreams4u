import { Link } from "react-router-dom";
import matter from "gray-matter";

const blogs = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function Blog() {
  const blogList = Object.entries(blogs).map(([path, file]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { data } = matter(file);
    return { slug, ...data };
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Dreams4U Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogList.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />
            )}

            <div className="p-6">
              <p className="text-sm text-blue-600 font-semibold mb-2">
                {blog.category}
              </p>

              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

              <p className="text-xs text-gray-400">
                {new Date(blog.date).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
