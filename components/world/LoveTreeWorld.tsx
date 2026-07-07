import LoveTree from "./LoveTree";

type Props = {
  level: number;
};

export default function LoveTreeWorld({ level }: Props) {
  return (
    <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-center">
      <LoveTree level={level} />

      <div className="mt-2 rounded-full bg-white/80 px-4 py-1 font-bold">
        Lv.{level}
      </div>
    </div>
  );
}