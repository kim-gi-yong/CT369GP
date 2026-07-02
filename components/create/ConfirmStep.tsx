import type { MemoryForm } from "@/types/memory";

type ConfirmStepProps = {
  form: MemoryForm;
  onPrev: () => void;
  onSubmit: () => void;
};

export default function ConfirmStep({
  form,
  onPrev,
  onSubmit,
}: ConfirmStepProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow">
      <h1 className="text-2xl font-bold">추모관 생성 확인</h1>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-sm text-gray-500">이름</p>
          <p className="text-lg font-semibold">{form.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">생년월일</p>
          <p>{form.birthDate || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">별세일</p>
          <p>{form.deathDate || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">소개</p>
          <p>{form.introduction || "-"}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <button
          onClick={onPrev}
          className="rounded-xl border py-4"
        >
          이전
        </button>

        <button
          onClick={onSubmit}
          className="rounded-xl bg-blue-600 py-4 text-white font-semibold"
        >
          추모관 생성
        </button>
      </div>
    </section>
  );
}