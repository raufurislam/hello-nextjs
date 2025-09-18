import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>

      <nav className="flex-1 p-6 space-y-4">
        <Link href="/" className="block hover:text-gray-300">
          Home
        </Link>
        <Link href="/profile" className="block hover:text-gray-300">
          Profile
        </Link>
        <Link href="/settings" className="block hover:text-gray-300">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
