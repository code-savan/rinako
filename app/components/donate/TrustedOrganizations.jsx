import React from "react";
import { Globe, Landmark } from "lucide-react";

const orgs = [
  {
    name: "United Nations",
    icon: (
      <span className="block w-12 h-12 rounded-full border-4 border-slate-400/60 mx-auto" />
    ),
  },
  {
    name: "Red Cross",
    icon: (
      <span className="block w-12 h-12 rounded-full border-4 border-slate-400/60 mx-auto" />
    ),
  },
  {
    name: "UNICEF",
    icon: (
      <span className="block w-12 h-12 rounded-full border-4 border-slate-400/60 mx-auto" />
    ),
  },
  {
    name: "World Bank",
    icon: (
      <Landmark className="w-12 h-12 text-slate-400/60 mx-auto" />
    ),
  },
  {
    name: "WHO",
    icon: (
      <Globe className="w-12 h-12 text-slate-400/60 mx-auto" />
    ),
  },
];

const TrustedOrganizations = () => (
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">Trusted by Organizations Worldwide</h2>
      <p className="text-slate-500 text-lg mb-10">We partner with leading organizations to maximize our impact</p>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
        {orgs.map((org) => (
          <div key={org.name} className="flex flex-col items-center min-w-[120px]">
            {org.icon}
            <span className="mt-4 text-slate-400 text-base font-medium">{org.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedOrganizations;
