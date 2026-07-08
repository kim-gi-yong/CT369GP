"use client";

const familyMembers = [
  {
    id: 1,
    name: "배우자",
    role: "가족 대표",
    emoji: "👩",
  },
  {
    id: 2,
    name: "첫째",
    role: "아들",
    emoji: "👨",
  },
  {
    id: 3,
    name: "둘째",
    role: "딸",
    emoji: "👧",
  },
];

const menus = [
  { icon: "📢", title: "가족 공지" },
  { icon: "📅", title: "기일 · 일정" },
  { icon: "📷", title: "가족 전용 사진" },
  { icon: "🎬", title: "가족 전용 영상" },
  { icon: "💌", title: "편지 보관함" },
  { icon: "🤖", title: "AI 회고록" },
];

export default function FamilyPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-4xl font-bold">
          👨‍👩‍👧 가족공간
        </h1>

        <p className="mt-3 text-center text-gray-500">
          가족만을 위한 소중한 기억 공간입니다.
        </p>

        <div className="mt-10">

          <h2 className="mb-5 text-2xl font-bold">
            가족 구성원
          </h2>

          <div className="grid gap-4 md:grid-cols-3">

            {familyMembers.map((member) => (

              <div
                key={member.id}
                className="rounded-2xl border bg-gray-50 p-6 text-center shadow-sm"
              >

                <div className="text-5xl">
                  {member.emoji}
                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  {member.role}
                </p>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-12">

          <h2 className="mb-5 text-2xl font-bold">
            가족 전용 메뉴
          </h2>

          <div className="grid gap-4 md:grid-cols-2">

            {menus.map((menu) => (

              <button
                key={menu.title}
                className="rounded-2xl border bg-gray-50 p-6 text-left text-xl font-bold transition hover:bg-blue-50"
              >
                {menu.icon} {menu.title}
              </button>

            ))}

          </div>

        </div>

      </div>
    </main>
  );
}