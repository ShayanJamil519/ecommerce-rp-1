import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCartDashFill } from "react-icons/bs";
import LoginButton from "./LoginButton";

const navLink = [
  {
    linkText: "Home",
    linkTo: "/",
  },
  {
    linkText: "Our Products",
    linkTo: "/products",
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
  return (
    <header className="bg-[#4e4e4e]  w-[90%] mx-auto rounded-full bg-opacity-70 min-h-[100px] flex justify-between text-[#fff] py-8 px-12">
      {/* Left */}
      <div></div>
      {/* Middle */}
      <div className="flex justify-center items-center gap-10">
        {navLink.map((item, index) => (
          <Link
            href={item.linkTo}
            key={index}
            className="text-lg pb-[2px] hover:text-black hover:border-b-[1px] hover:border-black"
          >
            {item.linkText}
          </Link>
        ))}
      </div>
      {/* Right */}
      <div className="flex justify-center items-center gap-5 text-[#fff] text-2xl  font-bold">
        <BiSearch className="cursor-pointer" />

        <LoginButton />

        <BsCartDashFill className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
