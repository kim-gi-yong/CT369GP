"use client";

import { useState } from "react";

type Music = {
  id: number;
  title: string;
  artist: string;
  duration: string;
};

export default function MusicPage() {
  const [musics] = useState<Music[]>([
    {
      id: 1,
      title: "아버지의 노래",
      artist: "Memory Pixel",
      duration: "03:42",
    },
    {
      id: 2,
      title: "그날의 추억",
      artist: "Memory Pixel",
      duration: "04:18",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-4xl font-bold">
          🎵 추억음악
        </h1>

        <p className="mt-3 text-center text-gray-500">
          함께 들었던 음악으로 추억을 기억합니다.
        </p>

        <button
          className="mt-8 w-full rounded-2xl bg-emerald-600 py-4 text-xl font-bold text-white hover:bg-emerald-700"
        >
          🎵 음악 추가
        </button>

        <div className="mt-10 space-y-5">

          {musics.map((music) => (

            <div
              key={music.id}
              className="flex items-center gap-5 rounded-2xl border bg-gray-50 p-5 shadow-sm"
            >

              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-200 text-5xl">
                🎵
              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-bold">
                  {music.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  {music.artist}
                </p>

                <p className="text-sm text-gray-400">
                  {music.duration}
                </p>

              </div>

              <button
                className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
              >
                ▶ 재생
              </button>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}