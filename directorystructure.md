# ディレクトリ構成

以下のディレクトリ構造に従って実装を行ってください：

```
/
├── app/                          # Next.jsのアプリケーションディレクトリ
│   ├── api/                      # APIエンドポイント
│   │   └── [endpoint]/
│   │       └── route.ts
│   ├── components/               # アプリケーションコンポーネント
│   │   ├── ui/                   # 基本UI（button, card等）
│   │   └── layout/               # レイアウト関連
│   ├── hooks/                    # カスタムフック
│   │   └── use-supabase.ts       # Supabase連携用フック
│   ├── lib/                      # ユーティリティ
│   │   ├── api/                  # API関連処理
│   │   │   ├── client.ts         # 変更禁止: AIモデル設定
│   │   │   ├── types.ts          # 変更禁止: 型定義
│   │   │   └── config.ts         # 変更禁止: 環境設定
│   │   ├── supabase/             # Supabase関連処理
│   │   │   ├── client.ts         # Supabaseクライアント
│   │   │   ├── auth.ts           # 認証関連
│   │   │   ├── db.ts             # データベース操作
│   │   │   ├── storage.ts        # ストレージ操作
│   │   │   ├── realtime.ts       # リアルタイム機能
│   │   │   └── types.ts          # Supabase型定義
│   │   └── utils/                # 共通関数
│   │       ├── financial.ts      # 財務計算ユーティリティ
│   │       └── excel.ts          # Excel変換ユーティリティ
│   ├── styles/                   # スタイル定義
│   ├── favicon.ico               # ファビコン
│   ├── globals.css               # グローバルスタイル
│   ├── layout.tsx                # ルートレイアウト
│   ├── page.tsx                  # ホームページ
│   ├── dashboard/                # ダッシュボードページ
│   │   └── page.tsx
│   ├── upload/                   # ファイルアップロードページ
│   │   └── page.tsx
│   ├── analysis/                 # 分析結果表示ページ
│   │   └── page.tsx
│   ├── action-plan/              # アクションプラン提示ページ
│   │   └── page.tsx
│   └── form/                     # 経営計画手入力フォームページ
│       └── page.tsx
├── __tests__/                    # テストディレクトリ
│   ├── components/               # コンポーネントテスト
│   │   └── ui/                   # UIコンポーネントテスト
│   ├── hooks/                    # フックテスト
│   │   └── use-supabase.test.ts  # Supabaseフックテスト
│   ├── lib/                      # ユーティリティテスト
│   │   ├── api/                  # API関連テスト
│   │   ├── supabase/             # Supabase関連テスト
│   │   └── utils/                # ユーティリティ関数テスト
│   │       ├── financial.test.ts # 財務計算テスト
│   │       └── excel.test.ts     # Excel変換テスト
│   └── e2e/                      # エンドツーエンドテスト
│       ├── dashboard.spec.ts     # ダッシュボードテスト
│       ├── upload.spec.ts        # アップロードテスト
│       ├── analysis.spec.ts      # 分析テスト
│       ├── action-plan.spec.ts   # アクションプランテスト
│       └── form.spec.ts          # フォームテスト
├── public/                       # 静的ファイル
├── node_modules/                 # 依存パッケージ
├── .git/                         # Gitリポジトリ
├── .cursor/                      # Cursor設定
├── package.json                  # プロジェクト設定
├── package-lock.json             # 依存関係ロックファイル
├── tsconfig.json                 # TypeScript設定
├── next-env.d.ts                 # Next.js型定義
├── next.config.js                # Next.js設定
├── postcss.config.mjs            # PostCSS設定
├── eslint.config.mjs             # ESLint設定
├── jest.config.js                # Jest設定
├── cypress.config.ts             # Cypress設定
├── .env.local                    # 環境変数（Supabase接続情報など）
└── .gitignore                    # Git除外設定
```

### 配置ルール
- UIコンポーネント → `app/components/ui/`
- APIエンドポイント → `app/api/[endpoint]/route.ts`
- 共通処理 → `app/lib/utils/`
- API関連処理 → `app/lib/api/`
- ページコンポーネント → `app/[page-name]/page.tsx`
- Supabase関連処理 → `app/lib/supabase/`
- 財務計算処理 → `app/lib/utils/financial.ts`
- Excel変換処理 → `app/lib/utils/excel.ts`
- コンポーネントテスト → `__tests__/components/`
- フックテスト → `__tests__/hooks/`
- ユーティリティテスト → `__tests__/lib/`
- E2Eテスト → `__tests__/e2e/`
