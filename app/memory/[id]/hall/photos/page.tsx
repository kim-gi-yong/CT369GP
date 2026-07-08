"use client";

import { useState } from "react";

type Photo = {
  id: number;
  title: string;
};

export default function PhotosPage() {
  const [photos] = useState<Photo[]>([
    { id: 1, title: "어린 시절" },
    { id: 2, title: "가족여행" },
    { id: 3, title: "결혼식" },
    { id: 4, title: "행복한 미소" },
  ]);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-4xl font-bold">
          📷 추억사진
        </h1>

        <p className="mt-3 text-center text-gray-500">
          소중한 추억을 사진으로 기억합니다.
        </p>

        <button
          className="mt-8 w-full rounded-2xl bg-blue-600 py-4 text-xl font-bold text-white hover:bg-blue-700"
        >
          ＋ 사진 추가
        </button>

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

          {photos.map((photo) => (

            <div
              key={photo.id}
              className="overflow-hidden rounded-2xl border bg-gray-50 shadow"
            >

              <div className="flex aspect-square items-center justify-center bg-gray-200 text-5xl">
                🖼️
              </div>

              <div className="p-4">

                <p className="text-center font-bold">
                  {photo.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}