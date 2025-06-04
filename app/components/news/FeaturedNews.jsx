import React from "react";
import { Share2, Printer, Bookmark, ArrowRight } from "lucide-react";

const FeaturedNews = () => (
  <section className="w-full bg-transparent py-16 px-4 flex flex-col items-center">
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Featured News</h2>
      <p className="text-gray-500 text-center text-base md:text-lg max-w-2xl">
        Highlighting our most significant recent developments and announcements
      </p>
    </div>
    <div className="max-w-5xl w-full mx-auto bg-white rounded-2xl shadow overflow-hidden">
      {/* Image with overlayed badge, date, and title */}
      <div className="relative w-full">
        <img
          src="/featurednews.png"
          alt="Rinako Foundation Opens New Community Center in Borno State"
          className="w-full h-72 md:h-96 object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-8 pt-12 pb-6 flex flex-col justify-end rounded-b-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Press Release</span>
            <span className="text-gray-200 text-xs font-medium">May 20, 2025</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">Rinako Foundation Opens New Community Center in Borno State</h3>
        </div>
      </div>
      {/* Description and actions */}
      <div className="p-8 pt-6 flex flex-col gap-6">
        <p className="text-gray-700 text-base leading-relaxed">
          The Rinako Foundation is proud to announce the opening of a new multi-purpose community center in Borno State, Nigeria. The facility will serve as a hub for education, healthcare services, vocational training, and community gatherings. This milestone project, funded by international donors and built with local labor, represents our ongoing commitment to sustainable development and community resilience in conflict-affected regions.
        </p>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <button className="flex items-center gap-1 hover:text-sky-600 transition"><Share2 className="w-4 h-4" /> Share</button>
            <button className="flex items-center gap-1 hover:text-sky-600 transition"><Printer className="w-4 h-4" /> Print</button>
            <button className="flex items-center gap-1 hover:text-sky-600 transition"><Bookmark className="w-4 h-4" /> Save</button>
          </div>
          <a href="#" className="text-sky-600 text-base font-semibold flex items-center gap-1 hover:underline">
            Read Full Article <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedNews;
