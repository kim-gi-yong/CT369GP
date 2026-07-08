import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type MemoryCardProps = {
  memory?: {
    id: string;
    title: string;
    subtitle?: string;
    introduction?: string;
    image_url?: string;
    visitor_count?: number;
    candle_count?: number;
    love_tree_level?: number;
  };
};

export default function MemoryCard({ memory }: MemoryCardProps) {
  if (!memory) return null;

  return (
    <Link href={`/memory/${memory.id}`} className="group block">
      <Card className="overflow-hidden p-0 hover:-translate-y-2 hover:shadow-2xl">
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
              <span className="mt-3 text-sm">추억 사진을 등록하세요</span>
            </div>
          )}

          <div className="absolute left-4 top-4">
            <Badge>❤️ 방문 {memory.visitor_count ?? 0}</Badge>
          </div>
        </div>

        <div className="space-y-3 p-5">
          <h3 className="text-xl font-bold text-[#0B1F3A]">
            {memory.title}
          </h3>

          {memory.subtitle && (
            <p className="text-sm text-gray-500">{memory.subtitle}</p>
          )}

          {memory.introduction && (
            <p className="line-clamp-2 text-sm leading-6 text-gray-600">
              {memory.introduction}
            </p>
          )}

          <div className="flex items-center justify-between border-t pt-4 text-sm font-medium text-gray-700">
            <span>🕯️ {memory.candle_count ?? 0}</span>
            <span>🌳 Lv.{memory.love_tree_level ?? 1}</span>
            <span className="font-bold text-[#0B1F3A]">입장 →</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}