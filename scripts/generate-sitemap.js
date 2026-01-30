import fs from "fs";
import matter from "gray-matter";

const SITE_URL = "https://dreams4u.in";
const BLOG_DIR = "./src/blog";

const staticPages = ["/", "/about", "/contact"];

const blogFiles = fs.readdirSync(BLOG_DIR);

const blogPages = blogFiles.map((file) => {
  const content = fs.readFileSync(`${BLOG_DIR}/${file}`, "utf-8");
  const { data } = matter(content);
  return `/blog/${data.slug}`;
});

const urls = [...staticPages, ...blogPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${SITE_URL}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join("")}
</urlset>
`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
console.log("✅ sitemap.xml generated");
