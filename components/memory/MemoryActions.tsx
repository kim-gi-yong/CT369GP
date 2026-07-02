export default function MemoryActions() {
  return (
    <section className="grid grid-cols-2 gap-4 p-4">
      <button className="rounded-xl bg-blue-600 py-3 text-white">
        ❤️ 추모하기
      </button>

      <button className="rounded-xl bg-green-600 py-3 text-white">
        🕯 헌화하기
      </button>

      <button className="rounded-xl border py-3">
        💬 방명록
      </button>

      <button className="rounded-xl border py-3">
        👥 함께한 사람들
      </button>
    </section>
  );
}