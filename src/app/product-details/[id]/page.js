"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";
import Shampoo from "@/public/assets/Home/shampoo__img1.jpg";
import Rating from "@mui/material/Rating";
import { BsPlusSquare } from "react-icons/bs";
import { LuMinusSquare } from "react-icons/lu";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="pt-10 min-h-screen "
    >
      <Header />

      {/* Product Details */}

      <div className="min-h-[80vh] my-16 w-[80%] mx-auto grid grid-cols-3 gap-6">
        {/* Left */}

        <div className=" relative">
          <Image
            src={Shampoo}
            fill
            alt="logo/image"
            className="w-full rounded-md cover"
          />
        </div>

        {/* Right */}
        <div className="col-span-2   text-[#fff] pt-5">
          <h1 className="text-2xl font-semibold uppercase mb-2 ">
            Sustainable Shampoo
          </h1>

          <div className="">
            <Rating name="half-rating " defaultValue={5} precision={0.5} />
          </div>

          <p className=" my-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            repudiandae tempora debitis odit accusantium at quia magni vitae
            veniam, impedit obcaecati modi distinctio autem iusto corrupti
            officiis earum, expedita perspiciatis optio aliquid iste cupiditate
            omnis? Corrupti doloribus temporibus numquam at omnis asperiores!
            Explicabo eligendi vitae accusamus ut autem soluta quibusdam.
          </p>

          <h1 className="uppercase text-xl">Benefits</h1>

          <div className="flex justify-start items-center gap-10">
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
          </div>

          <p className="mt-7 text-xl mb-3">
            RS: <span className="ml-2">1999</span>
          </p>

          {/* Counter */}
          <div className="flex justify-start items-center gap-7">
            <p className="text-xl">Quantity</p>
            <div className="flex justify-start items-center gap-5 text-xl text-[#fff]">
              <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer">
                <p className=" text-2xl ">+</p>
              </div>
              <p className=" text-2xl ">1</p>
              <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer">
                <p className="text-2xl font-semibold">-</p>
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex justify-start items-center gap-5">
            <button className="bg-[#000] w-40  uppercase  text-[#fff] py-2 px-5 rounded-md">
              Buy Now
            </button>
            <button className="bg-[#000] w-40  uppercase  text-[#fff] py-2 px-5 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
