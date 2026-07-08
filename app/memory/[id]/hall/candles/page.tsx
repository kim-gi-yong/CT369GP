"use client";

import { useState } from "react";

export default function CandlesPage() {
  const [count, setCount] = useState(328);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold">🕯 촛불</h1>

        <p className="mt-4 text-center text-gray-500">
          따뜻한 마음으로 기억의 불을 밝힙니다.
        </p>

        <div className="mt-10 text-center">
          <div className="text-7xl">🕯</div>

          <p className="mt-6 text-2xl font-bold">현재 촛불</p>

          <p className="text-5xl font-black text-orange-500">
            {count}
          </p>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-10 w-full rounded-2xl bg-orange-500 py-4 text-2xl font-bold text-white hover:bg-orange-600"
        >
          🕯 촛불 밝히기
        </button>
      </div>
    </main>
  );
}