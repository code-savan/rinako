import React from "react";
import { FileText, Image, Landmark, Archive, Mail, Phone, ArrowRight, Download } from "lucide-react";

const resources = [
  {
    icon: <FileText className="w-7 h-7 text-sky-400" />,
    title: "Press Kits",
    desc: "Download comprehensive information about our organization, mission, and current initiatives.",
    link: "Download",
    href: "#",
    download: true,
  },
  {
    icon: <Image className="w-7 h-7 text-sky-400" />,
    title: "Logo & Brand Assets",
    desc: "Access high-resolution logos, brand guidelines, and approved imagery for publications.",
    link: "Download",
    href: "#",
    download: true,
  },
  {
    icon: <Landmark className="w-7 h-7 text-sky-400" />,
    title: "Annual Reports",
    desc: "View our detailed annual reports with financial information and program outcomes.",
    link: "Download",
    href: "#",
    download: true,
  },
  {
    icon: <Archive className="w-7 h-7 text-sky-400" />,
    title: "Press Release Archive",
    desc: "Browse our complete archive of press releases and official statements.",
    link: "View Archive",
    href: "#",
    download: false,
  },
];

const MediaResources = () => (
  <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full mx-auto flex flex-col items-start mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Media Resources</h2>
      <p className="text-gray-500 text-base md:text-lg mb-6">Access official materials for media professionals, researchers, and partners.</p>
    </div>
    <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-8">
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
        {resources.map((res, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-7 flex flex-col h-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-50 mb-4">
              {res.icon}
            </div>
            <div className="font-bold text-lg text-slate-800 mb-1">{res.title}</div>
            <div className="text-gray-600 text-base mb-4 flex-1">{res.desc}</div>
            <a
              href={res.href}
              className="text-sky-600 font-semibold text-base flex items-center gap-1 hover:underline"
              download={res.download}
            >
              {res.link}
              {res.download ? <Download className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>
          </div>
        ))}
      </div>
      {/* Media Contact */}
      <div className="bg-white rounded-2xl shadow p-8 w-full md:w-80 flex flex-col">
        <div className="font-bold text-xl text-slate-800 mb-2">Media Contact</div>
        <div className="text-gray-600 text-base mb-4">
          For media inquiries, interview requests,<br />
          or additional information, please contact our communications team.
        </div>
        <div className="font-bold text-slate-800 mb-0.5">Sarah Okonkwo</div>
        <div className="text-gray-500 text-sm mb-3">Director of Communications</div>
        <div className="flex items-center gap-2 text-gray-600 text-base mb-1">
          <Mail className="w-4 h-4" /> media@rinakofoundation.org
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-base mb-6">
          <Phone className="w-4 h-4" /> +234 801 234 5678
        </div>
        <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg text-base transition mt-auto">Contact Media Team</button>
      </div>
    </div>
  </section>
);

export default MediaResources;
