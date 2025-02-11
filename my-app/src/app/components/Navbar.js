"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full flex items-center justify-around bg-emerald-400 dark:bg-gray-900 shadow-md relative">
      <div className="w-[90%] flex justify-between items-center px-2 py-3">
        {/* Logo */}
        <div className="rounded-full p-1 flex justify-center items-center">
          <Image src="/globe.svg" alt="Logo" width={30} height={30} priority />
        </div>

        {/* Navigation Wrapper */}
        <div className="flex items-center">
          {/* Hamburger Button (for mobile) */}
          <button className="sm:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links (desktop) */}
          <div className="hidden sm:flex gap-2">
            {["Home", "Link1", "Link2", "Link3", "Contact"].map((text, index) => (
              <Link
                key={index}
                href={text === "Contact" ? "/contact" : "/"}
                className="text-[#232323] dark:text-white font-medium "
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu (outside nav) */}
      {isMenuOpen && (
        <div className="absolute top-full  w-1/5 rounded-md right-2 transition-all duration-300 ease-in-out bg-emerald-400 dark:bg-gray-900 flex flex-col items-center mt-1 py-3 shadow-md">/
          {["Home", "Link1", "Link2", "Link3", "Contact"].map((text, index) => (
            <Link
              key={index}
              href={text === "Contact" ? "/contact" : "/"}
              className="py-2 text-[#232323] dark:text-white font-medium hover:underline"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
