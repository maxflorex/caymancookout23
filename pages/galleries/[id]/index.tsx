import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ImageModal from '../../../components/ImageModal'
import NotAuthorized from '../../../components/NotAuthorized'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { container, item } from '../../../animate/variations'
import { GetStaticProps } from 'next'
import { useFilter } from '../../../hooks/useFilter'

export const getStaticPaths = async () => {

    const albums = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/folders/cookout23/`, {
        method: 'get',
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then((r) => r.json()).catch(err => console.log(err))

    const paths = albums.folders.map((item: any) => {
        return {
            params: {
                id: item.name.substring(5)
            }
        }
    })

    return {
        paths,
        fallback: false,
    };

}

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

    return {
        props: {
            results,
            results2,
        },
    }
}


const Gallery = ({ results, results2}: any) => {
    const [expand, setExpand] = useState(false)
    const router = useRouter()
    const { id } = router.query
    const [currentIndex, setCurrentIndex] = useState(0)
    const Authorization: unknown = useSelector((state: any) => state.authorization.value)

    const filter1 = useFilter(results, id)
    const filter2 = useFilter(results2, id)

    const filtered = [...filter1, ...filter2]

    // * DEFAULT VALUES
    let images = filtered
    let l = filtered.length || 0
    const day = filtered[0]?.folder.slice(13, 14)

    // * NEXT
    const nextImage = (e: any) => {
        e.preventDefault()

        if (currentIndex >= l - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    // PREVIOUS
    const prevImage = (e: any) => {
        e.preventDefault()

        if (currentIndex === 0) {
            setCurrentIndex(l - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }


    const handleClick = (i: number) => {

        setExpand(true)
        setCurrentIndex(i)
        // DISABLE SCROLLING
        document.body.style.overflow = "hidden";
    }

    // DO NOT SHOW IF NOT AUTHORIZED
    if (!Authorization) {
        return <NotAuthorized />
    }


    return (
        <>
            <Head>
                <title>Deep Blue Images - Album</title>
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

                    {/* TITLE */}
                    <section className='flex xl:flex-row flex-col justify-between xl:items-center items-start py-12 border-b border-white border-opacity-10 gap-4'>
                        <div className="flex flex-col gap-2">
                            <p className='font-handwritten text-2xl text-mx-300'>Cayman Cookout 2023</p>
                            <div className="flex xl:flex-row flex-col items-baseline xl:gap-2 xl:py-0 py-4">
                                <p>Day {day}</p>
                                <h1 className='text-4xl font-bold capitalize'>{id?.toString().replaceAll('-', ' ')}</h1>
                            </div>
                        </div>
                        <Link href='/galleries' className='xl:text-md text-sm group/arrow py-2 px-4 z-20 rounded font-bold bg-white text-mx-400 flex items-center gap-2'><i className="ri-arrow-left-line group-hover/arrow:-translate-x-1 duration-200"></i>View Albums</Link>
                    </section>

                    {/* INSTRUCTIONS */}
                    <section>
                        <ul className='pb-4 pt-6 xl:text-sm text-xs xl:list-outside list-inside list-decimal text-white leading-6'>
                            <li>Find your desired photo & click on it to enlarge...</li>
                            <li>Click the DOWNLOAD button at the top of your screen...</li>
                            <li>When prompted, click VIEW from pop-up window.</li>
                            <li>When image fully loads on screen, Press/Hold on photo and select ADD TO PHOTOS to save to your PHOTOS app</li>
                        </ul>
                    </section>

                    {/* IMAGES */}
                    <section>
                        <div className="py-12 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 md:gap-4 gap-2 mb-8">
                            {images.map((image: any, i: number) => {
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 1.1, opacity: 0, }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, ease: 'easeOut', delay: 0.2 * i }}
                                        className="w-full md:h-48 h-24 relative rounded-sm overflow-hidden cursor-pointer hover:scale-105 duration-200"
                                    >
                                        <Image
                                            alt='Image thumbnail'
                                            src={`https://res.cloudinary.com/dbi/image/upload/c_fill,h_240,w_320,q_40/${image.public_id}.webp`} fill
                                            className='object-cover opacity-80 hover:opacity-100 duration-300 cursor-pointer hover:scale-110'
                                            onClick={() => handleClick(i)}
                                            sizes="(max-width: 480px) 100vw, (max-width:960px) 50vw, 33vw"
                                            placeholder='blur' blurDataURL={`/_next/image?url=${image.public_id}&w=16&q=1`}
                                        />
                                    </motion.div>
                                )
                            })}
                        </div>
                    </section>

                </main>
                <footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {expand && (
                    <ImageModal
                        setExpand={setExpand}
                        next={nextImage}
                        prev={prevImage}
                        images={images}
                        currentIndex={currentIndex}
                    />)}
            </AnimatePresence>
        </>
    )
}

export default Gallery