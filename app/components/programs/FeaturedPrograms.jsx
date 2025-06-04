"use client"

import React, { useState } from "react";
import { MapPin, Calendar, Share2, CheckCircle, AlertCircle } from "lucide-react";

const filters = [
  "All Programs",
  "Education",
  "Healthcare",
  "Economic",
  "Child Protection",
  "Emergency",
  "Community",
];

const programs = [
  {
    img: "/fp1.png",
    status: "Active",
    title: "School Building Program",
    desc: "Constructing and renovating school facilities in underserved communities to provide safe and conducive learning environments for children.",
    location: "Borno State, Nigeria",
    date: "2023 - 2025",
    progress: 68,
    filter: "Education",
  },
  {
    img: "/fp2.png",
    status: "Active",
    title: "Mobile Health Clinics",
    desc: "Bringing essential healthcare services to remote and conflict-affected communities through fully equipped mobile medical units.",
    location: "Northeastern Nigeria",
    date: "2022 - 2025",
    progress: 75,
    filter: "Healthcare",
  },
  {
    img: "/fp3.png",
    status: "Active",
    title: "Women's Vocational Training",
    desc: "Empowering women through skills development in tailoring, crafts, food processing, and business management to achieve financial independence.",
    location: "Maiduguri, Nigeria",
    date: "2023 - 2026",
    progress: 42,
    filter: "Economic",
  },
  {
    img: "/fp4.png",
    status: "Active",
    title: "Child-Friendly Spaces",
    desc: "Creating safe environments for children affected by conflict and displacement to play, learn, and receive psychosocial support.",
    location: "IDP Camps, Borno State",
    date: "2022 - 2024",
    progress: 88,
    filter: "Child Protection",
  },
  {
    img: "/fp5.png",
    status: "Urgent",
    title: "Emergency Food Distribution",
    desc: "Providing life-saving food assistance to communities affected by conflict, displacement, and food insecurity in northeastern Nigeria.",
    location: "Multiple Locations, NE Nigeria",
    date: "2023 - 2025",
    progress: 52,
    filter: "Emergency",
  },
  {
    img: "/fp6.png",
    status: "Active",
    title: "Clean Water Initiative",
    desc: "Improving access to clean and safe drinking water through well construction, borehole drilling, and water purification systems in rural communities.",
    location: "Rural Borno & Yobe States",
    date: "2022 - 2025",
    progress: 63,
    filter: "Community",
  },
];

const statusColors = {
  Active: "bg-green-500",
  Urgent: "bg-orange-500",
};

const FeaturedPrograms = () => {
  const [selected, setSelected] = useState("All Programs");
  const filtered = selected === "All Programs" ? programs : programs.filter(p => p.filter === selected);

  return (
    <section className="w-full bg-gray-50 py-20 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Featured Programs</h2>
        <p className="text-gray-500 text-center text-base mb-8 max-w-2xl">
          Explore our current initiatives making significant impact across communities.
        </p>
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setSelected(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${selected === f ? "bg-sky-600 text-white border-sky-600" : "bg-white text-sky-600 border-sky-200 hover:bg-sky-50"}`}
            >
              {f}
            </button>
          ))}
        </div>
        {/* Program Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filtered.map((p, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-44">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover object-center" />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${statusColors[p.status]}`}>{p.status}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="font-bold text-slate-800 text-lg mb-1 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sky-500" /> {p.title}
                </div>
                <div className="text-gray-600 text-base mb-3 flex-1">{p.desc}</div>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-2">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {p.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {p.date}</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-sky-100 rounded-full">
                    <div className="h-2 rounded-full bg-sky-500" style={{ width: `${p.progress}%` }} />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <button className="flex-1 bg-sky-600 hover:bg-sky-700 transition-colors text-white font-semibold text-base px-4 py-2 rounded-lg shadow">Support Program</button>
                  <button className="p-2 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-600"><Share2 className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-white border border-sky-200 text-sky-600 font-semibold text-base px-8 py-3 rounded-lg shadow hover:bg-sky-50 transition-colors">View All Programs</button>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
