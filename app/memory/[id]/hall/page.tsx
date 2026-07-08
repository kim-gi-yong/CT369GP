import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

type Props = {
  params: {
    id: string;
  };
};

export default async function MemoryHallPage({ params }: Props) {
  const { id } = await params;

  const { data: memory, error } = await supabase
    .from("memories")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !memory) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          추모관을 찾을 수 없습니다.
        </h1>
      </main>
    );
  }

  
    return (
    <main className="min-h-screen bg-[#F7F1E3]">
      <Section className="py-10">
        <Container>
          <Card className="rounded-[2rem] p-8 shadow-xl">
            <h1 className="flex items-center justify-center gap-4 text-4xl font-black text-[#0B1F3A] md:text-5xl">
              <span className="text-5xl">🏛️</span>
              <span>Memory Hall</span>
            </h1>

            <p className="mt-4 text-center text-lg text-gray-600 md:text-xl">
              사랑하는 사람을 기억하는 공간
            </p>

            <div className="my-8 h-px bg-[#D4AF37]" />

            <section className="text-center">
              <h2 className="text-4xl font-black text-[#111827] md:text-5xl">
                故 홍길동
              </h2>

              <p className="mt-3 text-lg text-gray-500 md:text-xl">
                1958.03.21 ~ 2026.07.08
              </p>

              <div className="mx-auto mt-8 flex aspect-square w-full max-w-xs items-center justify-center rounded-[2rem] bg-[#F1EEE8] text-gray-500 shadow-inner md:max-w-sm">
                대표 사진
              </div>

              <p className="mx-auto mt-8 max-w-xl text-lg italic leading-relaxed text-[#0B1F3A] md:text-xl">
                "당신은 우리의 마음속에 영원히 살아갑니다."
              </p>
            </section>
          </Card>
        </Container>
      </Section>
    </main>
  );
}