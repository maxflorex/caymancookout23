import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Albums from '../../components/Albums'
import NotAuthorized from '../../components/NotAuthorized'

export const getStaticProps: GetStaticProps = async () => {


    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?max_results=500/`, {
        method: 'get',
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then((r) => r.json()).catch(err => console.log(err))

    const next = results.next_cursor

    const results2 = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image?max_results=500&next_cursor=${next}`, {
        method: 'get',
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then((r) => r.json()).catch(err => console.log(err))

	const albums = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders/cookout23/`, {
		method: 'get',
		headers: {
			Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
		}
	}).then((r) => r.json()).catch(err => console.log(err))

	return {
		props: {
			results,
			results2,
			albums
		},
	}
}

const Galleries = ({ results, results2, albums }: any) => {
	const Authorization: unknown = useSelector((state: any) => state.authorization.value)

	console.log(results2);
	

	const albumList = albums.folders.map((data: any) => {
		return {
			name: data.name,
			nameClean: data.name.slice(5).replaceAll('-', ' ')
		}
	})	

	// ANIMATE TEXT
	// const ref = useRef(null)
	// const inView = useInView(ref)
	// const ctrl = useAnimation()
	// const text = 'Cayman Cookout 2023'

	// const characterAnimation = {
	// 	hidden: {
	// 		opacity: 0,
	// 		y: `0.25em`,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		y: `0em`,
	// 		transition: {
	// 			duration: 1,
	// 			ease: [0.2, 0.65, 0.3, 0.9],
	// 		},
	// 	},
	// };

	// const wordAnimation = {
	// 	hidden: {},
	// 	visible: {},
	// };

	// useEffect(() => {
	// 	if (inView) {
	// 		ctrl.start("visible");
	// 	}
	// 	if (!inView) {
	// 		ctrl.start("hidden");
	// 	}
	// }, [ctrl, inView]);


	//  - - - - 

	if (!Authorization) {
		return <NotAuthorized />
	}

	const handleDownload = () => {
		return alert('Will get you a download link soon!')
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
						</div>
					</nav>
				</header>

				<main className='container mx-auto'>

					{/* TITLE & DOWNLOAD  */}
					<section className='flex flex-wrap justify-between items-center py-12 border-b border-white border-opacity-10 gap-2'>
						<h1 className='text-mx-300 font-semibold xl:text-4xl text-2xl'>Cayman Cookout 2023</h1>
						<button className='xl:text-md text-sm group/btn py-2 px-4 z-20 rounded font-bold bg-white text-mx-400 flex items-center gap-2 hover:scale-105 active:scale-95 duration-200' onClick={handleDownload}><i className="ri-download-line"></i>Download All</button>
					</section>

					{/* - - - ANIMATION - - - */}
					{/* <h1 id='TITLE' className="bg-mx-100 text-mx-400 p-2 rounded">
						{text.split('').map((word, i) => {
							return (
								<motion.span
									id='WORD'
									key={i}
									// className='inline-block whitespace-nowrap'
									ref={ref}
									aria-hidden="true"
									initial="hidden"
									animate={ctrl}
									variants={wordAnimation}
									transition={{
										delayChildren: i * 0.1,
										staggerChildren: 0.5,
									}}
								>
									{word.split('').map((character, i) => {
										return (
											<motion.span id='CHAR'
												aria-hidden="true"
												key={i}
												variants={characterAnimation}
												className='inline-block'
											>
												{character}
											</motion.span>
										)
									})}

								</motion.span>)
						})}
					</h1> */}

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
					<Albums results={results} results2={results2} albumsList={albumList} />
				</main>

				<footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
			</div>
		</>
	)
}

export default Galleries
