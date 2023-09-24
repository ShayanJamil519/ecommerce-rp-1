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
import { useEffect, useState } from "react";
import { useUserGetMyCart } from "../../../hooks/cart-hook";

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
  const [useremail, setUseremail] = useState("");

  const { data } = useUserGetMyCart(useremail);
  console.log("dataaaaaaaaaaa");
  // console.log(data.cart.length);
  console.log(data);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setUseremail(email);
  }, []);

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
            className="text-lg pb-[2px] hover:text-black duration-500   mr-10"
          >
            Home
          </Link>

          <ProductsDropdown />

          <Link
            href="/about"
            className="text-lg pb-[2px] hover:text-black duration-500    mr-10"
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className="text-lg pb-[2px] hover:text-black duration-500 "
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

          <div className="relative hidden lg:block">
            {/* {useremail && cartData ? (
              <p className="absolute -top-[10px] -right-[10px] text-[9px] font-bold text-[#000] bg-[#fff] flex justify-center items-center w-[15px] h-[15px] rounded-full ">
                {cartData?.cart.length}
              </p>
            ) : null} */}

            {useremail && data && data.cart ? (
              <p className="absolute -top-[10px] -right-[10px] text-[9px] font-bold text-[#000] bg-[#fff] flex justify-center items-center w-[15px] h-[15px] rounded-full ">
                {data.cart.length}
              </p>
            ) : null}
            {/* <p className="absolute -top-[10px] -right-[10px] text-[9px] font-bold text-[#000] bg-[#fff] flex justify-center items-center w-[15px] h-[15px] rounded-full ">
              1
            </p> */}

            <BsCartDashFill
              className="cursor-pointer "
              onClick={() => router.push("/cart")}
            />
          </div>
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
                className="text-lg pb-[2px] w-fit hover:text-black  duration-500 "
              >
                Home
              </Link>
              <ProductsDropdown />
              <Link
                href="/about"
                className="text-lg pb-[2px] w-fit hover:text-black duration-500 "
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-lg pb-[2px] w-fit hover:text-black duration-500 "
              >
                Contact
              </Link>
            </ul>

            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center gap-5">
                <SearchInput />{" "}
                <BiSearch className="cursor-pointer text-[40px]" />
              </div>

              <div className="flex justify-between items-center relative">
                <span className="text-lg hover:text-black duration-500 ">
                  My Cart
                </span>
                <p className=" absolute -top-[10px] -right-[10px] text-[10px] font-bold text-[#000] bg-[#fff] flex lg:hidden justify-center items-center w-[15px] h-[15px] rounded-full ">
                  1
                </p>
                <BsCartDashFill
                  className="cursor-pointer text-[30px]"
                  onClick={() => router.push("/cart")}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg hover:text-black duration-500 ">
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
