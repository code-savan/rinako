import React from "react";
import { Landmark, Users, Heart, Scale, Handshake, Leaf } from "lucide-react";

const allCards = [
  {
    icon: <Landmark className="w-6 h-6 text-sky-500" />,
    title: "Legal Status",
    text: "Rinako Foundation is duly registered under the Corporate Affairs Commission of the Federal Republic of Nigeria with registration No. CAC/IT/NO91435.",
  },
  {
    icon: <Users className="w-6 h-6 text-sky-500" />,
    title: "Governance",
    text: "Rinako Foundation is governed by its Board of Directors (BoD). The Board is the key policy making and governance body of the Foundation and works independently. It formulates and approves policies and organizational systems and evaluates the overall performance of the Foundation on periodic basis.",
  },
  {
    icon: <Heart className="w-6 h-6 text-sky-500" />,
    title: "Compassion",
    text: "We approach our work with empathy and understanding, recognizing the dignity and worth of every individual we serve.",
  },
  {
    icon: <Scale className="w-6 h-6 text-sky-500" />,
    title: "Integrity",
    text: "We uphold the highest ethical standards in all our operations, ensuring transparency and accountability to our beneficiaries and supporters.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-sky-500" />,
    title: "Collaboration",
    text: "We believe in the power of partnerships and work closely with local communities, governments, and other organizations to maximize our impact.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-sky-500" />,
    title: "Sustainability",
    text: "We design programs that create lasting change, empowering communities to continue progress independently long after our direct involvement ends.",
  },
];

const CoreValues = () => (
  <section className="w-full bg-gray-50 py-20 px-4 flex flex-col items-center">
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Our Core Values</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        These principles guide our work and decision-making at every level of our organization.
      </p>
      {/* All Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {allCards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-start">
            <div className="bg-sky-100 rounded-full p-3 mb-4 flex items-center justify-center">
              {card.icon}
            </div>
            <div className="font-bold text-slate-800 text-lg mb-2">{card.title}</div>
            <div className="text-gray-600 text-base leading-relaxed">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;
