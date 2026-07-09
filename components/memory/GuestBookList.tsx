type Props = {
  guestbook: any[];
};

export default function GuestBookList({ guestbook }: Props) {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">
        💬 추모의 글
      </h2>

      <div className="space-y-4">
        {guestbook.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 text-center text-gray-400 shadow">
            아직 남겨진 글이 없습니다.
          </div>
        ) : (
          guestbook.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex justify-between">
                <h3 className="font-bold">
                  {item.visitor_name}
                </h3>

                <p className="text-sm text-gray-400">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>

              <p className="mt-3 whitespace-pre-line text-gray-700">
                {item.message}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}