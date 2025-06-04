import React from "react";

const team = [
  {
    img: "/team1.png",
    name: "Abba Saleh Ibrahim",
    title: "Founder President",
    desc: "Visionary leader and founder of Rinako Foundation, dedicated to transforming lives through sustainable development and humanitarian initiatives.",
  },
  {
    img: "/team2.png",
    name: "Dr. Ibrahim M Hassan",
    title: "Director of Finance and Communication",
    desc: "Leading financial strategy and organizational communications with extensive experience in nonprofit management.",
  },
  {
    img: "/team3.png",
    name: "Mal. Harun Abdulqadir",
    title: "Assistant",
    desc: "Coordinating operational activities and providing crucial support to executive leadership.",
  },
  {
    img: "/team4.png",
    name: "Yusuf Muhammad Yahya",
    title: "Director of Publicity and Programming",
    desc: "Leading strategic communications and program development initiatives across the organization.",
  },
  {
    img: "/team5.png",
    name: "Alhaji Musa Ibrahim",
    title: "Board of Trustee Patron",
    desc: "Providing strategic guidance and oversight to ensure the foundation's long-term success and impact.",
  },
  {
    img: "/team6.png",
    name: "Prof. Dr. Jidda Hassan",
    title: "Academic Advisor",
    desc: "Providing expert guidance on educational initiatives and academic program development.",
  },
];

const LeadershipTeam = () => (
  <section className="w-full bg-gray-50 py-20 px-4 flex flex-col items-center">
    <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-3">Leadership Team</h2>
      <p className="text-gray-500 text-center text-base mb-12 max-w-2xl">
        Meet the dedicated professionals guiding our mission and vision around the world.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-6 flex flex-col flex-1">
              <div className="font-bold text-slate-800 text-lg mb-1">{member.name}</div>
              <div className="text-gray-500 text-base mb-2 font-medium">{member.title}</div>
              <div className="text-gray-600 text-base leading-relaxed">{member.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipTeam;
