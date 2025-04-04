# 📘 経営改善計画支援ツール フロントエンド要件定義（MVP + Supabase移行対応）

---

## 🎯 目的・コンセプト

本ツールは、中小企業の経営改善計画を支援するための**財務分析・戦略立案・アクションプラン提示**を行うWebアプリケーションです。  
初期段階では Excel ファイルによる分析に対応し、将来的にはWebフォーム・DB保存・レポート生成などの**DX対応・SaaS化**へとスムーズに移行できる構成を目指します。

既存の Supabase スキーマ（`profiles`, `companies`, `user_companies`, `transactions`）をそのまま活用できる設計とします。

---

## 🏗️ 技術スタック

| 分類      | 使用技術                               |
|-----------|----------------------------------------|
| フレームワーク   | Next.js（App Router）                    |
| UIコンポーネント | Shadcn UI（Tailwind CSSベース）             |
| 状態管理  | 特になし（画面内で完結）                     |
| モックデータ    | 固定JSON、faker.jsなど                    |
| バックエンド    | Supabase（DB/認証/ストレージ統合）            |
| テスト       | Jest + React Testing Library + Cypress |

---

## 📄 画面構成

### `/` トップページ
- サービス概要表示
- 「はじめる」ボタン → `/dashboard` へ遷移

### `/dashboard` ダッシュボード
- アップロード済みファイルやフォーム入力データ一覧（将来的に `companies` テーブルと連携）
- 「ファイルをアップロード」→ `/upload`
- 「手入力で開始」→ `/form`

### `/upload` 経営改善計画ファイルアップロード
- ファイル選択 (`.xlsx`想定)
- アップロードボタン（現時点では仮実装。将来的にはExcel→`transactions`への変換処理を実装）

### `/analysis` 分析結果表示
- SWOT分析（Shadcn `Card` ×4）
- 異常値検出（表形式）
- 業界ベンチマーク比較（表）
- 「アクションプランを見る」ボタン → `/action-plan`

### `/action-plan` アクションプラン提示
- Step形式で施策を表示（例：販管費見直し → 財務改善 → KPI設定）
- 各施策に説明・KPI・重要度（Badge）付き表示

### `/form` 経営計画手入力フォーム（DX用）
- 会社情報（`companies`スキーマと整合）
- 財務データ（売上・利益など3期分 → 将来 `transactions` に保存）
- SWOT（Textarea 4つ）
- 施策リスト（Accordion＋詳細入力）
- 「保存して分析へ」ボタン → `/analysis`

---

## 💬 ユーザー体験フロー

	1.	/ → [はじめる] → /dashboard
	2.	/dashboard →
	•	[ファイルアップロード] → /upload → /analysis
	•	[手入力で開始] → /form → /analysis
	3.	/analysis → [アクションプランを見る] → /action-plan

---

## 🎨 デザイン方針

- Shadcn UIを活用し、整ったUIと再利用可能なコンポーネント構成を実現
- Card、Table、Accordion、Badgeなどを中心に構成
- モバイル対応は後回し（PCブラウザ前提）
- MVPではテキスト・数値はモックでも可（API連携は段階的に対応）

---

## 🚫 スコープ外（MVPでは除外するもの）

- 認証・ログイン（Supabase Authで実装予定）
- DB保存処理（Supabase `companies`/`transactions`を後続対応）
- 実ファイル解析・数式展開（初期は手動入力や簡易構造のExcel想定）
- 本番デプロイ（ローカル or 開発環境で動作すればOK）

---

## ✅ 拡張性の観点（Supabase連携による段階的移行）

| フェーズ    | 拡張内容                                                    |
|---------|---------------------------------------------------------|
| Phase 1 | `/form` 入力内容を `companies` テーブルに保存                     |
| Phase 2 | Excelアップロード → `transactions` テーブルへの自動変換処理             |
| Phase 3 | `/dashboard` に `user_companies` に紐づく企業リスト表示            |
| Phase 4 | 分析結果・アクションプランを `financials` テーブル or JSONで保存（履歴管理） |
| Phase 5 | Supabase Authによるログイン・ユーザー管理導入                           |

---

## 🧩 想定ユースケース

- 経営者や税理士が経営改善計画を可視化・レポート出力したいとき
- 金融機関提出用の財務資料の仮作成・見える化
- Excelベースから脱却し、WebベースでのDX導入を進めたい中小企業
- 顧問先の経営計画を複数管理したい士業事務所

---

## 🧪 動作確認方法（ローカル開発）

```bash
git clone https://your-repo-url
cd your-project
npm install
npm run dev
```

---

## 🧪 テスト実行方法

### ユニットテスト・統合テスト
```bash
npm test
```

### 特定のテストファイルのみ実行
```bash
npm test -- path/to/test-file
```

### テストカバレッジレポート生成
```bash
npm test -- --coverage
```

### E2Eテスト（Cypress）
```bash
npm run cypress:open  # Cypress UIを開く
npm run cypress:run   # ヘッドレスモードで実行
```

---

## 🔄 Supabaseスキーマと連携計画

すでに以下のスキーマを活用可能な状態で構築済みです：

### 📦 使用スキーマ構成（publicスキーマ）

| テーブル名         | 用途                                   |
|----------------|--------------------------------------|
| profiles       | ユーザープロファイル情報（ロール・名前等）             |
| companies      | 各企業の基本情報（社名・業種・代表者など）    |
| user_companies | ユーザーと企業の紐付け（ロール: owner/member）     |
| transactions   | 会計取引情報（収益・費用・資産・負債の記録） |

### 🧠 既存ロジック・関数
- `calculateFinancialStatements()` により、transactions からPL・BSの自動生成済み
- `calculateFinancialMetrics()` による成長率・財務比率も取得可能

### 🔑 Supabase機能の統合予定
1. **認証（Auth）**
   - メール＋パスワード、またはOAuth（Google/GitHub）
2. **DB保存**
   - companies / transactions の読み書き・編集
3. **ファイルストレージ**
   - .xlsxの保存（履歴管理）＋PDF出力保存用
4. **リアルタイム連携**
   - 取引変更に応じた財務諸表のライブ更新
   - ユーザー間での共同編集（コラボ機能）

---

## 🧪 テスト戦略

### ユニットテスト
- コンポーネントのレンダリングとインタラクション
- フックの動作確認
- ユーティリティ関数の計算ロジック

### 統合テスト
- APIモックを使用したデータフロー
- Supabaseクライアントの動作確認
- ページ間のナビゲーション

### E2Eテスト
- 主要ユーザーフローの検証
- フォーム入力とバリデーション
- ファイルアップロードと処理
- 分析結果の表示とアクションプラン生成

### テストカバレッジ目標
- ユニットテスト: 80%以上
- 統合テスト: 主要機能の100%
- E2Eテスト: クリティカルパスの100%

---

📝 補足

このREADMEは、MVP開発とその後のSupabase移行を意識した段階的なフロントエンド要件定義です。
設計・実装を行う開発者・AIエージェントは、このREADMEを参照して実装・拡張を行ってください。

不明点がある場合は、開発責任者またはプロダクトオーナーに確認してください。
