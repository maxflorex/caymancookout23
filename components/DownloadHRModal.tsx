/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    url: string,
    setShowHR: any
}

const DownloadHRModal = ({ url, setShowHR }: Props) => {

    const closeHR = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowHR(false)
    }

    return (
        <div className='absolute top-0 w-full h-full bg-mx-400 z-[998]'>
            <div className="flex flex-col justify-center items-center h-full w-full relative">
                <button className="absolute top-4 left-4 px-4 py-2 text-sm active:scale-95 rounded-md bg-mx-400 hover:bg-mx-300 duration-200 flex items-center gap-2 text-white border border-white border-opacity-10 z-[999]" onClick={closeHR}>Back</button>
                <img src={url} alt="Higher Resolution Image" className='w-[90vw] h-[80vh] object-contain' />
                <ul className='flex flex-col gap-2 list-outside list-decimal'>
                    <li className='font-semibold text-white'>Click and hold the image</li>
                    <li className='font-semibold text-white'>Save it to gallery</li>
                </ul>
            </div>
        </div >
    )
}

export default DownloadHRModal