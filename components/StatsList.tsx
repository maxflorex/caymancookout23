import { motion } from 'framer-motion'
import React from 'react'
import { pushDown } from '../animate/variations'


type Props = {}

const StatsList = (props: Props) => {
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
        <div>
          <h1 className='font-semibold text-2xl'>Stats</h1>
          <p>Coming soon!</p>
        </div>
      </motion.div>
  )
}

export default StatsList