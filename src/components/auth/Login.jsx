"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import useFirebaseAuth from "../../app/lib/useFirebaseAuth";
import { useState } from "react";
import { useUserLogin } from "../../hooks/auth-hook";
import RequestLoader from "../shared/RequestLoader";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const Login = () => {
  const { signInWithFacebook, signInWithGoogle } = useFirebaseAuth();

  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const {
    mutate: addMutate,
    isLoading,
    isError,
  } = useUserLogin(JSON.stringify(userData));

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
          if (response?.data?.error) {
            toast.error(response?.data?.error);
          }
          if (response?.data?.message) {
            toast.success(response?.data?.message);
            localStorage.setItem("email", userData.email);
            router.back();
          }
        },
      }
    );
  };

  return (
    <div className=" w-3/4 lg:w-2/3 my-10 lg:my-20">
      <h1 className="text-4xl font-bold uppercase mb-16 text-[#fff] text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 flex justify-between items-center relative">
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="bg-[#282725] w-full rounded-md sm:rounded-none py-2 md:pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
          />
          <BiSolidUser className="text-gray-400 text-2xl absolute right-0 bottom-2 md:bottom-1 " />
        </div>

        <div className="mb-3 flex justify-between items-center relative">
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className="bg-[#282725] w-full rounded-md sm:rounded-none py-2 md:pb-1 text-[#fff] text-base focus:outline-none border-b-[1px] border-gray-400"
          />
          <BiSolidLockAlt className="text-gray-400 text-2xl absolute right-0 bottom-2 md:bottom-1" />
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div>
            <input type="checkbox" name="remember" className="cursor-pointer" />
            <label className="text-[#fff] ml-2 text-sm" htmlFor="remember">
              Remember Me
            </label>
          </div>

          <Link href="/forgot-password" className="text-[#fff] text-sm">
            Forgot Password?
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
          >
            {isLoading ? <RequestLoader /> : "Login"}
          </button>
        </div>
        <div className="flex justify-center items-center mt-5">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-[#fff]">Don't have an account?</p>{" "}
          <Link href="/signup" className="text-[#cac9c9] ml-2">
            SignUp
          </Link>
        </div>
      </form>

      {/* OAuth */}
      <div className="mt-6 w-full">
        {/* Else */}
        <div className="grid grid-cols-[30%_10%_30%] sm:grid-cols-[45%_7%_45%] justify-center items-center gap-5 sm:gap-2 text-[#fff]">
          <hr className="bg-[#fff]" />
          <span>Else</span>
          <hr />
        </div>

        {/* Login with */}
        <div className="mt-4">
          <h1 className="text-xl font-semibold uppercase mb-5 text-[#fff] text-center">
            Login With
          </h1>

          <div className="flex justify-center items-center gap-4 flex-col">
            <button
              onClick={signInWithFacebook}
              className="w-full flex justify-center items-center  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
            >
              <FaFacebookF className="text-xl mr-2" /> Facebook
            </button>
            <button
              onClick={signInWithGoogle}
              className="w-full flex justify-center items-center border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
            >
              <BsGoogle className="text-xl mr-2" /> Google
            </button>
          </div>
        </div>
      </div>
      {/* Go Back */}
      <div className="mt-5 flex justify-start items-center gap-1 cursor-pointer">
        <IoIosArrowBack className="text-xl text-[#cac9c9]" />
        <p onClick={() => router.back()} className="text-[#cac9c9] ">
          Go Back
        </p>
      </div>
    </div>
  );
};

export default Login;
