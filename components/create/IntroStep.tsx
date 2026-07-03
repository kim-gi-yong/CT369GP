type Props = {
  introduction: string;
  onChange: (value: string) => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function IntroStep({
  introduction,
  onChange,
  onPrev,
  onNext,
}: Props) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow">
      <h2 className="text-4xl font-bold">소개글</h2>

      <p className="mt-2 text-gray-500">
        고인을 소개해주세요.
      </p>

      <textarea
        value={introduction}
        onChange={(e) => onChange(e.target.value)}
        placeholder="고인의 삶과 기억을 남겨주세요."
        className="mt-6 h-56 w-full rounded-xl border p-4 resize-none"
      />

      <div className="mt-8 flex gap-4">
        <button
          onClick={onPrev}
          className="flex-1 rounded-xl border py-4"
        >
          이전
        </button>

        <button
          onClick={onNext}
          className="flex-1 rounded-xl bg-blue-600 py-4 text-white"
        >
          다음
        </button>
      </div>
    </section>
  );
}