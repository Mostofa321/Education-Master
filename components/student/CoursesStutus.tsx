import { Card, Typography } from '../materialTailwind/MaterialComponents'
import Image from 'next/image'
import React from 'react'

const CoursesStutus = () => {
    return (
        <Card className='p-6 my-10'>
            <div className='flex flex-wrap items-center gap-x-2.5'>
                <Image src="/db2.png" width={24} height={24} alt='' className='' />
                <Typography variant='h6' className='text-[black] -mb-1'>
                    COURSE STATUS
                </Typography>
                <hr className='w-full my-2' />
                <Typography className='w-full'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.The point of using Lorem Ipsummaking it look like readable English.
                </Typography>

            </div>
        </Card>
    )
}

export default CoursesStutus