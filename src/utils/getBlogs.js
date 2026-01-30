// src/utils/getBlogs.js
import matter from "gray-matter";

// Import all markdown files
const blogFiles = import.meta.glob("../blogs/*.md", { eager: true, as: "raw" });

export const getBlogs = () => {
  return Object.entries(blogFiles).map(([path, content]) => {
    const { data, content: markdownContent } = matter(content); // works because Vite provides raw string
    return {
      slug: path.split("/").pop().replace(".md", ""),
      ...data,
      content: markdownContent,
    };
  });
};
