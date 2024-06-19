import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [author, setAuthor] = useState("");
  let [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsPending(true);
    e.preventDefault();
    const blog = { title, content, author };

    setTimeout(() => {
      fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false);
        navigate("/");
      });
    }, 1100);
  };

  return (
    <div className="blogDetails w-[70vw] flex flex-col items-center py-[10vh] font-sans">
      {!isPending && (
        <>
          <h2 className="text-4xl text-pink-500 font-bold">
            Create a New Blog
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col my-11">
            <label className="text-2xl mb-1">Title:</label>
            <input
              className="border mb-6 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md w-[30vw] h-12 outline-none"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="text-2xl mb-1">Content:</label>
            <textarea
              className="border mb-6 text-zinc-500 text-[20px] px-2 py-2 resize-none border-zinc-300 rounded-md  w-[30vw] h-[20vh] outline-none"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <label className="text-2xl mb-1">Author:</label>
            <input
              className="border mb-6 text-zinc-500 text-[20px] px-2  border-zinc-300 rounded-md  w-[30vw] h-12 outline-none"
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <div className="w-[100%] flex justify-center">
              <button className="bg-pink-500 text-white py-3 w-[15%] rounded-md font-semibold">
                Create
              </button>
            </div>
          </form>
        </>
      )}
      {isPending && (
        <>
          <div className="text-4xl text-pink-500 font-bold">
            Creating new blog...
          </div>
        </>
      )}
    </div>
  );
};

export default Create;
