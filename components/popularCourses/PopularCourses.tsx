"use client";

import React from 'react'
// import {
//     Button,
//     Typography,
// } from '../materialTailwind/MaterialComponents'
import Image from 'next/image';
import { FaChartBar, FaRegEye, FaShareAlt, } from 'react-icons/fa'
import { popularCources } from './Data';
import { Button, Typography } from '@material-tailwind/react';

const PopularCourses = () => {
    return (
        <div className='py-10 bg-[#f5f5f5]'>
            <div className='mt-10 2xl:container mx-auto px-3 lg:px-0'>
                <Typography
                    variant='h2'
                    className='text-center'
                >
                    Popular  <span className='text-[#f26838]'>Courses</span>
                </Typography>
                <Typography
                    variant='paragraph'
                    className='text-center text-[#3f444a] my-3'
                >
                    Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.
                </Typography>

                <div className='grid grid-cols-1  lg:grid-cols-2 my-10 gap-10 mx-auto lg:w-[90%]'>
                    {
                        popularCources?.map((cource, index) => (
                            <div className='p-4 shadow-lg' key={index}>
                                <div className='flex flex-col md:flex-row justify-between gap-4'>
                                    <Image src={`${cource?.imgUrl}`} width={110} height={110} alt='' className='w-full md:w-1/4' />
                                    <div className='relative'>
                                        <Typography
                                            variant='h4'
                                        >
                                            {cource?.title}
                                        </Typography>
                                        <Typography
                                            variant='h6'
                                            className='font-semibold my-2'
                                        >
                                            {cource?.subTittle}
                                        </Typography>
                                        <Typography
                                            variant='small'
                                        >
                                            {cource?.description}
                                        </Typography>
                                        <span className='absolute top-0 right-0 py-1 px-2 bg-[#607D8B] text-[white] text-sm rounded-sm'>
                                            {cource?.ratting}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col sm:flex-row gap-1 justify-end mt-2 p-1 ">
                                        <Button className="flex items-center justify-center gap-2 rounded-none bg-[#149acc] border border-[#ececec]">
                                            <FaChartBar />
                                            BOOK NOW
                                        </Button>
                                        <Button className="flex items-center justify-center gap-2 rounded-none bg-[white] text-[gray] border border-[#ececec]">
                                            <FaRegEye />
                                            {cource?.available} Available
                                        </Button>
                                        <Button className="flex items-center justify-center gap-2 rounded-none bg-[white] text-[gray] border border-[#ececec]">
                                            <FaShareAlt />
                                            {cource?.shares}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularCourses