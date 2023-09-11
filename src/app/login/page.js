import Link from "next/link";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

const page = () => {
  return (
    <div
      style={{
        background: "url(./assets/Shared/login__bg.jpg) center center/cover",
      }}
      className="min-h-screen grid grid-cols-2 justify-items-center place-items-center"
    >
      {/* Left */}
      <div className=" border-black w-2/3 my-20">
        <h1 className="text-4xl font-bold uppercase mb-16 text-[#fff] text-center">
          Login
        </h1>
        <form>
          <div className="mb-6 flex justify-between items-center relative">
            <input
              required
              type="text"
              placeholder="Username"
              className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
            />
            <BiSolidUser className="text-gray-400 text-2xl absolute right-0 bottom-1 " />
          </div>

          <div className="mb-3 flex justify-between items-center relative">
            <input
              required
              type="password"
              placeholder="Password"
              className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px] border-gray-400"
            />
            <BiSolidLockAlt className="text-gray-400 text-2xl absolute right-0 bottom-1 " />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                name="remember"
                className="cursor-pointer"
              />
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
              Login
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
        <div className="mt-6">
          {/* Else */}
          <div className="grid grid-cols-[45%_7%_45%] items-center gap-2 text-[#fff]">
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
              <button className="w-full flex justify-center items-center  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]">
                <FaFacebookF className="text-xl mr-2" /> Facebook
              </button>
              <button className="w-full flex justify-center items-center border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]">
                <BsGoogle className="text-xl mr-2" /> Google
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex justify-end px-10">
        <div className="w-2/4 ">
          <h1 className="text-4xl font-bold uppercase mb-5 text-[#fff] ">
            Welcome <br /> Back!
          </h1>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            accusantium ducimus eligendi possimus, praesentium dolorem maxime
            dicta dolore quo soluta provident quisquam impedit amet! Dicta quod
            iste beatae ea assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
