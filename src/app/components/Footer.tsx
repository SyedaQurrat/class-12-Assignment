import React from "react";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <>
      <div className="w-full py-10 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-[#043873]">
        <div className={`w-full flex flex-col gap-8 ${inter.className}`}>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
            {/* Logo and Description */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
              <div className="flex items-center gap-4">
                <Image src={logo} alt="logo" className="w-auto h-8" />
                <h1 className="font-bold text-2xl text-white">Whitepace</h1>
              </div>
              <p className="text-base leading-6 text-white">
                Whitepace was created for the new ways we live and work. We make
                better workspaces around the world.
              </p>
            </div>

            {/* Product Section */}
            <div className="flex flex-col gap-3 w-full md:w-1/4">
              <p className="text-lg font-bold text-white">Product</p>
              <p className="text-base text-white">Overview</p>
              <p className="text-base text-white">Pricing</p>
              <p className="text-base text-white">Customer stories</p>
            </div>

            {/* Resources Section */}
            <div className="flex flex-col gap-3 w-full md:w-1/4">
              <p className="text-lg font-bold text-white">Resources</p>
              <p className="text-base text-white">Blog</p>
              <p className="text-base text-white">Guides & tutorials</p>
              <p className="text-base text-white">Help center</p>
            </div>

            {/* Company Section */}
            <div className="flex flex-col gap-3 w-full md:w-1/4">
              <p className="text-lg font-bold text-white">Company</p>
              <p className="text-base text-white">About us</p>
              <p className="text-base text-white">Careers</p>
              <p className="text-base text-white">Media kit</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-center">
            <p className="text-sm text-white">©2021 Whitepace LLC.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
