"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAllProducts } from "../../hooks/product-hook";

const BestSellers = ({ isHome }) => {
  const router = useRouter();
  const { data: productsData } = useAllProducts();
  console.log("product");
  console.log(productsData);

  return (
    <div className="my-16">
      {/* Heading */}
      {isHome && (
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-center text-[#fff] uppercase">
            Best Sellers
          </h1>
          <hr className="bg-[#fff] w-40 mx-auto mt-2 " />
        </div>
      )}

      {/* Grid */}

      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {productsData &&
            productsData.map((item, index) => (
              <div
                className="bg-[#000]  p-4 text-[#fff] rounded-lg text-center  hover:bg-opacity-80 hover:bg-slate-700"
                key={index}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item?.images[0]?.url}
                  alt="Product Image"
                  className="mb-7 w-[100%]  h-[200px] rounded-md"
                />
                <h1 className="text-2xl uppercase mb-1">{item.name}</h1>
                <p className="text-lg"> {item.price}</p>
                <button
                  onClick={() => router.push(`/product-details/${item._id}`)}
                  className="bg-[#000] w-full border-[1px] uppercase border-[#fff] text-[#fff] py-2 px-5 rounded-md mt-4"
                >
                  View Details
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
