"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useUserResetPassword } from "../../hooks/auth-hook";
import RequestLoader from "../shared/RequestLoader";

const ResetPassword = ({ token }) => {
  const [userData, setUserData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = useUserResetPassword(userData, token);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userData.newPassword !== userData.confirmNewPassword) {
      toast.error("Passwords doesn't match");
      return;
    }

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
        <p className="mb-10 text-[#fff] ">Enter your new password</p>

        <div className="mb-6  ">
          <input
            required
            type="password"
            name="newPassword"
            value={userData.newPassword}
            onChange={handleInputChange}
            placeholder="Password"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
        </div>

        <div className="mb-6  ">
          <input
            required
            type="password"
            name="confirmNewPassword"
            value={userData.confirmNewPassword}
            onChange={handleInputChange}
            placeholder="Confirm password"
            className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
          >
            {isLoading ? <RequestLoader /> : "Confirm"}
          </button>
        </div>
        <div className="mt-5 flex justify-start items-center gap-1">
          <IoIosArrowBack className="text-xl text-[#cac9c9]" />
          <Link href="/" className="text-[#cac9c9] ">
            Go Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
