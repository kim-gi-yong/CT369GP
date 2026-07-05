import Link from "next/link";

type MemoryGateProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
};

export default function MemoryGate({
  title,
  subtitle,
  description,
  href,
}: MemoryGateProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
    >
      <p className="text-sm text-purple-200">{subtitle}</p>
      <h2 className="mt-2 text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-sm text-purple-100">{description}</p>

      <div className="mt-6 rounded-full bg-white/10 px-4 py-2 text-center text-sm transition group-hover:bg-white/20">
        입장하기
      </div>
    </Link>
  );
}