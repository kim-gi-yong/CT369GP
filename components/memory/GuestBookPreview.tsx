type GuestBookItem = {
  id: number;
  name: string;
  message: string;
  date: string;
};

const guestBooks: GuestBookItem[] = [
  {
    id: 1,
    name: "김철수",
    message: "항상 따뜻한 미소를 기억하겠습니다.",
    date: "2026.06.27",
  },
  {
    id: 2,
    name: "이영희",
    message: "좋은 곳에서 평안하시길 바랍니다.",
    date: "2026.06.26",
  },
];

export default function GuestBookPreview() {
  return (
    <section className="mx-4 mt-6 rounded-xl bg-white p-5 shadow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">💬 방명록</h2>

        <button className="text-sm text-blue-600 hover:underline">
          전체보기
        </button>
      </div>

      <div className="space-y-4">
        {guestBooks.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.name}</h3>

              <span className="text-xs text-gray-500">
                {item.date}
              </span>
            </div>

            <p className="mt-2 text-gray-600">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}