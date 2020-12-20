import styles from './Skill.module.css'

export default function Skill({ id, title, date }) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.label}>
          <p>
            {title}
          </p>
          <div>
            <p className={styles.title}>{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ id, title, date }) {
  return {
    props: {
      id,
      title,
      date
    }
  }
}
