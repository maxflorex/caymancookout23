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
        e.preventDefault()

        setExpand(false)
        document.body.style.overflow = "unset";
    }

    const prevImg = currentIndex === 0 ? length - 1 : currentIndex - 1
    const nextImg = length - 1 <= currentIndex ? 1 : currentIndex + 1
    

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeIn', staggerChildren: 0.5 }}
            className='fixed top-0 left-0 bg-mx-400 bg-opacity-90 backdrop-blur-sm w-full h-full z-30'>
            <div className="f1 w-full h-full relative">

                {/* DOWNLOAD */}
                <motion.div variants={item} className="absolute top-0 flex items-start justify-start w-full p-4">
                    <a href={currentUrl} download='Cayman-cookout-23' className='px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10' onClick={useDownload}  >
                        <i className="ri-download-line"></i>
                        Download
                    </a>
                </motion.div>

                {/* LARGE IMAGE */}
                <div className="h-[75vh] w-[85vw] relative flex justify-center">
                    <img alt='Expanded Image'
                    src={`https://res.cloudinary.com/dbi/image/upload/c_limit,h_1000,q_40,w_1000/${images[currentIndex].public_id}.webp`}
                    className='object-contain'
                    
                    />
                </div>

                {/* CLOSE */}
                <button className="absolute right-4 top-4 bg-mx-400 hover:bg-mx-300 hover:text-mx-400 rounded leading-none p-2 z-30 text-white border border-white flex items-center border-opacity-10 duration-150" onClick={exitModal}>
                    <i className="ri-close-fill"></i>
                </button>

                {/* NEXT - SIDES */}
                <div className="group/img group/arrow absolute h-full md:flex hidden items-center left-0" onClick={prev}>
                    <div className="relative h-48 w-16 flex items-center z-10 cursor-pointer">
                        <i className="ri-arrow-left-line absolute h-48 w-16 flex items-center z-20 justify-center text-white group-hover/arrow:-translate-x-2 duration-150" />
                        <Image alt='Next Image' src={`https://res.cloudinary.com/dbi/image/upload/h_200,q_20/${images[prevImg].public_id}.webp`} fill className='object-cover object-right opacity-40 group-hover/img:opacity-60 duration-300' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>

                {/* PREVIOUS - SIDES */}
                <div className="group/img group/arrow absolute h-full md:flex hidden items-center right-0" onClick={next}>
                    <div className="relative h-48 w-16 flex items-center z-10 cursor-pointer">
                        <i className="ri-arrow-right-line absolute h-48 w-16 flex items-center z-20 justify-center text-white group-hover/arrow:translate-x-2 duration-150" />
                        <Image alt='Next Image' src={`https://res.cloudinary.com/dbi/image/upload/h_200,q_20/${images[nextImg].public_id}.webp`} fill className='object-cover object-left opacity-40 group-hover/img:opacity-60 duration-300' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>

                {/* ARROWS - MOBILE */}
                <div className="absolute bottom-0 w-full flex gap-4 justify-end md:hidden p-4">
                    {/* LEFT - PREV */}
                    <div className="f1 rounded-full relative" onClick={prev}>
                        <i className="ri-arrow-left-line absolute top-0 flex w-full h-full items-center justify-center text-white z-20" />
                        <Image alt='Next Image' src={`https://res.cloudinary.com/dbi/image/upload/h_200,q_20/${images[prevImg].public_id}.webp`} width={48} height={48} className='object-cover z-10 opacity-50 rounded-full h-12 w-12' />
                    </div>

                    {/* RIGHT - NEXT */}
                    <div className="f1 rounded-full relative" onClick={next}>
                        <i className="ri-arrow-right-line absolute top-0 flex w-full h-full items-center justify-center text-white z-20" />
                        <Image alt='Next Image' src={`https://res.cloudinary.com/dbi/image/upload/h_200,q_20/${images[nextImg].public_id}.webp`} width={48} height={48} className='object-cover z-10 opacity-50 rounded-full h-12 w-12' />
                    </div>
                </div>

                {/* IMAGE NUMBERS */}
                <p className='text-white font-bold text-sm absolute bottom-4 left-4'>{currentIndex + 1} / {length}</p>




            </div>
        </motion.div>
    )
}

export default ImageModal