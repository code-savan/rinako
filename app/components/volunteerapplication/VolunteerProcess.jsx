import React from "react";

const steps = [
  {
    number: 1,
    title: "Application",
    desc: "Submit your application with all required information. Our team will review your application within 5-7 business days.",
  },
  {
    number: 2,
    title: "Interview",
    desc: "If your application matches our current needs, we'll schedule a video interview to learn more about your skills and motivation.",
  },
  {
    number: 3,
    title: "Onboarding",
    desc: "Successful applicants will receive an orientation and training specific to their volunteer role before beginning their service.",
  },
];

const VolunteerProcess = () => (
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">The Volunteer Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="bg-white rounded-2xl shadow p-8 flex flex-col items-start  text-left md:text-center min-h-[220px]">
            <div className="bg-sky-100 text-sky-600 font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full mb-4">{step.number}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-slate-600 text-base text-left">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VolunteerProcess;
