'use client'

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Paperclip, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const faqs = [
  {
    q: "How can I donate to the Rinako Foundation?",
    a: (
      <>
        You can donate through our website using the "Donate" button, which accepts credit cards and PayPal. For larger donations, wire transfers, or other methods, please contact our partnerships team at <a href="mailto:partnerships@rinakofoundation.org" className="text-sky-600 hover:underline">partnerships@rinakofoundation.org</a>.
      </>
    ),
  },
  {
    q: "How can I volunteer with your organization?",
    a: "Fill out our volunteer application form on the website or contact us for more information about current opportunities.",
  },
  {
    q: "How can my organization partner with the Rinako Foundation?",
    a: "Reach out to our partnerships team to discuss collaboration opportunities and joint initiatives.",
  },
  {
    q: "How can I request a speaker for an event?",
    a: "Contact us with your event details and we will connect you with an appropriate representative.",
  },
];

const socials = [
  { icon: <i className="fa-brands fa-facebook-f" />, href: "#" },
  { icon: <i className="fa-brands fa-x-twitter" />, href: "#" },
  { icon: <i className="fa-brands fa-instagram" />, href: "#" },
  { icon: <i className="fa-brands fa-linkedin-in" />, href: "#" },
  { icon: <i className="fa-brands fa-youtube" />, href: "#" },
];

const GetInTouch = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-white py-16 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Get in Touch</h2>
        <p className="text-gray-500 text-center text-base md:text-lg max-w-2xl">
          Have questions or want to learn more about our work? Fill out the form below and we'll get
          back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <form className="bg-white rounded-2xl  p-8 md:col-span-1 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name*</label>
              <input type="text" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-200" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name*</label>
              <input type="text" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-200" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address*</label>
            <input type="email" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-200" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number (optional)</label>
            <input type="tel" className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject*</label>
            <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-200" required>
              <option value="">Select a subject</option>
              <option>General Inquiry</option>
              <option>Donations</option>
              <option>Partnerships</option>
              <option>Volunteer</option>
              <option>Media</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message*</label>
            <textarea className="w-full rounded-lg border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-200 min-h-[100px]" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Attachment (optional)</label>
            <div className="flex items-center gap-2 bg-gray-50 border border-dashed border-gray-300 rounded-lg px-4 py-3">
              <Paperclip className="w-5 h-5 text-gray-400" />
              <input type="file" className="flex-1 bg-transparent outline-none border-none text-sm" accept=".pdf,.doc,.docx,.jpg,.png" />
            </div>
            <div className="text-xs text-gray-400 mt-1">Maximum file size: 5MB. Accepted formats: PDF, DOC, DOCX, JPG, PNG</div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" required className="accent-sky-600 w-5 h-5" />
            <span className="text-sm text-gray-600">I agree to the <a href="#" className="text-sky-600 underline">Privacy Policy</a> and consent to the processing of my personal data.</span>
          </div>
          <button type="submit" className="w-48 mt-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg text-base transition">Submit Message</button>
        </form>
        {/* FAQ + Socials */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#F9FAFB] rounded-2xl  p-6">
            <div className="font-bold text-lg text-slate-800 mb-4">Frequently Asked Questions</div>
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-left text-slate-800 font-semibold focus:outline-none"
                    onClick={() => setOpen(open === idx ? -1 : idx)}
                  >
                    {faq.q}
                    {open === idx ? (
                      <ChevronUp className="w-5 h-5 text-sky-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {open === idx && (
                    <div className="text-gray-600 text-sm pb-3 pr-2">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
            <a href="#" className="block text-sky-600 text-sm font-medium mt-4 hover:underline text-center">View all FAQs</a>
          </div>
          <div className=" rounded-2xl bg-[#0284C7]/5 p-6 flex flex-col items-start">
            <div className="font-bold text-lg text-slate-800 mb-2">Connect With Us</div>
            <div className="text-gray-600 text-base mb-3">Follow us on social media to stay updated with our latest news, events, and impact stories.</div>
            <div className="flex gap-4 mt-1">
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-500 hover:bg-sky-100 hover:text-sky-600 text-xl"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-500 hover:bg-sky-100 hover:text-sky-600 text-xl"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-500 hover:bg-sky-100 hover:text-sky-600 text-xl"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-500 hover:bg-sky-100 hover:text-sky-600 text-xl"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-500 hover:bg-sky-100 hover:text-sky-600 text-xl"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
