export default function LoveTree() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40">
        <div className="absolute left-1/2 top-20 h-20 w-8 -translate-x-1/2 rounded bg-amber-800" />

        <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-emerald-400" />
        <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-emerald-500" />
        <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-green-400" />

        <div className="absolute left-14 top-10 text-lg">💜</div>
        <div className="absolute right-14 top-16 text-lg">💜</div>
        <div className="absolute left-20 top-5 text-lg">💜</div>
      </div>

      <p className="mt-2 text-sm text-emerald-100">Tree of Love</p>
    </div>
  );
}