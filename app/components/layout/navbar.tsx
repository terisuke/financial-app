import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            経営改善計画支援ツール
          </Link>
          <div className="flex gap-4">
            <Link 
              href="/dashboard" 
              className="text-sm hover:text-primary hover:underline"
            >
              ダッシュボード
            </Link>
            <Link 
              href="/upload" 
              className="text-sm hover:text-primary hover:underline"
            >
              アップロード
            </Link>
            <Link 
              href="/form" 
              className="text-sm hover:text-primary hover:underline"
            >
              手入力フォーム
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
