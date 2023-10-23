import React from 'react'
import Link from 'next/link';
import { Typography } from '../materialTailwind/MaterialComponents';
import { helpAndSupport } from './Data';

const HelpAndSupport = () => {
    return (
        <div>
            <Typography variant='h6' className='pb-6 text-[white]'>
                HELP & SUPPORT
            </Typography>
            <div className='flex flex-wrap text-[#838384] '>
                {
                    helpAndSupport?.map((course, index) => (
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

export default HelpAndSupport