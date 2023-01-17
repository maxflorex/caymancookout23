import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../animate/variations'
import { useFilter } from '../hooks/useFilter'

interface Props {
    results: any,
    results2: any,
    results3: any,
    albumsList: any
}


const Albums = ({ results, results2, results3, albumsList }: Props) => {

    const allResults = [...results.resources, ...results2.resources, ...results3.resources]


    return (
        <motion.section
            variants={container}
            initial='hidden'
            animate='show'
            className='grid md:grid-cols-2 gap-4 pt-8 pb-24'>
            {albumsList.map(({ name, nameClean }: any, i: number) => {

                // GET DAY NUMBER
                const day = name.substring(6, 7)

                // FIND IMAGES IN THE ALBUM
                const albumImages = [...allResults].filter((element: any) => {
                    return element.folder === `cookout23/${name}`
                })

                // SLUG
                const slug = name.substring(8)


                return (
                    <motion.div
                        key={i}
                        variants={item}
                    >
                        <div className="group/down border border-white border-opacity-10 rounded hover:border-opacity-100 md:p-4 p-2 duration-500 h-full relative bg-transparent hover:bg-mx-100 hover:bg-opacity-5">

                            {/* TITLE */}
                            <div className="flex flex-col xl:gap-2 items-baseline py-4">
                                <div className="flex items-center justify-between w-full flex-wrap gap-4">
                                    <div className="flex gap-2 items-center font-semibold">
                                        <p className='text-xs'>Day {day}</p>
                                    </div>
                                </div>
                                <h2 className='md:text-2xl text-xl underline-mx-300 md:leading-10 leading-0 md:pt-2 pt-4 capitalize'>{nameClean}</h2>
                            </div>

                            {/* IMAGES */}
                            <div className="grid grid-cols-4 gap-2">
                                {
                                    albumImages.slice(0, 4).map((url: any, i: number) => {
                                        return (
                                            <div className="xl:h-40 h-20 w-full rounded-sm overflow-hidden relative mb-16" key={i}>
                                                <Image alt='Cayman Cookout Thumbnails' src={`https://res.cloudinary.com/dbi/image/upload/c_fill,h_240,w_320,q_30/${url.public_id}.webp`} fill className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                            </div>
                                        )
                                    })}
                            </div>

                            {/* BUTTON */}
                            <div className="border-t border-white border-opacity-10 w-full mt-8 absolute bottom-0 md:-mx-4 -mx-2">
                                <Link href={`/galleries/${slug}`} className="flex items-center gap-2 justify-center py-4 hover:bg-mx-300 hover:text-mx-400 duration-300 z-10">
                                    <p className='text-center text-xs font-semibold'>View Album</p>
                                    <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>

                        </div>
                    </motion.div>
                )
            })}
        </motion.section>
    )
}

export default Albums