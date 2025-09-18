import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-rose-700">404</h1>
      <p className="mt-4 text-2xl font-semibold">Page Not Found</p>
      <p className="mt-2 text-gray-600">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-rose-700 text-white rounded-full shadow hover:bg-rose-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
