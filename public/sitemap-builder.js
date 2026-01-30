const fs = require("fs");
const { blogPosts } = require("../src/blogData");

const baseUrl = "https://www.yourwebsite.com";

const staticPages = ["/", "/about", "/contact"];
const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

const urls = [...staticPages, ...blogPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `,
    )
    .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
console.log("Sitemap generated!");
