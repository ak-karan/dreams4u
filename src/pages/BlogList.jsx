import { useEffect, useState } from "react";
import { getBlogs } from "../utils/getBlogs";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.slug}>{blog.title}</div>
      ))}
    </div>
  );
}

export default BlogList;
