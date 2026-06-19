import { Link } from "react-router-dom";
import matter from "gray-matter";
import { Helmet } from "react-helmet-async";

const blogs = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function Blog() {
  const blogList = Object.entries(blogs)
    .map(([path, file]) => {
      const slug = path.split("/").pop().replace(".md", "");
      const { data } = matter(file);
      return { slug, ...data };
    })
    .filter((blog) => blog.category !== "Case Study")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Helmet>
        <title>Web Design & SEO Blog | Digital Marketing Tips for Faridabad Businesses</title>
        <meta
          name="description"
          content="Read expert insights on website design, SEO strategies, digital marketing trends, and business growth tips from Dreams4u blog."
        />
        <link rel="canonical" href="https://dreams4u.in/blog" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">Website Design, SEO and Growth Guides</h1>
      <p className="max-w-3xl text-lg leading-8 text-gray-600 mb-4">
        Practical answers on website cost, development timelines, WordPress,
        custom builds, AI search, lead generation, speed, and local SEO for
        Faridabad businesses.
      </p>
      <p className="text-sm text-gray-500 mb-10">
        {blogList.length} published guides. Read our <Link to="/case-studies" className="text-blue-700 underline">case studies</Link> for implementation details.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {blogList.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="group overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
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
