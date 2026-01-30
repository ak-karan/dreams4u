import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { Helmet } from "react-helmet-async";

const blogs = import.meta.glob("../content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function BlogDetail() {
  const { slug } = useParams();

  const file = blogs[`../content/blogs/${slug}.md`];
  if (!file) return <h1 className="text-center mt-20">Blog Not Found</h1>;

  const { data, content } = matter(file);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <Helmet>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-500 mb-8">{data.date}</p>

      <div className="prose prose-lg">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
