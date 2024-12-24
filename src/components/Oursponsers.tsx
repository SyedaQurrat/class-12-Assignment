import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import apple from "../../public/images/Apple.png";
import microsoft from "../../public/images/microsoft 1.png";
import slack from "../../public/images/Slack_Technologies_Logo 1.png";
import google from "../../public/images/Group 246.png";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Oursponsers = () => {
  return (
    <>
      <div className="w-full py-10 px-6 sm:px-8 md:px-16 lg:px-24 flex flex-col gap-10 bg-white">
        {/* Heading */}
        <div className="w-full text-center">
          <h1
            className={`${inter.className} font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-2%] text-[#212529]`}
          >
            Our Sponsors
          </h1>
        </div>

        {/* Logos Section */}
        <div className="w-full flex flex-wrap justify-center items-center gap-6">
          <li className="list-none">
            <Image
              src={apple}
              alt="apple logo"
              className="w-18 sm:w-12 md:w-10"
            />
          </li>
          <li className="list-none">
            <Image
              src={microsoft}
              alt="microsoft logo"
              className="w-28 sm:w-32 md:w-40"
            />
          </li>
          <li className="list-none">
            <Image
              src={slack}
              alt="slack logo"
              className="w-28 sm:w-32 md:w-40"
            />
          </li>
          <li className="list-none">
            <Image
              src={google}
              alt="google logo"
              className="w-28 sm:w-32 md:w-40"
            />
          </li>
        </div>
      </div>
    </>
  );
};

export default Oursponsers;
