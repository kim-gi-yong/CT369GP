"use client";

import { useState } from "react";

export default function FlowersPage() {
  const [count, setCount] = useState(152);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-4xl font-bold">
          🌹 헌화
        </h1>

        <p className="mt-4 text-center text-gray-500">
          사랑하는 마음을 꽃과 함께 전합니다.
        </p>

        <div className="mt-10 text-center">
          <div className="text-7xl">🌹</div>

          <p className="mt-6 text-2xl font-bold">
            현재 헌화
          </p>

          <p className="text-5xl font-black text-rose-600">
            {count}
          </p>
        </div>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-10 w-full rounded-2xl bg-rose-500 py-4 text-2xl font-bold text-white hover:bg-rose-600"
        >
          🌹 헌화하기
        </button>

      </div>
    </main>
  );
}