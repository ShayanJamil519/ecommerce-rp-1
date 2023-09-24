"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCartDashFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import LoginButton from "./LoginButton";
import ProductsDropdown from "./ProductsDropdown";
import { useStateContext } from "../../../Context/StateContext";
import SearchInput from "@/components/shared/SearchInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navLink = [
  {
    linkText: "Home",
    linkTo: "/",
  },

  {
    linkText: "About Us",
    linkTo: "/about",
  },
  ,
  {
    linkText: "Contact",
    linkTo: "/contact",
  },
  ,
];

const Header = () => {
  const { openSearchModel, handleSearchModelOpen } = useStateContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  return (
    <>
      <header className="  bg-[#4e4e4e]  w-[90%] mx-auto rounded-full bg-opacity-70 min-h-[110px] hidden lg:flex justify-between text-[#fff] py-8 px-12">
        {/* Left */}
        <div></div>
        {/* Middle */}
        <div className="flex justify-center items-center ">
          <Link
            href="/"
            className="text-lg pb-[2px] hover:text-black hover:border-b-[1px] hover:border-black mr-10"
          >
            Home
          </Link>

          <ProductsDropdown />

          <Link
            href="/about"
            className="text-lg pb-[2px] hover:text-black hover:border-b-[1px] hover:border-black  mr-10"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-lg pb-[2px] hover:text-black hover:border-b-[1px] hover:border-black "
          >
            Contact
          </Link>
        </div>
        {/* Right */}
        <div className="flex justify-center items-center gap-5 text-[#fff] text-2xl  font-bold">
          {openSearchModel && <SearchInput />}

          <BiSearch
            className="cursor-pointer"
            onClick={handleSearchModelOpen}
          />

          <LoginButton />

          <BsCartDashFill
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="   lg:hidden  text-[#fff] ">
        <div className="flex justify-between items-center bg-[#4e4e4e] py-6 px-6 sm:px-10 sm:py-10   bg-opacity-70 ">
          <h1 className="text-xl">Logo</h1>

          {!mobileMenuOpen ? (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=" font-sans font-medium text-center "
            >
              <RxHamburgerMenu className="text-[30px]" />
            </button>
          ) : (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=" font-sans font-medium text-center "
            >
              <AiOutlineClose className="text-[30px]" />
            </button>
          )}
        </div>

        {/* Mobile Dawer */}
        {mobileMenuOpen && (
          <div className="block w-full py-6 bg-[#4e4e4e] px-6 sm:px-10  bg-opacity-70 ">
            <ul className="mb-4 flex flex-col gap-5">
              <Link
                href="/"
                className="text-lg pb-[2px] w-fit hover:text-black hover:border-b-[1px] hover:border-black"
              >
                Home
              </Link>
              <ProductsDropdown />
              <Link
                href="/about"
                className="text-lg pb-[2px] w-fit hover:text-black hover:border-b-[1px] hover:border-black"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-lg pb-[2px] w-fit hover:text-black hover:border-b-[1px] hover:border-black"
              >
                Contact
              </Link>
            </ul>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center gap-5">
                <SearchInput />{" "}
                <BiSearch className="cursor-pointer text-[40px]" />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg hover:text-black hover:border-b-[1px] hover:border-black">
                  My Cart
                </span>
                <BsCartDashFill
                  className="cursor-pointer text-[30px]"
                  onClick={() => router.push("/cart")}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg hover:text-black hover:border-b-[1px] hover:border-black">
                  Login
                </span>
                <LoginButton />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
