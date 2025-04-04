// カスタムコマンドをここに追加
// 例: cy.login(), cy.logout() など

// テスト用のSupabaseクライアントの設定
Cypress.Commands.add('setupSupabase', () => {
  // Supabaseのモックデータをセットアップ
  cy.intercept('GET', '*/rest/v1/profiles*', {
    statusCode: 200,
    body: [
      {
        id: '1',
        email: 'test@example.com',
        full_name: 'Test User',
        role: 'owner',
      },
    ],
  }).as('getProfiles')

  cy.intercept('GET', '*/rest/v1/companies*', {
    statusCode: 200,
    body: [
      {
        id: '1',
        name: 'Test Company',
        industry: 'IT',
        representative: 'Test Representative',
      },
    ],
  }).as('getCompanies')

  cy.intercept('GET', '*/rest/v1/transactions*', {
    statusCode: 200,
    body: [
      {
        id: '1',
        company_id: '1',
        date: '2024-01-01',
        amount: 1000000,
        type: 'revenue',
        description: 'Test Transaction',
      },
    ],
  }).as('getTransactions')
}) 