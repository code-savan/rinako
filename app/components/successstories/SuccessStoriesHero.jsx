import React from "react";

const SuccessStoriesHero = () => (
  <section className="relative w-full  h-[500px] flex items-center bg-gray-900 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1727473704233-9b4aa9d6e82c?q=80&w=2940"
      alt="Success Stories Hero"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      draggable="false"
    />
    <div className="absolute inset-0 bg-black/40 z-10" />
    <div className="relative z-20 max-w-7xl px-6 flex flex-col items-start justify-center h-full w-full mx-auto ">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Success Stories</h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-snug">
        Real stories of hope, resilience, and transformation from the communities we serve.<br />
        Discover how Rinako Foundation is making a lasting impact in the lives of vulnerable populations across Nigeria and beyond.
      </p>
    </div>
  </section>
);

export default SuccessStoriesHero;
