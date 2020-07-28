import Layout from '../components/Layout'
import styles from './about.module.css'

export default function About() {
  return (
    <div>
      <Layout>
        <div>
          <div className={styles.main}>
            <img src="/photo.jpg" alt="my photo" className={styles.image} />
            <div className={styles.text}>
              <h2>S.Nakamuraについて</h2>
              <p>愛知県名古屋市在住</p>
              <p>
                SIer勤務、業務系のシステム開発に携わるシステムエンジニア。<br />
                C#.NET + SQL Server, Java + PostgreSQLを扱うことが多いです。
              </p>
              <p>
                Webエンジニアへのキャリアチェンジを目論んでいて、<br />
                Ruby on RailsやVue.jsを使って自分用の自作アプリをリリースしたり、<br />
                普段の業務では触れない領域のネットワークやインフラを学んだりしています。
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
