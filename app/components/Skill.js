import styles from './Skill.module.css'

export default function Skill({ id, title, date }) {
  return (
    <div className={styles.main}>
      <p className={styles.image}>
        {id}
      </p>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{date}</p>
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
