export default function Analysis() {
  const swotData = {
    strengths: [
      "営業利益率が業界平均より5%高い",
      "固定費削減の取り組みが進んでいる",
      "主力製品の市場シェアが拡大傾向",
      "顧客満足度調査で高評価を獲得"
    ],
    weaknesses: [
      "売掛金回収期間が長期化している",
      "新規顧客獲得率が低下傾向",
      "IT投資が競合他社より遅れている",
      "従業員一人当たりの売上高が業界平均以下"
    ],
    opportunities: [
      "オンライン販売チャネルの拡大余地がある",
      "新興市場への参入可能性",
      "競合他社の撤退による市場シェア拡大チャンス",
      "技術革新による新製品開発の可能性"
    ],
    threats: [
      "原材料価格の上昇傾向",
      "大手企業の市場参入による競争激化",
      "為替変動リスクの増大",
      "規制強化による対応コスト増加"
    ]
  };

  const anomalyData = [
    {
      id: 1,
      item: "売上総利益率",
      value: "32%",
      benchmark: "40%",
      difference: "-8%",
      severity: "高",
      recommendation: "原価管理の見直しと仕入先の再検討"
    },
    {
      id: 2,
      item: "販管費率",
      value: "28%",
      benchmark: "20%",
      difference: "+8%",
      severity: "中",
      recommendation: "固定費の削減と業務効率化"
    },
    {
      id: 3,
      item: "在庫回転率",
      value: "4.2回",
      benchmark: "6.5回",
      difference: "-2.3回",
      severity: "中",
      recommendation: "在庫管理システムの導入と適正在庫の見直し"
    },
    {
      id: 4,
      item: "売掛金回転率",
      value: "5.8回",
      benchmark: "8.2回",
      difference: "-2.4回",
      severity: "高",
      recommendation: "与信管理の強化と回収プロセスの改善"
    }
  ];

  const benchmarkData = [
    {
      id: 1,
      category: "収益性",
      metrics: [
        { name: "売上総利益率", company: "32%", industry: "40%", evaluation: "要改善" },
        { name: "営業利益率", company: "8%", industry: "6%", evaluation: "良好" },
        { name: "ROA", company: "3.2%", industry: "4.5%", evaluation: "要改善" }
      ]
    },
    {
      id: 2,
      category: "効率性",
      metrics: [
        { name: "総資産回転率", company: "1.2回", industry: "1.5回", evaluation: "要改善" },
        { name: "在庫回転率", company: "4.2回", industry: "6.5回", evaluation: "要改善" },
        { name: "売掛金回転率", company: "5.8回", industry: "8.2回", evaluation: "要改善" }
      ]
    },
    {
      id: 3,
      category: "安全性",
      metrics: [
        { name: "自己資本比率", company: "35%", industry: "30%", evaluation: "良好" },
        { name: "流動比率", company: "120%", industry: "150%", evaluation: "要注意" },
        { name: "固定長期適合率", company: "95%", industry: "90%", evaluation: "良好" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">分析結果</h1>
        
        {/* SWOT分析 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">SWOT分析</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card rounded-lg shadow-sm p-4 border-l-4 border-green-500">
              <h3 className="font-medium text-lg mb-2">強み (Strengths)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {swotData.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg shadow-sm p-4 border-l-4 border-red-500">
              <h3 className="font-medium text-lg mb-2">弱み (Weaknesses)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {swotData.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
              <h3 className="font-medium text-lg mb-2">機会 (Opportunities)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {swotData.opportunities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg shadow-sm p-4 border-l-4 border-yellow-500">
              <h3 className="font-medium text-lg mb-2">脅威 (Threats)</h3>
              <ul className="list-disc pl-5 space-y-1">
                {swotData.threats.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* 異常値検出 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">異常値検出</h2>
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">項目</th>
                    <th className="px-4 py-3 text-left font-medium">現在値</th>
                    <th className="px-4 py-3 text-left font-medium">ベンチマーク</th>
                    <th className="px-4 py-3 text-left font-medium">差異</th>
                    <th className="px-4 py-3 text-left font-medium">重要度</th>
                    <th className="px-4 py-3 text-left font-medium">改善提案</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {anomalyData.map((item) => (
                    <tr key={item.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3">{item.item}</td>
                      <td className="px-4 py-3">{item.value}</td>
                      <td className="px-4 py-3">{item.benchmark}</td>
                      <td className="px-4 py-3 font-medium text-red-500">{item.difference}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.severity === '高' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3">{item.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* 業界ベンチマーク比較 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">業界ベンチマーク比較</h2>
          {benchmarkData.map((category) => (
            <div key={category.id} className="mb-6">
              <h3 className="font-medium text-lg mb-2">{category.category}</h3>
              <div className="bg-card rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">指標</th>
                        <th className="px-4 py-3 text-left font-medium">自社</th>
                        <th className="px-4 py-3 text-left font-medium">業界平均</th>
                        <th className="px-4 py-3 text-left font-medium">評価</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {category.metrics.map((metric, index) => (
                        <tr key={index} className="hover:bg-muted/30">
                          <td className="px-4 py-3">{metric.name}</td>
                          <td className="px-4 py-3">{metric.company}</td>
                          <td className="px-4 py-3">{metric.industry}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              metric.evaluation === '良好' ? 'bg-green-100 text-green-800' : 
                              metric.evaluation === '要注意' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              {metric.evaluation}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <div className="flex justify-center mt-8">
          <a 
            href="/action-plan" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            アクションプランを見る
          </a>
        </div>
      </div>
    </div>
  );
}
