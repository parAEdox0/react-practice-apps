import useFetch from "../hooks/useFetch";
import BlogList from "../components/BlogList";
const Home = () => {
  const [blogs, setBlogs, isLoading, error] = useFetch(
    "http://localhost:5000/blogs"
  );
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} setBlogs={setBlogs} />}
    </div>
  );
};

export default Home;
