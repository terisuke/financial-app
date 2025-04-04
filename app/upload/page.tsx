"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Upload() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setError(null);
    
    if (!selectedFile) {
      return;
    }
    
    if (!selectedFile.name.endsWith('.xlsx') && !selectedFile.name.endsWith('.xls')) {
      setError('Excelファイル（.xlsx または .xls）を選択してください');
      return;
    }
    
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('ファイルを選択してください');
      return;
    }
    
    setUploading(true);
    
    setTimeout(() => {
      setUploading(false);
      router.push('/analysis');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">経営改善計画ファイルアップロード</h1>
        
        <div className="bg-card rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Excelファイルを選択
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                {file ? (
                  <div className="text-center">
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="mt-3 text-sm text-destructive hover:underline"
                    >
                      ファイルを削除
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="text-muted-foreground mb-2">
                      ここにファイルをドラッグ&ドロップするか、クリックして選択してください
                    </p>
                    <label className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md cursor-pointer">
                      ファイルを選択
                      <input
                        type="file"
                        accept=".xlsx,.xls"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}
              </div>
              {error && (
                <p className="mt-2 text-sm text-destructive">{error}</p>
              )}
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!file || uploading}
                className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? 'アップロード中...' : 'アップロード'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <h2 className="font-medium text-foreground mb-2">注意事項:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>アップロードできるファイル形式は Excel (.xlsx, .xls) のみです</li>
            <li>ファイルサイズは 10MB 以下にしてください</li>
            <li>財務データは所定の形式で記入されている必要があります</li>
            <li>アップロードしたデータは分析後、自動的に削除されます（MVPでは保存されません）</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
