// import React from "react";

function DonateButton() {
  return (
    <a
      href="/donate"
      className="relative px-4 py-1.5 text-sm font-medium leading-5 text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
      role="button"
      aria-label="Make a donation"
    >
      Donate
    </a>
  );
}

export default DonateButton;
