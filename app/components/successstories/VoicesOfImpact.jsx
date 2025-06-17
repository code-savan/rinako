"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star, ArrowRightCircle } from "lucide-react";

const testimonials = [
  {
    img: "/change1.png",
    name: "Fatima Ibrahim",
    role: "Microfinance Program Beneficiary",
    text: (
      <>
        "Before Rinako Foundation, I
struggled to feed my children after
losing my husband. The
microfinance program helped me
start my food business. Now I can
pay for my children's education and
even save for the future. My life has
completely changed."
      </>
    ),
    location: "Maiduguri, Nigeria",
    link: "#",
  },
  {
    img: "/change2.png",
    name: "Ibrahim Mohammed",
    role: "Digital Skills Program Graduate",
    text: (
      <>
        "The digital skills training opened
doors I never thought possible. I
now work remotely for a tech
company in Lagos while still living in
my community. I've trained five other
young people who are now also
employed. Thank you, Rinako
Foundation!"
      </>
    ),
    location: "Yobe State, Nigeria",
    link: "#",
  },
  {
    img: "/change3.png",
    name: "Alhaji Musa",
    role: "Village Head, Gwoza Community",
    text: (
      <>
        "The clean water project has
transformed our village. Before,
many children fell sick from
waterborne diseases. Now, our
community is healthier, children
attend school regularly, and women
spend less time fetching water. We
are grateful to Rinako Foundation."
      </>
    ),
    location: "Borno State, Nigeria",
    link: "#",
  },
];

const VoicesOfImpact = () => {
  const [index, setIndex] = useState(1); // Center card

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  // For 3-card carousel, always show [index-1, index, index+1] (circular)
  const getCard = (offset) => {
    const i = (index + offset + testimonials.length) % testimonials.length;
    return testimonials[i];
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Voices of Change</h2>
        <p className="text-gray-500 text-center text-base mb-10 max-w-2xl">
        Hear directly from those whose lives have been transformed

        </p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {[ -1, 0, 1 ].map((offset, idx) => {
              const t = getCard(offset);
              return (
                <div
                  key={t.name}
                  className={
                    "relative bg-white rounded-2xl shadow p-8 flex flex-col h-full transition-all duration-300" +
                    (offset === 0 ? " z-10" : " opacity-80 scale-95 md:scale-100")
                  }
                >
                  {/* Left arrow on first card */}
                  {offset === -1 && (
                    <button
                      aria-label="Previous"
                      onClick={prev}
                      className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-sky-50 z-20"
                    >
                      <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </button>
                  )}
                  {/* Right arrow on last card */}
                  {offset === 1 && (
                    <button
                      aria-label="Next"
                      onClick={next}
                      className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-sky-50 z-20"
                    >
                      <ArrowRight className="w-5 h-5 text-slate-500" />
                    </button>
                  )}
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div>
                      <div className="font-bold text-lg text-slate-800 leading-tight">{t.name}</div>
                      <div className="text-gray-500 text-sm leading-tight">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="italic text-slate-700 text-base leading-relaxed mb-2">
                    {t.text}
                  </blockquote>
                  <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mt-auto">
                    <span>{t.location}</span>
                    <a
                      href={t.link}
                      className="text-sky-600 font-medium ml-auto flex items-center gap-1 hover:underline"
                    >
                      Read Full Story <ArrowRightCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={
                "w-3 h-3 rounded-full " +
                (i === index ? "bg-sky-400" : "bg-gray-200")
              }
            />
          ))}
        </div>
        {/* <button
          className="mt-2 px-8 py-3 border-2 border-sky-500 text-sky-700 font-semibold rounded-lg bg-white hover:bg-sky-50 transition text-base"
        >
          View All Success Stories
        </button> */}
      </div>
    </section>
  );
};

export default VoicesOfImpact;
