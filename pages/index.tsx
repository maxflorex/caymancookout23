import Head from 'next/head'
import { useState } from 'react'
import Auth from '../components/AuthModal'
import LatestEvent from '../components/LatestEvent'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

export default function Home() {

	const [showCookoutPhotos, setShowCookoutPhotos] = useState(false)

	return (
		<>
			<Head>
				<title>Deep Blue Images - 2023</title>
				<meta name="description" content="Deep Blue Images is an island photography company in Grand Cayman that specializes in wedding photography in Grand Cayman, ocean photography, and real estate photography." />
				<meta name='keywords' content='grand cayman photography, wedding photography grand cayman, photoshoots in grand cayman, diving photography grand cayman' />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta typeof='og:description' content='Deep Blue Images is an island photography company in Grand Cayman that specializes in wedding photography in Grand Cayman, ocean photography, and real estate photography.' />
				<meta typeof='og:title' content='Deep Blue Images' />
				<meta typeof='og:type' content='website' />
				<meta typeof='og:image' content='/public/images/dbi.webp' />
			</Head>


			<main className='overflow-hidden min-h-screen min-w-screen bg-[url("/images/bg1.webp")] bg-cover backdrop-blur-3xl'>
				<div className="backdrop-blur w-full h-full relative">

					{!showCookoutPhotos ? (<div className='min-h-screen'>

						<Navigation />

						{/* TITLE & SLOGAN */}
						<div className="f3 md:py-20 py-16">
							<motion.h1
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='font-handwritten xl:text-8xl text-5xl text-mx-400 text-center'>Deep Blue Images</motion.h1>
							<h3 className='font-semibold text-mx-400 xl:text-xl text-opacity-30 text-center'>- Unique. Creative. Artistic. Personalized. -</h3>
						</div>

						<LatestEvent setShow={setShowCookoutPhotos} />

						<footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
					</div>

					) : (

						<Auth setShow={setShowCookoutPhotos} />

					)}

				</div>
			</main>


		</>
	)
}
