import React from "react";
import { Users, Landmark, Globe, CheckCircle } from "lucide-react";

const partnerGroups = [
  {
    icon: <Users className="w-7 h-7 text-sky-500" />,
    title: "Community Partners",
    items: [
      "Beneficiary Communities",
      "Local Leaders",
      "Community Organizations",
    ],
  },
  {
    icon: <Landmark className="w-7 h-7 text-sky-500" />,
    title: "Government Partners",
    items: [
      "State Government",
      "Local Government",
      "Government Departments",
    ],
  },
  {
    icon: <Globe className="w-7 h-7 text-sky-500" />,
    title: "Other Stakeholders",
    items: [
      "National Donors",
      "International Donors",
      "Civil Society Organizations",
    ],
  },
];

const PartnersAndPartnerships = () => (
  <section className="w-full bg-gray-50 py-20 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Partners & Partnerships</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        We value our diverse network of partners who join hands in extending program interventions<br />
        and creating lasting impact in our communities.
      </p>
      <div className="w-full bg-white rounded-2xl shadow p-8 md:p-10 flex flex-col gap-8 items-center">
        <div className="w-full text-gray-600 text-base mb-6 text-center">
          Rinako Foundation values its partners and they include all those individuals, communities, organizations and departments who join<br />
          hands for extending program interventions. Worth mentioning from our numerous partners are USAID, UNESCO, UNICEF, World Bank<br />
          and many others who provide invaluable financial and technical support in our quest to achieve our mission.
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {partnerGroups.map((group, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 flex flex-col items-start">
              <div className="bg-sky-100 rounded-full p-3 mb-4 flex items-center justify-center">
                {group.icon}
              </div>
              <div className="font-bold text-slate-800 text-lg mb-2">{group.title}</div>
              <ul className="text-gray-600 text-base space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a href="#" className="text-sky-600 font-semibold text-base mt-6 hover:underline flex items-center gap-1">
          Become a Partner <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  </section>
);

export default PartnersAndPartnerships;
