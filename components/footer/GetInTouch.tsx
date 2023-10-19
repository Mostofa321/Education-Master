"use client";

import { Typography } from '@material-tailwind/react'
import React from 'react'
// import { Typography } from '../materialTailwind/MaterialComponents';

const GetInTouch = () => {
    return (
        <div className=''>
            <Typography variant='h6' className='pb-6 text-[white]'>
                GET IN TOUCH
            </Typography>
            <Typography variant='small' className='pb-4 text-[#838384]'>
                Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
            </Typography>
            <Typography variant='small' className='pb-4 text-[#838384]'>
                Phone: +101-1231-4321
            </Typography>
            <Typography variant='small' className='pb-4 text-[#838384]'>
                Email: info@educationmaster.com
            </Typography>

        </div>
    )
}

export default GetInTouch