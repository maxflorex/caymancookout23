/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { motion } from 'framer-motion'
import { item } from '../animate/variations'
import { useDownload } from '../hooks/useDownload'

type Props = {
    setExpand: any,
    next: any,
    prev: any,
    images: any,
    currentIndex: number,
    currentUrl: string
}



const ImageModal = ({ setExpand, next, prev, images, currentIndex, currentUrl }: Props) => {

    let length = images?.length || 0

    const exitModal = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            e.preventDefault()

            setExpand(false)
            document.body.style.overflow = "visible";
        }
    }

    const prevImg = currentIndex === 0 ? length - 1 : currentIndex - 1
    const nextImg = length - 1 <= currentIndex ? 1 : currentIndex + 1

    const handleNext = (e: any) => {
        e.preventDefault()
        next()
    }

    const handlePrev = (e: any) => {
        e.preventDefault()
        prev()
    }



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeIn', staggerChildren: 0.5 }}
            className='fixed top-0 left-0 bg-mx-400 bg-opacity-90 backdrop-blur-sm w-full h-full z-30'
            onClick={exitModal}
        >
            <div className="f1 w-full h-full relative dismiss">

                {/* DOWNLOAD */}
                <motion.div variants={item} className="absolute top-0 flex items-start justify-start w-full p-4">
                    <a href={currentUrl} download='Cayman-cookout-23' className='px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10 z-[999]' onClick={useDownload}  >
                        <i className="ri-download-line"></i>
                        Download
                    </a>
                </motion.div>

                {/* LARGE IMAGE */}
                <div className="h-[75vh] w-[85vw] relative flex justify-center">
                    <img alt='Expanded Image'
                        src={`https://res.cloudinary.com/dbi/image/upload/c_limit,h_1400,q_70,w_1400/${images[currentIndex].public_id}`}
                        srcSet={`https://res.cloudinary.com/dbi/image/upload/c_limit,h_1400,q_70,w_1400/${images[currentIndex].public_id}.webp 100vw,
                        https://res.cloudinary.com/dbi/image/upload/c_limit,h_1000,q_70,w_1000/${images[currentIndex].public_id}.webp 75vw,
                        https://res.cloudinary.com/dbi/image/upload/c_limit,h_800,q_70,w_800/${images[currentIndex].public_id}.webp 55vw,                        
                        `}
                        className='object-contain'
                    />
                </div>

                {/* CLOSE */}
                <button className="dismiss absolute right-4 top-4 bg-mx-400 hover:bg-mx-300 hover:text-mx-400 rounded leading-none p-2 z-[999] text-white border border-white flex items-center border-opacity-10 duration-150" onClick={() => exitModal}>
                    <i className="ri-close-fill z-[999] dismiss"></i>
                </button>

                {/* NEXT - SIDES */}
                <button className="group/img group/arrow absolute h-full md:flex hidden items-center left-0 z-[800] cursor-pointer" onClick={next}>
                    <i className="ri-arrow-left-line px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10 z-[800] ml-8" />
                </button>

                {/* PREVIOUS - SIDES */}
                <button className="group/img group/arrow absolute h-full md:flex hidden items-center right-0 z-[800] cursor-pointer" onClick={prev}>
                    <i className="ri-arrow-right-line px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10 z-[800] mr-8" />
                </button>

                {/* ARROWS - MOBILE */}
                <div className="absolute bottom-0 w-full flex gap-4 justify-end md:hidden p-4">
                    {/* LEFT - PREV */}
                    <button className="f1 rounded-full relative z-[800]" onClick={prev}>
                        <i className="ri-arrow-left-line px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10" />
                    </button>

                    {/* RIGHT - NEXT */}
                    <button className="f1 rounded-full relative w-12 h-12 z-[800]" onClick={next}>
                        <i className="ri-arrow-right-line px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10" />
                    </button>
                </div>

                {/* IMAGE NUMBERS */}
                <p className='text-white font-bold text-sm absolute bottom-4 left-4'>{currentIndex + 1} / {length}</p>




            </div>
        </motion.div>
    )
}

export default ImageModal