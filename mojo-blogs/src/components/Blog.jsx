import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const { id } = useParams("id");
  let { data, isPending, error } = useFetch(
    "http://localhost:3000/blogs/" + id
  );

  const handleClick = () => {
    fetch("http://localhost:3000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  const navigate = useNavigate();

  return (
    <div className="blogDetails w-[70vw] flex flex-col items-start py-11 font-sans">
      {error && <p>{error}</p>}
      {isPending && (
        <div className="w-[100%] flex justify-center">
          <img
            className="h-48"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2dpaDk1amNhZzY3c2x6OG1ianh1eWx6eWpld3RvbndmZXA5dGVmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y1ZBcOGOOtlpC/200w.webp"
          />
        </div>
      )}
      {data && (
        <>
          <h2 className="text-2xl font-bold text-pink-500 mb-5 ">
            {data.title}
          </h2>
          <p className="text-zinc-400 mb-5">Written by {data.author}</p>
          <p className="text-[25px] text-zinc-600 font-medium mb-7">
            {data.content}
          </p>
          <button
            onClick={handleClick}
            className="bg-pink-500 py-2 w-[10%] text-white font-bold rounded-md"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Blog;
