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
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
    className='bg-mx-100 p-8 rounded-md'>
      <div className=''>
        <h1 className='text-2xl font-semibold'>No albums</h1>
      </div>
    </motion.div>
  )
}

export default AlbumList