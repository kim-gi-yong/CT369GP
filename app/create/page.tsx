"use client";

import { useState } from "react";
import StepIndicator from "@/components/create/StepIndicator";
import NameStep from "@/components/create/NameStep";
import type { MemoryForm } from "@/types/memory";

export default function CreateMemoryPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState<MemoryForm>({
    name: "",
    birthDate: "",
    deathDate: "",
    introduction: "",
    photo: null,
  });

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <StepIndicator currentStep={step} totalSteps={5} />

      {step === 1 && (
        <NameStep
          value={form.name}
          onChange={(value) =>
            setForm({
              ...form,
              name: value,
            })
          }
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <section className="rounded-2xl bg-white p-6 shadow">
          <h1 className="text-2xl font-bold">사진 업로드</h1>
          <p className="mt-3 text-gray-600">다음 단계에서 만들 예정입니다.</p>

          <button
            onClick={() => setStep(1)}
            className="mt-6 w-full rounded-xl border py-4"
          >
            이전
          </button>
        </section>
      )}
    </main>
  );
}