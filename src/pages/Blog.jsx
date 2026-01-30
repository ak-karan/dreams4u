import React from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import blogContent from "../content/my-blog-post.md?raw"; // notice ?raw

export default function BlogPage() {
  const { content } = matter(blogContent);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
