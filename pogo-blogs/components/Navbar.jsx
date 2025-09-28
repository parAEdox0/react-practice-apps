import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[17vh] flex items-center justify-between px-20">
      <h2 className="font-bold text-pink-400 text-2xl">Mojo Blogs</h2>
      <div id="nav-buttons" className="flex items-center gap-7 font-semibold">
        <Link to="/" className="text-zinc-600">
          Home
        </Link>
        <Link
          to="/create"
          className="bg-pink-400 p-2 rounded-sm text-white cursor-pointer"
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
