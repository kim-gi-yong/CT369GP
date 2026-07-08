"use client";

import { useState } from "react";

type GuestbookItem = {
  id: number;
  name: string;
  message: string;
};

export default function GuestbookPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [guestbooks, setGuestbooks] = useState<GuestbookItem[]>([
    {
      id: 1,
      name: "방문자",
      message: "늘 기억하겠습니다.",
    },
  ]);

  function handleSubmit() {
    if (!name || !message) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }

    const newGuestbook = {
      id: Date.now(),
      name,
      message,
    };

    setGuestbooks([newGuestbook, ...guestbooks]);
    setName("");
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold">✍ 방명록</h1>

        <p className="mt-4 text-center text-gray-500">
          고인을 기억하는 마음을 남겨주세요.
        </p>

        <div className="mt-10 space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            className="w-full rounded-xl border p-4 text-lg"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="추모 메시지를 남겨주세요."
            rows={5}
            className="w-full rounded-xl border p-4 text-lg"
          />

          <button
            onClick={handleSubmit}
            className="w-full rounded-2xl bg-blue-600 py-4 text-2xl font-bold text-white hover:bg-blue-700"
          >
            ✍ 방명록 작성
          </button>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">최근 방명록</h2>

          <div className="mt-5 space-y-4">
            {guestbooks.map((item) => (
              <div key={item.id} className="rounded-2xl border bg-gray-50 p-5">
                <p className="font-bold">{item.name}</p>
                <p className="mt-2 text-gray-600">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}