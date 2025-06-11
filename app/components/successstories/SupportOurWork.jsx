import React from "react";
import Link from "next/link";

const SupportOurWork = () => (
  <section className="w-full bg-[url('/bg-dots.png')] bg-[#f1f8fd] bg-cover bg-center py-14 px-4 flex flex-col items-center">
    <div className="max-w-2xl w-full mx-auto flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Support Our Work</h2>
      <p className="text-gray-600 text-base md:text-lg mb-7">
        Join us in creating more success stories. Your support can help transform lives<br />
        and build resilient communities across Nigeria.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/donate">
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-3 rounded-lg text-base transition">
            Donate Now
          </button>
        </Link>
        <button className="border-2 border-sky-500 text-sky-600 font-semibold px-8 py-3 rounded-lg text-base bg-white hover:bg-sky-50 transition">
          Become a Partner
        </button>
      </div>
    </div>
  </section>
);

export default SupportOurWork;
