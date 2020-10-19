import Layout from '../components/Layout'
import styles from './index.module.css'
import Link from 'next/link';

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
          <img src="/qrcode.png" alt="qrcode include URL of this page" className={styles.qrcode} />
            <h2 className={styles.title}>
              <Link href="/about">
                <a className={styles.link}>About</a>
              </Link>
            </h2>
            <h2 className={styles.title}>
              <Link href="/posts">
                <a className={styles.link}>Blog</a>
              </Link>
            </h2>
        </div>
      </Layout>
    </div>
  )
}
