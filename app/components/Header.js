import styles from './Header.module.css'

const info = require('../package.json')

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li><h1>SHINYA NAKAMURA</h1></li>
        <li><p>{info.description}</p></li>
      </ul>
    </div>
  )
}
