"use client";

import React from 'react'
// import {
//     Typography,
// } from '../materialTailwind/MaterialComponents'
import { upComingEvents, } from './Data'
import { Typography } from '@material-tailwind/react';

const Events = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div>
            {/* Events Header  */}
            <div className=" bg-[url('/ev-bg1.jpg')] h-[159px] rounded-sm w-full bg-center bg-cover">
                <div className='text-[white] p-10 h-full rounded-md bg-gradient-to-t from-[#03294ad1] to-[#0635629e]'>
                    <Typography variant='h4' className='font-normal mb-3'>
                        Upcoming Event
                    </Typography>
                    <Typography variant='small' className='text-[#e2e2e2] '>
                        Nulla at velit convallis, venenatis lacus quis, efficitur lectus.
                    </Typography>
                </div>
            </div>
            {/* Events  */}
            <div className='mt-10'>
                {
                    upComingEvents?.map((event, index) => {

                        if (index >= 4) {
                            return;
                        }

                        // separating event date, month and year 
                        const d = new Date(event?.date);
                        const date = d.getDate();
                        const month = months[d.getMonth()];;
                        const year = d.getFullYear();

                        return (
                            <div key={index} className='flex flex-wrap items-center gap-3'>
                                <div className='bg-[#03294e] text-[white] p-3 rounded-sm text-center'>
                                    <Typography
                                        variant='h4'
                                        className='font-normal'
                                    >
                                        {date}
                                    </Typography>
                                    <Typography
                                        variant='small'
                                    >
                                        {month}, {year}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography
                                        variant='h5'
                                        className='font-semibold'
                                    >
                                        {
                                            (event?.title.length < 20) ?
                                                event.title :
                                                `${event.title.slice(0, 20)}...`
                                        }
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        className='my-1.5'
                                    >
                                        {
                                            (event?.subTitle.length < 31) ?
                                                event.subTitle :
                                                `${event.subTitle.slice(0, 31)}...`
                                        }
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        className='text-[#959595]'
                                    >
                                        {event?.time}
                                    </Typography>
                                </div>
                                <hr className='w-full mt-2 mb-4 border border-[#e0e0e0]' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Events