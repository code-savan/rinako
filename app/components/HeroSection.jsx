"use client";
import * as React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col pt-20 justify-center items-center overflow-hidden relative min-h-[700px] font-sans text-white text-center w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a54d46a5c8a87f20358917024f17963f7f961e34?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative w-full md:w-[85%] -mt-20 max-w-screen-2xl items-center bg-gradient-to-r from-black/70 to-black/40 flex flex-col justify-center px-4 sm:px-8 py-12 sm:py-16 mx-auto">
        <div className="w-full max-w-2xl flex flex-col justify-start items-center mx-auto">
          <div className="flex flex-col w-full font-bold items-center">
            <div className="text-4xl sm:text-5xl leading-none self-center w-full max-w-full">
              Rinako Foundation
            </div>
            <div className="mt-4 w-full text-2xl sm:text-4xl leading-none">
              DONATE HELP
            </div>
            <div className="mt-4 w-full italic text-lg sm:text-3xl leading-7 sm:leading-9">
              kindness is the language which the deaf can
              <br />
              hear and the blind can see
            </div>
          </div>
          <div className="pb-2 opacity-90 mt-6 w-full text-base sm:text-xl font-normal leading-6 sm:leading-7">
            Empowering communities through education, healthcare, and support
            for
            <br />
            vulnerable children.
          </div>
          <div className="rounded-lg bg-sky-600 self-center mt-6 px-6 py-3 text-base font-medium cursor-pointer hover:bg-sky-700 transition-colors">
            Make a Donation
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
