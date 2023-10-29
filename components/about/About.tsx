import Image from 'next/image'
import { Button, Typography } from '../materialTailwind/MaterialComponents'
import { allInfo } from './Data'

const About = () => {
    return (
        <div className='my-20 2xl:container mx-auto px-3 lg:px-0'>
            <Typography
                variant='h2'
                className='text-center'
            >
                About <span className='text-[#f26838]'>Academy</span>
            </Typography>
            <Typography
                variant='paragraph'
                className='text-center text-[#3f444a] my-3'
            >
                Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.
            </Typography>

            <div className='bg-[#dcdbdb] md:w-[94%] mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-px'>

                    {
                        allInfo?.map((info, index) => (
                            <div key={index} className=' flex p-6 gap-x-6 bg-[white]'>
                                <div>
                                    <Image src={info.iconUrl} width={125} height={125} alt='' />
                                </div>
                                <div>
                                    <Typography variant='h5' className='font-normal'>
                                        {info.title}
                                    </Typography>
                                    <Typography variant='small' className='text-[#636363] my-2'>
                                        {info.description}
                                    </Typography>
                                    <Button className='px-2.5 py-1 text-[11px] font-light rounded-sm' size="sm">
                                        Read more
                                    </Button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default About