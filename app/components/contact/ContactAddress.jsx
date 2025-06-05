import React from "react";
import { Landmark, Clock, Users, MapPin, Phone, Mail, User, Smartphone, Car, Bus } from "lucide-react";

const ContactAddress = () => (
  <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center">
    <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      {/* Main Office */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
        <div className="flex items-center mb-4">
          <span className="bg-sky-50 text-sky-500 rounded-full p-2 mr-3">
            <Landmark className="w-6 h-6" />
          </span>
          <span className="font-semibold text-lg text-slate-800">Main Office</span>
        </div>
        <div className="flex items-start gap-2 text-gray-600 text-base mb-1">
          <MapPin className="w-5 h-5 mt-0.5 text-sky-400" />
          <div>
            No: 56/57 kachalla borgo street,<br />Gwang 1 ward, Maiduguri Borno State Nigeria<br />
            <a href="https://maps.app.goo.gl/Y78rDx7BgsPqptFR7" target="_blank" rel="noopener noreferrer" className="text-sky-600 text-sm font-medium hover:underline">View on map</a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-base mb-1 mt-2">
          <Phone className="w-5 h-5 text-sky-400" />
          <span>+234 80 77 292929</span>
        </div>
        <div className="text-gray-400 text-xs ml-7 mb-2">Nigeria</div>
        <div className="flex items-center gap-2 text-gray-600 text-base mb-1">
          <Mail className="w-5 h-5 text-sky-400" />
          <span>info@rinakofoundation.org</span>
        </div>
        <div className="text-gray-400 text-xs ml-7">General inquiries</div>
      </div>
      {/* Operating Hours */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
        <div className="flex items-center mb-4">
          <span className="bg-sky-50 text-sky-500 rounded-full p-2 mr-3">
            <Clock className="w-6 h-6" />
          </span>
          <span className="font-semibold text-lg text-slate-800">Operating Hours</span>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-slate-800">Weekdays</span>
          <div className="text-gray-600 text-base ml-1">Monday - Friday: 8:30 AM - 5:30 PM</div>
        </div>
        <div className="mb-2">
          <span className="font-semibold text-slate-800">Weekends</span>
          <div className="text-gray-600 text-base ml-1">Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</div>
        </div>
        <div>
          <span className="font-semibold text-slate-800">Holidays</span>
          <div className="text-gray-600 text-base ml-1">Closed on national holidays</div>
        </div>
      </div>
      {/* Department Contacts */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col">
        <div className="flex items-center mb-4">
          <span className="bg-sky-50 text-sky-500 rounded-full p-2 mr-3">
            <Users className="w-6 h-6" />
          </span>
          <span className="font-semibold text-lg text-slate-800">Department Contacts</span>
        </div>
        <div className="mb-3">
          <div className="flex items-center gap-2 text-sky-600 text-sm font-semibold mb-0.5">
            <User className="w-4 h-4" /> Programs & Operations
          </div>
          <div className="text-slate-800 text-sm font-medium ml-6">Dr. Ibrahim M Hassan</div>
          <div className="text-gray-600 text-sm ml-6 mb-2">programs@rinakofoundation.org</div>
          <div className="flex items-center gap-2 text-sky-600 text-sm font-semibold mb-0.5">
            <User className="w-4 h-4" /> Media & Communications
          </div>
          <div className="text-slate-800 text-sm font-medium ml-6">Dr. Ibrahim M Hassan</div>
          <div className="text-gray-600 text-sm ml-6 mb-2">media@rinakofoundation.org</div>
          <div className="flex items-center gap-2 text-sky-600 text-sm font-semibold mb-0.5">
            <User className="w-4 h-4" /> Partnerships & Donations
          </div>
          <div className="text-slate-800 text-sm font-medium ml-6">Alhaji Musa Ibrahim</div>
          <div className="text-gray-600 text-sm ml-6">partnerships@rinakofoundation.org</div>
        </div>
      </div>
    </div>
    {/* Map Section */}
    <div className="max-w-5xl w-full mx-auto mt-2">
      <div className="rounded-2xl shadow overflow-hidden bg-white">
        <div className="relative w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.395737277851!2d13.1621202!3d11.807532900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f006a54c483%3A0xaf776cbe0bebc9ad!2sBulkachuwa!5e0!3m2!1sen!2sng!4v1749106511358!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="Rinako Foundation Headquarters Map"
          ></iframe>
          {/* Overlayed info at bottom left */}
          <div className="absolute bottom-0 h-30 bg-gradient-to-t from-black/80 via-black/30 to-transparent left-0 right-0"/>
          <div className="absolute left-6 bottom-6 flex items-center gap-3">
            <span className="bg-sky-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </span>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base drop-shadow">Rinako Foundation Headquarters</span>
              <span className="text-white text-sm drop-shadow">No: 56/57 kachalla borgo street, Gwange 1 ward, Maiduguri Borno State Nigeria</span>
            </div>
          </div>
        </div>
        {/* Directions bar below map */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-5 bg-white rounded-b-2xl border-t border-gray-100 gap-4">
          <div className="flex items-center gap-2 text-gray-600 text-base">
            <span className="bg-sky-50 rounded-full p-2"><MapPin className="w-5 h-5 text-sky-500" /></span>
            <div>
            <p>Need directions?</p>
            <a href="https://maps.app.goo.gl/Y78rDx7BgsPqptFR7" target="_blank" rel="noopener noreferrer" className="text-sky-600 font-medium hover:underline ">Get directions</a>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-5 py-2 rounded-[20px]  text-gray-600 font-medium bg-gray-100 hover:bg-sky-50">
              <Smartphone className="w-5 h-5" /> Mobile
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-[20px]  text-gray-600 font-medium bg-gray-100 hover:bg-sky-50">
              <Car className="w-5 h-5" /> Driving
            </button>
            <button className="flex items-center gap-2 px-5 py-2 rounded-[20px]  text-gray-600 font-medium bg-gray-100 hover:bg-sky-50">
              <Bus className="w-5 h-5" /> Transit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactAddress;
