import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Space_Grotesk } from '@next/font/google'

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${spaceGrotesk.variable} font-sans`}>
			<Component {...pageProps} />
		</main>
	)
}
