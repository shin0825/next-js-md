import styles from './Menu.module.css'
import Link from 'next/link';

export default function Menu() {
  return (
    <nav className={styles.navigator}>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">
              <a className={styles.link}>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/skill">
              <a className={styles.link}>Skill</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/posts">
              <a className={styles.link}>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
