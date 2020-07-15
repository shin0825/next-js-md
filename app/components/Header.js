import styles from './Header.module.css'
import Menu from '../components/Menu'
const info = require('../package.json')

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        SHINYA NAKAMURA
      </h1>
      <p>{info.description}</p>
    </div>
  )
}
