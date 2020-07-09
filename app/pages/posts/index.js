import Layout from '../../components/Layout'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'

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
    <Layout home>
      <h2>POSTS</h2>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <p>{date}</p>
          </li>
        ))}
    </Layout>
  )
}
