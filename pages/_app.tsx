import { AppProps } from 'next/app';
import '../styles/global.scss'
import '../styles/iron-man-styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
