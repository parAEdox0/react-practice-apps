import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div id="blogs" className="flex flex-col min-h-[83vh] ml-[200px] gap-5">
      {blogs.map((blog) => (
        <div key={blog.id} className="w-[60vw] flex flex-col gap-1">
          <h2 className="font-semibold text-xl text-pink-400">{blog.title}</h2>
          <h6 className="text-sm text-zinc-600">written by {blog.author} </h6>
          <p>{blog.text}</p>
          <button className="bg-zinc-600 w-14 p-1 rounded-sm text-white cursor-pointer">
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
