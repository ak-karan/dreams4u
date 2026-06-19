import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath, pathToFileURL } from "url";
import { faridabadAreas } from "../src/faridabad/faridabadAreas.js";
import { localServicePages } from "../src/localSeo/localServicePages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const distServerDir = path.join(distDir, "server");
const templatePath = path.join(distDir, "index.html");
const blogsDir = path.join(projectRoot, "src", "content", "blogs");

function getStaticRoutes() {
  const appRoutes = [
    "/",
    "/about-dreams4u",
    "/works",
    "/faridabad",
    "/portfolio",
    "/contact",
    "/services",
    "/services/react-development",
    "/services/app-development",
    "/services/mobile-responsive",
    "/services/business-website",
    "/services/ui-ux",
    "/services/website-security",
    "/privacy",
    "/terms",
    "/cookies",
    "/blog",
    "/case-studies",
    "/sitemap",
    ...localServicePages.map((page) => page.routePath),
  ];

  const blogRoutes = fs
    .readdirSync(blogsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogsDir, file), "utf8");
      const { data } = matter(raw);
      const slug = data.slug || file.replace(".md", "");
      return `/blog/${slug}`;
    });

  const faridabadRoutes = faridabadAreas.map((area) => area.routePath);

  return [...appRoutes, ...blogRoutes, ...faridabadRoutes];
}

function routeToOutputPath(routePath) {
  if (routePath === "/") {
    return path.join(distDir, "index.html");
  }

  const normalized = routePath.replace(/^\/+/, "");
  return path.join(distDir, normalized, "index.html");
}

function injectMarkup(template, appHtml, headMarkup) {
  const cleanedTemplate = headMarkup.includes('data-rh="true"')
    ? template
        .replace(/<title>[\s\S]*?<\/title>/i, "")
        .replace(
          /<meta\s+name="description"[\s\S]*?>/i,
          "",
        )
    : template;

  return cleanedTemplate
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace("</head>", `${headMarkup}</head>`);
}

async function loadRenderer() {
  const serverEntryPath = path.join(distServerDir, "prerender.js");
  const serverEntryUrl = pathToFileURL(serverEntryPath).href;
  return import(serverEntryUrl);
}

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    throw new Error("dist/index.html not found. Run the client build first.");
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const { render } = await loadRenderer();
  const routes = getStaticRoutes();

  for (const routePath of routes) {
    const { appHtml, headMarkup } = render(routePath);
    const outputPath = routeToOutputPath(routePath);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(
      outputPath,
      injectMarkup(template, appHtml, headMarkup),
      "utf8",
    );
    console.log(`prerendered ${routePath} -> ${path.relative(projectRoot, outputPath)}`);
  }
}

prerender().catch((error) => {
  console.error("Prerender failed:", error);
  process.exit(1);
});
