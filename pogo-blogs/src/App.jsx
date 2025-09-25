import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const App = () => {
  const [blogs, isLoading, error] = useFetch("http://localhost:5000/blogs");

  return (
    <>
      <Navbar />
      {error && <p className="ml-[200px]">{error}</p>}
      {isLoading && <p className="ml-[200px]">Loading...</p>}
      {blogs && <BlogList blogs={blogs} />}
    </>
  );
};

export default App;
