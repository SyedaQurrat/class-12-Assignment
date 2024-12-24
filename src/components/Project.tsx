import React from "react";
import Section from "./Section";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import Image from "next/image";
import image from "../../public/images/Work Together Image.png";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
});

const Project = () => {
  return (
    <>
      <div>
        {/* Achieved by Props */}
        <Section
          mainContainerWidth="w-full"
          mainContainerHeight="h-auto"
          paddingX="px-6 sm:px-10 lg:px-20"
          paddingY="py-10 sm:py-20"
          backgroundColor="bg-white"
          containerWidth="w-full sm:w-4/5 lg:w-2/3"
          containerHeight="h-auto"
          title="Project Management"
          description="Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
          buttonText="Get Started"
          innerContainerWidth="w-full sm:w-3/4 lg:w-1/2"
          innerContainerHight="h-auto"
          hcolor="text-[#212529]"
          pcolor="text-[#212529]"
        />

       
    
    




        <div className="w-full py-10 sm:py-20 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row items-center gap-10">
          {/* Left Section (Text and Button) */}
          <div className="w-full sm:w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left text-[#212529]">
              Work together
            </h1>
            <p className="text-lg sm:text-xl text-left text-[#212529]">
              With Whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="w-full sm:w-auto py-3 px-6 bg-[#4F9CF9] text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
              <span className="text-lg">Try it now</span> <FaArrowRight />
            </button>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full sm:w-1/2">
            <div className="w-full h-full bg-lightblue"></div>{" "}
            {/* Empty div for background color */}
            <Image src={image} alt="Work Together" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
