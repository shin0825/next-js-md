import styles from './Skill.module.css'

export default function Skill({ id, title, date, context }) {
  return (
    <div className={styles.main}>
      <p className={styles.image}>
        {id}
      </p>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{date}</p>
        <pre className={styles.pre}>
          <code className={styles.code}>
            {context}
          </code>
        </pre>
      </div>
    </div>
  )
}

export async function getStaticProps({ id, title, date, context }) {
  return {
    props: {
      id,
      title,
      date,
      context
    }
  }
}
