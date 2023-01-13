import React from 'react'
import { motion } from 'framer-motion'
import { pushDown } from '../animate/variations'

type Props = {}

export const NewAlbum = (props: Props) => {
  return (
    <motion.div
      variants={pushDown}
      initial='hidden'
      animate='show'
      transition={{ duration: 0.5 }}
      className='bg-mx-100 p-4 rounded-md'>NewAlbum</motion.div>
  )
}