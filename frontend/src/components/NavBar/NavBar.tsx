import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

interface NavItem {
  to: string
  label: string
}

const links: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}