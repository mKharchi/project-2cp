import Link from "next/link";

import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="w-full flex justify-center items-center p-0 bg-gray-100 dark:bg-gray-900 shadow-md">
    <div className="flex items-center justify-between w-full px-3 py-1">
      {/* Logo */}
      <div className="rounded-full p-1 flex justify-center items-center">
        <Image src="/globe.svg" alt="Logo" width={30} height={30} />
      </div>
        <div className="flex  justify-between w-[70%]">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-md font-semibold"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline  text-md font-semibold"
          >
             link1
          </Link>   
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline  text-md font-semibold"
          >
             link2
          </Link>          
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline  text-md font-semibold"
          >
             link3
          </Link>          
          <Link
            href="/ "
            className="text-blue-600 dark:text-blue-400 hover:underline  text-md font-semibold"
          >
             link4
          </Link>
        </div>
      </div>
    </nav>
  );
}
