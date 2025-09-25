const Navbar = () => {
  return (
    <nav className="h-[17vh] flex items-center justify-between mx-96">
      <h2 className="font-bold text-pink-400 text-2xl">Mojo Blogs</h2>
      <div id="nav-buttons" className="flex items-center gap-7 font-semibold">
        <a href="/" className="text-zinc-600">
          Home
        </a>
        <a
          href="/create"
          className="bg-pink-400 p-2 rounded-sm text-white cursor-pointer"
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
