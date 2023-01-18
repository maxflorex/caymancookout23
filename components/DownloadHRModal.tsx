/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    url: string
}

const DownloadHRModal = ({ url }: Props) => {
    return (
        <div>
            <progress id='imageProgress' value='0' max='100'></progress>
            <img src="url" id='myImage' alt="High resolution picture" />
        </div >
    )
}

export default DownloadHRModal