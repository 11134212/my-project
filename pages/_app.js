import { SessionProvider } from 'next-auth/react'
import '../styles/globals.scss'
import '../styles/index.scss'
import '../styles/login.scss'
import '../styles/mainPage.scss'

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}
