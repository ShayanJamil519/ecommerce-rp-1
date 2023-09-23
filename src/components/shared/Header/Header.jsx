"use client";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCartDashFill } from "react-icons/bs";
import LoginButton from "./LoginButton";
import ProductsDropdown from "./ProductsDropdown";
import { useStateContext } from "../../../Context/StateContext";
import SearchInput from "@/components/shared/SearchInput";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  return (
    <header className="bg-[#4e4e4e]  w-[90%] mx-auto rounded-full bg-opacity-70 min-h-[110px] flex justify-between text-[#fff] py-8 px-12">
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

        <BiSearch className="cursor-pointer" onClick={handleSearchModelOpen} />

        <LoginButton />

        <BsCartDashFill
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
      </div>
    </header>
  );
};

export default Header;
