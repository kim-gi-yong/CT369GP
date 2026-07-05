import Link from "next/link";

type MemoryCardProps = {
  memory: {
    id: string;
    title: string;
    subtitle?: string;
    introduction?: string;
    image_url?: string;
  };
};

export default function MemoryCard({ memory }: MemoryCardProps) {
  return (
    <Link
      href={`/memory/${memory.id}`}
      className="group overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* 이미지 */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {memory.image_url ? (
          <img
            src={memory.image_url}
            alt={memory.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-gray-400">
            <span className="text-5xl">📷</span>
            <span className="mt-3 text-sm">
              추억 사진을 등록하세요
            </span>
          </div>
        )}

        {/* 방문자 */}
        <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
          ❤️ 방문 0
        </div>
      </div>

      {/* 내용 */}
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-bold text-gray-900">
          {memory.title}
        </h3>

        <p className="text-sm text-gray-500">
          {memory.subtitle}
        </p>

        <p className="line-clamp-2 text-sm leading-6 text-gray-600">
          {memory.introduction}
        </p>

        {/* 하단 상태 */}
        <div className="flex items-center justify-between border-t pt-4 text-sm">
          <div className="flex items-center gap-2">
            🕯️
            <span>촛불</span>
          </div>

          <div className="flex items-center gap-2">
            🌳
            <span>사랑의 나무</span>
          </div>
        </div>
      </div>
    </Link>
  );
}