import React from "react";

const FeaturedStory = () => (
  <section className="w-full bg-transparent py-16 px-4 flex flex-col items-center">
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Featured Story</h2>
      <p className="text-gray-500 text-center text-base md:text-lg max-w-2xl">
        Highlighting extraordinary transformations and life-changing impacts
      </p>
    </div>
    <div className="max-w-5xl w-full mx-auto bg-white rounded-2xl shadow flex flex-col md:flex-row overflow-hidden">
      {/* Image */}
      <div className="md:w-1/2 w-full flex-shrink-0">
        <img
          src="/featuredstory.png"
          alt="Amina and children"
          className="w-full h-full object-cover object-center md:rounded-l-2xl md:rounded-tr-none rounded-t-2xl"
        //   style={{ minHeight: 380, maxHeight: 480 }}
        />
      </div>
      {/* Story Content */}
      <div className="md:w-1/2 w-full flex flex-col p-8 justify-center h-fit">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full">Women Empowerment</span>
          <span className="text-gray-400 text-xs font-medium">May 10, 2025</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 leading-snug">From Displacement to Entrepreneurship: Amina's Journey</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          After fleeing insurgency in northeastern Nigeria, Amina Yusuf and her four children found themselves in a displacement camp with no means of livelihood. Through Rinako Foundation's Women Economic Empowerment program, Amina received vocational training in tailoring and a microloan to start her business. Today, she owns a thriving tailoring shop, employs three other women, and all her children are back in school.
        </p>
        <div className="flex gap-4 mb-6 w-full">
          <div className="bg-sky-50 rounded-xl px-6 py-4 flex-1 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-sky-600 mb-1">300%</div>
            <div className="text-gray-500 text-sm font-medium">Income Increase</div>
          </div>
          <div className="bg-sky-50 rounded-xl px-6 py-4 flex-1 flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-bold text-sky-600 mb-1">4</div>
            <div className="text-gray-500 text-sm font-medium">Jobs Created</div>
          </div>
        </div>
        <button className="mt-auto w-full md:w-fit bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg text-base transition flex items-center justify-center gap-2">
          Read Full Story <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </button>
      </div>
    </div>
  </section>
);

export default FeaturedStory;
