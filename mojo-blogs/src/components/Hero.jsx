import React, { useState, useEffect } from "react";
import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Hero = () => {
  let { data, isPending, error } = useFetch("http://localhost:3000/blogs");

  return (
    <>
      <div className="Hero w-[70vw] flex flex-col items-start py-11 font-sans">
        {error && <p>{error}</p>}

        {isPending && (
          <div className="w-[100%] flex justify-center">
            <img
              className="h-48"
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2dpaDk1amNhZzY3c2x6OG1ianh1eWx6eWpld3RvbndmZXA5dGVmeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y1ZBcOGOOtlpC/200w.webp"
            />
          </div>
        )}

        {data && <BlogsList blogs={data} />}
      </div>
    </>
  );
};

export default Hero;
