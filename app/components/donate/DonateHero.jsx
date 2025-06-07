import React from "react";

const DonateHero = () => (
  <section className="relative w-full h-[500px] lg:h-[420px] flex items-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1505155485412-30b3a45080ec?q=80&w=2962" // Replace with your actual image path
      alt="Children in classroom"
      className="absolute inset-0 w-full h-full object-cover object-top z-0"
      draggable={false}
    />
    <div className="absolute inset-0 bg-black/10 z-10" />
    <div className="mx-auto w-full max-w-7xl px-6">


    <div className="relative z-20 max-w-2xl  w-full bg-white/90 rounded-2xl shadow-lg px-6 py-8 md:px-10 md:py-10 flex flex-col gap-3">
      <h1 className="text-2xl md:text-4xl font-bold text-slate-900">Make a Difference Today</h1>
      <p className="text-slate-700 text-base md:text-lg font-normal">
        Your donation helps us provide education, healthcare, and support to vulnerable children around the world. Together, we can create lasting change.
      </p>
      <div className="flex gap-4 mt-2">
        <button className="bg-sky-600 hover:bg-sky-700 transition-colors text-white font-semibold text-base px-6 py-2 rounded-md shadow">
          Donate Now
        </button>
        <button className="border border-sky-600 text-sky-700 hover:bg-sky-50 font-semibold text-base px-6 py-2 rounded-md">
          See Your Impact
        </button>
      </div>
    </div>
    </div>
  </section>
);

export default DonateHero;
