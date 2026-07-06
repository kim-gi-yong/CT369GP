export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
        기억은 사라지지 않습니다.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
        Memory Pixel은 사랑하는 사람과 반려동물의 기억을
        디지털 공간 안에 오래도록 남기는 추모 플랫폼입니다.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="/create"
          className="rounded-xl bg-gray-900 px-6 py-3 text-white"
        >
          추모공간 만들기
        </a>

        <a
          href="/explore"
          className="rounded-xl border px-6 py-3 text-gray-800"
        >
          둘러보기
        </a>
      </div>
    </section>
  );
}