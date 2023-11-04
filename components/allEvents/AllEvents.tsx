import { Button, Typography } from '../materialTailwind/MaterialComponents';
import React from 'react'
import { upComingEvents } from '../upcomingEventSection/Data';
import Pagination from './Pagination';

const AllEvents = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div>
            {/* Events  */}
            <div className='container mx-auto my-20 px-2'>
                <Typography
                    variant='h2'
                    className='text-center'
                >
                    College  <span className='text-[#f26838]'>Events</span>
                </Typography>
                <Typography
                    variant='paragraph'
                    className='text-center text-[#3f444a] mt-3 mb-12'
                >
                    Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.
                </Typography>

                {/* Events  */}
                {
                    upComingEvents?.map((event, index) => {
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
                                        {event.title}
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        className='my-1.5'
                                    >
                                        {
                                            (event?.subTitle.length < 70) ?
                                                event.subTitle :
                                                `${event.subTitle.slice(0, 70)}...`
                                        }
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        className='text-[#959595]'
                                    >
                                        {event?.time}
                                    </Typography>
                                </div>
                                <div className='hidden lg:block ml-auto'>
                                    <Button size="md" variant="outlined" className='rounded-sm py-[8px] text-sm hover:text-[white] hover:bg-[#f26838] transition-all duration-500 hover:border-[#d45023] mr-4'>REGISTER</Button>
                                    <Button size="md" variant="outlined" className='rounded-sm py-[8px] text-sm hover:text-[white] hover:bg-[#f26838] transition-all duration-500 hover:border-[#d45023] '>READ MORE</Button>
                                </div>
                                <hr className='w-full mt-2 mb-4 border border-[#e0e0e0]' />
                            </div>
                        )
                    })
                }

                {/* Pagination  */}
                <Pagination />
            </div>
        </div>
    )
}

export default AllEvents