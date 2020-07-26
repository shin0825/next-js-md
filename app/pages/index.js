import Layout from '../components/Layout'
import styles from './index.module.css'

export default function Index() {
  return (
    <div>
      <Layout home>
        <div className = { styles.context }>
          <p>programmer</p>
          <p>C#.NET / Java / Ruby / Javascript</p>
          <p>SQL Server / PostgreSQL</p>
          <p>git / Docker
          </p>
          <img src="/qrcode.png" alt="qrcode include URL of this page" />
        </div>
      </Layout>
    </div>
  )
}
