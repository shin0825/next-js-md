import styles from './Layout.module.css';
import Menu from '../components/Menu';
import Link from 'next/link'

export default function Layout({ children, home }) {
  return (
    <div className = { styles.container }>
      <Menu />
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
