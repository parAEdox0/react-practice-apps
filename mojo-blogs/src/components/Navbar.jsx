import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between h-[13vh] w-[70vw] border-b border-zinc-200">
        <h1 className="text-pink-500 text-3xl font-semibold">The Mojo Blog</h1>
        <ul className="flex gap-9 text-zinc-500 text-[20px]">
          <Link to="/">
            <li className="hover:text-pink-400 cursor-pointer">Home</li>
          </Link>
          <Link to="/create">
            <li className="hover:text-pink-400 cursor-pointer">New Blog</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
