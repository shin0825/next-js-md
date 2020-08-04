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
          <h2 className={styles.title}>個人制作物</h2>
          <div className={styles.main}>
            <img src="/portfolio.png" alt="my photo" className={styles.siteimage} />
            <div className={styles.text}>
              <h2>ポートフォリオ</h2>
              <a href="https://s-nakamura-portfolio.com/">https://s-nakamura-portfolio.com/</a>
              <p>
                このサイト。
              </p>
              <div className={styles.table}>
                <h3>Web</h3>
                <p>Next.js</p>
              </div>
              <div className={styles.table}>
                <h3>Hosting</h3>
                <p>Vercel</p>
              </div>
              <div className={styles.table}>
                <h3>Domain</h3>
                <p>Google Domains</p>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <img src="/nameless.png" alt="my photo" className={styles.siteimage} />
            <div className={styles.text}>
              <h2>記事のURLを投げるとタイトルを取ってきて一緒に保存してくれるアプリ</h2>
              <a href="https://nameless-tundra-72223.herokuapp.com/">https://nameless-tundra-72223.herokuapp.com/</a>
              <p>
                あとで読みたい記事のURLとタイトルだけを保存してくれるアプリ。<br />
                溜まる一方。
              </p>
              <div className={styles.table}>
                <h3>Web</h3>
                <p>Vue.js, Ruby on Rails</p>
              </div>
              <div className={styles.table}>
                <h3>DB</h3>
                <p>PostgreSQL</p>
              </div>
              <div className={styles.table}>
                <h3>Hosting</h3>
                <p>Heroku</p>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <img src="/otogemap.png" alt="my photo" className={styles.siteimage} />
            <div className={styles.text}>
              <h2>音ゲーマップ</h2>
              <a href="https://otogemap.herokuapp.com/">https://otogemap.herokuapp.com/</a>
              <p>
                ゲーセンに設置されているIIDXの情報を<br />
                データベース化したいと思い開発。<br />
                仲間内で利用しようとしていたら<br />
                世間がゲーセンにいけない感じになってしまいました。。。
              </p>
              <div className={styles.table}>
                <h3>Web</h3>
                <p>Ruby on Rails</p>
              </div>
              <div className={styles.table}>
                <h3>DB</h3>
                <p>PostgreSQL</p>
              </div>
              <div className={styles.table}>
                <h3>Hosting</h3>
                <p>Heroku</p>
              </div>
              <div className={styles.table}>
                <h3>API</h3>
                <p>GCP Geocoding API</p>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <img src="/kakeibo.gif" alt="my photo" className={styles.siteimage} />
            <div className={styles.text}>
              <h2>自分用家計簿</h2>
              <a href="#">https://ガチの自分用家計簿なので非公開/</a>
              <p>
                すぐ使ったお金を記録したいと思って簡素なWebアプリを作成。<br />
                費目を探すのが結構面倒臭いので登録をLINE APIなどにするとか<br />
                改善点はまだまだある模様　運用でカバーしている現状です
              </p>
              <div className={styles.table}>
                <h3>Web</h3>
                <p>Ruby on Rails</p>
              </div>
              <div className={styles.table}>
                <h3>DB</h3>
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
