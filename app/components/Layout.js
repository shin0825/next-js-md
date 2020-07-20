import styles from './Layout.module.css';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className = { styles.container }>
      <Menu />
      <Header/>
      <main>{ children }</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
    </div>
  )
}
