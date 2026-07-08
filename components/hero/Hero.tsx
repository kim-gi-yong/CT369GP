import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 to-white text-center">
      <Container>
        <h1 className="text-4xl font-bold text-[#0B1F3A] md:text-6xl">
          기억은 사라지지 않습니다.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Memory Pixel은 사랑하는 사람과 반려동물의 기억을
          디지털 공간 안에 오래도록 남기는 추모 플랫폼입니다.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/create">
            <Button>추모공간 만들기</Button>
          </Link>

          <Link href="/explore">
            <Button variant="secondary">둘러보기</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}