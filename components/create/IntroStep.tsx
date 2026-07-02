type IntroStepProps = {
  value: string;
  onChange: (value: string) => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function IntroStep({
  value,
  onChange,
  onPrev,
  onNext,
}: IntroStepProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h1 className="text-2xl font-bold">소개글 작성</h1>

      <p className="mt-3 text-gray-600">
        고인을 기억하는 소개글을 작성해주세요.
      </p>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        placeholder="예: 사랑하는 가족과 친구들에게 따뜻한 기억으로 남아있는 분입니다."
        className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-blue-600"
      />

      <p className="mt-2 text-right text-sm text-gray-500">
        {value.length} / 500
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          onClick={onPrev}
          className="rounded-xl border py-4"
        >
          이전
        </button>

        <button
          onClick={onNext}
          className="rounded-xl bg-blue-600 py-4 text-white"
        >
          다음
        </button>
      </div>
    </section>
  );
}