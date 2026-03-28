import { useProjects } from '../hooks/useProjects'
import styles from './Projects.module.css'

export default function Projects() {
  const { projects, loading, error } = useProjects()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!projects) return null

  console.log(projects)

  return (
    <main className={styles.main}>
      <h1>Projects</h1>
      {projects.projects.map(project => (
        <div key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">View</a>
        </div>
      ))}
    </main>
  )
}