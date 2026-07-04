import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function HomePage() {
  const { data: memories } = await supabase
    .from("memories")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/create"
          className="block rounded-[32px] bg-[#14265b] p-6 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-[#f5c400] text-5xl font-bold text-[#f5c400]">
                +
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#f5c400]">
                  추억 공간 만들기
                </h2>
                <p className="mt-2 text-2xl text-white">
                  Create My Memory Space
                </p>
              </div>
            </div>

            <span className="text-5xl font-bold text-[#f5c400]">›</span>
          </div>
        </Link>

        <h2 className="mt-10 mb-6 text-3xl font-bold">
          우리의 기억공간
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {memories?.map((memory) => (
            <Link
              key={memory.id}
              href={`/memory/${memory.id}`}
              className="overflow-hidden rounded-2xl bg-white shadow"
            >
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                {memory.image_url ? (
                  <img
                    src={memory.image_url}
                    alt={memory.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400">사진 없음</span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {memory.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {memory.subtitle}
                </p>

                <p className="mt-2 text-gray-600 line-clamp-2">
                  {memory.introduction}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}