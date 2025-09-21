"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
      {/* Logo / Brand */}
      <Link href="/" className="text-xl font-bold">
        NextJS
      </Link>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-sm px-4 py-2 rounded-md 
                     bg-gray-800 text-white placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-rose-600"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "text-rose-700 font-semibold underline"
              : "text-white hover:text-gray-300"
          }`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`${
            pathname === "/products"
              ? "text-rose-700 font-semibold underline"
              : "text-white hover:text-gray-300"
          }`}
        >
          Products
        </Link>
        <Link
          href="/gallery"
          className={`${
            pathname === "/gallery"
              ? "text-rose-700 font-semibold underline"
              : "text-white hover:text-gray-300"
          }`}
        >
          Gallery
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about"
              ? "text-rose-700 font-semibold underline"
              : "text-white hover:text-gray-300"
          }`}
        >
          About
        </Link>
        {/* <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
        <Link href="/login" className="hover:text-gray-300">
          Login
        </Link>
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link> */}
      </div>
    </nav>
  );
}
