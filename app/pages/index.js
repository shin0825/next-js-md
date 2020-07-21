import styles from './index.module.css'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <div>
      <Layout home>
        <h1 className={styles.midashi}>🤔</h1>
      </Layout>
    </div>
  )
}
