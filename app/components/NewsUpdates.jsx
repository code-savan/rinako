import * as React from "react";

function NewsUpdates() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-50 px-4">
      <h2 className="text-4xl font-bold text-slate-800 text-center mb-2">News & Updates</h2>
      <p className="text-gray-600 text-center text-base mb-10 max-w-xl">
        Stay informed about our latest projects, events, and impact stories.
      </p>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 items-start mx-auto">
        {/* Main News Card */}
        <div className="bg-white rounded-2xl shadow-md flex-1 min-w-0 flex flex-col overflow-hidden w-full">
          <div className="w-full h-64 md:h-72 lg:h-72 xl:h-80 overflow-hidden">
            <img
              src="/houseimage.png"
              alt="New School Opens Doors to 500 Children in Rural Mali"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-sky-100 text-sky-600 text-sm font-medium rounded-full px-3 py-1">Education</span>
              <span className="text-gray-400 text-sm">May 15, 2025</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 leading-snug mb-1">New School Opens Doors to 500 Children in Rural Mali</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              After two years of construction and community collaboration, our newest educational facility is now providing quality education to
              <br />
              hundreds of children who previously had no access to schooling.
            </p>
            <a href="#" className="text-sky-600 font-medium text-base inline-flex items-center gap-1 hover:underline mt-2">
              Read Full Story <span className="ml-1">→</span>
            </a>
          </div>
        </div>
        {/* Side News Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-[370px] xl:w-[400px] flex-shrink-0">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-sky-100 text-sky-600 text-sm font-medium rounded-full px-3 py-1">Healthcare</span>
              <span className="text-gray-400 text-sm">May 10, 2025</span>
            </div>
            <h4 className="text-base font-bold text-slate-800 leading-snug mb-1">Mobile Clinic Initiative Reaches 10,000 Patients</h4>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              Our mobile healthcare program has achieved a significant<br />
              milestone in providing essential medical services to remote<br />
              communities.
            </p>
            <a href="#" className="text-sky-600 font-medium text-base inline-flex items-center gap-1 hover:underline mt-2">
              Read More <span className="ml-1">→</span>
            </a>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-sky-100 text-sky-600 text-sm font-medium rounded-full px-3 py-1">Event</span>
              <span className="text-gray-400 text-sm">May 22, 2025</span>
            </div>
            <h4 className="text-base font-bold text-slate-800 leading-snug mb-1">Annual Charity Gala to be Held in London</h4>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              Join us for an evening of inspiration and giving as we celebrate our achievements and raise funds for future projects.
            </p>
            <a href="#" className="text-sky-600 font-medium text-base inline-flex items-center gap-1 hover:underline mt-2">
              Read More <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsUpdates;
