// コンポーネントテスト用の設定
import { mount } from 'cypress/react'

// グローバルスタイルのインポート
import '../../app/globals.css'

// Cypressのコマンドをグローバルに追加
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// コンポーネントテスト用のセットアップ
beforeEach(() => {
  // 必要に応じてテスト前の共通設定を追加
}) 