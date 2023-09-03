import React from "react";

const NewsLetter = () => {
  return (
    <div className="my-10">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-center text-[#fff] uppercase">
          New-Letter
        </h1>
        <hr className="bg-[#fff] w-40 mx-auto mt-2 " />
      </div>
      {/* Content */}
      <div>
        <h1 className="text-xl font-medium text-center text-[#fff] uppercase">
          Subscribe to our news letter
        </h1>
        <p className="text-sm font-light text-center text-[#fff] uppercase">
          To receive news abut upcoming products, best sellers, sales
        </p>

        {/* Email */}
        <form className="text-center mt-5">
          <input
            type="email"
            required
            placeholder="Please enter your email"
            className="w-1/4 px-3 py-2 focus:border-slate-500 font-base focus:border-2 border-none rounded-md focus:outline-none"
          />
          <button className="bg-[#000] border-[1px] uppercase border-[#fff] text-[#fff] py-2 px-3 rounded-lg ml-2 hover:bg-[#290e0e77]  ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
