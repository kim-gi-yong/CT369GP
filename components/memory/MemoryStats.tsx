type Props = {
  memory: {
    visitor_count: number | null;
    candle_count: number | null;
    love_tree_level: number | null;
  };
  flowerCount: number;
  candleCount: number;
};


export default function MemoryStats({
  memory,
  flowerCount,
  candleCount,
}: Props) {
  return (
    <section className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="rounded-2xl bg-[#F8F5F0] p-5 text-center">
        <p className="text-sm text-gray-500">🌹 헌화</p>
        <p className="mt-2 text-3xl font-black text-[#D4AF37]">
          {flowerCount}
        </p>
      </div>

      <div className="rounded-2xl bg-[#F8F5F0] p-5 text-center">
        <p className="text-sm text-gray-500">🕯 촛불</p>
        <p className="mt-2 text-3xl font-black text-[#D4AF37]">
          {candleCount}
        </p>
      </div>

      <div className="rounded-2xl bg-[#F8F5F0] p-5 text-center">
        <p className="text-sm text-gray-500">👥 방문자</p>
        <p className="mt-2 text-3xl font-black text-[#0B1F3A]">
          {memory.visitor_count ?? 0}
        </p>
      </div>

      <div className="rounded-2xl bg-[#F8F5F0] p-5 text-center">
        <p className="text-sm text-gray-500">🌳 사랑나무</p>
        <p className="mt-2 text-3xl font-black text-green-700">
          Lv.{memory.love_tree_level ?? 1}
        </p>
      </div>
    </section>
  );
}