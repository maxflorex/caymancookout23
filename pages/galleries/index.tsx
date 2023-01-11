import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Albums from '../../components/Albums'
import NotAuthorized from '../../components/NotAuthorized'

const Galleries = () => {
	const Authorization: unknown = useSelector((state: any) => state.authorization.value)

	const handleDownload = () => {
		return alert('Will get you a download link soon!')
	}

	if (!Authorization) {
		return <NotAuthorized />
	}

	return (
		<>
			<Head>
				<title>Deep Blue Images - Cayman Cookout 2023</title>
				<meta name="description" content="Cayman Cookout 2023 | Photos by Deep Blue Images" />
				<meta name='keywords' content='grand cayman photography, wedding photography grand cayman, photoshoots in grand cayman, diving photography grand cayman' />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>


			<div className='bg-mx-400 min-h-screen text-white relative xl:px-0 px-4 overflow-hidden'>

				{/* HEADER */}
				<header className='container mx-auto'>
					<nav className='flex items-center justify-between py-4 border-b-[1px] border-white border-opacity-10'>
						<Link href='/' className='font-semibold'>Deep Blue Images</Link>
						<div className="flex gap-2 items-center">
							<a href="mailto:info@deepblueimages.com" className='btn3'>Contact</a>
							{/* <i className="ri-menu-4-line" /> */}
						</div>
					</nav>
				</header>

				<main className='container mx-auto'>

					{/* TITLE & DOWNLOAD  */}
					<section className='flex flex-wrap justify-between items-center py-12 border-b border-white border-opacity-10 gap-2'>
						<h1 className='text-mx-300 font-semibold xl:text-4xl text-2xl'>Cayman Cookout 2023</h1>
						<button className='xl:text-md text-sm group/btn py-2 px-4 z-20 rounded font-bold bg-white text-mx-400 flex items-center gap-2 hover:scale-105 active:scale-95 duration-200' onClick={handleDownload}><i className="ri-download-line"></i>Download All</button>
					</section>

					{/* INSTRUCTIONS */}
					<section>
						<ul className='pt-6 xl:text-sm text-xs xl:list-outside list-inside list-disc text-white leading-6'>
							<li>
								Check back to the gallery after 48 hours for full quality final photos and additional event photos.
							</li>
							<li>
								If you do not see your photo in the gallery within 15 minutes, check back after 24 hours... all photos are archived within 24 hours after the event.
							</li>
						</ul>
					</section>

					{/* ALBUMS */}
					<Albums />
				</main>

				<footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
			</div>
		</>
	)
}

export default Galleries
