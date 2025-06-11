"use client";
import React, { useState } from "react";
import { HandCoins, UserPlus, Users, Clock } from "lucide-react";
import Link from "next/link";

const donationAmounts = ["$25", "$50", "$100", "$250", "$500", "Custom"];

const SupportUs = () => {
  const [selectedAmount, setSelectedAmount] = useState("$25");
  const [frequency, setFrequency] = useState("One-time");

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Support Our Programs</h2>
        <p className="text-gray-500 text-center text-base mb-10 max-w-2xl">
          Join us in making a difference. Your support enables us to continue our vital work in vulnerable communities.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Make a Donation */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="bg-sky-50 text-sky-500 rounded-full p-2 mr-3">
                <HandCoins className="w-6 h-6" />
              </span>
              <span className="font-semibold text-lg text-slate-800">Make a Donation</span>
            </div>
            <p className="text-gray-600 mb-6 text-base">
              Your financial contribution directly supports our programs and helps transform lives in vulnerable communities.
            </p>
            <div className="mb-4">
              <div className="font-medium text-slate-700 mb-2">Select Amount</div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {donationAmounts.map((amt) => (
                  <button
                    key={amt}
                    className={`py-2 rounded-lg border text-base font-medium transition-all ${selectedAmount === amt ? "bg-sky-50 border-sky-500 text-sky-700" : "bg-white border-gray-200 text-slate-700 hover:border-sky-400"}`}
                    onClick={() => setSelectedAmount(amt)}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <div className="font-medium text-slate-700 mb-2">Donation Frequency</div>
              <div className="flex gap-4">
                {["One-time", "Monthly", "Annually"].map((freq) => (
                  <label key={freq} className="flex items-center cursor-pointer gap-1 text-base text-slate-700">
                    <input
                      type="radio"
                      name="frequency"
                      value={freq}
                      checked={frequency === freq}
                      onChange={() => setFrequency(freq)}
                      className="accent-sky-500 w-4 h-4"
                    />
                    {freq}
                  </label>
                ))}
              </div>
            </div>
            <Link href="/donate" className="mt-auto">
              <button className="mt-auto w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg text-base transition">Donate Now</button>
            </Link>
          </div>

          {/* Volunteer Opportunities */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="bg-sky-50 text-sky-500 rounded-full p-2 mr-3">
                <UserPlus className="w-6 h-6" />
              </span>
              <span className="font-semibold text-lg text-slate-800">Volunteer Opportunities</span>
            </div>
            <p className="text-gray-600 mb-6 text-base">
              Share your skills and time to make a meaningful impact. We offer various volunteer positions both in-field and remotely.
            </p>
            <div className="flex flex-col gap-3 mb-4">
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Field Volunteers</div>
                <div className="text-gray-600 text-sm mb-1">Join our teams on the ground to directly support program implementation.</div>
                <div className="flex items-center text-gray-400 text-xs gap-1"><Clock className="w-4 h-4" /> Minimum 3 months commitment</div>
              </div>
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Remote Support</div>
                <div className="text-gray-600 text-sm mb-1">Provide technical expertise, administrative support, or creative services remotely.</div>
                <div className="flex items-center text-gray-400 text-xs gap-1"><Clock className="w-4 h-4" /> Flexible hours, project-based</div>
              </div>
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Skilled Professionals</div>
                <div className="text-gray-600 text-sm mb-1">Contribute specialized skills in healthcare, education, engineering, or IT.</div>
                <div className="flex items-center text-gray-400 text-xs gap-1"><Clock className="w-4 h-4" /> Short-term assignments available</div>
              </div>
            </div>
            <Link href="/volunteer-application" className="mt-auto">
              <button className="mt-auto w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg text-base transition">Apply to Volunteer</button>
            </Link>
          </div>

          {/* Partnership Opportunities */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
            <div className="flex items-center mb-4">
              <span className="bg-sky-50 text-sky-500 rounded-full p-2 mr-3">
                <Users className="w-6 h-6" />
              </span>
              <span className="font-semibold text-lg text-slate-800">Partnership Opportunities</span>
            </div>
            <p className="text-gray-600 mb-6 text-base">
              Collaborate with us to amplify impact. We welcome partnerships with organizations, businesses, and institutions.
            </p>
            <div className="flex flex-col gap-3 mb-4">
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Funding Partners</div>
                <div className="text-gray-600 text-sm">Support specific programs or general operations through grants, donations, or sponsorships.</div>
              </div>
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Implementation Partners</div>
                <div className="text-gray-600 text-sm">Collaborate on program delivery, combining resources and expertise for greater reach.</div>
              </div>
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Technical Partners</div>
                <div className="text-gray-600 text-sm">Provide specialized knowledge, technology, or services to enhance program effectiveness.</div>
              </div>
              <div className="bg-sky-50 rounded-lg p-4">
                <div className="font-semibold text-slate-800 mb-1">Corporate Social Responsibility</div>
                <div className="text-gray-600 text-sm">Engage your company in meaningful social impact initiatives aligned with your values.</div>
              </div>
            </div>
            <button className="mt-auto w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg text-base transition">Become a Partner</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
