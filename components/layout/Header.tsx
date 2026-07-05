import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f8f7f5]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#14265b] text-xs font-extrabold text-[#f5c400]">
            CT
          </div>

          <div>
            <p className="text-base font-extrabold leading-none text-[#14265b]">
              CT369Gp
            </p>
            <p className="mt-1 hidden text-[10px] font-bold tracking-[0.18em] text-gray-400 sm:block">
              MEMORY PIXEL
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-bold text-gray-600 lg:flex">
          <Link href="/">Memory Pixel</Link>
          <Link href="/">Moment Pixel</Link>
          <Link href="/">Pet Memorial</Link>
        </nav>

        <Link
          href="/create"
          className="shrink-0 rounded-full bg-[#14265b] px-4 py-2 text-sm font-extrabold text-white"
        >
          만들기
        </Link>
      </div>
    </header>
  );
}