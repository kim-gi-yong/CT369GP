import { Home, BookOpen, Heart, User } from "lucide-react";

const items = [
  { label: "홈", icon: Home, active: true },
  { label: "추억", icon: BookOpen, active: false },
  { label: "마음", icon: Heart, active: false },
  { label: "마이", icon: User, active: false },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E8DCC8] bg-[#FFFBF3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-md justify-around px-4 py-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 rounded-2xl px-5 py-2 transition ${
                item.active
                  ? "bg-[#F2DEAA] text-[#162654]"
                  : "text-[#A59A8A]"
              }`}
            >
              <Icon size={24} strokeWidth={2.2} />
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}