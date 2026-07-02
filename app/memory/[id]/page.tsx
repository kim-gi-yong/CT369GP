import MemoryActions from "@/components/memory/MemoryActions";
import MemoryStats from "@/components/memory/MemoryStats";
import GuestBookPreview from "@/components/memory/GuestBookPreview";

export default function MemoryDetailPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-white p-4 shadow-sm">
        <button className="text-blue-600">← 뒤로가기</button>
      </div>

      <section className="flex flex-col items-center p-6">
        <div className="h-28 w-28 rounded-full bg-gray-300" />
        <h1 className="mt-4 text-2xl font-bold">故 홍길동</h1>
        <p className="text-gray-500">1948 ~ 2025</p>
      </section>

      <section className="mx-4 rounded-xl bg-white p-5 shadow">
        <h2 className="mb-2 font-semibold">소개</h2>
        <p className="text-gray-600">
          사랑하는 가족과 친구들에게 따뜻한 기억으로 남아있는 분입니다.
        </p>
      </section>

      <MemoryActions />

      <MemoryStats
        tributeCount={352}
        flowerCount={186}
        visitorCount={1205}
      />

      <GuestBookPreview />
    </main>
  );
}