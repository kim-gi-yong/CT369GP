export default function Hero() {
  return (
    <section className="bg-[#162654] text-white px-6 pb-10">
      <div className="mt-2">
        <h2 className="text-5xl font-bold leading-tight">
          Our <span className="text-yellow-400">Memory</span>
          <br />
          Spaces
        </h2>

        <p className="mt-4 text-lg tracking-wide text-gray-300">
          Together, Every Memory Matters.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">5개</p>
          <p className="mt-1 text-sm text-gray-300">추억 공간</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">145명</p>
          <p className="mt-1 text-sm text-gray-300">함께한 사람</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">오늘</p>
          <p className="mt-1 text-sm text-gray-300">새로운 마음</p>
        </div>
      </div>
    </section>
  );
}