import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import MemoryCard from "@/components/MemoryCard";
import Footer from "@/components/Footer";

export default async function Home() {
  const { data: memories } = await supabase
    .from("memories")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      <section id="memories" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          기억의 공간
        </h2>

        <p className="mt-2 text-gray-600">
          사람들이 방문하고, 촛불을 밝히고, 사랑나무를 키우는 공간입니다.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {memories?.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>

        {(!memories || memories.length === 0) && (
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="text-lg font-bold text-gray-800">
              아직 등록된 기억공간이 없습니다.
            </p>
            <p className="mt-2 text-gray-500">
              첫 번째 Memory Pixel을 만들어보세요.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}