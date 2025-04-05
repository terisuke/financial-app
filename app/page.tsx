import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">経営改善計画支援ツール</h1>
          <p className="text-xl text-gray-600 mb-8">
            中小企業の経営改善計画を支援するための財務分析・戦略立案・アクションプラン提示を行うWebアプリケーション
          </p>
          <Link 
            href="/dashboard" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            はじめる
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">財務分析</h2>
            <p className="text-gray-600">
              Excelファイルをアップロードするだけで、財務データを自動分析。
              SWOT分析や異常値検出を行い、経営課題を可視化します。
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">戦略立案</h2>
            <p className="text-gray-600">
              業界ベンチマークとの比較分析により、
              自社の強みと弱みを明確にし、効果的な戦略立案をサポートします。
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">アクションプラン</h2>
            <p className="text-gray-600">
              具体的な改善施策をステップ形式で提示。
              KPIや重要度を設定し、実行可能な計画を作成します。
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">DX対応・SaaS化</h2>
            <p className="text-gray-600">
              将来的にはWebフォーム・DB保存・レポート生成などの
              DX対応・SaaS化へとスムーズに移行できる構成を目指します。
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">想定ユースケース</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-2 list-disc pl-5">
            <li>経営者や税理士が経営改善計画を可視化・レポート出力したいとき</li>
            <li>金融機関提出用の財務資料の仮作成・見える化</li>
            <li>Excelベースから脱却し、WebベースでのDX導入を進めたい中小企業</li>
            <li>顧問先の経営計画を複数管理したい士業事務所</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
