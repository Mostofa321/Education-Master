"use client";

import { Button, ButtonGroup, Typography } from '@material-tailwind/react'
import React from 'react'
// import {
//     Typography,
//     Button,
//     ButtonGroup,
// } from "../materialTailwind/MaterialComponents";
import { BiLogoFacebook, BiLogoTwitter, BiLogoGooglePlus } from 'react-icons/bi'

const TopBar = () => {
    return (
        <div className='bg-[#002147] hidden lg:block'>
            <div className='flex justify-between items-center max-w-screen-2xl mx-auto px-4 '>
                <div>
                    <Typography
                        variant='small'
                        className='text-[#a3adb9] text-xs'
                    >
                        <span className='mr-10'>
                            Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.
                        </span>
                        <span>
                            Phone: +101-1231-1231
                        </span>

                    </Typography>

                </div>
                <div className='flex items-center gap-10'>
                    <Typography
                        variant='small'
                        className='text-[#a3adb9] text-xl flex gap-2 py-1'
                    >
                        <span>
                            <BiLogoFacebook />
                        </span>
                        <span>
                            <BiLogoGooglePlus />
                        </span>
                        <span>
                            <BiLogoTwitter />
                        </span>
                    </Typography>
                    <ButtonGroup >
                        <Button className="rounded-none bg-[#e66030] h-[30px] flex items-center px-3 font-normal" size="sm">Sign In</Button>
                        <Button className="rounded-none bg-[#013673] h-[30px] flex items-center px-3 font-normal" size="sm">Sign Up</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default TopBar