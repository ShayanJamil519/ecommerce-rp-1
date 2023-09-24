"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUserGetMyCart } from "../../hooks/cart-hook";

const Cart = () => {
  const [userEmail, setUserEmail] = useState("");

  const { data: cartData } = useUserGetMyCart(userEmail);
  console.log("cartData");
  console.log(cartData);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setUserEmail(email);
  }, []);
  return (
    <div className=" min-h-screen w-[80%] my-16 mx-auto  border-[#4e4e4e] border-[1px]">
      {/* Table Header */}
      <div className="grid grid-cols-5 text-[#fff] text-xl py-4 px-3  border-[#4e4e4e] border-b-[1px] bg-[#000]">
        <div className="col-span-3">
          <p>Products</p>
        </div>

        <div>
          <p>Quantity</p>
        </div>

        <div>
          <p>Subtotal</p>
        </div>
      </div>

      {/* Table Body */}
      <div className="text-[#fff] bg-[#1e1e1e] px-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <>
            <div key={index} className="grid grid-cols-5 items-center py-3  ">
              <div className="col-span-3 ">
                <div className="flex justify-start items-center gap-6">
                  <Image
                    src="/assets/Home/slider__img1.jpg"
                    alt="logo"
                    width={200}
                    height={250}
                    className="rounded-md"
                  />
                  <div>
                    <h1 className="mb-1">Product Name</h1>
                    <p className="text-[12px] mb-1">
                      Price: <span>RS. 1000</span>
                    </p>
                    <button className="text-[#ff0000]">Remove</button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-start items-center gap-5 text-xl text-[#fff]">
                  <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer">
                    <p className=" text-2xl ">-</p>
                  </div>
                  <p className=" text-2xl ">1</p>
                  <div className="w-[30px] grid place-items-center rounded-md bg-[#fff] text-[#000] cursor-pointer">
                    <p className="text-2xl font-semibold">+</p>
                  </div>
                </div>
              </div>

              <div>
                <p>Subtotal</p>
              </div>
            </div>

            <hr className="h-[1px]  border-[#4e4e4e]" />
          </>
        ))}
        {/* Total Container */}
        <div className="w-[40%] mr-0 ml-auto mt-10 pb-10">
          <hr className=" border-[#4e4e4e] bg-[#4e4e4e] h-[5px] rounded-lg mb-7" />
          <div className="flex justify-between items-center mb-4">
            <p>Total Amount:</p>
            <p>RS. 42000</p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
