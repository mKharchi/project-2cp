"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center p-0 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between px-9 py-1  w-full">
        {/* Logo */}
        <div className="rounded-full p-1 flex justify-center items-center">
          <Image src="/globe.svg" alt="Logo" width={30} height={30} priority />
        </div>

        {/* Navigation Links */}
        <div className="flex w-[60%] max-w-[500px] items-center justify-around">
          {["Home", "Link1", "Link2", "Link3", "Contact"].map((text, index) => (
            <Link
              key={index}
              href={text === "Contact" ? "/contact" : "/"}
              className="relative text-black dark:text-white  font-medium 
                         after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current 
                         after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 
                         hover:after:w-full"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
