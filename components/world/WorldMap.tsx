"use client";

import { useEffect, useState } from "react";

export default function WorldMap() {
  const [position, setPosition] = useState({ x: 50, y: 58 });

  const moveAvatar = (direction: "up" | "down" | "left" | "right") => {
    setPosition((prev) => {
      const step = 5;

      const next = {
        x:
          direction === "left"
            ? prev.x - step
            : direction === "right"
            ? prev.x + step
            : prev.x,
        y:
          direction === "up"
            ? prev.y - step
            : direction === "down"
            ? prev.y + step
            : prev.y,
      };

      return {
        x: Math.max(8, Math.min(92, next.x)),
        y: Math.max(25, Math.min(78, next.y)),
      };
    });
  };
  
  const nearMemory =
  position.x >= 8 && position.x <= 35 && position.y >= 50 && position.y <= 78;

const nearMoment =
  position.x >= 65 && position.x <= 92 && position.y >= 50 && position.y <= 78;

const nearPet =
  position.x >= 38 && position.x <= 62 && position.y >= 65 && position.y <= 82;

const activeGate = nearMemory
  ? { name: "Memory Hall", href: "/memory" }
  : nearMoment
  ? { name: "Moment Plaza", href: "/moment" }
  : nearPet
  ? { name: "Pet Garden", href: "/pet-memorial" }
  : null;
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
        moveAvatar("up");
      }

      if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
        moveAvatar("down");
      }

      if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
        moveAvatar("left");
      }

      if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
        moveAvatar("right");
      }
    if ((event.key === "e" || event.key === "E") && activeGate) {
      window.location.href = activeGate.href;
    }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGate]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-sky-300 via-indigo-300 to-emerald-300">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-sky-300 to-indigo-200" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-emerald-300 to-green-600" />

      <div className="absolute left-[8%] top-[12%] text-5xl">☁️</div>
      <div className="absolute right-[12%] top-[18%] text-6xl">☁️</div>
      <div className="absolute right-[28%] top-[8%] text-5xl">☀️</div>

      <div className="absolute left-1/2 top-[35%] h-[55%] w-[28%] -translate-x-1/2 rounded-t-full bg-yellow-100/70 blur-sm" />

      <WorldBuilding
        icon="🏛️"
        title="Memory Hall"
        subtitle="추모 공간"
        className="left-[8%] bottom-[18%]"
      />

      <WorldBuilding
        icon="🎉"
        title="Moment Plaza"
        subtitle="축하 공간"
        className="right-[8%] bottom-[18%]"
      />

      <WorldBuilding
        icon="🐾"
        title="Pet Garden"
        subtitle="반려동물 추모"
        className="left-1/2 bottom-[7%] -translate-x-1/2"
      />

      <LoveTreeWorld />

      <div
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-6xl drop-shadow-xl">🧍</div>
          <div className="mt-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-800">
            Memory Keeper
          </div>
        </div>
      </div>
      {activeGate && (
  <div className="absolute left-1/2 bottom-28 z-40 -translate-x-1/2 rounded-3xl bg-white/90 px-6 py-4 text-center shadow-2xl backdrop-blur">
    <p className="text-sm text-slate-600">{activeGate.name} 근처입니다</p>
    <button
      onClick={() => {
        window.location.href = activeGate.href;
      }}
      className="mt-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-bold text-white shadow-lg hover:bg-indigo-700"
    >
      E 키 또는 클릭으로 입장하기
    </button>
  </div>
)}
      <div className="absolute bottom-6 right-6 z-30 rounded-3xl bg-white/80 p-4 shadow-xl backdrop-blur">
        <p className="mb-3 text-center text-sm font-bold text-slate-800">
          Avatar Move
        </p>

        <div className="grid grid-cols-3 gap-2">
          <div />
          <button onClick={() => moveAvatar("up")} className="move-btn">
            ↑
          </button>
          <div />

          <button onClick={() => moveAvatar("left")} className="move-btn">
            ←
          </button>
          <button onClick={() => moveAvatar("down")} className="move-btn">
            ↓
          </button>
          <button onClick={() => moveAvatar("right")} className="move-btn">
            →
          </button>
        </div>
      </div>

      <div className="absolute left-6 top-6 z-30 rounded-3xl bg-white/70 px-5 py-4 shadow-xl backdrop-blur">
        <p className="text-xs font-bold tracking-[0.3em] text-indigo-700">
          CT369Gp
        </p>
        <h1 className="mt-1 text-2xl font-black text-slate-900">
          Avatar World
        </h1>
        <p className="mt-1 text-sm text-slate-700">
          기억과 축하가 이어지는 살아있는 월드
        </p>
      </div>
    </section>
  );
}

function WorldBuilding({
  icon,
  title,
  subtitle,
  className,
}: {
  icon: string;
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <div className={`absolute z-10 flex flex-col items-center ${className}`}>
      <div className="text-7xl drop-shadow-xl">{icon}</div>
      <div className="mt-2 rounded-2xl bg-white/80 px-4 py-2 text-center shadow-lg backdrop-blur">
        <p className="text-sm font-bold text-slate-900">{title}</p>
        <p className="text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

function LoveTreeWorld() {
  return (
    <div className="absolute left-1/2 top-[18%] z-10 -translate-x-1/2 text-center">
      <div className="text-8xl drop-shadow-2xl">🌳</div>
      <div className="mt-2 rounded-full bg-white/80 px-4 py-1 text-sm font-bold text-emerald-800 shadow">
        Tree of Love
      </div>
    </div>
  );
}