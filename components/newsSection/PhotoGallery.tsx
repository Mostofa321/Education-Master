"use client"

import { Typography } from '@material-tailwind/react';
// import { Typography } from '../materialTailwind/MaterialComponents';
import Image from 'next/image';
import React from 'react'

const images = [
    '/discover1.jpg',
    '/discover2.jpg',
    '/discover3.jpg',
    '/discover4.jpg',
    '/discover5.jpg',
    '/discover6.jpg',
    '/discover7.jpg',
    '/discover8.jpg',
    '/discover1.jpg',
    '/discover2.jpg',
    '/discover3.jpg',
    '/discover4.jpg',
]
const PhotoGallery = () => {
    return (
        <div>
            <Typography
                variant='h6'
            >
                PHOTO GALLERY
            </Typography>
            <hr className='border mb-8 mt-3' />
            <div className="grid grid-cols-3 gap-5">
                {images.map((i, index) => (
                    <Image
                        key={index}
                        src={`${i}`}
                        width={121}
                        height={89}
                        alt=""
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoGallery