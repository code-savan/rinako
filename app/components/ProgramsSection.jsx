"use client";
import React from "react";
import ArrowIcon from "./ArrowIcon";

function ProgramCard({ imageUrl, altText, title, description }) {
  return (
    <div className="flex w-full flex-col items-start self-stretch rounded-2xl bg-white shadow-lg">
      <div className="flex h-56 flex-col justify-center items-start self-stretch">
        <img
          src={imageUrl}
          alt={altText}
          className="max-w-[480px] lg:max-w-[480px] md:max-w-full flex-1 self-stretch rounded-t-2xl object-cover"
        />
      </div>
      <div className="flex p-6 sm:p-5 flex-col items-start gap-3 self-stretch">
        <h3 className="self-stretch text-slate-800 font-inter text-xl sm:text-lg font-bold leading-7 sm:leading-6">
          {title}
        </h3>
        <p className="self-stretch text-gray-600 font-inter text-base sm:text-sm font-normal leading-6 sm:leading-5">
          {description}
        </p>
        <div className="flex pt-0.5 items-center cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-sky-600 font-inter text-base sm:text-sm font-medium leading-6 sm:leading-5">
            Learn More
          </span>
          <div className="flex p-[3px_0_4px_4px] flex-col items-start">
            <div className="flex flex-col items-start">
              <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramsSection() {
  const programs = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/960d9768e045d09ec861315a6c849a1622e35151?placeholderIfAbsent=true",
      altText: "Education Program",
      title: "Education",
      description:
        "Providing quality education, building schools, training teachers, and supplying learning materials to empower the next generation.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7835dd89b836ac71830e968662e112166750aa5e?placeholderIfAbsent=true",
      altText: "Healthcare Program",
      title: "Healthcare",
      description:
        "Improving access to quality healthcare through mobile clinics, medical supplies, and training community health workers.",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9019ba78d76d8f47718c6bb02ba069f2df17dc00?placeholderIfAbsent=true",
      altText: "Orphan Support Program",
      title: "Orphan Support",
      description:
        "Providing safe homes, education, healthcare, and emotional support to orphaned children to help them thrive.",
    },
  ];

  return (
    <section className="flex py-20 sm:py-15 flex-col items-center self-stretch bg-gray-50 w-full px-4">
      <div className="flex w-full max-w-[1536px] lg:px-6 sm:px-4 flex-col items-start gap-16 lg:gap-12 sm:gap-8 mx-auto">
        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <h2 className="self-stretch text-slate-800 text-center font-inter text-4xl lg:text-3xl sm:text-2xl font-bold leading-10 lg:leading-9 sm:leading-8">
            Our Programs
          </h2>
          <div className="w-full max-w-xl text-gray-600 text-center font-inter text-base font-normal leading-6 mx-auto">
            We focus on sustainable development through three key areas to
            create lasting change in communities.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-5 sm:gap-6 lg:gap-8 items-center self-stretch w-full">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              imageUrl={program.imageUrl}
              altText={program.altText}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
