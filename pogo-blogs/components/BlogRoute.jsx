import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Blogs from "../pages/Blogs";

const BlogRoute = () => {
  const { id } = useParams();
  const [data, isLoading, error] = useFetch(
    `http://localhost:5000/blogs/${id}`
  );
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {data && <Blogs data={data} />}
    </div>
  );
};

export default BlogRoute;
