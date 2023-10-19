"use client";

import React from 'react'
// import {
//     Typography,
// } from '../materialTailwind/MaterialComponents'
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';

const DiscoverSection = () => {
    return (
        <div className='my-20 2xl:container mx-auto px-3 lg:px-0'>
            <Typography
                variant='h2'
                className='text-center'
            >
                Discover <span className='text-[#f26838]'>More</span>
            </Typography>
            <Typography
                variant='paragraph'
                className='text-center text-[#3f444a] my-3'
            >
                Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.
            </Typography>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-10 mx-auto lg:w-[90%]'>
                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover1.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Academics
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover2.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Admission
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover3.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Students profile
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover4.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Research & Education
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover5.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Couse
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover6.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Exam Time Line
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover7.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Seminar 2023
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={""}>
                    <div className='relative h-[159px] overflow-hidden'>
                        <div className=" bg-[url('/discover8.jpg')] transition duration-500 h-full w-full bg-center bg-cover hover:scale-110">
                            <span className='text-xl text-[white] text-center absolute bg-[#1f2c738a] inset-0 flex items-center justify-center '>
                                Research & Education
                            </span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default DiscoverSection