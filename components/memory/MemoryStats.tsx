type MemoryStatsProps = {
  tributeCount: number;
  flowerCount: number;
  visitorCount: number;
};

export default function MemoryStats({
  tributeCount,
  flowerCount,
  visitorCount,
}: MemoryStatsProps) {
  return (
    <section className="mx-4 mt-6 rounded-xl bg-white p-5 shadow">
      <h2 className="mb-4 text-lg font-bold">
        오늘의 추모
      </h2>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-3xl">❤️</p>
          <p className="mt-2 text-xl font-bold">
            {tributeCount}
          </p>
          <p className="text-gray-500">
            추모
          </p>
        </div>

        <div>
          <p className="text-3xl">🕯️</p>
          <p className="mt-2 text-xl font-bold">
            {flowerCount}
          </p>
          <p className="text-gray-500">
            헌화
          </p>
        </div>

        <div>
          <p className="text-3xl">👥</p>
          <p className="mt-2 text-xl font-bold">
            {visitorCount}
          </p>
          <p className="text-gray-500">
            방문
          </p>
        </div>
      </div>
    </section>
);
}