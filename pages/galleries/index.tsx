import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { testData } from '../api/test'

const galleries = () => {

	return (
		<>
			<Head>
				<title>Deep Blue Images - Galleries</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>


			<div className='bg-mx-400 min-h-screen text-white relative'>

				<header className='container mx-auto'>
					<nav className='flex items-center justify-between py-4 border-b-[1px] border-white border-opacity-10'>
						<Link href='/' className='font-semibold'>Deep Blue Images</Link>
						<div className="flex gap-2 items-center">
							<button className='btn3'>Contact</button>
							<i className="ri-menu-4-line" />
						</div>
					</nav>
				</header>

				<main className='container mx-auto'>
					<section className='flex justify-between items-center py-12 border-b border-white border-opacity-10'>
						<h1 className='text-mx-300 font-semibold text-4xl'>Cayman Cookout 2023</h1>
						<button className='py-2 px-4 z-20 rounded font-bold bg-white text-mx-400'>Download All</button>
					</section>
					<section>
						<ul className='pt-4 text-sm list-outside list-disc text-white leading-6'>
							<li>
								Check back to the gallery after 48 hours for full quality final photos and additional event photos.
							</li>
							<li>
								If you do not see your photo in the gallery within 15 minutes, check back after 24 hours... all photos are archived within 24 hours after the event.
							</li>
						</ul>
						<ul className='pb-4 pt-3 text-sm list-outside list-decimal text-white leading-6'>
							<li>Find your desired photo & click on it to enlarge...</li>
							<li>Click the DOWNLOAD button at the top of your screen...</li>
							<li>When prompted, click VIEW from pop-up window.</li>
							<li>When image fully loads on screen, Press/Hold on photo and select ADD TO PHOTOS to save to your PHOTOS app</li>
						</ul>
					</section>
					<section className='grid grid-cols-2 gap-2 pt-8 pb-24'>
						{testData.map((data: any, i: number) => {
							return (
								<div key={i}>
									<div className="border border-white border-opacity-10 rounded hover:border-opacity-100 p-4">

										<div className="flex justify-between items-center py-4">
											<div className="flex gap-2 items-baseline">
												<p className='text-xs'>Day {data.day}</p>
												<h2 className='text-3xl font-semibold'>{data.title}</h2>
											</div>
											<i className="ri-folder-download-fill" />
										</div>

										<div className="grid grid-cols-2 gap-2">
											{data.url.slice(0, 2).map((url: any, i: number) => {
												return (
													<div className="h-40 w-full rounded-sm overflow-hidden relative" key={i}>
														<Image alt={data.title} src={url} fill className='object-cover' />
													</div>
												)
											})}
										</div>

										<div className="border-t border-white border-opacity-10 w-full mt-8">
											<Link href={`/galleries/${data.slug}`} className="flex items-center gap-2 justify-center py-4 hover:bg-mx-300 -mb-4 -mx-4 hover:text-mx-400">
												<p className='text-center text-xs font-semibold'>View Album</p>
												<i className="ri-arrow-right-up-line"></i>
											</Link>
										</div>

									</div>
								</div>
							)
						})}
					</section>
				</main>

				<footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
			</div>
		</>
	)
}

export default galleries
