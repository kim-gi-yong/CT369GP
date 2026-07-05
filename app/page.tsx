import { supabase } from "@/lib/supabase";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCard from "@/components/HeroCard";
import MemoryCard from "@/components/MemoryCard";
import SectionTitle from "@/components/SectionTitle";

export default async function HomePage() {
  const { data: memories } = await supabase
    .from("memories")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#f8f7f5]">
      <Header />

      <div className="mx-auto max-w-6xl px-5 py-8">
        <HeroCard />

        <section id="memories" className="mt-14">
          <SectionTitle
            label="MEMORY PIXEL"
            title="우리의 기억공간"
            description="소중한 사람과 함께한 순간을 기록하고 이어갑니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memories?.map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>

          {(!memories || memories.length === 0) && (
            <div className="mt-10 rounded-[28px] border border-dashed border-gray-300 bg-white p-10 text-center">
              <p className="text-lg font-bold text-gray-800">
                아직 등록된 기억공간이 없습니다.
              </p>
              <p className="mt-2 text-gray-500">
                첫 번째 Memory Pixel을 만들어보세요.
              </p>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </main>
  );
}