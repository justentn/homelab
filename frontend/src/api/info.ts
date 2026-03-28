import { apiFetch } from './client'

export interface Role {
  title: string
  years: string
  items: string[]
}

export interface Experience {
  company: string
  roles: Role[]
}

export interface Education {
  degree: string
  school: string
  year: string
}

export interface Skill {
  name: string
  rating: number
}

export interface Info {
  name: string
  title: string
  current_role: Role 
  experience: Experience[]
  skills: Skill[]     
  education: Education
}

export const getInfo = () => apiFetch<Info>('/info')