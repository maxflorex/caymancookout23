
import { motion } from 'framer-motion'

type Props = {}

const Navigation = (props: Props) => {
    return (

        <motion.nav
        initial={{translateY: -100, opacity: 0}}
        animate={{translateY: 0, opacity: 1}}
        transition={{duration: 1, ease: 'easeIn', delay: 1.4}}
        className="flex md:justify-between justify-center items-center container mx-auto py-4 border-b-[1px] border-mx-400 border-opa border-opacity-10">
            <ul className="md:flex gap-4 drop-shadow-sm font-semibold hidden">
                <a target='_blank' rel='noreferrer' href='https://deepblueimages.com/#about' className='text-mx-400 text-opacity-30 hover:text-opacity-100'>About</a>
                <a target='_blank' rel='noreferrer' href='https://deepblueimages.com/#team' className='text-mx-400 text-opacity-30 hover:text-opacity-100'>Team</a>
                <a target='_blank' rel='noreferrer' href='https://deepblueimages.com/gallery/' className='text-mx-400 text-opacity-30 hover:text-opacity-100'>Gallery</a>
                <a target='_blank' rel='noreferrer' href='https://deepblueimages.com/' className='text-mx-400 text-opacity-30 hover:text-opacity-100'>Videography</a>
                <a target='_blank' rel='noreferrer' href='https://deepblueimages.com/dbi/blog/' className='text-mx-400 text-opacity-30 hover:text-opacity-100'>Blog</a>
                <a target='_blank' rel='noreferrer' href='https://deepblueimagescayman.smugmug.com' className='text-mx-400 text-opacity-30 hover:text-opacity-100'>Stock</a>
            </ul>
            <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2 text-xl">
                    <a href='https://www.instagram.com/deepblueimages/' target='_blank' rel='noreferrer' className="ri-instagram-line text-mx-400 text-opacity-30 hover:text-opacity-100 hover:scale-110 duration-200" />
                    <a href='https://www.facebook.com/deepblueimages/' target='_blank' rel='noreferrer' className="ri-facebook-line text-mx-400 text-opacity-30 hover:text-opacity-100 hover:scale-110 duration-200" />
                    {/* <a href='https://' target='_blank' rel='noreferrer' className="ri-youtube-line text-mx-400 text-opacity-30 hover:text-opacity-100 duration-200" /> */}
                </div>
                <a href="mailto:info@deepblueimages.com" className='btn'>Contact</a>
            </div>
        </motion.nav>
    )
}

export default Navigation