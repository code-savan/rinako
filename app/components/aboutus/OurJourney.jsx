import React from "react";

const milestones = [
  {
    year: "2013",
    title: "Foundation Established",
    description: "Rinako Foundation was established in 2013 and duly registered in 2016",
  },
  {
    year: "2014",
    title: "Global Expansion",
    description:
      "Expanded operations to 10 countries across Africa and Asia, focusing on education, healthcare, and orphan support programs.",
  },
  {
    year: "2015",
    title: "UN Partnership",
    description:
      "Formed strategic partnership with the United Nations to implement sustainable development programs in conflict-affected regions.",
  },
  {
    year: "2023",
    title: "Innovation Initiative",
    description:
      "Launched the Rinako Innovation Hub, focusing on technology-driven solutions for humanitarian challenges in 28 countries.",
  },
];

const OurJourney = () => (
  <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
    <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Our Journey</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        From humble beginnings to a global organization, explore the key milestones that have shaped the Rinako Foundation.
      </p>
      <div className="relative w-full">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sky-400/70 z-0" style={{ minHeight: '100%' }} />
        <div className="flex flex-col gap-10">
          {milestones.map((item, idx) => (
            <div key={item.year} className="relative flex items-start">
              {/* Year dot */}
              <div className="flex flex-col items-center z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-sky-400 shadow text-sky-600 font-semibold text-sm mb-2">
                  {item.year}
                </div>
                {/* Connector (except last) */}
                {idx !== milestones.length - 1 && (
                  <div className="flex-1 w-0.5 bg-sky-400/70" style={{ minHeight: 40 }} />
                )}
              </div>
              {/* Card */}
              <div className="ml-8 flex-1">
                <div className="bg-white rounded-xl shadow-md p-6 mb-2">
                  <div className="font-bold text-slate-800 text-lg mb-1">{item.title}</div>
                  <div className="text-gray-600 text-base leading-relaxed whitespace-pre-line">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurJourney;
