# 技術スタック

## コア技術
- TypeScript: ^5.0.0
- Node.js: ^20.0.0  
- **AIモデル: claude-3-7-sonnet-20250219 (Anthropic Messages API 2023-06-01) ← バージョン変更禁止**

## フロントエンド
- Next.js: 15.2.4
- React: ^19.0.0
- React DOM: ^19.0.0
- Tailwind CSS: ^4.0.0
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- lucide-react: ^0.487.0
- tailwind-merge: ^3.1.0
- tw-animate-css: ^1.2.5

## バックエンド（将来的に実装）
- Supabase: ^2.39.0
- @supabase/supabase-js: ^2.39.0
- @supabase/auth-helpers-nextjs: ^0.9.0

## 開発ツール
- npm: ^10.0.0
- ESLint: ^9.0.0
- TypeScript: ^5.0.0
- @eslint/eslintrc: ^3.0.0
- @tailwindcss/postcss: ^4.0.0
- @types/node: ^20.0.0
- @types/react: ^19.0.0
- @types/react-dom: ^19.0.0
- eslint-config-next: 15.2.4

---

# API バージョン管理
## 重要な制約事項
- APIクライアントは `app/lib/api/client.ts` で一元管理
- AI モデルのバージョンは client.ts 内で厳密に管理
- これらのファイルは変更禁止（変更が必要な場合は承認が必要）：
  - client.ts  - AIモデルとAPI設定の中核
  - types.ts   - 型定義の一元管理
  - config.ts  - 環境設定の一元管理

## 実装規則
- AIモデルのバージョンは client.ts でのみ定義
- 型定義は必ず types.ts を参照
- 環境変数の利用は config.ts 経由のみ許可
- Supabase関連の処理は `app/lib/supabase/` ディレクトリに集約
