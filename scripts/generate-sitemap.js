import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = "src/content/blogs";
const baseUrl = "https://dreams4u.in";

// Define all static routes from your React router
const staticRoutes = [
  "/",
  "/about",
  "/portfolio",
  "/contact",
  "/services",
  "/services/web-development",
  "/services/website-design",
  "/services/digital-marketing",
  "/services/react-development",
  "/services/app-development",
  "/services/search-engine-optimization",
  "/services/ecommerce",
  "/services/mobile-responsive",
  "/services/business-website",
  "/services/ui-ux",
  "/services/website-security",
  "/services/annual-maintenance",
  "/services/custom-website-design",
  "/privacy",
  "/terms",
  "/cookies",
  "/blog",
  "/debug-blogs",
];

// Function to read all blog files
function getBlogUrls() {
  try {
    if (!fs.existsSync(blogsDir)) {
      console.log(`⚠️ Blogs directory not found: ${blogsDir}`);
      return [];
    }

    const files = fs.readdirSync(blogsDir);
    const blogFiles = files.filter((file) => file.endsWith(".md"));

    return blogFiles.map((file) => ({
      url: `${baseUrl}/blog/${file.replace(".md", "")}`,
      lastmod: getLastModifiedDate(path.join(blogsDir, file)),
    }));
  } catch (error) {
    console.error("❌ Error reading blog directory:", error);
    return [];
  }
}

// Function to get last modified date
function getLastModifiedDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split("T")[0];
  } catch (error) {
    return new Date().toISOString().split("T")[0];
  }
}

// Function to generate sitemap XML
function generateSitemap() {
  console.log("🔍 Generating sitemap...");

  // Get all blog URLs with last modified dates
  const blogUrls = getBlogUrls();

  console.log(`📊 Found ${staticRoutes.length} static routes`);
  console.log(`📊 Found ${blogUrls.length} blog posts`);

  // Start building XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

  // Add static routes
  staticRoutes.forEach((route) => {
    xml += `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : route.startsWith("/blog/") ? "0.8" : "0.7"}</priority>
  </url>\n`;
  });

  // Add blog URLs
  blogUrls.forEach((blog) => {
    xml += `  <url>
    <loc>${blog.url}</loc>
    <lastmod>${blog.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
  });

  xml += `</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap file
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Sitemap generated at: ${sitemapPath}`);
  console.log(`📈 Total URLs: ${staticRoutes.length + blogUrls.length}`);

  // Also generate robots.txt
  generateRobotsTxt();
}

// Function to generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# robots.txt for ${baseUrl}
User-agent: *
Allow: /
Disallow: /debug-blogs
Disallow: /admin/
Disallow: /private/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-blog.xml

# Crawl delay
Crawl-delay: 2

# Host
Host: ${baseUrl}`;

  const robotsPath = path.join(__dirname, "public", "robots.txt");
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(`✅ robots.txt generated at: ${robotsPath}`);
}

// Execute
generateSitemap();
