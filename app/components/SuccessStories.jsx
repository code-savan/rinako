import * as React from "react";

function SuccessStories() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white px-4">
      <h2 className="text-4xl font-bold text-slate-800 text-center mb-2">Success Stories</h2>
      <p className="text-gray-600 text-center text-base mb-10 max-w-xl">
        Real stories of transformation and hope from the communities we serve.
      </p>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden mx-auto">
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto flex-shrink-0">
          <img
            src="/story1.png"
            alt="Success story"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Testimonial */}
        <div className="flex flex-col justify-start px-6 py-8 md:py-0 h-fit md:w-1/2 w-full">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 text-sky-200"
          >
            <text x="0" y="28" fontSize="32" fill="#BAE6FD">“</text>
          </svg>
          <blockquote className="italic text-slate-700 text-lg leading-relaxed mb-4">
            "The Rinako Foundation changed my life. After losing my parents, I had no hope for education. Now I'm in my final year of nursing school and will soon help others in my community."
          </blockquote>
          <div className="font-bold text-slate-800 text-lg mb-1">Amina Ibrahim</div>
          <div className="text-gray-600 text-base mb-4">Nursing Student, Tanzania</div>
          {/* Carousel Dots */}
          <div className="flex gap-2 mt-auto">
            <span className="w-3 h-3 rounded-full bg-sky-200 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-sky-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-sky-200 inline-block"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
