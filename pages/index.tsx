import Head from 'next/head'
import { useState } from 'react'
import Auth from '../components/AuthModal'
import LatestEvent from '../components/LatestEvent'
import Navigation from '../components/Navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { useFilter } from './hooks/useFilter'


export const getStaticProps: GetStaticProps = async () => {
	const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?max_results=500/`, {
		method: 'get',
		headers: {
			Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
		}
	}).then((r) => r.json()).catch(err => console.log(err))

	return {
		props: {
			results,
		},
	}
}


export default function Home({ results }: any) {

	const [showCookoutPhotos, setShowCookoutPhotos] = useState(false)
	const album1 = useFilter(results, 'day1-sommelier-standoffjan')



	console.log(album1[0].url);



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
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							// transition={{ type: 'spring' }}
							className="f3 md:py-20 py-16">
							<h1 className='font-handwritten xl:text-8xl text-5xl text-mx-400 text-center'>Deep Blue Images</h1>
							<h3 className='font-semibold text-mx-400 xl:text-xl text-opacity-30 text-center'>- Unique. Creative. Artistic. Personalized. -</h3>
						</motion.div>

						<LatestEvent setShow={setShowCookoutPhotos} />

						<footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
					</div>

					) : (

						<AnimatePresence>
							<Auth setShow={setShowCookoutPhotos} />
						</AnimatePresence>

					)}

				</div>
				<div>
					{/* <CldImage /> */}
				</div>
			</main>


		</>
	)
}
