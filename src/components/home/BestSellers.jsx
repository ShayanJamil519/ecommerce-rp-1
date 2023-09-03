import Image from "next/image";
import { productData } from "./data__home";

const BestSellers = () => {
  return (
    <div className="my-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-center text-[#fff] uppercase">
          Best Sellers
        </h1>
        <hr className="bg-[#fff] w-40 mx-auto mt-2 " />
      </div>

      {/* Grid */}

      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {productData.map((item, index) => (
            <div
              className="bg-[#000] p-4 text-[#fff] rounded-lg text-center  hover:bg-opacity-80 hover:bg-slate-700"
              key={index}
            >
              <Image
                src={item.productImage}
                alt={item.productTitle}
                className="mb-7 w-full rounded-md"
              />
              <h1 className="text-2xl uppercase mb-1">{item.productTitle}</h1>
              <p className="text-lg"> {item.productPrice}</p>
              <button className="bg-[#000] border-[1px] uppercase border-[#fff] text-[#fff] py-2 px-5 rounded-lg mt-4">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
