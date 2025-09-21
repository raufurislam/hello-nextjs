"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-rose-700">Error</h1>
      <p className="mt-4 text-2xl font-semibold">Something went wrong.</p>
      <p className="mt-2 text-red-500 font-medium">
        {error?.message || "Unknown error occurred."}
      </p>
      <p className="mt-2 text-gray-600">
        We couldn't process your request at the moment. Please try again later.
      </p>

      <div className="mt-6 space-x-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gray-600 text-white rounded-full shadow hover:bg-gray-700 transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="px-6 py-3 bg-rose-700 text-white rounded-full shadow hover:bg-rose-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
