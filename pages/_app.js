import Navigation from '../components/navigation'

import { page, app } from './_app.sass'

export default ({ Component, pageProps }) => {
  return (
    <div className={ app }>
      <Navigation />
      <div className={ page }>
        <Component {...pageProps} />
      </div>
    </div>
  )
}