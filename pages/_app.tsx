import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  // Authentication disabled for portfolio demonstration purposes
  return (
    <RecoilRoot>
      {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </RecoilRoot>
  )
}

export default MyApp
