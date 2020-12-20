import Layout from '../components/Layout'
import Skill from '../components/Skill'
import { getSortedSkillsData } from '../lib/skills'
import Link from 'next/link'
import styles from './index.module.css'

export async function getStaticProps() {
  const allSkillsData = getSortedSkillsData()
  return {
    props: {
      allSkillsData
    }
  }
}

export default function Index({ allSkillsData }) {
  return (
    <Layout>
      <h2 className={styles.title}>スキルセット</h2>
        <div className={styles.flexbox}>
          {allSkillsData.map(({ id, title, date }) => (
            <div className={styles.table}>
              <p>{date}</p>
              <h3 key={id}>
                <a className={styles.link}>{title}</a>
              </h3>
              <Skill />
            </div>
          ))}
        </div>
    </Layout>
  )
}
