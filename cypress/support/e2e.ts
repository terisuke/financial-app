// Cypressコマンドの型定義
declare global {
  namespace Cypress {
    interface Chainable {
      // カスタムコマンドの型定義をここに追加
    }
  }
}

// Cypressのデフォルトコマンドをインポート
import './commands'

// テスト実行前の共通設定
beforeEach(() => {
  // テストごとにローカルストレージをクリア
  cy.clearLocalStorage()
  
  // テストごとにCookieをクリア
  cy.clearCookies()
})

// テスト実行後の共通設定
afterEach(() => {
  // 必要に応じてクリーンアップ処理を追加
}) 