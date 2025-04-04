/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from '@/lib/supabase/client'
import { useState } from 'react'

export function useSupabase(table: string) {
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const fetch = async () => {
    try {
      setLoading(true)
      const { data: result, error: err } = await supabase.from(table).select('*')
      
      if (err) throw err
      setData(result || [])
      setError(null)
    } catch (err) {
      setError(err as Error)
      setData([])
    } finally {
      setLoading(false)
    }
  }

  return { data, error, loading, fetch }
} 