import Image from "next/image";
import Shampoo from "@/public/assets/Home/shampoo__img1.jpg";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import GenderSelector from "./GenderSelector";

const ProductDetails = () => {
  return (
      <div className="min-h-[80vh] my-16 w-[85%]  mx-auto grid grid-cols-3 gap-6">
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
        <div className="col-span-2   text-[#fff] ">
          <h1 className="text-3xl font-semibold uppercase mb-2 ">
            Sustainable Shampoo
          </h1>

         

          <p className=" my-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            repudiandae tempora debitis odit accusantium at quia magni vitae
            veniam, impedit obcaecati modi distinctio autem iusto corrupti
            officiis earum, expedita perspiciatis optio aliquid iste cupiditate
            omnis? Corrupti doloribus temporibus numquam at omnis asperiores!
            Explicabo eligendi vitae accusamus ut autem soluta quibusdam.
          </p>

        <ColorSelector />
        <SizeSelector />
        <GenderSelector />

         
          <p className=" text-2xl font-semibold mb-3">
            PKR: <span className="ml-16 font-normal">1999 =/</span>
          </p>

          {/* Counter */}
          <div className="flex justify-start items-center gap-6">
            <p className="text-2xl font-semibold">Quantity:</p>
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
            <button className="bg-[#000] hover:bg-[#8f8785] w-40  uppercase  text-[#fff] py-2 px-5 rounded-md">
              Buy Now
            </button>
            <button className="bg-[#000] hover:bg-[#8f8785] w-40  uppercase  text-[#fff] py-2 px-5 rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
  )
}

export default ProductDetails