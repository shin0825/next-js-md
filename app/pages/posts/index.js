import Layout from '../../components/Layout'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import styles from './index.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Index({ allPostsData }) {
  return (
    <Layout>
      <h2 className={styles.title}>ちょっとしたメモ書き</h2>
        {allPostsData.map(({ id, title, date }) => (
          <div className={styles.table}>
            <p>{date}</p>
            <h3 key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={styles.link}>{title}</a>
              </Link>
            </h3>
          </div>
        ))}
    </Layout>
  )
}
