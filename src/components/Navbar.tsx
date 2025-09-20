import Link from "next/link";

export default function Navbar() {
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
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link href="/gallery" className="hover:text-gray-300">
          Gallery
        </Link>
        <Link href="/about" className="hover:text-gray-300">
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
