import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CT369GP",
  description: "Memory Pixel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-100">
        <main className="mx-auto min-h-screen max-w-md bg-white shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
}