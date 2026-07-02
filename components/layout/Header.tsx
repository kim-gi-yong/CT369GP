export default function Header() {
  return (
    <header className="bg-[#162654] text-white px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-yellow-400 text-sm font-semibold">
            CT369GP
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Memory Pixel
          </h1>

          <p className="text-gray-300 mt-1">
            Together, Every Memory Matters.
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#162654] font-bold">
          MP
        </div>
      </div>
    </header>
  );
}