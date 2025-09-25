import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";

const App = () => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <Navbar />
      {blogs && <BlogList blogs={blogs} />}
    </>
  );
};

export default App;
