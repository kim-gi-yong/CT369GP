"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepIndicator from "@/components/create/StepIndicator";
import NameStep from "@/components/create/NameStep";
import PhotoStep from "@/components/create/PhotoStep";
import DateStep from "@/components/create/DateStep";
import IntroStep from "@/components/create/IntroStep";
import ConfirmStep from "@/components/create/ConfirmStep";
import { supabase } from "@/lib/supabase";

export default function CreatePage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [deathDate, setDeathDate] = useState("");
  const [introduction, setIntroduction] = useState("");

  const next = () => setStep((prev) => Math.min(prev + 1, 5));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
  if (!name.trim()) {
    alert("이름을 입력해주세요.");
    setStep(1);
    return;
  }

  const { error } = await supabase
    .from("memories")
    .insert({
      title: name.trim(),
      subtitle: `${birthDate || ""} ~ ${deathDate || ""}`,
      introduction: introduction.trim(),
      theme: "추모관",
      image_url: "",
    });

  if (error) {
    alert("저장 중 오류가 발생했습니다.");
    console.error(error);
    return;
  }

  alert("추모관이 생성되었습니다.");
  router.push("/#memories");
};

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-xl">
        <StepIndicator currentStep={step} totalSteps={5} />

        <div className="mt-8">
          {step === 1 && (
            <NameStep name={name} onChange={setName} onNext={next} />
          )}

          {step === 2 && <PhotoStep onPrev={prev} onNext={next} />}

          {step === 3 && (
            <DateStep
              birthDate={birthDate}
              deathDate={deathDate}
              onBirthDateChange={setBirthDate}
              onDeathDateChange={setDeathDate}
              onPrev={prev}
              onNext={next}
            />
          )}

          {step === 4 && (
            <IntroStep
              introduction={introduction}
              onChange={setIntroduction}
              onPrev={prev}
              onNext={next}
            />
          )}

          {step === 5 && (
            <ConfirmStep
              form={{
                name,
                birthDate,
                deathDate,
                introduction,
              }}
              onPrev={prev}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </main>
  );
}