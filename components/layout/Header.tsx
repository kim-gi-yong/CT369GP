import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f5]/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-3 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-xs font-extrabold text-[#D4AF37]">
            CT
          </div>

          <div>
            <p className="text-base font-extrabold leading-none text-[#0B1F3A]">
              CT369Gp
            </p>
            <p className="mt-1 hidden text-[10px] font-bold tracking-[0.18em] text-gray-400 sm:block">
              MEMORY PIXEL
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-bold text-gray-600 lg:flex">
          <Link href="/" className="transition hover:text-[#0B1F3A]">
            Memory Pixel
          </Link>
          <Link href="/" className="transition hover:text-[#0B1F3A]">
            Moment Pixel
          </Link>
          <Link href="/" className="transition hover:text-[#0B1F3A]">
            Pet Memorial
          </Link>
        </nav>

        <Link href="/create" className="shrink-0">
          <Button className="rounded-full px-4 py-2 text-sm">
            만들기
          </Button>
        </Link>
      </Container>
    </header>
  );
}