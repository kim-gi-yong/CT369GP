type Props = {
  level: number;
};

export default function LoveTree({ level }: Props) {
  const tree =
    level >= 5
      ? "🌈🌳"
      : level === 4
      ? "🌲"
      : level === 3
      ? "🌳"
      : level === 2
      ? "🌿"
      : "🌱";

  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl transition-all duration-700">
        {tree}
      </div>

      <p className="mt-2 font-bold text-emerald-800">
        Tree of Love
      </p>
    </div>
  );
}