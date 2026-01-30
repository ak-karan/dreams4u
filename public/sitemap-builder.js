// Vite v7 compatible glob
const pages = import.meta.glob("../src/content/blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function getBlogSlugs() {
  return Object.keys(pages).map((path) =>
    path.split("/").pop().replace(".md", ""),
  );
}
