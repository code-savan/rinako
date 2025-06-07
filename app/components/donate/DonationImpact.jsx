import React from "react";
import { Book, Heart, Home } from "lucide-react";

const DonationImpact = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Donation Makes an Impact
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            See how your contribution directly helps children and communities in need. Every dollar makes a difference
            in creating lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Education Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="bg-sky-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Book className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Education</h3>
            <p className="text-slate-600 mb-6">
              Your donation helps provide school supplies, educational materials, and scholarships to children who would otherwise not have access to education.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$25</span>
                <span className="text-slate-600">provides school supplies for one child</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$100</span>
                <span className="text-slate-600">funds a month of teacher training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$500</span>
                <span className="text-slate-600">builds a classroom library</span>
              </div>
            </div>
          </div>

          {/* Healthcare Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="bg-sky-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Healthcare</h3>
            <p className="text-slate-600 mb-6">
              Your support enables us to provide essential medical care, vaccinations, and health education to children and families in underserved communities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$50</span>
                <span className="text-slate-600">provides vaccinations for five children</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$150</span>
                <span className="text-slate-600">funds a mobile health clinic visit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$750</span>
                <span className="text-slate-600">equips a community health center</span>
              </div>
            </div>
          </div>

          {/* Community Support Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="bg-sky-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <Home className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Community Support</h3>
            <p className="text-slate-600 mb-6">
              We help build stronger communities through infrastructure projects, clean water initiatives, and economic empowerment programs for families.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$75</span>
                <span className="text-slate-600">provides clean water for a family</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$250</span>
                <span className="text-slate-600">funds a microfinance loan for a parent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-600 font-semibold">$1,000</span>
                <span className="text-slate-600">builds a community water well</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
