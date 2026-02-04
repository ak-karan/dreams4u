import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsDir = "src/content/blogs";
const baseUrl = "https://dreams4u.in";

// Use LF line endings consistently
const EOL = "\n";

// Function to read all blog files and extract metadata
function getAllBlogs() {
  try {
    if (!fs.existsSync(blogsDir)) {
      console.log(`⚠️ Blogs directory not found: ${blogsDir}`);
      return [];
    }

    const files = fs.readdirSync(blogsDir);
    const blogFiles = files.filter((file) => file.endsWith(".md"));

    const blogs = [];

    blogFiles.forEach((file) => {
      try {
        const filePath = path.join(blogsDir, file);
        const content = fs.readFileSync(filePath, "utf8");
        const slug = file.replace(".md", "");

        // Extract date from frontmatter
        let dateFromFrontmatter = null;
        const dateMatch = content.match(/date:\s*(\d{4}-\d{2}-\d{2})/);
        if (dateMatch) {
          dateFromFrontmatter = dateMatch[1];
        }

        // Get file stats for last modified
        const stats = fs.statSync(filePath);
        const lastmod =
          dateFromFrontmatter || stats.mtime.toISOString().split("T")[0];

        blogs.push({
          slug: slug,
          url: `${baseUrl}/blog/${slug}`,
          lastmod: lastmod,
          filePath: filePath,
          fileStats: stats,
        });
      } catch (error) {
        console.error(`❌ Error processing blog file ${file}:`, error.message);
      }
    });

    console.log(`✅ Found ${blogs.length} blog files`);
    return blogs;
  } catch (error) {
    console.error("❌ Error reading blog directory:", error);
    return [];
  }
}

// Function to get priority based on route
function getPriority(route) {
  if (route === "/") return "1.0";
  if (route === "/about") return "0.9";
  if (route === "/services") return "0.9";
  if (route === "/contact") return "0.8";
  if (route === "/blog") return "0.8";
  if (route.startsWith("/blog/")) return "0.7";
  if (route.startsWith("/services/")) return "0.8";
  return "0.6";
}

// Function to get changefreq based on route
function getChangeFreq(route) {
  if (route === "/") return "daily";
  if (route === "/blog") return "weekly";
  if (route.startsWith("/blog/")) return "monthly";
  if (route.startsWith("/services/")) return "weekly";
  return "monthly";
}

// Main function to generate sitemap
function generateSitemap() {
  console.log("🔍 Generating sitemap...");
  console.log(`📁 Checking blogs directory: ${blogsDir}`);

  // Get all blogs
  const blogs = getAllBlogs();

  // Define all static routes
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

  console.log(`📊 Found ${staticRoutes.length} static routes`);
  console.log(`📊 Found ${blogs.length} blog posts`);

  // Prepare all URLs
  const allUrls = [];

  // Add static routes
  staticRoutes.forEach((route) => {
    allUrls.push({
      loc: `${baseUrl}${route}`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: getChangeFreq(route),
      priority: getPriority(route),
    });
  });

  // Add blog post URLs
  blogs.forEach((blog) => {
    allUrls.push({
      loc: blog.url,
      lastmod: blog.lastmod,
      changefreq: "monthly",
      priority: "0.7",
    });
  });

  // Generate XML with consistent LF line endings
  let xml = `<?xml version="1.0" encoding="UTF-8"?>${EOL}`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"${EOL}`;
  xml += `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"${EOL}`;
  xml += `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9${EOL}`;
  xml += `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${EOL}`;

  allUrls.forEach((url) => {
    xml += `  <url>${EOL}`;
    xml += `    <loc>${url.loc}</loc>${EOL}`;
    xml += `    <lastmod>${url.lastmod}</lastmod>${EOL}`;
    xml += `    <changefreq>${url.changefreq}</changefreq>${EOL}`;
    xml += `    <priority>${url.priority}</priority>${EOL}`;
    xml += `  </url>${EOL}`;
  });

  xml += `</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap file with LF line endings
  const sitemapPath = path.join(publicDir, "sitemap.xml");
  // Use {encoding: 'utf8'} to ensure proper encoding
  fs.writeFileSync(sitemapPath, xml, { encoding: "utf8" });

  console.log(`✅ Sitemap generated at: ${sitemapPath}`);
  console.log(`📈 Total URLs: ${allUrls.length}`);

  // Display summary
  console.log(`${EOL}📊 Sitemap Summary:`);
  console.log(`   Static Pages: ${staticRoutes.length}`);
  console.log(`   Blog Posts: ${blogs.length}`);
  console.log(`   Total URLs: ${allUrls.length}`);

  // Also generate robots.txt with LF line endings
  generateRobotsTxt();
}

// Function to generate robots.txt with consistent line endings
function generateRobotsTxt() {
  const robotsTxt =
    `# robots.txt for ${baseUrl}${EOL}` +
    `User-agent: *${EOL}` +
    `Allow: /${EOL}${EOL}` +
    `# Disallow certain paths${EOL}` +
    `Disallow: /debug-blogs${EOL}` +
    `Disallow: /admin/${EOL}` +
    `Disallow: /private/${EOL}` +
    `Disallow: /cgi-bin/${EOL}` +
    `Disallow: /wp-admin/${EOL}` +
    `Disallow: /wp-includes/${EOL}` +
    `Disallow: /search/${EOL}${EOL}` +
    `# Allow specific bots${EOL}` +
    `User-agent: Googlebot${EOL}` +
    `Allow: /${EOL}` +
    `Crawl-delay: 1${EOL}${EOL}` +
    `User-agent: Bingbot${EOL}` +
    `Allow: /${EOL}` +
    `Crawl-delay: 2${EOL}${EOL}` +
    `User-agent: Applebot${EOL}` +
    `Allow: /${EOL}` +
    `Crawl-delay: 1${EOL}${EOL}` +
    `# Sitemap reference${EOL}` +
    `Sitemap: ${baseUrl}/sitemap.xml${EOL}${EOL}` +
    `# Additional sitemaps${EOL}` +
    `# Sitemap: ${baseUrl}/sitemap-blog.xml${EOL}` +
    `# Sitemap: ${baseUrl}/sitemap-pages.xml${EOL}${EOL}` +
    `# Host directive${EOL}` +
    `Host: ${baseUrl}${EOL}${EOL}` +
    `# Contact information${EOL}` +
    `# Contact: webmaster@dreams4u.in`;

  const robotsPath = path.join(__dirname, "public", "robots.txt");
  fs.writeFileSync(robotsPath, robotsTxt, { encoding: "utf8" });
  console.log(`✅ robots.txt generated at: ${robotsPath}`);

  // Verify line endings
  const content = fs.readFileSync(robotsPath, "utf8");
  const crCount = (content.match(/\r/g) || []).length;
  const lfCount = (content.match(/\n/g) || []).length;
  const crlfCount = (content.match(/\r\n/g) || []).length;

  console.log(`📊 Line endings check:`);
  console.log(`   LF (\\n) count: ${lfCount}`);
  console.log(`   CR (\\r) count: ${crCount}`);
  console.log(`   CRLF (\\r\\n) count: ${crlfCount}`);
}

// Execute
console.log("🚀 Starting sitemap generation...");
console.log(`🌐 Base URL: ${baseUrl}`);
console.log(`📁 Script location: ${__dirname}`);
console.log(`💻 Platform: ${os.platform()}`);
console.log(`📝 Line endings will use: LF (\\n)`);

// Check if blogs directory exists
if (!fs.existsSync(blogsDir)) {
  console.log(`❌ Blogs directory not found: ${blogsDir}`);
  console.log(`📁 Current directory: ${process.cwd()}`);

  // Try alternative paths
  const possiblePaths = [
    path.join(__dirname, blogsDir),
    path.join(process.cwd(), blogsDir),
    path.join(__dirname, "..", blogsDir),
    path.join(process.cwd(), "src", "content", "blogs"),
  ];

  let foundPath = null;
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      foundPath = possiblePath;
      console.log(`✅ Found blogs at: ${foundPath}`);
      break;
    }
  }

  if (!foundPath) {
    console.log(
      "❌ Could not find blogs directory. Creating sitemap with static routes only.",
    );
  }
}

generateSitemap();
