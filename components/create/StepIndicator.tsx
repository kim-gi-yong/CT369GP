type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export default function StepIndicator({
  currentStep,
  totalSteps,
}: StepIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          Step {currentStep} / {totalSteps}
        </p>

        <span className="text-sm text-blue-600">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mt-2 h-2 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
