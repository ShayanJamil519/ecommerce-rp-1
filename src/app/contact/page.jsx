import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header/Header";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="pt-10 min-h-screen"
    >
      <Header />
      {/* Fomr */}
      <form className="w-[80%] mx-auto  my-10 bg-[#000] py-10 px-20 rounded-2xl">
        <h1 className="text-[#fff] text-xl text-center mb-10">
          Give us your feedback/queries
        </h1>

        <input
          required
          type="text"
          placeholder="Name"
          className="text-[#fff] bg-transparent py-2 px-2 border-b-[1px] border-[#afafaf]  mb-5 w-full focus:outline-none focus:border-[#fff]"
        />

        <input
          required
          type="email"
          placeholder="Email"
          className="text-[#fff] py-2 px-2 bg-transparent border-b-[1px] mb-8 w-full focus:outline-none border-[#afafaf]  focus:border-[#fff]"
        />

        <textarea
          required
          placeholder="Drop us a message"
          className="min-h-[200px] text-[#fff] py-3 px-3 rounded-xl border-[1px] border-[#afafaf]  focus:border-[#fff] bg-transparent  w-full focus:outline-none"
        ></textarea>

        <div className="text-center mt-10">
          <button className="border-none text-[#000] px-10 py-3 font-semibold rounded-xl  uppercase bg-[#fff]">
            Send
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default page;
