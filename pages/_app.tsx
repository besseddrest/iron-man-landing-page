import { AppProps } from 'next/app';
import '../styles/global.scss'
import '../styles/iron-man-styles.scss'
import localFont from 'next/font/local'

const nunito = localFont({
  src: [
    {
      path: '../public/fonts/Nunito-Regular.ttf',
      weight: '400'
    }
  ]
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
