import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// Props interface
interface SectionProps {
  mainContainerWidth?: string;
  mainContainerHeight?: string;
  paddingX?: string;
  paddingY?: string;
  backgroundColor?: string;
  containerWidth?: string;
  containerHeight?: string;
  title: string;
  description: string;
  buttonText: string;
  innerContainerWidth: string;
  innerContainerHight: string;
  hcolor?: string;
  pcolor?: string;
  style?: string;
}

const Section = ({
  mainContainerWidth = "",
  mainContainerHeight = "",
  paddingX = "",
  paddingY = "",
  backgroundColor = "",
  containerWidth = "",
  containerHeight = "",
  title = "",
  description = "",
  buttonText = "",
  innerContainerWidth = "",
  innerContainerHight = "",
  hcolor = "",
  pcolor = "",
  style = "",
}: SectionProps) => {
  return (
    <div
      className={`${mainContainerWidth} ${mainContainerHeight} ${paddingY} ${paddingX} ${style} flex items-center justify-center ${backgroundColor}`}
    >
      <div
        className={`${containerWidth} ${containerHeight} ${inter.className} flex flex-col md:flex-row md:justify-between items-center gap-8 p-6 sm:p-8 md:p-10`}
      >
        {/* Text Content */}
        <div className="flex flex-col gap-6 max-w-xl text-center sm:text-left">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${hcolor}`}
          >
            {title}
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl ${pcolor}`}>
            {description}
          </p>

          {/* Button below paragraph */}
          <button className="flex items-center justify-center gap-2 w-full sm:w-[200px] h-[50px] sm:h-[60px] mt-6 rounded-lg bg-[#4F9CF9] hover:bg-[#347CCF] text-sm sm:text-lg font-medium text-white transition-all">
            {buttonText} <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Decorative Inner Container (Centered on Small Screens) */}
      <div
        className={`${innerContainerWidth} ${innerContainerHight} gap-1 bg-[#C4DEFD] rounded-lg md:ml-10 flex justify-center items-center sm:w-full mx-auto`}
      ></div>
    </div>
  );
};

export default Section;
