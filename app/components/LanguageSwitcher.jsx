"use client";
import React from "react";

const languages = [
  { code: "EN", label: "English" },
  { code: "AR", label: "Arabic" },
  { code: "FR", label: "French" },
];

function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = React.useState("EN");

  return (
    <div
      className="flex relative items-start max-md:gap-2 max-sm:hidden"
      role="group"
      aria-label="Language selector"
    >
      {languages.map((lang, index) => (
        <div
          key={lang.code}
          className={`flex relative flex-col items-start ${index !== 0 ? "pl-2 max-md:pl-1" : ""}`}
        >
          <button
            onClick={() => setSelectedLang(lang.code)}
            className={`relative px-2 py-0 text-base leading-6 text-center transition-colors
              ${selectedLang === lang.code ? "text-sky-600" : "text-gray-600 hover:text-sky-600"}`}
            aria-label={`Switch to ${lang.label}`}
            aria-pressed={selectedLang === lang.code}
          >
            {lang.code}
          </button>
        </div>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
