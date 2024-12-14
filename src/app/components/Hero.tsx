
  import React from "react";
  import Section from "./Section";
  import { FaArrowRight } from "react-icons/fa";
  import { Inter } from "next/font/google";

  const inter = Inter({
    weight: ["500"],
    subsets: ["latin"],
  });

  const Hero = () => {
    return (
      <>
        {/* Responsive Section */}
        <Section
          mainContainerWidth="w-full"
          mainContainerHeight="min-h-screen"
          paddingX="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
          paddingY="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
          backgroundColor="bg-[#043873]"
          containerWidth="w-full md:w-[70%] lg:w-[50%]"
          containerHeight="h-auto"
          title="Get More Done with Whitepace"
          description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
          buttonText="Try Whitepace free"
          innerContainerWidth="hidden md:block w-full md:w-[40%]"
          innerContainerHight="h-auto md:h-[400px] lg:h-[500px]"
          hcolor="text-white text-2xl md:text-4xl lg:text-5xl font-bold"
          pcolor="text-white text-base md:text-lg lg:text-xl"
        />
      </>
    );
  };

  export default Hero;
