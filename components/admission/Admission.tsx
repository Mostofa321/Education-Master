import {
    Typography,
} from '../materialTailwind/MaterialComponents'
import React from 'react'
import AdmissionForm from './AdmissionForm'
import { FaAngleRight, } from 'react-icons/fa6'

const Admission = () => {
    return (
        <div className=" py-[100px] [&>div>div>span]:hover:bg-[#f26939] [&>div>div>span]:hover:text-[white] [&>div>div>span]:hover:rotate-[360deg] [&>div>div>span]:hover:transition-all [&>div>div>span]:hover:duration-500 [&>div>div>span]:hover:ease-in-out relative bg-[url('/weather.png')] before:content-[''] before:absolute before:bg-[#1f4363] before:w-full before:lg:w-1/2 before:top-0 before:left-0 before:bottom-0">
            <div className='container  mx-auto flex flex-col lg:flex-row items-center justify-center'>
                <div className='lg:w-1/2 px-4 lg:px-16 text-center relative '>
                    <Typography variant='h1' className='text-[white] lg:text-[62px] leading-none mb-6'>
                        REQUEST AN ADMISSION
                    </Typography>
                    <Typography className='text-[#8d969e]'>
                        Fusce purus mauris, blandit vitae purus eget, viverra volutpat nibh. Nam in elementum nisi, a placerat nisi. Quisque ullamcorper magna in odio rhoncus semper.Sed nec ultricies velit. Aliquam non massa id enim ultrices aliquet a ac tortor.
                    </Typography>
                    <Typography className='my-3 text-[#8d969e]'>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Typography>
                    <Typography variant='h1' className=' mt-6 text-[#8d969e]'>
                        Help Line
                    </Typography>
                    <Typography variant='h1' className=' text-[white]'>
                        +010 4561 32145
                    </Typography>
                    <span className="hidden transition-all duration-500 lg:block absolute top-[53%] lg:left-[95%] xl:left-[95.5%] 2xl:left-[96.2%] font-light rounded-full p-[10px] bg-[white] text-3xl pulse">
                        <FaAngleRight />
                    </span>
                </div>

                <div className='lg:w-1/2 px-2 lg:pl-16'>
                    <AdmissionForm />
                </div>
            </div>
        </div>
    )
}

export default Admission