import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

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
        <form>
          <p className="mb-10 text-[#fff] ">
            Enter your email below we will send you a link to reset your
            password
          </p>

          <div className="mb-6  ">
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="bg-[#282725] w-full pb-1 text-[#fff] text-base focus:outline-none border-b-[1px]  border-gray-400"
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full  border-none text-lg py-2 rounded-md bg-[#000] hover:bg-[#8f8785] text-[#fff]"
            >
              Continue
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
