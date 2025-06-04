import * as React from "react";

function SupportMission() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-white px-4">
      <h2 className="text-4xl font-bold text-slate-800 text-center mb-2">Support Our Mission</h2>
      <p className="text-gray-600 text-center text-base mb-10 max-w-xl">
        Your contribution can make a real difference in the lives of vulnerable children and communities.
      </p>
      {/* Donation and Volunteer Grid */}
      <div className="w-full max-w-4xl flex flex-col gap-8 mx-auto">
        {/* Donation Row */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Donation Input */}
          <div className="bg-gray-50 rounded-xl flex-1 p-6 flex flex-col justify-center min-w-[260px]">
            <div className="text-lg font-semibold text-slate-800 mb-3">Make a Donation</div>
            <label htmlFor="donation-amount" className="text-gray-600 text-sm mb-2">Enter Donation Amount</label>
            <input
              id="donation-amount"
              type="number"
              placeholder="$ Enter your donation amount"
              className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
          {/* Donate Button */}
          <div className="flex-1 flex items-center justify-center min-w-[260px]">
            <button className="w-full h-full min-h-[120px] bg-sky-600 hover:bg-sky-700 transition-colors text-white text-lg font-semibold rounded-xl flex items-center justify-center">
              Donate Now
            </button>
          </div>
        </div>
        {/* Volunteer Row */}
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col gap-4 relative">
          {/* Payment Icons */}

            <img src="/paygate.png" alt="Payment Icons" className="w-fit h-fit absolute -top-4 -left-10" />

          <div className="text-xl font-semibold text-slate-800 mb-1">Volunteer With Us</div>
          <p className="text-gray-600 text-base mb-4">
            Join our global community of volunteers making a difference in the lives of vulnerable children and communities.
          </p>
          {/* Volunteer Types */}
          <div className="flex flex-col gap-3 mb-4">
            <div className="flex items-start gap-3">
              <span className="bg-sky-100 text-sky-600 rounded-full p-2 mt-0.5"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84L18 7.27l-3.91 3.81L14.82 18 10 15.27 5.18 18l.73-6.92L2 7.27l5.61-.43L10 2z" fill="currentColor"/></svg></span>
              <div>
                <div className="font-semibold text-slate-800">International Volunteering</div>
                <div className="text-gray-600 text-base">Join our teams on the ground for 2-12 week programs.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-sky-100 text-sky-600 rounded-full p-2 mt-0.5"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" fill="currentColor"/><path d="M10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" fill="currentColor"/></svg></span>
              <div>
                <div className="font-semibold text-slate-800">Local Initiatives</div>
                <div className="text-gray-600 text-base">Support our work from your community through events and fundraising.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-sky-100 text-sky-600 rounded-full p-2 mt-0.5"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="5" width="14" height="10" rx="2" fill="currentColor"/><rect x="7" y="9" width="6" height="2" rx="1" fill="#fff"/></svg></span>
              <div>
                <div className="font-semibold text-slate-800">Virtual Volunteering</div>
                <div className="text-gray-600 text-base">Contribute your skills remotely in areas like translation, design, and mentoring.</div>
              </div>
            </div>
          </div>
          <button className="w-full bg-sky-600 hover:bg-sky-700 transition-colors text-white text-base font-semibold rounded-lg py-3 mt-2">
            Apply to Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}

export default SupportMission;
