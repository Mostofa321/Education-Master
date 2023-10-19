"use client";

import React from 'react'
import NewsAndEvents from './NewsAndEvents'
import PhotoGallery from './PhotoGallery'
import VideoGallery from './VideoGallery'
import { Typography } from '@material-tailwind/react';
// import {
//     Typography
// } from '../materialTailwind/MaterialComponents'

const NewsSection = () => {
    return (
        <div className='2xl:container mx-auto'>
            <Typography
                variant='h2'
                className='text-center'
            >
                News and <span className='text-[#f26838]'>Events</span>
            </Typography>
            <Typography
                variant='paragraph'
                className='text-center text-[#3f444a] mt-3'
            >
                Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.
            </Typography>
            <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-3  mx-auto  py-20'>
                {/* PHOTO GALLERY col */}
                <PhotoGallery />

                {/* VIDEO GALLERY Col */}
                <VideoGallery />

                {/* NEWS & EVENT Col  */}
                <NewsAndEvents />
            </div>
        </div>
    )
}

export default NewsSection