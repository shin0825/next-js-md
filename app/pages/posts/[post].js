import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from '../../components/Head'
import { useRouter } from 'next/router'
import styles from './[post].module.css'

export default function Post({ postData }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div> NaN... </div>
  }
  return (
    <Layout post>
      <Head title={postData.title} />
      <article className={styles.article}>
        <h1>{postData.title}</h1>
        <p>{postData.date}</p>
        <div>
        </div>
        <div className={styles.main} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.post)
  return {
    props: {
      postData
    }
  }
}
