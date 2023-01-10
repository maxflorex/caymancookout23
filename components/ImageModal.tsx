import Image from 'next/image'
import React from 'react'

type Props = {
    setExpand: any,
    next: any,
    prev: any,
    images: any,
    currentIndex: number
}

const ImageModal = ({ setExpand, next, prev, images, currentIndex }: Props) => {

    let length = images?.length || 0

    const exitModal = (e: any) => {
        e.preventDefault()

        setExpand(false)
        document.body.style.overflow = "unset";
    }

    const prevImg = currentIndex === 0 ? length - 1 : currentIndex - 1
    const nextImg = length - 1 <= currentIndex ? 1 : currentIndex + 1


    return (
        <div className='fixed top-0 left-0 bg-mx-400 bg-opacity-90 backdrop-blur-sm w-full h-full z-30'>
            <div className="flex items-center justify-center w-full h-full relative">

                {/* IMAGE NUMBERS */}
                <p className='text-white font-bold text-sm absolute top-4 left-4'>{currentIndex + 1} / {length}</p>

                {/* LARGE IMAGE */}
                <div className="h-[70vh] w-[80vw] overflow-hidden relative">
                    <Image alt='Expanded Image' src={images[currentIndex]} fill className='object-contain' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>

                {/* CLOSE */}
                <button className="absolute right-4 top-4 bg-white rounded leading-none p-2 z-30" onClick={exitModal}>
                    <i className="ri-close-fill"></i>
                </button>

                {/* NEXT - SIDES */}
                <div className="group/img group/arrow absolute h-full md:flex hidden items-center left-0" onClick={prev}>
                    <div className="relative h-48 w-16 flex items-center z-10 cursor-pointer">
                        <i className="ri-arrow-left-line absolute h-48 w-16 flex items-center z-20 justify-center text-white group-hover/arrow:-translate-x-2 duration-150" />
                        <Image alt='Next Image' src={images[prevImg]} fill className='object-cover object-right opacity-40 group-hover/img:opacity-60 duration-300' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>

                {/* PREVIOUS - SIDES */}
                <div className="group/img group/arrow absolute h-full md:flex hidden items-center right-0" onClick={next}>
                    <div className="relative h-48 w-16 flex items-center z-10 cursor-pointer">
                        <i className="ri-arrow-right-line absolute h-48 w-16 flex items-center z-20 justify-center text-white group-hover/arrow:translate-x-2 duration-150" />
                        <Image alt='Next Image' src={images[nextImg]} fill className='object-cover object-left opacity-40 group-hover/img:opacity-60 duration-300' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>

                {/* ARROWS - MOBILE */}
                <div className="absolute bottom-8 flex items-center justify-center w-full md:hidden">

                    {/* LEFT - PREV */}
                    <div className="flex" onClick={prev}>
                        <i className="ri-arrow-left-line flex items-center z-20 justify-center text-white translate-x-8 duration-150" />
                        <div className="relative rounded-full bg-mx-400 h-12 w-12 overflow-hidden">
                            <Image alt='Next Image' src={images[prevImg]} fill className='object-cover z-10 opacity-50' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>

                    {/* RIGHT - NEXT */}
                    <div className="flex" onClick={next}>
                        <i className="ri-arrow-right-line flex items-center z-20 justify-center text-white translate-x-8 duration-150" />
                        <div className="relative rounded-full bg-mx-400 h-12 w-12 overflow-hidden">
                            <Image alt='Next Image' src={images[nextImg]} fill className='object-cover z-10 opacity-50' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageModal