"use client";

import { useState } from "react";

type Video = {
  id: number;
  title: string;
  length: string;
};

export default function VideosPage() {
  const [videos] = useState<Video[]>([
    {
      id: 1,
      title: "추억 영상",
      length: "03:28",
    },
    {
      id: 2,
      title: "가족의 기억",
      length: "05:12",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-4xl font-bold">
          🎬 AI 추모영상
        </h1>

        <p className="mt-3 text-center text-gray-500">
          AI가 소중한 추억을 영상으로 만들어 드립니다.
        </p>

        <button
          className="mt-8 w-full rounded-2xl bg-purple-600 py-4 text-xl font-bold text-white hover:bg-purple-700"
        >
          🎬 AI 영상 만들기
        </button>

        <div className="mt-10 space-y-5">

          {videos.map((video) => (

            <div
              key={video.id}
              className="flex items-center gap-6 rounded-2xl border bg-gray-50 p-5 shadow-sm"
            >

              <div className="flex h-28 w-40 items-center justify-center rounded-xl bg-gray-200 text-5xl">
                ▶️
              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-bold">
                  {video.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  재생시간 {video.length}
                </p>

              </div>

              <button
                className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                재생
              </button>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}