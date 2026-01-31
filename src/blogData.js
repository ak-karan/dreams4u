export const blogPosts = [
  {
    slug: "react-seo-tips",
    title: "Top 10 React SEO Tips for 2024",
    description:
      "Learn how to make your React app SEO-friendly with server-side rendering, meta tags, and best practices.",
    content: "Full content here...",
    category: "React",
    tags: "React, SEO, JavaScript, Web Development",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "John Doe",
    image: "/images/react-seo.jpg",
    featured: true,
    metaTitle: "React SEO Tips | Boost Your React App's Search Ranking",
    metaDescription:
      "Complete guide to SEO optimization in React applications. Learn SSR, meta tags, and performance techniques.",
  },
  {
    slug: "dynamic-routing-react",
    title: "Dynamic Routing in React: Complete Guide",
    description:
      "Master dynamic routes in React with React Router, including nested routes, protected routes, and SEO considerations.",
    content: "Full content here...",
    category: "React",
    tags: "React, Routing, React Router, JavaScript",
    date: "2024-01-10",
    readTime: "10 min read",
    author: "Jane Smith",
    image: "/images/react-routing.jpg",
    featured: true,
    metaTitle: "Dynamic Routing in React | React Router Tutorial",
    metaDescription:
      "Learn how to implement dynamic routing in React applications with React Router v6.",
  },
];

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllBlogPosts = () => {
  return blogPosts;
};

export const getFeaturedPosts = () => {
  return blogPosts.filter((post) => post.featured);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter((post) => post.category === category);
};
