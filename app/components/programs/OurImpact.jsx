"use client"

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const pieData = [
  { name: "Education", value: 22 },
  { name: "Healthcare", value: 18 },
  { name: "Economic", value: 12 },
  { name: "Child Protection", value: 10 },
  { name: "Emergency", value: 8 },
  { name: "Community", value: 30 },
];

const pieColors = [
  "#38bdf8", // Education
  "#34d399", // Healthcare
  "#fbbf24", // Economic
  "#fb7185", // Child Protection
  "#f97316", // Emergency
  "#64748b", // Community
];

const lineData = [
  { year: "2019", value: 9000 },
  { year: "2020", value: 18000 },
  { year: "2021", value: 26000 },
  { year: "2022", value: 34000 },
  { year: "2023", value: 42000 },
  { year: "2024", value: 50000 },
];

const stats = [
  {
    percent: 80,
    value: "42,500+",
    label: "Total Beneficiaries",
    desc: "Individuals directly impacted by our programs across all categories.",
  },
  {
    percent: 70,
    value: "78",
    label: "Communities Served",
    desc: "Villages and neighborhoods where our programs are actively making a difference.",
  },
  {
    percent: 75,
    value: "85%",
    label: "Success Rate",
    desc: "Percentage of programs that have met or exceeded their target objectives.",
  },
  {
    percent: 65,
    value: "51",
    label: "Completed Projects",
    desc: "Successfully completed initiatives that continue to benefit communities.",
  },
];

const OurImpact = () => (
  <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
    <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Our Impact</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        Measuring our success through lives changed and communities transformed.
      </p>
      {/* Charts */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <div className="font-bold text-slate-800 text-lg mb-4 w-full text-left">Program Reach by Category</div>
          <div className="flex items-center justify-center w-full">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={2}
                >
                  {pieData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={pieColors[idx]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="space-y-2 ml-8">
              {pieData.map((entry, idx) => (
                <li key={entry.name} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="inline-block w-3 h-3 rounded-full" style={{ background: pieColors[idx] }}></span>
                  {entry.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Line Chart */}
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <div className="font-bold text-slate-800 text-lg mb-4 w-full text-left">Annual Beneficiaries Growth</div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={lineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#f3f4f6" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} dot={false} fill="#e0f2fe" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Stats */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
            <div className="relative mb-2">
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="8"
                  strokeDasharray={`${stat.percent * 1.76} ${176 - stat.percent * 1.76}`}
                  strokeDashoffset="-44"
                  strokeLinecap="round"
                />
                <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0ea5e9">{stat.percent}%</text>
              </svg>
            </div>
            <div className="text-3xl font-bold text-sky-700 mb-1">{stat.value}</div>
            <div className="font-semibold text-slate-800 mb-2">{stat.label}</div>
            <div className="text-gray-600 text-base leading-relaxed">{stat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurImpact;
