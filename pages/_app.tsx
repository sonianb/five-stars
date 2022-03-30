import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AuthProvider } from '../lib/firebase.auth'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
