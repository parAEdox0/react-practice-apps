import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="notFound w-[70vw] h-[80vh] flex flex-col items-center py-11">
        <p className="text-4xl text-pink-500 font-bold mb-6">
          Sorry! Page not found
        </p>
        <Link to="/" className="text-[20px] hover:text-pink-400">
          Click here to go to home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
