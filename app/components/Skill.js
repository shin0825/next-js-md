import styles from './Skill.module.css'

export default function Skill({ id, image, title, date_from, date_to, context }) {
  return (
    <div className={styles.main}>
      {(image) && (<img src={image} className={styles.image} />)}
      {(!image) && (<div className={styles.image}><p>{title}</p></div>)}
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{date_from} ~ {date_to}</p>
        <pre className={styles.pre}>
          <code className={styles.code}>
            {context}
          </code>
        </pre>
      </div>
    </div>
  )
}

export async function getStaticProps({ id, title, date_from, date_to, context }) {
  return {
    props: {
      id,
      title,
      date_from,
      date_to,
      context
    }
  }
}
