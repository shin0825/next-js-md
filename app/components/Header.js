import styles from './Header.module.css'

const info = require('../package.json')

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li><h1>SHINYA NAKAMURA</h1></li>
        <li>
          <a href="https://github.com/shin0825">
            <p className="fab fa-github"></p>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/s_nakamura_0913">
            <p className="fab fa-twitter"></p>
          </a>
        </li>
      </ul>
    </div>
  )
}
