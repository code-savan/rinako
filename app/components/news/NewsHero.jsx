import React from "react";

const NewsHero = () => (
  <section className="relative w-full h-[500px] flex items-center bg-gray-900 overflow-hidden">
    <img
      src="/newshero.png"
      alt="News Hero"
      className="absolute inset-0 w-full h-full object-cover object-center z-0"
      draggable="false"
    />
    {/* <div className="absolute inset-0 bg-black/60 z-10" /> */}
    <div className="relative z-20 max-w-7xl px-6 flex flex-col items-start justify-center h-full w-full mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest News & Updates</h1>
      <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-snug mb-6">
        Stay informed about our ongoing projects, impact stories, and upcoming events.<br />
        Transparency and communication are at the heart of our mission to create lasting change.
      </p>
      <nav className="flex items-center text-white/80 text-sm gap-2">
        <span className="hover:underline cursor-pointer">Home</span>
        <span className="mx-1">/</span>
        <span className="text-white font-medium">News & Updates</span>
      </nav>
    </div>
  </section>
);

export default NewsHero;
