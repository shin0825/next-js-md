const info = require('../package.json')

export default function Footer() {
  return (
    <div>
      <h2>Profile</h2>
      <span>{info.auther}</span>
      <p>fugafuga</p>
      <ul>
        <li><a href="/">Slash</a></li>
        <li><a href="/">Slash</a></li>
        <li><a href="/">Slash</a></li>
      </ul>
      <p>NYANPOKO</p>
    </div>
  )
}
