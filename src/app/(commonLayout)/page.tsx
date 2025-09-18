"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Hero Section */}
      <h1 className="text-5xl font-bold">
        Welcome to <span className="text-rose-700">Next.js</span> Home Page
      </h1>

      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        This project demonstrates the power of{" "}
        <span className="font-semibold">React Server Components (RSC)</span>{" "}
        with seamless client-side navigation.
      </p>

      {/* CTA Button */}
      <button
        onClick={handleNavigation}
        className="mt-8 px-6 py-3 bg-rose-700 text-white rounded-full shadow-md hover:bg-rose-800 transition"
      >
        Go to Dashboard →
      </button>
    </div>
  );
}
