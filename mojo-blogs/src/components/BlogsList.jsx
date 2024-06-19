import React from "react";
import { Link } from "react-router-dom";

const BlogsList = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="blogPreview mb-11 w-[100%]" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2 className="text-2xl font-bold text-pink-500 mb-3 cursor-pointer">
              {blog.title}
            </h2>
          </Link>
          <p className="text-zinc-400 mb-7">Written by {blog.author}</p>
        </div>
      ))}
    </>
  );
};

export default BlogsList;
