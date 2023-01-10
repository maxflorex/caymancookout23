import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Syne, Ms_Madi } from '@next/font/google'
import { Provider } from 'react-redux'
import store from '../redux/store'

const spaceGrotesk = Syne({
	subsets: ['latin'],
	variable: '--font-syne'
})

const msMadi = Ms_Madi({
	subsets: ['latin'],
	weight: "400",
	variable: '--font-msmadi'
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<main className={`${spaceGrotesk.variable} font-sans ${msMadi.variable}`}>
				<Component {...pageProps} />
			</main>
		</Provider>
	)
}
