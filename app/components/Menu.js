import Link from 'next/link';

export default function Menu() {
  return (
    <div>
      <Link href="/"><a>Home</a></Link>
      <ul>
        <li>Blog</li>
        <li>Drawing</li>
        <li>Programming</li>
      </ul>
      <Link href="/about"><a>About</a></Link>
    </div>
  )
}
