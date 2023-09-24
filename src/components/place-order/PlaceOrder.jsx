"use client";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../Context/StateContext";
import { usePlaceOrder } from "../../hooks/cart-hook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const PlaceOrder = () => {
  const { finalCart, setFinalCart } = useStateContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  console.log("final cart: ", finalCart);

  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = usePlaceOrder(JSON.stringify(finalCart));

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    setFinalCart({
      ...finalCart,
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
    });
    console.log("hhh", finalCart);

    addMutate(
      {},

      {
        onSuccess: (response) => {
          if (response?.data?.error) {
            toast.error(response?.data?.error);
            router.push("/");
          }
          if (response?.data?.message) {
            console.log("success: ", response?.data);
            toast.success(response?.data?.message);
          }
        },
      }
    );
  };

  return (
    <div className="  w-[85%] my-16 mx-auto">
      <form
        className="grid grid-cols-5 items-stretch gap-10 min-h-[65vh]"
        onSubmit={handlePlaceOrder}
      >
        {/* Left */}
        <div className="col-span-3  bg-[#000] py-10 px-6">
          <h1 className="text-[#fff] text-2xl text-center">Payment Method</h1>
          <p className="text-[#fff] text-sm text-center">(Cash on Delivery)</p>
          <div className="w-2/3 mt-16">
            <input
              required
              type="text"
              placeholder="Name"
              name="name"
              className=" bg-transparent   mb-5 w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              name="email"
              className=" bg-transparent   mb-5 w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="number"
              placeholder="Phone number"
              name="phone"
              className=" bg-transparent   mb-5 w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Address"
              name="address"
              className=" bg-transparent   mb-5 w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        {/* Right */}
        <div className="col-span-2  bg-[#000] py-10 px-6">
          <h1 className="text-[#fff] text-2xl text-center mb-20">
            Order Summary
          </h1>

          <div className="flex justify-between items-center text-[#fff] mb-1">
            <h1 className="text-lg">Total Amount: </h1>
            <p>RS. {finalCart.totalPrice}</p>
          </div>

          <div className="flex justify-between items-center text-[#fff] mb-1">
            <h1 className=" text-lg">Delivery Fee :</h1>
            <p>RS. 150</p>
          </div>

          <div className="flex justify-between items-center text-[#fff] mb-1">
            <h1 className=" text-lg">Total Payment :</h1>
            <p>RS. {finalCart.totalPrice + 150}</p>
          </div>
          <hr className=" border-[#4e4e4e] bg-[#4e4e4e] rounded-lg my-7" />
          <button
            type="submit"
            className="w-full  border-none text-lg py-2 rounded-md bg-[#8f8785] hover:bg-[#75706e] text-[#fff]"
          >
            {isLoading ? "Adding..." : "Add to cart"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
