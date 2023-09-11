"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";
import Shampoo from "@/public/assets/Home/shampoo__img1.jpg";
import Rating from "@mui/material/Rating";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Home/news__bg.jpeg) center center/cover",
      }}
      className="pt-10 min-h-screen"
    >
      <Header />

      {/* Product Details */}

      <div className="min-h-[80vh] my-16 w-[80%] mx-auto grid grid-cols-3 gap-3">
        {/* Left */}

        <div className="border-2 relative">
          <Image
            src={Shampoo}
            // fill
            width={100}
            height={100}
            alt="logo/image"
            className="w-full rounded-md cover"
          />
        </div>

        {/* Right */}
        <div className="col-span-2 border-2">
          <h1 className="text-2xl font-semibold uppercase mb-2 text-[#fff]">
            Sustainable Shampoo
          </h1>

          <div className="">
            <Rating name="half-rating " defaultValue={5} precision={0.5} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
