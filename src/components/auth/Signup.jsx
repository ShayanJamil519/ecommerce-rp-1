"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useUserSignup } from "../../hooks/auth-hook";
import RequestLoader from "../shared/RequestLoader";
import { toast } from "react-toastify";

const Signup = () => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = useUserSignup(JSON.stringify(userData));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    addMutate(
      {},
      {
        onSuccess: (response) => {
          toast.success("Signup successfull");
          console.log(response);
        },
      }
    );
  };

  return (
    <div className=" border-black w-2/3 my-20">
      <h1 className="text-4xl font-bold uppercase mb-16 text-[#fff] text-center">
        Registration
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6  ">
          <input
            required
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="Username"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
        </div>

        <div className="mb-6  ">
          <input
            required
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
        </div>

        <div className="mb-6  ">
          <input
            required
            type="number"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
        </div>

        <div className="mb-6">
          <input
            required
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px] border-gray-400"
          />
        </div>

        <div className="mb-6">
          <input
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px] border-gray-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            required
            name="remember"
            className="cursor-pointer"
          />
          <label className="text-[#fff] ml-2 text-sm" htmlFor="remember">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            By clicking "SIGN UP" I agree to website terms of use and privacy
            policy
          </label>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
          >
            {isLoading ? <RequestLoader /> : "Sign up"}
          </button>
        </div>
        <div className="mt-5 flex justify-start items-center gap-1">
          <IoIosArrowBack className="text-xl text-[#cac9c9]" />
          <Link href="/login" className="text-[#cac9c9] ">
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
