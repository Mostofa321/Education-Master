import Image from 'next/image'
import { Card, Typography } from '../materialTailwind/MaterialComponents'
import React from 'react'

const Profile = () => {
    return (
        <Card className='p-6 my-10'>
            <div className='flex flex-wrap items-center gap-x-2.5'>
                <Image src="/db1.png" width={24} height={24} alt='' className='' />
                <Typography variant='h6' className='text-[black] -mb-1'>
                    MY PROFILE
                </Typography>
                <hr className='w-full my-2' />
                <Typography className='w-full'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </Typography>
            </div>
        </Card>
    )
}

export default Profile