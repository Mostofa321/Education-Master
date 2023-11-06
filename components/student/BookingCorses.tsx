import React from 'react'
import Link from 'next/link'
import { bookingCourses } from './Data'
import Image from 'next/image'
import { Card, Typography } from '../materialTailwind/MaterialComponents'

const BookingCorses = () => {
    return (
        <Card className='p-6 my-10'>
            <div className='flex flex-wrap items-center gap-x-2.5'>
                <Image src="/db2.png" width={24} height={24} alt='' className='' />
                <Typography variant='h6' className='text-[black] -mb-1'>
                    BOOKING COURSES
                </Typography>
                <hr className='w-full my-2' />
                <Typography className='w-full'>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.The point of using Lorem Ipsummaking it look like readable English.
                </Typography>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                    {
                        bookingCourses?.map((course, index) => (
                            <Link href={""} key={index}>
                                <div
                                    className={` relative h-[178px] rounded-md w-full bg-center bg-cover`}
                                    style={{ backgroundImage: `url(/${course?.bgUrl})` }}
                                >
                                    <div className='text-[white] p-5 h-full rounded-md bg-gradient-to-t from-[#000000d1] to-[#54545459]'>
                                        <div className='absolute bottom-4 left-4'>
                                            <Typography variant='h5' className='font-normal mt-auto'>
                                                {course.name}
                                            </Typography>
                                            <Typography className='text-[#e2e2e2] '>
                                                {course.location}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </Card>
    )
}

export default BookingCorses