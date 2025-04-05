import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "経営改善計画支援ツール",
  description: "中小企業の経営改善計画を支援するためのWebアプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t py-4 text-center text-sm text-gray-500">
            <div className="container mx-auto">
              © 2025 経営改善計画支援ツール
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
