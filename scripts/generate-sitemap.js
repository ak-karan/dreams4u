import fs from "fs";
import path from "path";

const blogsDir = "src/content/blogs";
const baseUrl = "https://dreams4u.in";

const files = fs.readdirSync(blogsDir);

const urls = files.map(
  (file) => `
  <url>
    <loc>${baseUrl}/blog/${file.replace(".md", "")}</loc>
  </url>
`,
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${baseUrl}</loc></url>
  <url><loc>${baseUrl}/blog</loc></url>
  ${urls.join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ Sitemap generated");
