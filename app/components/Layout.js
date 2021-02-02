import styles from './Layout.module.css';
import Menu from '../components/Menu';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'

export default function Layout({ children, home, post }) {
  return (
    <div className = { styles.container }>
      {(!post) && (
        <Head>
          <title>
            S.Nakamura Portfolio
          </title>
        </Head>
      )}
      <Menu />
      <Header />
      <div className = { styles.children }>
        <main>{ children }</main>
        {(!home && !post) && (
          <div className = { styles.backLink }>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        {post && (
          <div className = { styles.backLink }>
            <Link href="/posts">
              <a>← Back to posts</a>
            </Link>
          </div>
        )}
        </div>
      <Footer/>
    </div>
  )
}
