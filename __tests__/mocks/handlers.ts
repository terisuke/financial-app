import { rest } from 'msw'

// Supabaseのモックハンドラー
export const handlers = [
  // プロフィール取得
  rest.get('*/rest/v1/profiles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          email: 'test@example.com',
          full_name: 'Test User',
          role: 'owner',
        },
      ])
    )
  }),

  // 企業情報取得
  rest.get('*/rest/v1/companies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'Test Company',
          industry: 'IT',
          representative: 'Test Representative',
        },
      ])
    )
  }),

  // 取引情報取得
  rest.get('*/rest/v1/transactions', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          company_id: '1',
          date: '2024-01-01',
          amount: 1000000,
          type: 'revenue',
          description: 'Test Transaction',
        },
      ])
    )
  }),
] 