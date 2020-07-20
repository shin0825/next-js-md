import styles from './Footer.module.css'

const info = require('../package.json')

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>{info.auther}</span>
    </div>
  )
}
