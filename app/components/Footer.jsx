import * as React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Landmark } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-[#181f29] text-gray-400 pt-12 pb-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-6 justify-between w-full">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 w-full mb-8 md:mb-0">
          <img src="/logoclear.png" alt="Rinako Foundation Logo" className="h-fit w-[180px]" />
          <p className="text-sm max-w-xs leading-relaxed">
            Dedicated to building a better world through education, healthcare, and support for vulnerable children.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[160px] flex flex-col gap-2 w-full mb-8 md:mb-0">
          <div className="font-semibold text-white mb-2">Quick Links</div>
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Our Programs</a>
          <a href="#" className="hover:text-white">Success Stories</a>
          <a href="#" className="hover:text-white">News & Events</a>
          <a href="#" className="hover:text-white">Donate</a>
          <a href="#" className="hover:text-white">Volunteer</a>
        </div>
        {/* Contact Us */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-2 w-full mb-8 md:mb-0">
          <div className="font-semibold text-white mb-2">Contact Us</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> <span>56/57 kachalla borgo street, Gwange 1 ward, Maiduguri Borno State Nigeria</span></div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <span>info@rinakofoundation.org</span></div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <span>+234 80 77 292929</span></div>
        </div>
        {/* Our Partners */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-2 w-full">
          <div className="font-semibold text-white mb-2">Our Partners</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#232b37] rounded-md h-12 flex items-center justify-center"><span className="w-6 h-6 border-2 border-gray-500 rounded-full block"></span></div>
            <div className="bg-[#232b37] rounded-md h-12 flex items-center justify-center"><span className="w-6 h-6 border-2 border-gray-500 rounded-full block"></span></div>
            <div className="bg-[#232b37] rounded-md h-12 flex items-center justify-center"><span className="w-6 h-6 border-2 border-gray-500 rounded-full block"></span></div>
            <div className="bg-[#232b37] rounded-md h-12 flex items-center justify-center"><Landmark className="w-6 h-6 text-gray-400" /></div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#232b37] flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2 w-full">
        <div>© 2025 Rinako Foundation. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
