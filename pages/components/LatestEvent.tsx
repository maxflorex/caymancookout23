import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    setShow: any
}

const LatestEvent = ({ setShow }: Props) => {


    const handleClick = (e: any) => {
        e.preventDefault()

        setShow(true)
    }

    return (
        <div>

            {/* RIBBON */}
            <div className="grid grid-cols-4 gap-4 container mx-auto h-[40vh] relative">
                <span className='absolute top-4 -left-4 py-2 px-4 bg-mx-300 z-20 rounded font-bold shadow flex items-center gap-2'>Lastest Events <i className="ri-camera-2-fill"></i></span>
                <div className="col-span-2 object-cover relative rounded overflow-hidden drop-shadow-sm">
                    <Image
                        src='/images/samplecc23.jpg'
                        alt='Latest Event'
                        fill
                        className='object-cover'
                        priority
                    // placeholder='blur'
                    />
                </div>
                <div className="object-cover relative rounded overflow-hidden drop-shadow-sm">
                    <Image
                        src='/images/samplecc23.jpg'
                        alt='Latest Event'
                        fill
                        className='object-cover'
                    />
                </div>
                <div className="object-cover relative rounded overflow-hidden drop-shadow-sm">
                    <Image
                        src='/images/samplecc23.jpg'
                        alt='Latest Event'
                        fill
                        className='object-cover'
                    />
                </div>
            </div>

            <div className="flex gap-6 container items-center mx-auto py-16 text-white">
                <div className="flex gap-2 items-center">
                    <i className="ri-play-fill text-2xl text-mx-400"></i>
                    <h1 className='text-3xl font-semibold'>Cayman Cookout 2023</h1>
                </div>
                <div className='flex-1 border-b-[1px] border-white border-opacity-30' />
                <button onClick={handleClick} className='btn2'>View Photos <i className="ri-arrow-right-line" /></button>
            </div>

        </div>
    )
}

export default LatestEvent