import { apiFetch } from './client'

export interface Project {
  name: string
  description: string
  link: string
}

export interface Projects {
  projects: Project[]
}

export const getProjects = () => apiFetch<Projects>('/projects/')