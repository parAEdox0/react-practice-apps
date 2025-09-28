import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(null);
  const handleSubmit = (e) => {
    setSuccess("");
    setError("");
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      const body = { title, author, text };
      fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then(() => {
          setLoading(false);
          setTitle("");
          setAuthor("");
          setText("");
          setSuccess("Blog has been successfully created");
        })
        .catch((err) => {
          setLoading(false);
          setError("Sever Error");
        });
    }, 500);
  };
  return (
    <div id="Create" className="flex flex-col items-center gap-10">
      <h1 className="font-semibold">Add a new blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[20vw] gap-1">
        <label htmlFor="title">Title of the Blog</label>
        <input
          className="border border-[#00000077] rounded-sm"
          name="title"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="author">Name of the Author</label>
        <input
          className="border border-[#00000077] rounded-sm"
          name="author"
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <label htmlFor="text">Body of the Blog</label>
        <textarea
          className="border border-[#00000077]"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button className="p-1 bg-pink-400 rounded-sm text-white mt-3 text-center cursor-pointer">
          Submit
        </button>
        {success && (
          <p className="p-1 rounded-md text-[10px] text-[#68da77] font-semibold border border-[#A6E4AE]">
            {success}
          </p>
        )}
        {error && (
          <p className="p-1 rounded-md text-[10px] text-[#e74141] font-semibold border border-[#e74141]">
            {error}
          </p>
        )}
        {loading && <p>Loading...</p>}
      </form>
    </div>
  );
};

export default Create;
