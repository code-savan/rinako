'use client'

import React, { useState } from "react";
import { Eye, ArrowRight } from "lucide-react";

const categories = [
  { label: "All News", value: "all" },
  { label: "Press Releases", value: "press" },
  { label: "Media Coverage", value: "media" },
  { label: "Project Updates", value: "project" },
  { label: "Events", value: "event" },
  { label: "Announcements", value: "announcement" },
  { label: "Publication", value: "publication" },
];

const news = [
  {
    img: "/news1.png",
    category: "Project Update",
    categoryColor: "bg-sky-100 text-sky-700",
    date: "May 18, 2025",
    title: "Healthcare Training Program Expands to Five New Locations",
    desc: "Our successful healthcare worker training initiative is now expanding to five additional communities, bringing essential medical skills to underserved areas.",
    stat: "245 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-sky-500" />,
    link: "#",
    filter: "project",
  },
  {
    img: "/news2.png",
    category: "Press Release",
    categoryColor: "bg-blue-100 text-blue-700",
    date: "May 15, 2025",
    title: "Rinako Foundation Announces Strategic Partnership with UNICEF",
    desc: "A new collaborative agreement will enhance our child protection programs and expand educational opportunities for vulnerable children.",
    stat: "312 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-blue-500" />,
    link: "#",
    filter: "press",
  },
  {
    img: "/news3.png",
    category: "Media Coverage",
    categoryColor: "bg-purple-100 text-purple-700",
    date: "May 10, 2025",
    title: "CNN Features Rinako Foundation's Work in Conflict Resolution",
    desc: "Our innovative approach to community-based conflict resolution was highlighted in a special CNN feature on peacebuilding initiatives.",
    stat: "478 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-purple-500" />,
    link: "#",
    filter: "media",
  },
  {
    img: "/news4.png",
    category: "Announcement",
    categoryColor: "bg-pink-100 text-pink-700",
    date: "May 5, 2025",
    title: "New Women's Entrepreneurship Program Launches Next Month",
    desc: "Our newest initiative will provide business training, mentorship, and microloans to 200 women in Adamawa and Yobe states.",
    stat: "189 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-pink-500" />,
    link: "#",
    filter: "announcement",
  },
  {
    img: "/news5.png",
    category: "Press Release",
    categoryColor: "bg-yellow-100 text-yellow-700",
    date: "April 28, 2025",
    title: "Rinako Foundation Receives 2025 Global Humanitarian Award",
    desc: "Our organization was honored with the prestigious Global Humanitarian Award for our innovative approach to sustainable development.",
    stat: "356 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-yellow-500" />,
    link: "#",
    filter: "press",
  },
  {
    img: "/news6.png",
    category: "Project Update",
    categoryColor: "bg-cyan-100 text-cyan-700",
    date: "April 20, 2025",
    title: "Clean Water Initiative Reaches Milestone: 50 Communities Served",
    desc: "Our clean water program has now successfully installed sustainable water systems in 50 communities, benefiting over 100,000 people.",
    stat: "267 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-cyan-500" />,
    link: "#",
    filter: "project",
  },
  {
    img: "/news7.png",
    category: "Event",
    categoryColor: "bg-indigo-100 text-indigo-700",
    date: "April 15, 2025",
    title: "International Donors Visit Project Sites in Northeastern Nigeria",
    desc: "A delegation of international donors toured our project sites to witness firsthand the impact of their support on local communities.",
    stat: "203 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-indigo-500" />,
    link: "#",
    filter: "event",
  },
  {
    img: "/news8.png",
    category: "Publication",
    categoryColor: "bg-fuchsia-100 text-fuchsia-700",
    date: "April 8, 2025",
    title: "New Research Report: Measuring Long-term Impact of Educational Initiatives",
    desc: "Our latest research publication examines the sustained impact of educational programs on community development over a five-year period.",
    stat: "176 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-fuchsia-500" />,
    link: "#",
    filter: "publication",
  },
  {
    img: "/news9.png",
    category: "Announcement",
    categoryColor: "bg-green-100 text-green-700",
    date: "April 1, 2025",
    title: "Registration Opens for Annual Youth Leadership Conference",
    desc: "Young leaders aged 18-25 are invited to apply for our annual conference focused on community development and social entrepreneurship.",
    stat: "234 views",
    statIcon: <Eye className="w-4 h-4 mr-1 text-green-500" />,
    link: "#",
    filter: "announcement",
  },
];

const NewsList = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? news : news.filter((n) => n.filter === active);

  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
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
          {filtered.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-5 flex flex-col h-full">
              <img src={item.img} alt={item.title} className="w-full h-44 object-cover rounded-xl mb-4" />
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.categoryColor}`}>{item.category}</span>
                <span className="text-gray-400 text-xs font-medium">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1 leading-snug">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4 flex-1">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center text-sky-600 text-sm font-medium">
                  {item.statIcon}
                  {item.stat}
                </span>
                <a href={item.link} className="text-sky-600 text-sm font-semibold flex items-center gap-1 hover:underline">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-2 px-8 py-3 border-2 border-sky-500 text-sky-700 font-semibold rounded-lg bg-white hover:bg-sky-50 transition text-base">
          Load More News
        </button>
      </div>
    </section>
  );
};

export default NewsList;
