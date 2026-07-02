type PhotoStepProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function PhotoStep({ onPrev, onNext }: PhotoStepProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h1 className="text-2xl font-bold">사진 업로드</h1>

      <p className="mt-3 text-gray-600">
        고인의 대표 사진을 선택해주세요.
      </p>

      <div className="mt-6 flex h-48 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">
        <span className="text-gray-500">📷 사진 선택 영역</span>
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