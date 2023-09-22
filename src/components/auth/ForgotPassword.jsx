"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useUserForgotPassword } from "../../hooks/auth-hook";
import RequestLoader from "../shared/RequestLoader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = useUserForgotPassword(email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    addMutate(
      {},
      {
        onSuccess: (response) => {
          if (response?.data?.error) {
            toast.error(response?.data?.error);
          }
          if (response?.data?.message) {
            toast.success(response?.data?.message);
          }
        },
      }
    );
  };

  return (
    <div className=" border-black w-2/3 my-20">
      <form onSubmit={handleSubmit}>
        <p className="mb-10 text-[#fff] ">
          Enter your email below we will send you a link to reset your password
        </p>

        <div className="mb-6  ">
          <input
            required
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
          >
            {isLoading ? <RequestLoader /> : "Continue"}
          </button>
        </div>
        <div className="mt-5 flex justify-start items-center gap-1">
          <IoIosArrowBack className="text-xl text-[#cac9c9]" />
          <Link href="/signup" className="text-[#cac9c9] ">
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
