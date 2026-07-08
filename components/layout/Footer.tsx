import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <Container className="py-10">
        <div className="mb-8">
          <p className="text-xl font-extrabold text-[#0B1F3A]">CT369Gp</p>
          <p className="mt-2 text-sm text-gray-500">
            요람에서 무덤까지, 삶의 모든 순간을 함께합니다.
          </p>
        </div>

        <div className="grid gap-6 text-sm text-gray-500 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-bold text-[#0B1F3A]">Platform</p>
            <div className="space-y-2">
              <p>Memory Pixel</p>
              <p>Moment Pixel</p>
              <p>Pet Memorial</p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-bold text-[#0B1F3A]">Service</p>
            <div className="space-y-2">
              <p>Avatar World</p>
              <p>Love Tree</p>
              <p>Candle Memory</p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-bold text-[#0B1F3A]">Company</p>
            <div className="space-y-2">
              <Link href="/" className="block transition hover:text-[#0B1F3A]">
                회사소개
              </Link>
              <Link href="/" className="block transition hover:text-[#0B1F3A]">
                이용약관
              </Link>
              <Link href="/" className="block transition hover:text-[#0B1F3A]">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          © 2026 CT369Gp. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}