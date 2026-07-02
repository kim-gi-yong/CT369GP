type MemoryCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  people: string;
  date: string;
};

export default function MemoryCard({
  icon,
  title,
  subtitle,
  people,
  date,
}: MemoryCardProps) {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-md border border-[#EFE4D2]">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F2E9] text-3xl">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#162654]">{title}</h3>
          <p className="mt-1 text-sm text-[#9B8B76]">{subtitle}</p>
        </div>

        <button className="text-3xl text-[#C79A2B]">›</button>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#F7F2E9] px-4 py-3">
        <span className="text-sm font-semibold text-[#7B6A55]">
          함께한 사람 {people}
        </span>
        <span className="text-sm text-[#A99473]">{date}</span>
      </div>
    </article>
  );
}