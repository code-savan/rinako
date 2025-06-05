import React from "react";

const CTA2 = () => (
  <section className="w-full py-12 px-4 flex flex-col items-center">
    <div className="max-w-5xl bg-[#F9FAFB] w-full mx-auto rounded-3xl shadow flex flex-col md:flex-row items-stretch overflow-hidden">
      {/* Left: Form */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Stay Connected</h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">Subscribe to our newsletter to receive updates about our work, impact stories, and upcoming events.</p>
        <form className="w-full flex flex-col gap-4">
            <div className="flex ">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-l-xl border border-gray-200 bg-white px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-sky-200 placeholder-gray-400"
          />
          <button type="submit" className="w-52 cursor-pointer bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 px-2 rounded-r-lg text-base transition ">Subscribe Now</button>
            </div>
          <div className="mb-2">
            <div className="text-slate-700 text-sm font-medium mb-2">Preferences:</div>
            <div className="flex flex-wrap gap-2 text-base text-slate-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-sky-600 w-5 h-5" /> Monthly Newsletter
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-sky-600 w-5 h-5" /> Event Invitations
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-sky-600 w-5 h-5" /> Annual Reports
              </label>
            </div>
          </div>

        </form>
        <div className="text-gray-400 text-sm mt-4">
          By subscribing, you agree to our <a href="#" className="text-sky-600 underline">Privacy Policy</a>. You can unsubscribe at any time.
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1  flex items-center justify-center p-4 md:p-12">
        <img src="/connected.png" alt="Newsletter" className="w-full " />
      </div>
    </div>
  </section>
);

export default CTA2;
