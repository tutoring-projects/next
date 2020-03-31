import { useRouter } from 'next/router'
import Link from 'next/link'

import { navigation } from './navigation.sass'

export default () => {
  const router = useRouter()

  const CurrentLink = ({ href, children }) => <Link href={ href }>
    <a current={ String(router.pathname === href) }>{ children }</a>
  </Link>

  return (
    <div className={ navigation }>
      <CurrentLink href="/">
        Home
      </CurrentLink>
      <br />
      <CurrentLink href="/about">
        About
      </CurrentLink>
    </div>
  )
}