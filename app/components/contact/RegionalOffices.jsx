import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const offices = [
  {
    img: "/office1.png",
    name: "Nigeria Office",
    address: "No: 56/57 kachalla borgo street, Gwange 1 ward, Maiduguri Borno State Nigeria",
    phone: "+234 80 77 292929",
    email: "nigeria@rinakofoundation.org",
    link: "#",
  },
  {
    img: "/office2.png",
    name: "USA Office",
    address: "350 Fifth Avenue, New York, NY, USA",
    phone: "+1 212 555 6789",
    email: "usa@rinakofoundation.org",
    link: "#",
  },
];

const RegionalOffices = () => (
  <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center overflow-x-hidden">
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Our Regional Offices</h2>
      <p className="text-gray-500 text-center text-base md:text-lg max-w-2xl">
        We operate in multiple locations to better serve communities around the world
      </p>
    </div>
    <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto">
      {offices.map((office, idx) => (
        <div key={idx} className="bg-white rounded-3xl shadow overflow-hidden flex flex-col">
          <img src={office.img} alt={office.name} className="w-full max-w-full h-56 object-cover object-center" />
          <div className="p-8 flex flex-col flex-1">
            <div className="text-2xl font-bold text-slate-800 mb-4">{office.name}</div>
            <div className="flex items-start gap-2 text-gray-600 text-base mb-2">
              <MapPin className="w-5 h-5 mt-0.5 text-sky-500" />
              <span>{office.address}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-base mb-2">
              <Phone className="w-5 h-5 text-sky-500" />
              <span>{office.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-base mb-6">
              <Mail className="w-5 h-5 text-sky-500" />
              <span>{office.email}</span>
            </div>
            <a href={office.link} className="text-sky-600 font-semibold text-base flex items-center gap-1 hover:underline mt-auto">
              View details <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RegionalOffices;
