import Menu from '../components/Menu'
const info = require('../package.json')

export default function Header() {
  return (
    <div>
      <h1>
        HOGEHOGE
      </h1>
      <p>{info.description}</p>
      <Menu/>
    </div>
  )
}
