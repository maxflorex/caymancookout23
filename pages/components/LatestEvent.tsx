import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const LatestEvent = (props: Props) => {
    return (
        <div>

            {/* RIBBON */}

            <div className="grid grid-cols-4 gap-4 container mx-auto h-[40vh] relative">
                <span className='absolute top-4 -left-4 py-2 px-4 bg-mx-300 z-20 rounded font-bold'>Lastest Events</span>
                <div className="col-span-2 object-cover relative rounded-xl overflow-hidden drop-shadow-sm">
                    <Image
                        src='/images/samplecc23.jpg'
                        alt='Latest Event'
                        fill
                        className='object-cover'
                        priority
                    // placeholder='blur'
                    />
                </div>
                <div className="object-cover relative rounded-xl overflow-hidden drop-shadow-sm">
                    <Image
                        src='/images/samplecc23.jpg'
                        alt='Latest Event'
                        fill
                        className='object-cover'
                    />
                </div>
                <div className="object-cover relative rounded-xl overflow-hidden drop-shadow-sm">
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
                    <i className="ri-play-fill text-2xl"></i>
                    <h1 className='text-3xl font-semibold'>Cayman Cookout 2023</h1>
                </div>
                <div className='flex-1 border-b-[1px] border-white border-opacity-30' />
                <Link href='/auth' className='btn2'>View Photos <i className="ri-arrow-right-line" /></Link>
            </div>

        </div>
    )
}

export default LatestEvent