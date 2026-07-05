type AvatarCharacterProps = {
  name: string;
};

export default function AvatarCharacter({ name }: AvatarCharacterProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-32 w-24 items-center justify-center">
        <div className="absolute top-0 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-200 to-orange-300 shadow-lg" />
        <div className="absolute top-5 flex gap-4">
          <span className="h-2 w-2 rounded-full bg-slate-900" />
          <span className="h-2 w-2 rounded-full bg-slate-900" />
        </div>
        <div className="absolute top-9 h-1 w-6 rounded-full bg-slate-800" />
        <div className="absolute bottom-0 h-20 w-20 rounded-t-3xl rounded-b-xl bg-gradient-to-b from-sky-300 to-indigo-500 shadow-xl" />
      </div>

      <div className="mt-3 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm backdrop-blur">
        {name}
      </div>
    </div>
  );
}