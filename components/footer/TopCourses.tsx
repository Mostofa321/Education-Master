"use client";

import React from 'react'
import Link from 'next/link';
// import { Typography } from '../materialTailwind/MaterialComponents';
import { topCouses } from './Data';
import { Typography } from '@material-tailwind/react';

const TopCourses = () => {
    return (
        <div className='lg:border-r lg:border-[#6a83a0]'>
            <Typography variant='h6' className='pb-6 text-[white]'>
                TOP COURSES
            </Typography>
            <div className='flex flex-wrap text-[#838384] '>
                {
                    topCouses?.map((course, index) => (
                        <Link key={index} href={`${course.link}`} className='w-1/2 mb-1.5'>
                            <Typography variant='small' className='hover:text-[white] transition'>
                                {course.name}
                            </Typography>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TopCourses