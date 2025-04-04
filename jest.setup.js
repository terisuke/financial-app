// Jest設定ファイルを作成します
import '@testing-library/jest-dom'

// MSWのセットアップ
import { server } from './__tests__/mocks/server'

// テスト実行前にMSWを起動
beforeAll(() => server.listen())

// 各テストの後にMSWをリセット
afterEach(() => server.resetHandlers())

// テスト終了後にMSWを停止
afterAll(() => server.close()) 