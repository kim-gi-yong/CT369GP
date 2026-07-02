export default function CreateMemoryCard() {
  return (
    <section className="bg-[#F7F2E9] px-5 pb-8">
      <div className="rounded-3xl bg-[#162654] p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400 text-4xl text-yellow-400">
              +
            </div>

            <div>
              <h2 className="text-2xl font-bold text-yellow-400">
                추억 공간 만들기
              </h2>
              <p className="text-gray-300">Create My Memory Space</p>
            </div>
          </div>

          <button className="text-4xl text-yellow-400">›</button>
        </div>
      </div>
    </section>
  );
}