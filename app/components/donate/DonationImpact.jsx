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
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Provides school supplies for children</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Funds teacher training and development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Builds classroom libraries and learning spaces</span>
              </li>
            </ul>
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
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Provides vaccinations for children</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Funds mobile health clinic visits</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Equips community health centers</span>
              </li>
            </ul>
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
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Provides clean water for families</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Funds microfinance loans for parents</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5 6-7" /></svg>
                </span>
                <span className="text-slate-600">Builds community water wells</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
