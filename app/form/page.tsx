"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    representative: "",
    employeeCount: "",
    foundingYear: "",
    
    financials: [
      { year: new Date().getFullYear() - 2, sales: "", cogs: "", sga: "", operatingIncome: "" },
      { year: new Date().getFullYear() - 1, sales: "", cogs: "", sga: "", operatingIncome: "" },
      { year: new Date().getFullYear(), sales: "", cogs: "", sga: "", operatingIncome: "" },
    ],
    
    strengths: "",
    weaknesses: "",
    opportunities: "",
    threats: "",
    
    initiatives: [
      { title: "", description: "", kpi: "", importance: "中" }
    ]
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith("financials")) {
      const [_, index, field] = name.split(".");
      const newFinancials = [...formData.financials];
      newFinancials[Number(index)][field as "sales" | "cogs" | "sga" | "operatingIncome"] = value;
      setFormData({ ...formData, financials: newFinancials });
    } else if (name.startsWith("initiatives")) {
      const [_, index, field] = name.split(".");
      const newInitiatives = [...formData.initiatives];
      newInitiatives[Number(index)][field as "title" | "description" | "kpi" | "importance"] = value;
      setFormData({ ...formData, initiatives: newInitiatives });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const addInitiative = () => {
    setFormData({
      ...formData,
      initiatives: [
        ...formData.initiatives,
        { title: "", description: "", kpi: "", importance: "中" }
      ]
    });
  };
  
  const removeInitiative = (index: number) => {
    const newInitiatives = [...formData.initiatives];
    newInitiatives.splice(index, 1);
    setFormData({ ...formData, initiatives: newInitiatives });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/analysis");
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">経営計画手入力フォーム</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 会社情報 */}
          <section className="bg-card rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">会社情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">会社名</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">業種</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="製造業">製造業</option>
                  <option value="小売業">小売業</option>
                  <option value="サービス業">サービス業</option>
                  <option value="建設業">建設業</option>
                  <option value="IT・通信">IT・通信</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">代表者名</label>
                <input
                  type="text"
                  name="representative"
                  value={formData.representative}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">従業員数</label>
                <input
                  type="number"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">設立年</label>
                <input
                  type="number"
                  name="foundingYear"
                  value={formData.foundingYear}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  required
                />
              </div>
            </div>
          </section>
          
          {/* 財務データ */}
          <section className="bg-card rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">財務データ（3期分）</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">年度</th>
                    <th className="px-4 py-2 text-left font-medium">売上高</th>
                    <th className="px-4 py-2 text-left font-medium">売上原価</th>
                    <th className="px-4 py-2 text-left font-medium">販管費</th>
                    <th className="px-4 py-2 text-left font-medium">営業利益</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {formData.financials.map((financial, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{financial.year}年</td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          name={`financials.${index}.sales`}
                          value={financial.sales}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-1"
                          placeholder="千円"
                          required
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          name={`financials.${index}.cogs`}
                          value={financial.cogs}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-1"
                          placeholder="千円"
                          required
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          name={`financials.${index}.sga`}
                          value={financial.sga}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-1"
                          placeholder="千円"
                          required
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="number"
                          name={`financials.${index}.operatingIncome`}
                          value={financial.operatingIncome}
                          onChange={handleChange}
                          className="w-full rounded-md border border-input bg-background px-3 py-1"
                          placeholder="千円"
                          required
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          
          {/* SWOT分析 */}
          <section className="bg-card rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">SWOT分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">強み (Strengths)</label>
                <textarea
                  name="strengths"
                  value={formData.strengths}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                  placeholder="自社の強みを入力してください"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">弱み (Weaknesses)</label>
                <textarea
                  name="weaknesses"
                  value={formData.weaknesses}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                  placeholder="自社の弱みを入力してください"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">機会 (Opportunities)</label>
                <textarea
                  name="opportunities"
                  value={formData.opportunities}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                  placeholder="市場の機会を入力してください"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">脅威 (Threats)</label>
                <textarea
                  name="threats"
                  value={formData.threats}
                  onChange={handleChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                  placeholder="市場の脅威を入力してください"
                  required
                />
              </div>
            </div>
          </section>
          
          {/* 施策リスト */}
          <section className="bg-card rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">施策リスト</h2>
            <div className="space-y-4">
              {formData.initiatives.map((initiative, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">施策 {index + 1}</h3>
                    {formData.initiatives.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeInitiative(index)}
                        className="text-sm text-destructive hover:underline"
                      >
                        削除
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">タイトル</label>
                      <input
                        type="text"
                        name={`initiatives.${index}.title`}
                        value={initiative.title}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">重要度</label>
                      <select
                        name={`initiatives.${index}.importance`}
                        value={initiative.importance}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="高">高</option>
                        <option value="中">中</option>
                        <option value="低">低</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">説明</label>
                      <textarea
                        name={`initiatives.${index}.description`}
                        value={initiative.description}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">KPI</label>
                      <input
                        type="text"
                        name={`initiatives.${index}.kpi`}
                        value={initiative.kpi}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="例: 売上10%増加、コスト5%削減"
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addInitiative}
                className="text-sm bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded-md"
              >
                施策を追加
              </button>
            </div>
          </section>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '保存中...' : '保存して分析へ'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
