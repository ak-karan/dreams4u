import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = "src/content/blogs";
const baseUrl = "https://dreams4u.in";
const EOL = "\n"; // Consistent line endings

// All static pages from your React router
const STATIC_PAGES = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "daily",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/about",
    priority: "0.9",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/portfolio",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/contact",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services",
    priority: "0.9",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/web-development",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/website-design",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/digital-marketing",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/react-development",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/app-development",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/search-engine-optimization",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/ecommerce",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/mobile-responsive",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/business-website",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/ui-ux",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/website-security",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/annual-maintenance",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/services/custom-website-design",
    priority: "0.8",
    changefreq: "weekly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/privacy",
    priority: "0.6",
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/terms",
    priority: "0.6",
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/cookies",
    priority: "0.6",
    changefreq: "yearly",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/blog",
    priority: "0.8",
    changefreq: "daily",
    lastmod: new Date().toISOString().split("T")[0],
  },
  {
    path: "/debug-blogs",
    priority: "0.3",
    changefreq: "monthly",
    lastmod: new Date().toISOString().split("T")[0],
  },
];

// Function to get all blog posts
function getAllBlogPosts() {
  console.log(`📁 Checking blogs directory: ${blogsDir}`);

  if (!fs.existsSync(blogsDir)) {
    console.log(`❌ Blogs directory not found: ${blogsDir}`);
    console.log(`💡 Creating blogs directory...`);
    fs.mkdirSync(blogsDir, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(blogsDir);
  const mdFiles = files.filter((file) => file.endsWith(".md"));

  console.log(`✅ Found ${mdFiles.length} blog files`);

  const blogPosts = [];

  mdFiles.forEach((file, index) => {
    try {
      const filePath = path.join(blogsDir, file);
      const slug = file.replace(".md", "");
      const stats = fs.statSync(filePath);

      // Read file to extract date from frontmatter
      const content = fs.readFileSync(filePath, "utf8");
      let lastmod = stats.mtime.toISOString().split("T")[0];

      // Try to extract date from frontmatter
      const dateMatch = content.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
      if (dateMatch && dateMatch[1]) {
        lastmod = dateMatch[1];
      }

      blogPosts.push({
        path: `/blog/${slug}`,
        priority: "0.7",
        changefreq: "monthly",
        lastmod: lastmod,
        slug: slug,
      });

      if (index < 5) {
        console.log(`   📄 ${file} -> /blog/${slug}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });

  return blogPosts;
}

// Main function to generate sitemap
function generateSitemap() {
  console.log("🚀 Generating sitemap.xml...");
  console.log(`🌐 Base URL: ${baseUrl}`);

  // Get all URLs
  const staticUrls = STATIC_PAGES;
  const blogUrls = getAllBlogPosts();

  const allUrls = [...staticUrls, ...blogUrls];

  console.log(`\n📊 URL Summary:`);
  console.log(`   Static Pages: ${staticUrls.length}`);
  console.log(`   Blog Posts: ${blogUrls.length}`);
  console.log(`   Total URLs: ${allUrls.length}`);

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>${EOL}`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${EOL}`;
  xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"${EOL}`;
  xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9${EOL}`;
  xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${EOL}${EOL}`;

  // Add all URLs to sitemap
  allUrls.forEach((url, index) => {
    const fullUrl = `${baseUrl}${url.path}`;

    xml += `  <url>${EOL}`;
    xml += `    <loc>${fullUrl}</loc>${EOL}`;
    xml += `    <lastmod>${url.lastmod}</lastmod>${EOL}`;
    xml += `    <changefreq>${url.changefreq}</changefreq>${EOL}`;
    xml += `    <priority>${url.priority}</priority>${EOL}`;
    xml += `  </url>${EOL}`;

    // Add extra line between groups for readability
    if (index === staticUrls.length - 1) {
      xml += `${EOL}`;
    }
  });

  xml += `</urlset>`;

  // Create public directory if it doesn't exist
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log(`📁 Created directory: ${publicDir}`);
  }

  // Write sitemap file
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, xml, { encoding: "utf8" });

  console.log(`\n✅ SITEMAP GENERATED SUCCESSFULLY!`);
  console.log(`📁 Location: ${sitemapPath}`);
  console.log(`🔗 Access at: ${baseUrl}/sitemap.xml`);

  // Generate robots.txt
  generateRobotsTxt();

  // Show preview
  showSitemapPreview(allUrls);
}

// Function to generate robots.txt
function generateRobotsTxt() {
  const robotsTxt =
    `# robots.txt for ${baseUrl}${EOL}` +
    `User-agent: *${EOL}` +
    `Allow: /${EOL}${EOL}` +
    `# Disallow certain paths${EOL}` +
    `Disallow: /debug-blogs${EOL}` +
    `Disallow: /admin/${EOL}` +
    `Disallow: /private/${EOL}${EOL}` +
    `# Sitemap reference${EOL}` +
    `Sitemap: ${baseUrl}/sitemap.xml${EOL}`;

  const robotsPath = path.join(process.cwd(), "public", "robots.txt");
  fs.writeFileSync(robotsPath, robotsTxt, { encoding: "utf8" });
  console.log(`✅ robots.txt generated at: ${robotsPath}`);
}

// Function to show sitemap preview
function showSitemapPreview(allUrls) {
  console.log(`\n📋 SITEMAP PREVIEW (First 10 URLs):`);
  console.log(`═`.repeat(80));

  allUrls.slice(0, 10).forEach((url, index) => {
    const indicator = url.path.startsWith("/blog/") ? "📄" : "🏠";
    console.log(`${index + 1}. ${indicator} ${baseUrl}${url.path}`);
    console.log(
      `   📅 Lastmod: ${url.lastmod} | 🔄 Changefreq: ${url.changefreq} | ⭐ Priority: ${url.priority}`,
    );
    console.log(``);
  });

  if (allUrls.length > 10) {
    console.log(`... and ${allUrls.length - 10} more URLs`);
  }

  console.log(`═`.repeat(80));
}

// Execute
try {
  generateSitemap();
} catch (error) {
  console.error("❌ ERROR generating sitemap:", error.message);
  console.error(error.stack);

  // Create a basic sitemap as fallback
  console.log("\n🔄 Creating basic sitemap as fallback...");

  let basicXml = `<?xml version="1.0" encoding="UTF-8"?>${EOL}`;
  basicXml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${EOL}`;

  STATIC_PAGES.forEach((page) => {
    basicXml += `  <url>${EOL}`;
    basicXml += `    <loc>${baseUrl}${page.path}</loc>${EOL}`;
    basicXml += `  </url>${EOL}`;
  });

  basicXml += `</urlset>`;

  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, basicXml, { encoding: "utf8" });

  console.log(`✅ Basic sitemap created with ${STATIC_PAGES.length} URLs`);
}
