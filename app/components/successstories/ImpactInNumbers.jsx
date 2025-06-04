import React from "react";
import { User, Landmark, CalendarCheck2, LineChart } from "lucide-react";

const stats = [
  {
    icon: <User className="w-8 h-8 text-sky-500" />,
    value: "0+",
    label: "Lives Impacted",
    desc: "Individuals directly benefiting from our programs",
  },
  {
    icon: <Landmark className="w-8 h-8 text-sky-500" />,
    value: "0",
    label: "Communities Served",
    desc: "Villages and towns across northeastern Nigeria",
  },
  {
    icon: <CalendarCheck2 className="w-8 h-8 text-sky-500" />,
    value: "0",
    label: "Programs Completed",
    desc: "Successful initiatives across various sectors",
  },
  {
    icon: <LineChart className="w-8 h-8 text-sky-500" />,
    value: "0%",
    label: "Success Rate",
    desc: "Projects meeting or exceeding target outcomes",
  },
];

const ImpactInNumbers = () => (
  <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full mx-auto flex flex-col items-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Our Impact in Numbers</h2>
      <p className="text-gray-500 text-center text-base md:text-lg max-w-2xl">
        Measurable change across communities we serve
      </p>
    </div>
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-2xl flex flex-col items-center p-8 shadow text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-sky-100 rounded-full flex items-center justify-center w-16 h-16">
              {stat.icon}
            </span>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-sky-600 mb-1">{stat.value}</div>
          <div className="font-semibold text-slate-800 mb-1">{stat.label}</div>
          <div className="text-gray-500 text-base leading-relaxed">{stat.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ImpactInNumbers;
