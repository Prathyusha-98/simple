import type { AppProps } from 'next/app'
import '../app/layout'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}