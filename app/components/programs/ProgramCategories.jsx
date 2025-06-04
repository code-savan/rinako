import React from "react";
import { BookOpen, HeartHandshake, TrendingUp, Users, Building2, ArrowRight, BriefcaseMedical } from "lucide-react";

const categories = [
  {
    icon: <BookOpen className="w-7 h-7 text-sky-500" />,
    title: "Education Initiatives",
    desc: "Providing quality education opportunities to children and adults in underserved communities, including school construction, teacher training, and scholarship programs.",
    active: "12 Active Programs",
    link: "#education",
  },
  {
    icon: <HeartHandshake className="w-7 h-7 text-sky-500" />,
    title: "Healthcare Services",
    desc: "Improving access to quality healthcare through mobile clinics, medical supply distribution, health education, and specialized care for vulnerable populations.",
    active: "8 Active Programs",
    link: "#healthcare",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-sky-500" />,
    title: "Economic Empowerment",
    desc: "Supporting sustainable livelihoods through vocational training, microfinance initiatives, entrepreneurship development, and market access programs.",
    active: "10 Active Programs",
    link: "#economic",
  },
  {
    icon: <Users className="w-7 h-7 text-sky-500" />,
    title: "Child Protection",
    desc: "Safeguarding the rights and wellbeing of children through orphan support, child-friendly spaces, psychosocial assistance, and advocacy against child exploitation.",
    active: "7 Active Programs",
    link: "#child-protection",
  },
  {
    icon: <BriefcaseMedical className="w-7 h-7 text-sky-500" />,
    title: "Emergency Response",
    desc: "Providing rapid humanitarian assistance during crises, including food distribution, shelter provision, medical aid, and other essential services for affected populations.",
    active: "5 Active Programs",
    link: "#emergency",
  },
  {
    icon: <Building2 className="w-7 h-7 text-sky-500" />,
    title: "Community Development",
    desc: "Building resilient communities through infrastructure projects, water and sanitation initiatives, environmental sustainability programs, and community capacity building.",
    active: "9 Active Programs",
    link: "#community",
  },
];

const ProgramCategories = () => (
  <section className="w-full bg-white py-20 px-4 flex flex-col items-center">
    <div className="max-w-7xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Program Categories</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        Our comprehensive approach addresses the diverse needs of vulnerable communities through<br />
        six key program areas.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col h-full">
            <div className="bg-sky-100 rounded-full p-3 mb-4 flex items-center justify-center w-12 h-12">
              {cat.icon}
            </div>
            <div className="font-bold text-slate-800 text-lg mb-2">{cat.title}</div>
            <div className="text-gray-600 text-base leading-relaxed mb-6 flex-1">{cat.desc}</div>
            <div className="flex items-center justify-between mt-auto">
              <a href={cat.link} className="text-sky-600 font-medium text-sm hover:underline">
                {cat.active}
              </a>
              <a href={cat.link} className="text-sky-600 font-medium text-sm flex items-center gap-1 hover:underline">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramCategories;
