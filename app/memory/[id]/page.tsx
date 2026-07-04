import Link from "next/link";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MemoryDetailPage({ params }: Props) {
  const { id } = await params;

  const { data: memory, error } = await supabase
    .from("memories")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !memory) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-2xl font-bold">추모관을 찾을 수 없습니다.</h1>
          <Link href="/" className="mt-6 inline-block text-blue-600">
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-gray-500">
          ← 홈으로
        </Link>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="aspect-[4/3] bg-gray-200">
            {memory.photo_url ? (
              <img
                src={memory.photo_url}
                alt={memory.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                사진 없음
              </div>
            )}
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {memory.name}
            </h1>

            {(memory.birth_date || memory.death_date) && (
              <p className="mt-2 text-gray-500">
                {memory.birth_date || ""} ~ {memory.death_date || ""}
              </p>
            )}

            {memory.introduction && (
              <p className="mt-6 whitespace-pre-line text-lg leading-8 text-gray-700">
                {memory.introduction}
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}