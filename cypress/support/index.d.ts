/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Supabaseのモックデータをセットアップするカスタムコマンド
     * @example cy.setupSupabase()
     */
    setupSupabase(): Chainable<void>
  }
} 