import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Ourwork = () => {
  return (
    <>
      <div className="w-full py-10 px-6 sm:px-8 md:px-16 lg:px-24 bg-[#043873] flex flex-col items-center">
        <div className="w-full max-w-4xl flex flex-col gap-6 items-center">
          {/* Heading and Paragraph */}
          <div className={`flex flex-col gap-4 text-center ${inter.className}`}>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
              Your work, everywhere you are
            </h1>
            <p className="font-normal text-base sm:text-lg leading-6 sm:leading-7 text-white">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 rounded-lg py-4 px-6 bg-[#4F9CF9] flex items-center gap-2 hover:bg-blue-600 transition">
            <p className="font-medium text-lg text-white flex items-center gap-2">
              Try Taskey <FaArrowRight />
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ourwork;
