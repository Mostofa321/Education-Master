import React from 'react'
import {
    Typography,
    
} from '../materialTailwind/MaterialComponents'
import { jobVacants, } from './Data'
import Image from 'next/image'

const JobVacants = () => {
    return (
        <div>
            {/* Job Vacants Header  */}
            <div className=" bg-[url('/ev-bg2.jpg')] h-[159px] rounded-sm w-full bg-center bg-cover">
                <div className='text-[white] p-10 h-full rounded-md bg-gradient-to-t from-[#03294ad1] to-[#0635629e]'>
                    <Typography variant='h4' className='font-normal mb-3'>
                        Job Vacants
                    </Typography>
                    <Typography variant='small' className='text-[#e2e2e2] '>
                        Nulla at velit convallis, venenatis lacus quis, efficitur lectus.
                    </Typography>
                </div>
            </div>
            {/* Job Vacants  */}
            <div className='mt-10'>
                {
                    jobVacants?.map((job, index) => (
                            <div className='flex flex-wrap items-center gap-3'>
                                <div className='rounded-sm'>
                                    <Image src={`${job?.imgUrl}`} width={77} height={77} alt='' />
                                </div>
                                <div>
                                    <Typography
                                        variant='h5'
                                        className='font-semibold'
                                    >
                                        {
                                            (job?.title.length < 22) ?
                                                job.title :
                                                `${job.title.slice(0, 22)}...`
                                        }
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        className='my-1.5'
                                    >
                                        {
                                            (job?.subTitle.length < 31) ?
                                                job.subTitle :
                                                `${job.subTitle.slice(0, 31)}...`
                                        }
                                    </Typography>
                                    <Typography
                                        variant='small'
                                        className='text-[#959595]'
                                    >
                                        Location: {job?.location}
                                    </Typography>
                                </div>
                                <hr className='w-full mt-2 mb-4 border border-[#e0e0e0]' />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default JobVacants