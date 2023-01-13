import { SessionProvider } from 'next-auth/react'
import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/login.scss'
import '../styles/mainPage.scss'

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}
