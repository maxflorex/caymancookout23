import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { testData } from '../api/test'


const Albums = () => {
    return (
        <section className='grid grid-cols-2 gap-2 pt-8 pb-24'>
            {testData.map((data: any, i: number) => {
                return (
                    <div key={i}>
                        <div className="border border-white border-opacity-10 rounded hover:border-opacity-100 xl:p-4 p-2 duration-500 h-full relative">

                            {/* TITLE */}
                            <div className="flex xl:flex-row flex-col justify-between xl:items-center items-start py-4">
                                <div className="flex xl:flex-row flex-col xl:gap-2 items-baseline">
                                    <p className='text-xs'>Day {data.day}</p>
                                    <h2 className='xl:text-3xl text-2xl font-semibold'>{data.title}</h2>
                                </div>
                                <i className="ri-folder-download-fill" />
                            </div>

                            {/* IMAGES */}
                            <div className="grid grid-cols-2 gap-2">
                                {data.url.slice(0, 2).map((url: any, i: number) => {
                                    return (
                                        <div className="xl:h-40 h-24 w-full rounded-sm overflow-hidden relative mb-16" key={i}>
                                            <Image alt={data.title} src={url} fill className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                        </div>
                                    )
                                })}
                            </div>

                            {/* BUTTON */}
                            <div className="border-t border-white border-opacity-10 w-full mt-8 absolute bottom-0 xl:-mx-4 -mx-2">
                                <Link href={`/galleries/${data.slug}`} className="flex items-center gap-2 justify-center py-4 hover:bg-mx-300 hover:text-mx-400 duration-300">
                                    <p className='text-center text-xs font-semibold'>View Album</p>
                                    <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>

                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Albums