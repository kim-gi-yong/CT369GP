"use client";

import { useState } from "react";
import StepIndicator from "@/components/create/StepIndicator";
import NameStep from "@/components/create/NameStep";
import PhotoStep from "@/components/create/PhotoStep";
import DateStep from "@/components/create/DateStep";
import IntroStep from "@/components/create/IntroStep";
import ConfirmStep from "@/components/create/ConfirmStep";
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
          onChange={(value) => setForm({ ...form, name: value })}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <PhotoStep onPrev={() => setStep(1)} onNext={() => setStep(3)} />
      )}

      {step === 3 && (
        <DateStep
          birthDate={form.birthDate}
          deathDate={form.deathDate}
          onBirthDateChange={(value) =>
            setForm({ ...form, birthDate: value })
          }
          onDeathDateChange={(value) =>
            setForm({ ...form, deathDate: value })
          }
          onPrev={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <IntroStep
          introduction={form.introduction}
          onChange={(value) =>
            setForm({ ...form, introduction: value })
          }
          onPrev={() => setStep(3)}
          onNext={() => setStep(5)}
        />
      )}

      {step === 5 && (
        <ConfirmStep
          form={form}
          onPrev={() => setStep(4)}
          onSubmit={() => {
            alert("추모관이 생성되었습니다!");
          }}
        />
      )}
    </main>
  );
}