import React from "react";

const ProgramsHero = () => (
  <section className="relative w-full h-[500px] flex items-center bg-black/70 overflow-hidden">
    <img
      src="/programs-hero-bg.jpg"
      alt="Our Programs"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
    />
    <div className="absolute inset-0 bg-black/60 z-10" />
    <div className="relative z-20 flex flex-col items-start justify-center h-full w-full max-w-7xl px-6 mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">Our Programs</h1>
      <p className="text-white text-lg md:text-xl font-normal mb-8 max-w-2xl drop-shadow-md">
        Rinako Foundation implements a diverse range of humanitarian programs designed to<br className="hidden md:block" />
        empower vulnerable communities, foster sustainable development, and create lasting<br className="hidden md:block" />
        positive change across Nigeria and beyond.
      </p>
      <a
        href="#programs-list"
        className="bg-sky-600 hover:bg-sky-700 transition-colors text-white font-semibold text-base px-8 py-3 rounded-lg shadow flex items-center"
      >
        Explore Our Programs <span className="ml-2 text-xl">→</span>
      </a>
    </div>
  </section>
);

export default ProgramsHero;
