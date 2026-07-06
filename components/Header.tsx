export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-gray-900">
          CT369GP
        </div>

        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="/">Home</a>
          <a href="/create">Create Memory</a>
          <a href="/explore">Explore</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header>
  );
}