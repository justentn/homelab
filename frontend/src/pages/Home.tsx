import { useResume } from '../hooks/useResume'
import styles from './Home.module.css'

export default function Home() {
  const { resume, loading, error } = useResume()

  if (loading) return <div className={styles.loading}>Loading...</div>
  if (error) return <div className={styles.error}>Error: {error}</div>
  if (!resume) return null

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>{resume.name}</h1>
        <h2 className={styles.title}>{resume.title}</h2>
              <p className={styles.bio}>
        </p>
      </section>
      <section className={styles.skillsSection}>
        <h3 className={styles.sectionTitle}>Skills</h3>
        <div className={styles.skillsList}>
        {resume.skills.map(skill => {
          const pct = (skill.rating / 10) * 100
          return (
            <div key={skill.name} className={styles.skillRow}>
              <div className={styles.skillMeta}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillRating}>{skill.rating}/10</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{ '--pct': `${pct}%` } as React.CSSProperties}
                />
              </div>
            </div>
          )
        })}
        </div>
      </section>
    </main>
  )
}