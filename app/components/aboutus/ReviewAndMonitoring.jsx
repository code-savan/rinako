import React from "react";
import { Eye, ShieldCheck, Lightbulb } from "lucide-react";

const monitoringList = [
  "Real-time project tracking",
  "Quality assurance checks",
  "Timeline adherence monitoring",
  "Impact assessment",
];

const financialList = [
  "Regular financial audits",
  "Detailed transaction records",
  "Public financial reports",
];

const qualityList = [
  "International compliance",
  "Best practice implementation",
  "Regular quality assessments",
];

const ReviewAndMonitoring = () => (
  <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Review & Monitoring</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        Our commitment to excellence through rigorous project oversight and quality assurance.
      </p>
      <div className="w-full bg-white rounded-2xl shadow p-8 md:p-12 flex flex-col md:flex-row gap-10 items-stretch">
        {/* Project Monitoring */}
        <div className="flex-1 flex flex-col items-start">
          <div className="bg-sky-100 rounded-full p-3 mb-4 flex items-center justify-center">
            <Eye className="w-6 h-6 text-sky-500" />
          </div>
          <div className="font-bold text-slate-800 text-lg mb-2">Project Monitoring</div>
          <div className="text-gray-600 text-base mb-4">
            Close supervision and monitoring of projects is key to ensuring quality and sustainable projects. Our dedicated team of observant monitors reviews and monitors all projects Rinako Foundation implements.
          </div>
          <ul className="text-sky-600 text-base space-y-2">
            {monitoringList.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> <span className="text-black">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Accounts & Audits */}
        <div className="flex-1 flex flex-col items-start">
          <div className="bg-sky-100 rounded-full p-3 mb-4 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-sky-500" />
          </div>
          <div className="font-bold text-slate-800 text-lg mb-2">Accounts & Audits</div>
          <div className="text-gray-600 text-base mb-4">
            Rinako Foundation operates with complete transparency in the management of funds, receipts, and payments.
          </div>
          {/* Financial Transparency */}
          <div className="bg-gray-50 rounded-xl p-5 mb-4 w-full">
            <div className="font-bold text-slate-800 text-base mb-2">Financial Transparency</div>
            <ul className="text-sky-600 text-base space-y-2">
              {financialList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Quality Standards */}
          <div className="bg-gray-50 rounded-xl p-5 w-full">
            <div className="font-bold text-slate-800 text-base mb-2">Quality Standards</div>
            <ul className="text-sky-600 text-base space-y-2">
              {qualityList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ReviewAndMonitoring;
