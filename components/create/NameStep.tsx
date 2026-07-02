type NameStepProps = {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
};

export default function NameStep({
  value,
  onChange,
  onNext,
}: NameStepProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h1 className="text-2xl font-bold">
        추모관 만들기
      </h1>

      <p className="mt-3 text-gray-600">
        고인의 이름을 입력해주세요.
      </p>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="예: 홍길동"
        className="mt-6 w-full rounded-xl border p-4 text-lg outline-none focus:border-blue-600"
      />

      <button
        onClick={onNext}
        className="mt-6 w-full rounded-xl bg-blue-600 py-4 text-white transition hover:bg-blue-700"
      >
        다음
      </button>
    </section>
  );
}