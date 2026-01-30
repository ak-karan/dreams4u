// src/utils/getBlogs.js
import matter from "gray-matter";

// Import all markdown files as raw text (Vite v7 compatible)
const blogFiles = import.meta.glob("../blogs/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const getBlogs = () => {
  return Object.entries(blogFiles).map(([path, content]) => {
    const { data, content: markdownContent } = matter(content);
    return {
      slug: path.split("/").pop().replace(".md", ""),
      ...data,
      content: markdownContent,
    };
  });
};
