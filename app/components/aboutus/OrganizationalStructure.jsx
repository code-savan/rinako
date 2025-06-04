import React from "react";

const orgData = [
  {
    title: "Operations",
    desc: (
      <>
        Program implementation, logistics, security
        <ul className="mt-2 list-disc list-inside text-gray-500 text-sm">
          <li>Field Operations</li>
          <li>Logistics & Supply Chain</li>
          <li>Security & Risk Management</li>
        </ul>
      </>
    ),
  },
  {
    title: "Programs",
    desc: (
      <>
        Design, monitoring, evaluation
        <ul className="mt-2 list-disc list-inside text-gray-500 text-sm">
          <li>Education Programs</li>
          <li>Healthcare Initiatives</li>
          <li>Orphan Support Services</li>
          <li>Research & Development</li>
        </ul>
      </>
    ),
  },
  {
    title: "Support Functions",
    desc: (
      <>
        Enabling organizational success
        <ul className="mt-2 list-disc list-inside text-gray-500 text-sm">
          <li>Finance & Administration</li>
          <li>Human Resources</li>
          <li>Communications & Fundraising</li>
          <li>IT & Knowledge Management</li>
        </ul>
      </>
    ),
  },
];

const OrganizationalStructure = () => (
  <section className="w-full bg-gray-50 py-20 px-4 flex flex-col items-center">
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Organizational Structure</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        Our organization is structured to maximize efficiency and impact across all our programs.
      </p>
      <div className="w-full bg-white rounded-2xl shadow p-6 md:p-10 flex flex-col gap-6">
        {/* Board of Directors */}
        <div className="bg-sky-100 rounded-lg py-5 px-4 flex flex-col items-center mb-2">
          <div className="text-sky-700 font-bold text-lg md:text-xl">Board of Directors</div>
          <div className="text-gray-600 text-base mt-1">Strategic oversight and governance</div>
        </div>
        <div className="flex justify-center text-sky-400 text-2xl">↓</div>
        {/* Executive Director */}
        <div className="bg-sky-100 rounded-lg py-5 px-4 flex flex-col items-center mb-2">
          <div className="text-sky-700 font-bold text-lg md:text-xl">Executive Director</div>
          <div className="text-gray-600 text-base mt-1">Organizational leadership and vision</div>
        </div>
        <div className="flex justify-center text-sky-400 text-2xl">↓</div>
        {/* Three columns */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {orgData.map((item, idx) => (
            <div key={idx} className="bg-white border rounded-lg p-6 flex flex-col items-start">
              <div className="font-bold text-slate-800 text-base mb-1">{item.title}</div>
              <div className="text-gray-600 text-base leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
        {/* Regional Office */}
        <div className="bg-gray-100 rounded-lg p-4 mt-6">
          <div className="font-bold text-slate-800 text-base text-center mb-1">Regional Office</div>
          <div className="bg-white rounded-md py-2 px-4 text-center">
            <div className="font-semibold text-slate-800">West Africa</div>
            <div className="text-gray-500 text-sm">Maiduguri, Borno State, Nigeria</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OrganizationalStructure;
