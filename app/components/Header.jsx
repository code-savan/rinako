"use client";
// import * as React from "react";
import React, { useState } from "react";
import Navigation from "./Navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import DonateButton from "./DonateButton";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex relative flex-col items-center w-full max-w-7xl mx-auto bg-white bg-opacity-90 z-50">
      <div className="flex relative flex-col items-start px-4 py-3 w-full max-w-screen-2xl max-md:px-6 max-md:py-3 max-sm:px-4 max-sm:py-3">
        <div className="flex relative justify-between items-center w-full">
            <Link href="/">
          <img
            src="/logo.png"
            alt="Rinako Foundation Logo"
            // width={150}
            // height={150}
            className="relative h-16 max-w-[164px] w-fit max-sm:h-[54px] max-sm:max-w-[140px] max-sm:w-[140px]"
          />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <Navigation />
          </div>
          <div className="hidden md:flex gap-0 items-center">
            <LanguageSwitcher />
            <div className="flex flex-col items-start pl-4 max-md:pl-3">
              <DonateButton />
            </div>
          </div>
          {/* Hamburger Icon */}
          <div className="w-fit flex items-center md:hidden">
          <DonateButton />
          <button
            className="md:hidden ml-auto p-2 text-slate-700 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
              </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 animate-fade-in flex flex-col gap-4 p-6">
            <NavigationMobile />
            <div className="flex flex-col gap-3 mt-4">
              <LanguageSwitcher />
              <DonateButton />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavigationMobile() {
  const navigationItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Programs", path: "/programs" },
    { text: "Success Stories", path: "/success-stories" },
    { text: "News", path: "/news" },
    { text: "Contact", path: "/contact" },
  ];
  return (
    <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
      {navigationItems.map((item) => (
        <a
          key={item.path}
          href={item.path}
          className="text-base text-slate-700 hover:text-sky-600 transition-colors py-2"
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}

export default Header;
