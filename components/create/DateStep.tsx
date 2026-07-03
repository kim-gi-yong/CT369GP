type Props = {
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
}: Props) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow">
      <h2 className="text-4xl font-bold">생몰년 입력</h2>

      <div className="mt-8">
        <label className="block mb-2">생년월일</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => onBirthDateChange(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2">기일</label>
        <input
          type="date"
          value={deathDate}
          onChange={(e) => onDeathDateChange(e.target.value)}
          className="w-full rounded-xl border p-4"
        />
      </div>

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