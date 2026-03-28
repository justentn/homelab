import { useEffect, useState } from 'react'
import { getInfo, type Info } from '../api/info'

export function useResume() {
  const [resume, setResume] = useState<Info | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getInfo()
      .then(setResume)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { resume, loading, error }
}