const tabs = ["전체", "추모", "반려동물", "웨딩", "생일"];

export default function CategoryTabs() {
  return (
    <section className="bg-[#F7F2E9] px-5 py-4">
      <div className="flex gap-3 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold shadow-sm
            ${
              index === 0
                ? "bg-[#162654] text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
}