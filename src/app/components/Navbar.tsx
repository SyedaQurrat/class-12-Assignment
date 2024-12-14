import React from "react";
import logo from "../../../public/Logo.png";
import Image from "next/image";

import { DM_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const Dmsans = DM_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <>
      <div className="w-full py-4 px-6 md:px-10 lg:px-20 xl:px-28 bg-[#043873] flex justify-between items-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-[120px] h-auto md:w-[160px] lg:w-[191px]"
        />
        {/* Nav Items and Button */}
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          {/* Navigation Links */}
          <ul
            className={`hidden md:flex list-none ${Dmsans.className} text-white gap-6 md:gap-8 lg:gap-10 text-sm md:text-base lg:text-lg font-medium`}
          >
            <li className="hover:text-[#FFE492] cursor-pointer hover:underline">
              Products
            </li>
            <li className="hover:text-[#FFE492] cursor-pointer hover:underline">
              Solutions
            </li>
            <li className="hover:text-[#FFE492] cursor-pointer hover:underline">
              Resources
            </li>
            <li className="hover:text-[#FFE492] cursor-pointer hover:underline">
              Pricing
            </li>
          </ul>

          {/* Login Button */}
          <button className="hidden md:flex py-2 px-4 md:px-6 lg:px-8 rounded-lg bg-[#FFE492] hover:bg-[#ffd865] transition-all">
            <p
              className={`font-medium text-sm md:text-base lg:text-lg ${inter.className} tracking-[-2%] text-[#043873]`}
            >
              Login
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
