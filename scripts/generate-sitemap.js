import fs from "fs";
import path from "path";

// Load all markdown blogs as raw text (Vite v7 compatible)
const blogFiles = import.meta.glob("../src/content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const baseUrl = "https://dreams4u.in";

const urls = ["/", "/about", "/contact", "/blog"];

Object.keys(blogFiles).forEach((filePath) => {
  const slug = filePath.split("/").pop().replace(".md", "");
  urls.push(`/blog/${slug}`);
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
  </url>
`,
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.resolve("public/sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated");
