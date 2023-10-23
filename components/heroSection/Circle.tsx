import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Typography } from '../materialTailwind/MaterialComponents'

interface circleTypes {
    link?: string;
    imgUrl?: string;
    text?: string;
}

const Circle: FC<circleTypes> = ({link, imgUrl, text}) => {
    return (
        <Link href={`${link}`} className="h-[90px] w-[90px] pt-[18px] transition duration-500 px-0.5 cursor-pointer rounded-full bg-[#202f40] text-[white] hover:bg-[#ef6331] hover:scale-110" >
            <Image src={`${imgUrl}`} width={24} height={24} alt='' className='mx-auto pb-1' />
            <Typography variant='small' className='text-center text-xs'>
                {text}
            </Typography>
        </Link>
    )
}

export default Circle