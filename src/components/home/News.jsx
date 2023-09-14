"use client";
import Image from "next/image";
import { useState } from "react";
import { newsImages } from "../shared/data";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" w-[90%] mx-auto">
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-center text-[#fff] uppercase">
          News
        </h1>
        <hr className="bg-[#fff] w-40 mx-auto mt-2 " />
      </div>

      <div className="relative w-full">
        {/* Chevron Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-[#fff] "
        >
          <BsChevronLeft className="text-[80px] font-bold" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-[#fff]"
        >
          <BsChevronRight className="text-[80px] font-bold" />
        </button>

        {/* Images */}

        <div className="w-[85%] mx-auto">
          <Image
            src={newsImages[currentIndex].src}
            className="w-full h-[30rem] object-cover rounded-xl"
            alt="Slider"
          />

          <div className="flex justify-center mt-4">
            {newsImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-7 h-7 mx-2 rounded-full border-[1px] ${
                  index === currentIndex
                    ? "bg-gray-900  border-gray-300"
                    : "bg-gray-300 border-gray-900"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
