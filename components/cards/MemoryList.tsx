import MemoryCard from "./MemoryCard";

const memories = [
  {
    icon: "🕯️",
    title: "김영숙님의 기억공간",
    subtitle: "오늘도 함께 기억하고 있습니다.",
    people: "12명",
    date: "오늘",
  },
  {
    icon: "🐾",
    title: "초코의 기억공간",
    subtitle: "소중한 가족을 기억합니다.",
    people: "5명",
    date: "어제",
  },
];

export default function MemoryList() {
  return (
    <section className="bg-[#F7F2E9] px-5 pb-28">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#162654]">
          우리의 기억공간
        </h2>
        <button className="text-sm font-semibold text-[#C79A2B]">
          전체보기
        </button>
      </div>

      <div className="space-y-4">
        {memories.map((memory) => (
          <MemoryCard key={memory.title} {...memory} />
        ))}
      </div>
    </section>
  );
}