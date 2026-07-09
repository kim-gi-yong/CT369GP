"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  memoryId: string;
};

export default function MemoryActions({ memoryId }: Props) {
  const [flowerLoading, setFlowerLoading] = useState(false);
  const [candleLoading, setCandleLoading] = useState(false);

  async function handleFlower() {
    setFlowerLoading(true);

    await supabase.from("flowers").insert({
      memory_id: memoryId,
      visitor_name: "방문자",
      message: "당신을 기억합니다.",
    });

    window.location.reload();
  }

  async function handleCandle() {
    setCandleLoading(true);

    await supabase.from("candles").insert({
      memory_id: memoryId,
      visitor_name: "방문자",
    });

    window.location.reload();
  }

  return (
    <section className="mt-10 flex flex-col gap-4 md:flex-row">
      <button
        onClick={handleFlower}
        disabled={flowerLoading}
        className="flex-1 rounded-2xl bg-[#D4AF37] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
      >
        🌹 {flowerLoading ? "헌화 중..." : "헌화하기"}
      </button>

      <button
        onClick={handleCandle}
        disabled={candleLoading}
        className="flex-1 rounded-2xl bg-[#0B1F3A] px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
      >
        🕯 {candleLoading ? "촛불 밝히는 중..." : "촛불 밝히기"}
      </button>
    </section>
  );
}