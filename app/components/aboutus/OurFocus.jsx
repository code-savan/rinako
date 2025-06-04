import React from "react";
import { Users, User, Accessibility, Home, Award } from "lucide-react";

const focusGroups = [
  { icon: <User className="w-4 h-4 inline text-sky-500 mr-2" />, label: "Indigent Women" },
  { icon: <Users className="w-4 h-4 inline text-sky-500 mr-2" />, label: "Youth and Children" },
  { icon: <Accessibility className="w-4 h-4 inline text-sky-500 mr-2" />, label: "The Disabled" },
  { icon: <Home className="w-4 h-4 inline text-sky-500 mr-2" />, label: "The Elderly People" },
];

const geoFocus = [
  { icon: <User className="w-4 h-4 inline text-sky-500 mr-2" />, label: "Supporting widowed women" },
  { icon: <Users className="w-4 h-4 inline text-sky-500 mr-2" />, label: "Caring for orphaned children" },
  { icon: <Home className="w-4 h-4 inline text-sky-500 mr-2" />, label: "Assisting displaced communities" },
];

const stats = [
  {
    icon: <User className="w-7 h-7 text-sky-500 mx-auto" />,
    value: "1,200+",
    label: "Women Empowered",
    desc: "Supporting widows and vulnerable women through skills training and economic empowerment programs.",
  },
  {
    icon: <Users className="w-7 h-7 text-sky-500 mx-auto" />,
    value: "2,500+",
    label: "Children Supported",
    desc: "Providing education, healthcare, and emotional support to orphaned and vulnerable children.",
  },
  {
    icon: <Accessibility className="w-7 h-7 text-sky-500 mx-auto" />,
    value: "500+",
    label: "Disabled Assisted",
    desc: "Supporting disabled individuals with medical care, mobility aids, and rehabilitation services.",
  },
  {
    icon: <Home className="w-7 h-7 text-sky-500 mx-auto" />,
    value: "800+",
    label: "Elderly Cared For",
    desc: "Providing essential care and support services to elderly people in need.",
  },
];

const awards = [
  {
    title: "2023 Global Humanitarian Award",
    desc: "Recognized for our innovative approach to education in conflict zones.",
  },
  {
    title: "2020 UN Partnership Excellence Award",
    desc: "Honored for our collaborative approach to sustainable development.",
  },
  {
    title: "2018 International Healthcare Innovation Prize",
    desc: "Awarded for our mobile healthcare program reaching remote communities.",
  },
];

const OurFocus = () => (
  <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Our Focus</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        We are dedicated to serving vulnerable populations in conflict-affected regions.
      </p>
      {/* Focus Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:max-w-4xl">
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
          <div className="font-bold text-slate-800 text-lg mb-3">Focus Groups</div>
          <ul className="text-gray-600 text-base space-y-2">
            {focusGroups.map((item, idx) => (
              <li key={idx}>{item.icon}{item.label}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
          <div className="font-bold text-slate-800 text-lg mb-3">Geographical Focus</div>
          <div className="text-gray-600 text-base mb-3">
            Our primary focus is on the Northeastern part of Nigeria, where insurgency has created significant humanitarian challenges:
          </div>
          <ul className="text-gray-600 text-base space-y-2">
            {geoFocus.map((item, idx) => (
              <li key={idx}>{item.icon}{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center">
            <div className="bg-sky-100 rounded-full p-3 mb-4 flex items-center justify-center">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-sky-700 mb-1">{stat.value}</div>
            <div className="font-semibold text-slate-800 mb-2">{stat.label}</div>
            <div className="text-gray-600 text-[14px] leading-relaxed">{stat.desc}</div>
          </div>
        ))}
      </div>
      {/* Awards */}
      <div className="w-full bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center">
        <div className="font-bold text-xl text-slate-800 mb-6 text-center">Recognition & Awards</div>
        <ul className="w-full max-w-2xl space-y-6">
          {awards.map((award, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="bg-sky-100 rounded-full p-2 flex items-center justify-center mt-1"><Award className="w-5 h-5 text-sky-500" /></span>
              <span>
                <span className="font-semibold text-slate-800">{award.title}</span>
                <br />
                <span className="text-gray-600 text-base">{award.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OurFocus;
