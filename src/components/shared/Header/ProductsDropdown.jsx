"use client";
import Link from "next/link";
import { useState } from "react";

export default function ProductsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative mr-10">
      <div
        className="group flex justify-center items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <Link href={"/products"} className="text-white">
          Categories
        </Link>
        <svg
          className={`ml-2 w-4 h-4 transform ${
            isDropdownOpen ? "rotate-180" : ""
          } transition-transform duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <ul
        className={`absolute z-20 mt-2 space-y-2 bg-gray-800 text-white ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link href="/category/electronics" onClick={closeDropdown}>
            Electronics
          </Link>
        </li>
        <li>
          <Link href="/category/clothing" onClick={closeDropdown}>
            Clothing
          </Link>
        </li>
        <li>
          <Link href="/category/home" onClick={closeDropdown}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
}
