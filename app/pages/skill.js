import Layout from '../components/Layout'
import Skill from '../components/Skill'
import { getTechSkillDatas, getEngineeringSkillDatas, getSoftSkillDatas } from '../lib/skills'
import styles from './skill.module.css'

export async function getStaticProps() {
  const techSkillsData = getTechSkillDatas()
  const engineeringSkillDatas = getEngineeringSkillDatas()
  const softSkillDatas = getSoftSkillDatas()
  return {
    props: {
      techSkillsData,
      engineeringSkillDatas,
      softSkillDatas
    }
  }
}

export default function Index({ techSkillsData, engineeringSkillDatas, softSkillDatas }) {
  return (
    <Layout>
      <h2 className={styles.title}>テクニカルスキル</h2>
      <h4 className={styles.link}>svg images by <a href="https://svgporn.com/">SVG PORN</a></h4>
      {techSkillsData.map(({ image, title, date_from, date_to, context }) => (
        <Skill image={image} title={title} date_from={date_from} date_to={date_to} context={context} />
      ))}
      <h2 className={styles.title}>エンジニアリングスキル</h2>
      {engineeringSkillDatas.map(({ image, title, date_from, date_to, context }) => (
        <Skill image={image} title={title} date_from={date_from} date_to={date_to} context={context} />
      ))}
      <h2 className={styles.title}>ソフトスキル</h2>
      {softSkillDatas.map(({ image, title, date_from, date_to, context }) => (
        <Skill image={image} title={title} date_from={date_from} date_to={date_to} context={context} />
      ))}
    </Layout>
  )
}
