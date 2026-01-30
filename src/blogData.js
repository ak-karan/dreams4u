export const blogPosts = [
  {
    slug: "react-seo-tips",
    title: "Top React SEO Tips",
    description:
      "Learn how to make your React app SEO-friendly with pre-rendering.",
    content: "This is a full blog post about React SEO optimization...",
  },
  {
    slug: "dynamic-routing-react",
    title: "Dynamic Routing in React",
    description: "A complete guide to dynamic routes in React apps.",
    content: "Here we discuss dynamic routes, SEO, and best practices...",
  },
];
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};
export const getAllBlogPosts = () => {
  return blogPosts;
};
