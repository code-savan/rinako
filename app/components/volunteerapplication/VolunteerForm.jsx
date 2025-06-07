"use client";
import React, { useRef } from "react";
import { Info, Clock } from "lucide-react";

const sections = [
  { label: "Personal Info", id: "personal-info" },
  { label: "Preferences", id: "preferences" },
  { label: "Skills", id: "skills" },
  { label: "Availability", id: "availability" },
  { label: "Motivation", id: "motivation" },
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Nigeria",
  "Ghana",
  "Kenya",
  // ...add more as needed
];

const backgrounds = [
  "Education",
  "Healthcare",
  "Engineering",
  "Administration",
  "Child Care",
  "Other",
];

const skills = [
  "Teaching",
  "Medical Assistance",
  "Project Management",
  "Fundraising",
  "Technical Support",
  "Languages",
  "Other",
];

const durations = [
  "2 weeks",
  "1 month",
  "3 months",
  "6 months",
  "1 year",
  "Other",
];

const schedules = [
  "Weekday Mornings",
  "Weekday Afternoons",
  "Weekday Evenings",
  "Weekends",
  "Flexible",
];

const VolunteerForm = () => {
  const refs = {
    "personal-info": useRef(null),
    preferences: useRef(null),
    skills: useRef(null),
    availability: useRef(null),
    motivation: useRef(null),
  };
  const [form, setForm] = React.useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    isAdult: false,
    // Preferences
    volunteeringType: "",
    interests: [],
    duration: "",
    // Skills
    background: "",
    relevantSkills: [],
    languages: "",
    prevExperience: "",
    resume: null,
    // Availability
    startDate: "",
    hoursPerWeek: "",
    schedule: [],
    // Motivation
    motivation: "",
    hearAbout: "",
    references: "",
    agree: false,
  });

  // Helper for checkboxes
  const handleCheckbox = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  // Helper for radio
  const handleRadio = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Helper for input
  const handleInput = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Scroll to section
  const scrollToSection = (id) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-16 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Volunteer Application</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Join our global community of volunteers and make a real difference in the lives of vulnerable children and communities around the world.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-2 h-8 bg-sky-400 rounded-full inline-block mr-2" />
            Application Sections
          </h3>
          <div className="flex flex-wrap gap-3 mt-3">
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                className="px-5 py-2 rounded-full text-base font-semibold transition-all bg-sky-50 text-sky-500 hover:bg-sky-100 hover:text-sky-700"
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </div>
        </div>
        <form className="bg-white rounded-2xl shadow p-0 overflow-hidden">
          {/* Personal Information */}
          <div ref={refs["personal-info"]} id="personal-info" className="p-8 md:p-10 border-b border-b-gray-100 scroll-mt-24">
            <h4 className="text-xl font-bold text-slate-900 mb-1">Personal Information</h4>
            <p className="text-slate-500 mb-6">Please provide your contact details so we can reach you.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">First Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.firstName} onChange={e => handleInput("firstName", e.target.value)} />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.lastName} onChange={e => handleInput("lastName", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.email} onChange={e => handleInput("email", e.target.value)} />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.phone} onChange={e => handleInput("phone", e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Country <span className="text-red-500">*</span></label>
                <select className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-slate-50 text-slate-700" value={form.country} onChange={e => handleInput("country", e.target.value)}>
                  <option value="">Select your country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">City <span className="text-red-500">*</span></label>
                <input type="text" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.city} onChange={e => handleInput("city", e.target.value)} />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="form-checkbox w-5 h-5 text-sky-600 rounded border-slate-300" checked={form.isAdult} onChange={e => handleInput("isAdult", e.target.checked)} />
              <span className="text-slate-700 text-sm">I confirm that I am 18 years of age or older <span className="text-red-500">*</span></span>
            </div>
          </div>

          {/* Volunteer Preferences */}
          <div ref={refs.preferences} id="preferences" className="p-8 md:p-10 border-b border-b-gray-100 scroll-mt-24">
            <h4 className="text-xl font-bold text-slate-900 mb-1">Volunteer Preferences</h4>
            <p className="text-slate-500 mb-6">Tell us how you'd like to contribute to our mission.</p>
            <div className="mb-6">
              <label className=" block text-slate-700 font-medium mb-2">Type of Volunteering <span className="text-red-500">*</span></label>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer text-slate-800 text-base font-medium">
                  <input type="radio" name="volunteeringType" checked={form.volunteeringType === "International"} onChange={() => handleRadio("volunteeringType", "International")} className="form-radio w-5 h-5 text-sky-600 border-slate-300" />
                    <div className="flex flex-col">
                  <span>International</span>
                  <span className="text-slate-400 font-normal text-sm">Travel to communities around the world (2-12 weeks)</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-800 text-base font-medium">
                  <input type="radio" name="volunteeringType" checked={form.volunteeringType === "Local"} onChange={() => handleRadio("volunteeringType", "Local")} className="form-radio w-5 h-5 text-sky-600 border-slate-300" />
                  <div className="flex flex-col">
                    <span>Local</span>
                    <span className="text-slate-400 font-normal text-sm">Support initiatives in your community</span>
                  </div>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-800 text-base font-medium">
                  <input type="radio" name="volunteeringType" checked={form.volunteeringType === "Virtual"} onChange={() => handleRadio("volunteeringType", "Virtual")} className="form-radio w-5 h-5 text-sky-600 border-slate-300" />
                  <div className="flex flex-col">
                    <span>Virtual</span>
                    <span className="text-slate-400 font-normal text-sm">Contribute remotely from anywhere in the world</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Areas of Interest <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Education",
                  "Child Care",
                  "Technical Support",
                  "Healthcare",
                  "Administration",
                  "Other",
                ].map((interest) => (
                  <label key={interest} className="flex items-center gap-3 cursor-pointer text-slate-800 text-base font-medium">
                    <input type="checkbox" checked={form.interests.includes(interest)} onChange={() => handleCheckbox("interests", interest)} className="form-checkbox w-5 h-5 text-sky-600 border-slate-300" />
                    {interest}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Preferred Duration of Commitment <span className="text-red-500">*</span></label>
              <select className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-slate-50 text-slate-700" value={form.duration} onChange={e => handleInput("duration", e.target.value)}>
                <option value="">Select duration</option>
                {durations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-sky-400 mt-1" />
              <div>
                <span className="font-semibold text-sky-700">Volunteer Requirements</span>
                <p className="text-slate-600 text-sm mt-1">International volunteers must be available for at least 2 weeks, have a valid passport, and be willing to undergo a background check. Local and virtual volunteers can contribute on a more flexible schedule but we ask for a minimum commitment of 4 hours per week.</p>
              </div>
            </div>
          </div>

          {/* Skills & Experience */}
          <div ref={refs.skills} id="skills" className="p-8 md:p-10 border-b border-b-gray-100 scroll-mt-24">
            <h4 className="text-xl font-bold text-slate-900 mb-1">Skills & Experience</h4>
            <p className="text-slate-500 mb-6">Tell us about your background and skills that could benefit our mission.</p>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Professional Background <span className="text-red-500">*</span></label>
              <select className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-slate-50 text-slate-700" value={form.background} onChange={e => handleInput("background", e.target.value)}>
                <option value="">Select your background</option>
                {backgrounds.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">
                Relevant Skills <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col gap-2">
                {skills.map((s) => (
                  <label
                    key={s}
                    className="flex items-center gap-3 cursor-pointer text-slate-800 text-base font-medium"
                  >
                    <input
                      type="checkbox"
                      checked={form.relevantSkills.includes(s)}
                      onChange={() => handleCheckbox("relevantSkills", s)}
                      className="form-checkbox w-5 h-5 text-sky-600 border-slate-300"
                    />
                    {s}
                  </label>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-1">
                Select all skills that apply
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Languages Spoken <span className="text-red-500">*</span></label>
              <input type="text" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" placeholder="e.g., English (fluent), Spanish (intermediate)" value={form.languages} onChange={e => handleInput("languages", e.target.value)} />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Previous Volunteer Experience</label>
              <textarea className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white min-h-[150px]" placeholder="Please describe any previous volunteer experience you have" value={form.prevExperience} onChange={e => handleInput("prevExperience", e.target.value)} />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Upload Resume/CV (Optional)</label>
              <div className="border-2 h-[150px] border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-white cursor-pointer">
                <span className="text-slate-400 mb-1">&#8682; Choose file or drag and drop</span>
                <span className="text-slate-400 text-xs">Accepted formats: PDF, DOC, DOCX (Max 5MB)</span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div ref={refs.availability} id="availability" className="p-8 md:p-10 border-b border-b-gray-100 scroll-mt-24">
            <h4 className="text-xl font-bold text-slate-900 mb-1">Availability</h4>
            <p className="text-slate-500 mb-6">Let us know when you're available to volunteer.</p>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Earliest Start Date <span className="text-red-500">*</span></label>
              <input type="date" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.startDate} onChange={e => handleInput("startDate", e.target.value)} />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Hours Available Per Week <span className="text-red-500">*</span></label>
              <input type="number" min="1" className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white" value={form.hoursPerWeek} onChange={e => handleInput("hoursPerWeek", e.target.value)} />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Preferred Schedule <span className="text-red-500">*</span></label>
              <div className="flex flex-col gap-2">
                {schedules.map((s) => (
                  <label key={s} className="flex items-center gap-3 cursor-pointer text-slate-800 text-base font-medium">
                    <input type="checkbox" checked={form.schedule.includes(s)} onChange={() => handleCheckbox("schedule", s)} className="form-checkbox w-5 h-5 text-sky-600 border-slate-300" />
                    {s}
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-sky-400 mt-1" />
              <div>
                <span className="font-semibold text-sky-700">Expected Commitments</span>
                <p className="text-slate-600 text-sm mt-1">International volunteers are expected to commit to their full program duration. Local volunteers typically commit to 3-6 months with 4-10 hours per week. Virtual volunteers can contribute on a more flexible schedule but we ask for consistency in your availability.</p>
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div ref={refs.motivation} id="motivation" className="p-8 md:p-10 scroll-mt-24">
            <h4 className="text-xl font-bold text-slate-900 mb-1">Motivation</h4>
            <p className="text-slate-500 mb-6">Tell us why you want to volunteer with the Rinako Foundation.</p>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">Motivation Statement <span className="text-red-500">*</span></label>
              <textarea className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white min-h-[150px]" placeholder="Please tell us why you want to volunteer with us and what you hope to contribute and gain from the experience" value={form.motivation} onChange={e => handleInput("motivation", e.target.value)} />
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">How did you hear about us? <span className="text-red-500">*</span></label>
              <select className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-slate-50 text-slate-700" value={form.hearAbout} onChange={e => handleInput("hearAbout", e.target.value)}>
                <option value="">Select an option</option>
                <option value="Website">Website</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Colleague">Friend/Colleague</option>
                <option value="Event">Event</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-slate-700 font-medium mb-2">References (Optional)</label>
              <textarea className="w-full rounded-lg border border-slate-300 py-3 px-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-200 outline-none bg-white min-h-[150px]" placeholder="Please provide the name, relationship, and contact information for 1-2 references" value={form.references} onChange={e => handleInput("references", e.target.value)} />
            </div>
            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" className="form-checkbox w-5 h-5 text-sky-600 rounded border-slate-300" checked={form.agree} onChange={e => handleInput("agree", e.target.checked)} />
              <span className="text-slate-700 text-sm">I agree to the <a href="#" className="text-sky-600 underline">Terms & Conditions</a> and <a href="#" className="text-sky-600 underline">Privacy Policy</a> <span className="text-red-500">*</span></span>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-lg p-4 flex items-start gap-3 mb-6">
              <Info className="w-5 h-5 text-sky-400 mt-1" />
              <div>
                <span className="font-semibold text-sky-700">Background Check Information</span>
                <p className="text-slate-600 text-sm mt-1">All volunteers working directly with children or vulnerable populations will be required to undergo a background check. This is a standard procedure to ensure the safety of those we serve. If your application is accepted, we will provide more information about this process.</p>
              </div>
            </div>
            <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 transition-colors text-white font-semibold text-lg py-3 rounded-lg shadow">Submit Application</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VolunteerForm;
