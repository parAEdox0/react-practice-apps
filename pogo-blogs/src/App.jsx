import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";

const App = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not find the resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1500);
  }, []);

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
