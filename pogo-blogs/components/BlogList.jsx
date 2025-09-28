import { Link } from "react-router-dom";
import { H4, H2 } from "../styles/Styles";

const BlogList = ({ blogs }) => {
  return (
    <div id="blogs" className="flex flex-col min-h-[83vh] gap-5">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="w-[60vw] flex flex-col p-3 gap-1 hover:shadow "
        >
          <Link to={`/blogs/${blog.id}`}>
            <H2 className=" cursor-pointer">{blog.title}</H2>
            <H4>written by {blog.author} </H4>
          </Link>
          <button className="bg-zinc-600 w-14 p-1 rounded-sm text-white cursor-pointer">
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
