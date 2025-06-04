// import React from "react";

const navigationItems = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/about-us" },
  { text: "Programs", path: "/programs" },
  { text: "Success Stories", path: "/success-stories" },
  { text: "News", path: "/news" },
  { text: "Contact", path: "/contact" },
];

function Navigation() {
  return (
    <nav
      className="flex relative items-center max-md:hidden max-sm:hidden"
      aria-label="Main navigation"
    >
      {navigationItems.map((item, index) => (
        <div
          key={item.path}
          className={`flex relative flex-col items-start ${index !== 0 ? "pl-8" : ""}`}
        >
          <a
            href={item.path}
            className="relative text-base leading-6 text-slate-700 hover:text-sky-600 transition-colors"
          >
            {item.text}
          </a>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
