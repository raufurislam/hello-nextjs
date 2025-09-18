"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  console.log(count);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white max-w-3xl shadow-md rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-400 mb-4">
          Simple Counter
        </h1>
        <p className="text-4xl font-semibold text-indigo-600 mb-6">{count}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            - Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-400 text-white rounded-xl hover:bg-gray-500 transition"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
          >
            + Increment
          </button>
        </div>
      </div>
    </div>
  );
}
