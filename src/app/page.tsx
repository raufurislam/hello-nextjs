"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  console.log("Hello world");
  return (
    <div className="text-center flex items-center justify-center flex-col gap-4 min-h-screen">
      <h1 className="text-4xl">Welcome To Next.js Home Page</h1>
      <p className="text-6xl">React Server Component (RSC)</p>

      <button
        onClick={handleNavigation}
        className="px-5 py-2 bg-rose-700 rounded-full border hover:bg-rose-800"
      >
        Dashboard
      </button>
    </div>
  );
}
