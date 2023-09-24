"use client";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function ProductsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative lg:mr-10">
      <div
        className="group flex justify-start lg:justify-center items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <Link
          href={"/products"}
          className="text-lg hover:text-black duration-500 "
        >
          Categories
        </Link>
        <MdKeyboardArrowDown
          className={`ml-5 transform text-[24px] ${
            isDropdownOpen ? "rotate-180" : ""
          } transition-transform duration-300`}
        />
      </div>

      <ul
        className={`relative lg:absolute z-20 w-[100%] p-3 text-lg rounded-md mt-2 space-y-4 lg:space-y-5 bg-[#717171] text-white ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            href="/category/electronics"
            onClick={closeDropdown}
            className="text-lg hover:text-black duration-500"
          >
            Electronics
          </Link>
        </li>
        <li>
          <Link
            href="/category/clothing"
            onClick={closeDropdown}
            className="text-lg hover:text-black duration-500"
          >
            Clothing
          </Link>
        </li>
        <li>
          <Link
            href="/category/home"
            onClick={closeDropdown}
            className="text-lg hover:text-black duration-500"
          >
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
