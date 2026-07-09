"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  memoryId: string;
};

export default function GuestBook({ memoryId }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!message) return;

    setLoading(true);

    await supabase.from("guestbook").insert({
      memory_id: memoryId,
      visitor_name: name || "방문자",
      message,
    });

    setLoading(false);
    setName("");
    setMessage("");

    window.location.reload();
  }

  return (
    <section className="mt-12 rounded-3xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">
        ✍️ 방명록
      </h2>

      <input
        className="mt-6 w-full rounded-xl border p-3"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="mt-4 h-32 w-full rounded-xl border p-3"
        placeholder="추모의 글을 남겨주세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 rounded-xl bg-[#0B1F3A] px-6 py-3 text-white"
      >
        {loading ? "저장중..." : "남기기"}
      </button>
    </section>
  );
}