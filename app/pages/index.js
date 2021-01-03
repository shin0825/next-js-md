import Layout from '../components/Layout'
import styles from './index.module.css'
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Layout home>
        <div className = { styles.context }>
          <img src="/qrcode.png" alt="qrcode include URL of this page" className={styles.qrcode} />
            <h2 className={styles.title}>
              <Link href="/about">
                <a className={styles.link}>
                  About<p>S.Nakamuraについて</p>
                </a>
              </Link>
            </h2>
            <h2 className={styles.title}>
              <Link href="/skill">
                <a className={styles.link}>Skill<p>スキルセット（書きかけ）</p></a>
              </Link>
            </h2>
            <h2 className={styles.title}>
              <Link href="/posts">
                <a className={styles.link}>Blog<p>アウトプットの練習やボヤき</p></a>
              </Link>
            </h2>
        </div>
      </Layout>
    </div>
  )
}
