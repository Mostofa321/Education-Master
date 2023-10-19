"use client";

import { FC } from 'react'
// import {
//     Typography,
// } from "../materialTailwind/MaterialComponents";
import Link from 'next/link';
import { Typography } from '@material-tailwind/react';

interface LiTypes {
    LiElement?: string,
    route?: string,
}

const ListItem: FC<LiTypes> = ({ LiElement, route }) => {
    return (
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
        >
            <Link href={`${route}`}
                className="
                    text-base 
                    font-semibold 
                    hover:text-[#e66030] 
                    transition-colors
                    py-5
                    px-2 
                    relative 
                    after:content-[''] 
                    after:absolute 
                    after:w-full 
                    after:h-[3px] 
                    after:bottom-[8px] 
                    after:left-0 
                    after:bg-[#e66030] 
                    after:invisible 
                    after:scale-x-0 
                    after:transition-all 
                    after:duration-150 
                    after:ease-in 
                    after:z-[20] 
                    hover:after:visible 
                    hover:after:scale-x-100 
                    hover:after:transition-all 
                    hover:after:duration-300 
                    hover:after:ease-out
            ">
                {LiElement}
            </Link>
        </Typography>
    )
}

export default ListItem



