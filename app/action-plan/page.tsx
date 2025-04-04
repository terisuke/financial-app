export default function ActionPlan() {
  const actionPlans = [
    {
      id: 1,
      title: "販管費の見直し",
      description: "固定費削減と業務効率化により、販管費率を現在の28%から業界平均の20%に近づける",
      steps: [
        {
          id: 101,
          title: "経費項目の分析",
          description: "全経費項目を分析し、削減可能な項目を特定する",
          kpi: "削減可能額の特定: 年間1,000万円以上",
          importance: "高",
          deadline: "1ヶ月以内"
        },
        {
          id: 102,
          title: "業務プロセスの効率化",
          description: "重複業務の特定と自動化ツールの導入",
          kpi: "業務時間の削減: 20%以上",
          importance: "中",
          deadline: "3ヶ月以内"
        },
        {
          id: 103,
          title: "外注業務の見直し",
          description: "外注コストの分析と再交渉または内製化の検討",
          kpi: "外注コスト削減: 15%以上",
          importance: "中",
          deadline: "2ヶ月以内"
        }
      ]
    },
    {
      id: 2,
      title: "在庫・売掛金管理の改善",
      description: "在庫回転率と売掛金回転率を改善し、キャッシュフローを強化する",
      steps: [
        {
          id: 201,
          title: "在庫管理システムの導入",
          description: "リアルタイム在庫管理システムを導入し、適正在庫レベルを設定",
          kpi: "在庫回転率: 4.2回→6.0回以上",
          importance: "高",
          deadline: "3ヶ月以内"
        },
        {
          id: 202,
          title: "与信管理の強化",
          description: "顧客ごとの与信限度額設定と回収プロセスの改善",
          kpi: "売掛金回転率: 5.8回→7.5回以上",
          importance: "高",
          deadline: "2ヶ月以内"
        },
        {
          id: 203,
          title: "滞留在庫の処分",
          description: "6ヶ月以上動きのない在庫の特別販売または処分",
          kpi: "滞留在庫の削減: 80%以上",
          importance: "中",
          deadline: "1ヶ月以内"
        }
      ]
    },
    {
      id: 3,
      title: "売上総利益率の改善",
      description: "原価管理の見直しと仕入先の再検討により、売上総利益率を向上させる",
      steps: [
        {
          id: 301,
          title: "原価分析の実施",
          description: "製品・サービスごとの原価構造を詳細に分析",
          kpi: "原価構造の可視化: 全製品カテゴリー",
          importance: "高",
          deadline: "1ヶ月以内"
        },
        {
          id: 302,
          title: "仕入先の見直し",
          description: "主要原材料の複数仕入先確保と価格交渉",
          kpi: "原材料コスト削減: 10%以上",
          importance: "高",
          deadline: "3ヶ月以内"
        },
        {
          id: 303,
          title: "製品ミックスの最適化",
          description: "高利益率製品の販売強化と低利益率製品の見直し",
          kpi: "製品別利益率の向上: 平均5%以上",
          importance: "中",
          deadline: "6ヶ月以内"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">アクションプラン</h1>
        
        <div className="mb-6 bg-muted/30 p-4 rounded-lg">
          <p className="text-muted-foreground">
            分析結果に基づき、以下の改善施策を提案します。各施策には具体的なステップ、KPI、重要度が設定されています。
            優先度の高い施策から順に実施することで、効果的な経営改善が期待できます。
          </p>
        </div>
        
        <div className="space-y-8">
          {actionPlans.map((plan) => (
            <div key={plan.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b bg-muted/20">
                <h2 className="text-xl font-semibold">{plan.title}</h2>
                <p className="text-muted-foreground mt-1">{plan.description}</p>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium mb-3">実施ステップ</h3>
                <div className="space-y-4">
                  {plan.steps.map((step) => (
                    <div key={step.id} className="border rounded-md p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{step.title}</h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          step.importance === '高' ? 'bg-red-100 text-red-800' : 
                          step.importance === '中' ? 'bg-yellow-100 text-yellow-800' : 
                          'bg-blue-100 text-blue-800'
                        }`}>
                          重要度: {step.importance}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                        <div className="mb-2 sm:mb-0">
                          <span className="font-medium">KPI:</span> {step.kpi}
                        </div>
                        <div>
                          <span className="font-medium">期限:</span> {step.deadline}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-8">
          <a 
            href="/analysis" 
            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-2 font-medium text-secondary-foreground hover:bg-secondary/80"
          >
            分析結果に戻る
          </a>
          <a 
            href="/dashboard" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90"
          >
            ダッシュボードへ
          </a>
        </div>
      </div>
    </div>
  );
}
