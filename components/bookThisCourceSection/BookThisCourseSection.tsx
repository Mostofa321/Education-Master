"use client";
// import { Typography, Button } from '../materialTailwind/MaterialComponents'
import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const BookThisCourseSection = () => {
    return (
        <div className='bg-[#f36b3b] py-10'>
            <div className='2xl:container mx-auto flex flex-col items-center justify-center md:flex-row gap-5'>
                <div className='w-full md:w-1/4'>
                    <Image className='mx-auto' src={"/light.png"} width={90} height={90} alt='' />
                </div>
                <div className='w-full md:w-2/4 text-[white] text-center md:text-left'>
                    <Typography
                        variant='h4'
                        className='mb-2'
                    >
                        THEREFORE ALWAYS FREE FROM REPETITION
                    </Typography>
                    <Typography>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                    </Typography>
                </div>
                <div className='w-full md:w-1/4'>
                    <Button variant="outlined" className="rounded-full border-[white] text-[white] mx-auto block">
                        Book This Course
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BookThisCourseSection