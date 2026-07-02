type DateStepProps = {
  birthDate: string;
  deathDate: string;
  onBirthDateChange: (value: string) => void;
  onDeathDateChange: (value: string) => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function DateStep({
  birthDate,
  deathDate,
  onBirthDateChange,
  onDeathDateChange,
  onPrev,
  onNext,
}: DateStepProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h1 className="text-2xl font-bold">생년월일 입력</h1>

      <p className="mt-3 text-gray-600">
        생년월일과 별세일을 입력해주세요.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">생년월일</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => onBirthDateChange(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">별세일</label>
        <input
          type="date"
          value={deathDate}
          onChange={(e) => onDeathDateChange(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

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