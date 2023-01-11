import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { testData } from '../../api/test'
import ImageModal from '../../../components/ImageModal'
import NotAuthorized from '../../../components/NotAuthorized'
import { useSelector } from 'react-redux'

const Gallery = () => {
    const [expand, setExpand] = useState(false)
    const router = useRouter()
    const { id } = router.query
    const [currentIndex, setCurrentIndex] = useState(0)
    const Authorization: unknown = useSelector((state: any) => state.authorization.value)

    const gallery = testData.find(item => {
        if (item.slug === id) {
            return item
        } else {
            return false
        }
    })

    // DEFAULT VALUES
    let images = gallery?.url || []
    let l = gallery?.url?.length || 0

    // NEXT
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
    if (Authorization) {
        return <NotAuthorized />
    }


    return (
        <>
            <Head>
                <title>Deep Blue Images - {gallery?.title}</title>
                <meta name="description" content="Generated by create next app" />
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
                                <p>Day {gallery?.day}</p>
                                <h1 className='text-4xl font-bold'>{gallery?.title}</h1>
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
                            {gallery?.url?.map((item: any, i: number) => {
                                return (
                                    <div className="w-full md:h-48 h-24 relative rounded-sm overflow-hidden cursor-pointer hover:scale-105 duration-200" key={i}>
                                        <Image
                                            alt='Image thumbnail'
                                            src={item} fill
                                            className='object-cover opacity-80 hover:opacity-100 duration-300 cursor-pointer hover:scale-110'
                                            onClick={() => handleClick(i)}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                </main>
                <footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
            </div>

            {/* MODAL */}
            {expand && (
                <ImageModal
                    setExpand={setExpand}
                    next={nextImage}
                    prev={prevImage}
                    images={images}
                    currentIndex={currentIndex}
                />)}
        </>
    )
}

export default Gallery