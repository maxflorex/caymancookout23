import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Syne } from '@next/font/google'

const spaceGrotesk = Syne({
	subsets: ['latin'],
	variable: '--font-syne'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${spaceGrotesk.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	)
}
