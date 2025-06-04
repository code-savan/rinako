'use client'

import React, { useState } from "react";
import { Users, HeartPulse, GraduationCap, Briefcase, Leaf, Droplets, ArrowRight } from "lucide-react";

const categories = [
  { label: "All Stories", value: "all" },
  { label: "Education", value: "education" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Women Empowerment", value: "women" },
  { label: "Youth Development", value: "youth" },
  { label: "Community Support", value: "community" },
];

const stories = [
  {
    img: "/blog1.png",
    category: "Education",
    categoryColor: "bg-sky-100 text-sky-700",
    date: "April 15, 2025",
    title: "Bringing Education Back to Bama Village",
    desc: "After years without formal education due to insurgency, children in Bama village now have access to quality education through our school reconstruction project.",
    stat: "450 students enrolled",
    statIcon: <Users className="w-4 h-4 mr-1 text-sky-500" />,
    link: "#",
    filter: "education",
  },
  {
    img: "/blog2.png",
    category: "Healthcare",
    categoryColor: "bg-teal-100 text-teal-700",
    date: "March 22, 2025",
    title: "Mobile Clinics Reach Remote Communities",
    desc: "Our mobile health clinics have brought essential medical services to 12 remote villages, providing preventive care and treatment to those most in need.",
    stat: "3,200+ patients treated",
    statIcon: <HeartPulse className="w-4 h-4 mr-1 text-teal-500" />,
    link: "#",
    filter: "healthcare",
  },
  {
    img: "/blog3.png",
    category: "Youth Development",
    categoryColor: "bg-purple-100 text-purple-700",
    date: "February 8, 2025",
    title: "Digital Skills Empower Youth in Maiduguri",
    desc: "Our technology training program has equipped 150 young people with digital skills, leading to employment and entrepreneurship opportunities.",
    stat: "85% employment rate",
    statIcon: <Briefcase className="w-4 h-4 mr-1 text-purple-500" />,
    link: "#",
    filter: "youth",
  },
  {
    img: "/blog4.png",
    category: "Community Support",
    categoryColor: "bg-lime-100 text-lime-700",
    date: "January 20, 2025",
    title: "Sustainable Agriculture Transforms Yobe Community",
    desc: "Our community garden initiative has improved food security and provided sustainable livelihoods for 75 families in drought-affected regions.",
    stat: "5 tons of produce harvested",
    statIcon: <Leaf className="w-4 h-4 mr-1 text-lime-500" />,
    link: "#",
    filter: "community",
  },
  {
    img: "/blog5.png",
    category: "Women Empowerment",
    categoryColor: "bg-pink-100 text-pink-700",
    date: "December 5, 2024",
    title: "Microfinance Initiative Empowers Women in Adamawa",
    desc: "Our microfinance program has helped 200 women start small businesses, increasing household incomes and improving family welfare.",
    stat: "95% loan repayment rate",
    statIcon: <GraduationCap className="w-4 h-4 mr-1 text-pink-500" />,
    link: "#",
    filter: "women",
  },
  {
    img: "/blog6.png",
    category: "Community Support",
    categoryColor: "bg-cyan-100 text-cyan-700",
    date: "November 12, 2024",
    title: "Clean Water Transforms Health in Gwoza",
    desc: "Our water purification project has reduced waterborne diseases by 80% and improved overall community health and productivity.",
    stat: "2,500 people benefited",
    statIcon: <Droplets className="w-4 h-4 mr-1 text-cyan-500" />,
    link: "#",
    filter: "community",
  },
];

const BrowseByCategory = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? stories : stories.filter((s) => s.filter === active);

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-left w-full mb-2">Browse by Category</h2>
        <div className="flex flex-wrap gap-2 mb-8 w-full">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`px-5 py-2 rounded-full font-medium text-base transition border ${active === cat.value ? "bg-sky-600 text-white border-sky-600" : "bg-white text-slate-700 border-gray-200 hover:bg-sky-50"}`}
              onClick={() => setActive(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
          {filtered.map((story, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-5 flex flex-col h-full">
              <img src={story.img} alt={story.title} className="w-full h-44 object-cover rounded-xl mb-4" />
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${story.categoryColor}`}>{story.category}</span>
                <span className="text-gray-400 text-xs font-medium">{story.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1 leading-snug">{story.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4 flex-1">{story.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center text-sky-600 text-sm font-medium">
                  {story.statIcon}
                  {story.stat}
                </span>
                <a href={story.link} className="text-sky-600 text-sm font-semibold flex items-center gap-1 hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-2 px-8 py-3 border-2 border-sky-500 text-sky-700 font-semibold rounded-lg bg-white hover:bg-sky-50 transition text-base">
          Load More Stories
        </button>
      </div>
    </section>
  );
};

export default BrowseByCategory;
