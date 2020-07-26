import styles from './Footer.module.css'

const info = require('../package.json')

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span>{info.title}&nbsp;-&nbsp;&copy;{(new Date).getFullYear()} {info.auther}</span>
      <p>Arigato.</p>
    </div>
  )
}
