import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default function MemoryHallPage({ params }: Props) {
  const { id } = params;

  const menus = [
    { title: "🌹 헌화", href: `/memory/${id}/hall/flowers` },
    { title: "🕯 촛불", href: `/memory/${id}/hall/candles` },
    { title: "✍ 방명록", href: `/memory/${id}/hall/guestbook` },
    { title: "📷 추억사진", href: `/memory/${id}/hall/photos` },
    { title: "🎬 AI 추모영상", href: `/memory/${id}/hall/videos` },
    { title: "🎵 추억음악", href: `/memory/${id}/hall/music` },
    { title: "👨‍👩‍👧 가족공간", href: `/memory/${id}/hall/family` },
  ];

  return (
    <main className="min-h-screen bg-[#F7F1E3] px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-xl">
        <h1 className="text-center text-4xl font-black text-[#0B1F3A]">
          🏛 Memory Hall
        </h1>

        <p className="mt-3 text-center text-lg text-gray-600">
          사랑하는 사람을 기억하는 공간
        </p>

        <div className="my-8 h-px bg-[#D4AF37]" />

        <section className="text-center">
          <h2 className="text-4xl font-black text-[#111827]">故 홍길동</h2>

          <p className="mt-3 text-lg text-gray-500">
            1958.03.21 ~ 2026.07.08
          </p>

          <div className="mx-auto mt-8 flex h-72 w-72 items-center justify-center rounded-[2rem] bg-[#F1EEE8] text-gray-500 shadow-inner">
            대표 사진
          </div>

          <p className="mx-auto mt-8 max-w-xl text-xl italic leading-relaxed text-[#0B1F3A]">
            "당신은 우리의 마음속에 영원히 살아갑니다."
          </p>
        </section>

        <section className="mt-10 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <div className="rounded-2xl bg-[#F8F5F0] p-4">
            <p className="text-sm text-gray-500">헌화</p>
            <p className="text-2xl font-black text-[#D4AF37]">152</p>
          </div>
          <div className="rounded-2xl bg-[#F8F5F0] p-4">
            <p className="text-sm text-gray-500">촛불</p>
            <p className="text-2xl font-black text-[#D4AF37]">329</p>
          </div>
          <div className="rounded-2xl bg-[#F8F5F0] p-4">
            <p className="text-sm text-gray-500">방명록</p>
            <p className="text-2xl font-black text-[#D4AF37]">1</p>
          </div>
          <div className="rounded-2xl bg-[#F8F5F0] p-4">
            <p className="text-sm text-gray-500">방문자</p>
            <p className="text-2xl font-black text-[#D4AF37]">17</p>
          </div>
        </section>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="rounded-3xl border border-[#E8DDC5] bg-[#FAF8F2] p-7 text-xl font-bold text-[#0B1F3A] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1F3A] hover:text-[#F7F1E3] hover:shadow-xl"
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}