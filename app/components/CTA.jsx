import * as React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

function CTA() {
  return (
    <section className="w-full bg-[#0488c9] py-16 flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">Stay Connected</h2>
      <p className="text-white text-center text-base mb-8 max-w-xl">
        Subscribe to our newsletter to receive updates about our work and ways to get involved.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center w-full max-w-2xl mb-8 gap-4 md:gap-0 mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full md:w-[500px] rounded-md px-5 py-3 text-base text-gray-700 bg-white focus:outline-none focus:ring-0 max-w-xl md:rounded-r-none md:rounded-l-md border border-transparent"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-white text-[#0488c9] font-semibold text-base px-8 py-3 rounded-md md:rounded-l-none md:rounded-r-md transition-colors border border-transparent hover:bg-sky-50 whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      <div className="flex gap-5 mt-2">
        <a href="#" className="w-10 h-10 rounded-full bg-blue-400/50 bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-40 transition-colors">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-blue-400/50 bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-40 transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-blue-400/50 bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-40 transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-blue-400/50 bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-40 transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-blue-400/50 bg-opacity-20 flex items-center justify-center text-white text-xl hover:bg-opacity-40 transition-colors">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

export default CTA;
