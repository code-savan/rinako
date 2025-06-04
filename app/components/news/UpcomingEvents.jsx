import React from "react";
import { MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    date: "May 15, 2025",
    title: "Community Forum on Education",
    desc: "An open discussion on improving educational access in conflict-affected areas.",
    location: "Maiduguri Community Center",
    calendar: "#",
  },
  {
    date: "May 22, 2025",
    title: "Youth Leadership Workshop",
    desc: "A full-day workshop on community leadership and social entrepreneurship for young adults.",
    location: "Abuja Conference Center",
    calendar: "#",
  },
  {
    date: "May 25, 2025",
    title: "Healthcare Worker Training",
    desc: "Professional development for community health workers on maternal and child health.",
    location: "Yobe State Medical Center",
    calendar: "#",
  },
  {
    date: "May 28, 2025",
    title: "Annual Donor Conference",
    desc: "Virtual meeting with donors and partners to discuss program impact and future initiatives.",
    location: "Virtual Event",
    calendar: "#",
  },
];

const highlighted = [15, 22, 25, 28, 31];

const UpcomingEvents = () => (
  <section className="w-full bg-[#f8fafc] py-16 px-4 flex flex-col items-center">
    <div className="max-w-4xl w-full mx-auto flex flex-col items-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-2">Upcoming Events</h2>
      <p className="text-gray-500 text-center text-base md:text-lg max-w-2xl">
        Join us at our events and be part of the change
      </p>
    </div>
    <div className="max-w-5xl w-full mx-auto bg-white rounded-2xl shadow flex flex-col md:flex-row overflow-hidden">
      {/* Calendar */}
      <div className="md:w-2/3 w-full p-8 flex flex-col">
        <div className="font-semibold text-lg text-slate-800 mb-4">May 2025</div>
        <div className="w-full">
          <table className="w-full text-center select-none">
            <thead>
              <tr className="text-gray-400 text-base">
                <th className="font-normal">Sun</th>
                <th className="font-normal">Mon</th>
                <th className="font-normal">Tue</th>
                <th className="font-normal">Wed</th>
                <th className="font-normal">Thu</th>
                <th className="font-normal">Fri</th>
                <th className="font-normal">Sat</th>
              </tr>
            </thead>
            <tbody className="text-slate-700 text-lg">
              <tr>
                <td className="text-gray-300">27</td>
                <td className="text-gray-300">28</td>
                <td className="text-gray-300">29</td>
                <td className="text-gray-300">30</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
              </tr>
              <tr className="mb-2">
                <td>11</td><td>12</td><td>13</td><td>14</td>
                <td className="relative">
                  <span className="absolute inset-0 rounded-full bg-sky-100/80" style={{zIndex:0}}></span>
                  <span className="relative z-10 text-sky-600 font-bold">15</span>
                </td>
                <td>16</td><td>17</td>
              </tr>
              <tr>
                <td>18</td><td>19</td><td>20</td><td>21</td>
                <td className="relative">
                  <span className="absolute inset-0 rounded-full bg-sky-100/80" style={{zIndex:0}}></span>
                  <span className="relative z-10 text-sky-600 font-bold">22</span>
                </td>
                <td>23</td><td>24</td>
              </tr>
              <tr>
                <td className="relative">
                  <span className="absolute inset-0 rounded-full bg-sky-100/80" style={{zIndex:0}}></span>
                  <span className="relative z-10 text-sky-600 font-bold">25</span>
                </td>
                <td>26</td><td>27</td>
                <td className="relative">
                  <span className="absolute inset-0 rounded-full bg-sky-100/80" style={{zIndex:0}}></span>
                  <span className="relative z-10 text-sky-600 font-bold">28</span>
                </td>
                <td>29</td><td>30</td>
                <td className="relative">
                  <span className="absolute inset-0 rounded-full bg-sky-100/80" style={{zIndex:0}}></span>
                  <span className="relative z-10 text-sky-600 font-bold">31</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Events List */}
      <div className="md:w-1/3 w-full border-t md:border-t-0 md:border-l border-gray-100 p-8 flex flex-col gap-6 bg-white">
        <div className="font-semibold text-lg text-slate-800 mb-2">Upcoming Events</div>
        {events.map((event, idx) => (
          <div key={idx} className="mb-2">
            <div className="text-sky-600 text-xs font-semibold mb-1">{event.date}</div>
            <div className="font-bold text-slate-800 text-base mb-1 leading-tight">{event.title}</div>
            <div className="text-gray-600 text-sm mb-1">{event.desc}</div>
            <div className="flex items-center text-gray-400 text-xs mb-1"><MapPin className="w-4 h-4 mr-1" />{event.location}</div>
            <a href={event.calendar} className="text-sky-600 text-xs font-medium hover:underline">Add to Calendar</a>
          </div>
        ))}
        <a href="#" className="text-sky-600 text-sm font-semibold flex items-center gap-1 mt-2 hover:underline">
          View All Events <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
