describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('/dashboard')
  })

  it('displays the dashboard title', () => {
    cy.get('h1').should('contain', 'ダッシュボード')
  })

  it('navigates to upload page when clicking upload button', () => {
    cy.get('button').contains('ファイルをアップロード').click()
    cy.url().should('include', '/upload')
  })

  it('navigates to form page when clicking form button', () => {
    cy.get('button').contains('手入力で開始').click()
    cy.url().should('include', '/form')
  })

  it('displays company list when data is available', () => {
    // MSWを使用してモックデータを返す
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

    cy.wait('@getCompanies')
    cy.get('table').should('exist')
    cy.get('td').should('contain', 'Test Company')
  })
}) 