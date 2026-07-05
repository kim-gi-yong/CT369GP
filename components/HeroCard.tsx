import Link from "next/link";

export default function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-[#14265b] px-6 py-10 shadow-2xl sm:px-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,196,0,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_30%)]" />

      <div className="relative z-10">
        <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#f5c400] sm:text-sm">
          CT369GP · MEMORY PIXEL
        </p>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          요람에서 무덤까지,
          <br />
          삶의 모든 순간을 함께합니다.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          추억을 기록하고, 사랑을 이어가며, 소중한 사람을 오래 기억하는
          디지털 기억 공간입니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/create"
            className="rounded-full bg-[#f5c400] px-6 py-3 text-sm font-extrabold text-[#14265b] shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:px-7 sm:py-4 sm:text-base"
          >
            추억공간 만들기 →
          </Link>

          <Link
            href="#memories"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 sm:px-7 sm:py-4 sm:text-base"
          >
            기억공간 보기
          </Link>
        </div>
      </div>
    </section>
  );
}