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

    console.log(currentIndex, nextImg);



    return (
        <div className='absolute top-0 left-0 bg-mx-400 bg-opacity-90 backdrop-blur-sm w-full h-full z-30'>
            <div className="flex items-center justify-center w-full h-full relative">

                {/* LARGE IMAGE */}
                <div className="h-[70vh] w-[80vw] overflow-hidden relative">
                    <Image alt='Expanded Image' src={images[currentIndex]} fill className='object-contain' />
                    <p className='text-white font-bold text-sm'>{currentIndex + 1} / {length}</p>
                </div>

                {/* CLOSE */}
                <button className="absolute right-8 top-8 bg-white rounded leading-none p-2 z-30" onClick={exitModal}>
                    <i className="ri-close-fill"></i>
                </button>

                {/* NEXT */}
                <div className="group absolute h-full flex items-center left-0" onClick={prev}>
                    <div className="relative h-48 w-16 flex items-center z-10 cursor-pointer">
                        <i className="ri-arrow-left-line absolute h-48 w-16 flex items-center z-20 justify-center text-white" />
                        <Image alt='Next Image' src={images[prevImg]} fill className='object-cover opacity-40 group-hover/img:opacity-60 duration-500' />
                    </div>
                </div>

                {/* PREVIOUS */}
                <div className="group/img absolute h-full flex items-center right-0" onClick={next}>
                    <div className="relative h-48 w-16 flex items-center z-10 cursor-pointer">
                        <i className="ri-arrow-right-line absolute h-48 w-16 flex items-center z-20 justify-center text-white" />
                        <Image alt='Next Image' src={images[nextImg]} fill className='object-cover opacity-40 group-hover/img:opacity-60 duration-500' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageModal