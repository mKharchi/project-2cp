import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="flex justify-center space-x-6">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-semibold"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
