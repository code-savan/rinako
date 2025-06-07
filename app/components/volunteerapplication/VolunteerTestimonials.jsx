import React from "react";

const testimonials = [
  {
    name: "Emily Richardson",
    role: "International Volunteer, Kenya Program",
    avatar: "/Volunteer.png",
    quote:
      '"Volunteering with the Rinako Foundation was one of the most rewarding experiences of my life. I spent three months teaching English in a rural school in Kenya, and the connections I made with the students and community will stay with me forever. The foundation provided excellent support throughout the entire process."',
  },
  // Add more testimonials as needed
];

const VolunteerTestimonials = () => (
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">Volunteer Testimonials</h2>
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-6 mb-6">
        <img
          src={testimonials[0].avatar}
          alt={testimonials[0].name}
          className="w-20 h-20 rounded-full object-cover object-center border-4 border-sky-100"
        />
        <div className="flex-1">
          <div className="text-sky-400 text-3xl mb-2">&ldquo;</div>
          <p className="text-slate-700 italic text-lg mb-4">{testimonials[0].quote}</p>
          <div>
            <span className="font-bold text-slate-900">{testimonials[0].name}</span>
            <div className="text-slate-500 text-sm">{testimonials[0].role}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <span className="w-3 h-3 rounded-full bg-sky-400" />
        <span className="w-3 h-3 rounded-full bg-sky-100" />
        <span className="w-3 h-3 rounded-full bg-sky-100" />
        <span className="w-3 h-3 rounded-full bg-sky-100" />
      </div>
    </div>
  </section>
);

export default VolunteerTestimonials;
