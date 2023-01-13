import { motion } from 'framer-motion'
import React from 'react'
import { useSelector } from 'react-redux'
import { pushDown } from '../animate/variations'


type Props = {}

const EditProfile = (props: Props) => {
    const admin = useSelector((state: any) => state.administrator.value.user)

    console.log(admin);
    

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
            <div className="">
                <h1 className="text-2xl font-semibold">Profile</h1>
                <h1>Hello, {admin.email}</h1>
            </div>
        </motion.div>
    )
}

export default EditProfile