import Layout from '../components/Layout'
import Skill from '../components/Skill'
import { getSortedSkillsData } from '../lib/skills'
import Link from 'next/link'
import styles from './skill.module.css'

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
      <h2 className={styles.title}>スキルセット（書きかけ）</h2>
      <h4 className={styles.link}>svg images by <a href="https://svgporn.com/">SVG PORN</a></h4>
      {allSkillsData.map(({ id, image, title, date_from, date_to, context }) => (
        <Skill id={id} image={image} title={title} date_from={date_from} date_to={date_to} context={context} />
      ))}
    </Layout>
  )
}
