import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { testData } from '../pages/api/test'


const Albums = () => {
    return (
        <section className='grid grid-cols-2 gap-2 pt-8 pb-24'>
            {testData.map((data: any, i: number) => {
                return (
                    <div key={i}>
                        <div className="group/down border border-white border-opacity-10 rounded hover:border-opacity-100 xl:p-4 p-2 duration-500 h-full relative">

                            {/* TITLE */}
                            <div className="flex flex-col xl:gap-2 items-baseline pt-4 pb-6">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex gap-2 items-center font-semibold">
                                        <p className='text-xs py-1 px-2 bg-mx-100 rounded-full text-mx-400 bg-opacity-20'>Day {data.day}</p>
                                        <p className='text-xs'>{data.date}</p>
                                    </div>
                                    <div className="gap-2 items-center group-hover/down:flex hidden duration-150 hover:text-mx-300">
                                        <a href='#' className='text-xs font-semibold underline underline-offset-8'>Dowload Album</a>
                                        <i className="ri-folder-download-fill" />
                                    </div>
                                </div>
                                <h2 className='md:text-2xl text-xl underline-mx-300 md:leading-10 leading-0 md:pt-0 pt-4'>{data.title}</h2>
                            </div>

                            {/* IMAGES */}
                            <div className="grid grid-cols-2 gap-2">
                                {data.url.slice(0, 2).map((url: any, i: number) => {
                                    return (
                                        <div className="xl:h-40 h-20 w-full rounded-sm overflow-hidden relative mb-16" key={i}>
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