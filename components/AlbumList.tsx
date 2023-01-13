import { motion } from 'framer-motion'
import React from 'react'
import { pushDown } from '../animate/variations'

type Props = {}

const AlbumList = (props: Props) => {
  return (
    <motion.div
    variants={pushDown}
    initial='hidden'
    animate='show'
    transition={{duration: 0.5}}
    className='bg-mx-100 p-4 rounded-md'>AlbumList</motion.div>
  )
}

export default AlbumList