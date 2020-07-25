import styles from './index.module.css'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <div>
      <Layout home>
        <div className={styles.midashi}>
          <img src="/qrcode.png" alt="qrcode include URL of this page" />
        </div>
      </Layout>
    </div>
  )
}
