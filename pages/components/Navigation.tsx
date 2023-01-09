import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
    return (
        <nav className=''>

            <div className="flex justify-between items-center container mx-auto py-4 border-b-[1px] border-white border-opacity-30">
                <ul className="flex gap-4 text-white drop-shadow-sm">
                    <li>About</li>
                    <li>Team</li>
                    <li>Gallery</li>
                    <li>Videography</li>
                    <li>Blog</li>
                    <li>Stock</li>
                </ul>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2 text-xl text-white">
                        <i className="ri-instagram-line" />
                        <i className="ri-facebook-line" />
                        <i className="ri-youtube-line" />
                    </div>
                    <button className='btn'>Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation