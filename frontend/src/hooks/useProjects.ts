import { useEffect, useState } from 'react'
import { getProjects, type Projects } from '../api/projects'

export function useProjects() {
  const [projects, setProjects] = useState<Projects | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}