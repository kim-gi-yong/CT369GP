type Props = {
  x: number;
  y: number;
};

export default function CandleLight({ x, y }: Props) {
  return (
    <div
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className="mb-1 h-6 w-4 rounded-full bg-yellow-300 shadow-[0_0_20px_rgba(253,224,71,0.9)]" />
      <div className="h-10 w-5 rounded-b-md rounded-t-sm bg-white/80 shadow-md" />
    </div>
  );
}