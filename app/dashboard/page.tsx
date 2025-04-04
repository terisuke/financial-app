import Link from "next/link";

export default function Dashboard() {
  const mockData = [
    {
      id: 1,
      name: "株式会社サンプル",
      type: "file",
      fileName: "sample_financial_data.xlsx",
      uploadDate: "2025-04-01",
    },
    {
      id: 2,
      name: "有限会社テスト商事",
      type: "form",
      createdDate: "2025-03-28",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Link
            href="/upload"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-md text-center"
          >
            ファイルをアップロード
          </Link>
          <Link
            href="/form"
            className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 py-3 px-4 rounded-md text-center"
          >
            手入力で開始
          </Link>
        </div>

        <div className="bg-card rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">データ一覧</h2>
          </div>
          
          {mockData.length > 0 ? (
            <div className="divide-y">
              {mockData.map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-muted/50">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.type === "file" 
                        ? `ファイル: ${item.fileName} (${item.uploadDate})`
                        : `フォーム入力 (${item.createdDate})`
                      }
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="/analysis"
                      className="text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 py-1 px-3 rounded"
                    >
                      分析
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              <p>データがありません。ファイルをアップロードするか、手入力で開始してください。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
