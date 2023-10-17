import React, { FC } from 'react'
import {
    Button,
    Typography
} from "../materialTailwind/MaterialComponents";
import Image from 'next/image';

interface slideTypes {
    imgUrl?: string;
    title?: string;
    description?: string;
    btn_1_Text?: string;
    btn_2_Text?: string;
}

const Slide: FC<slideTypes> = ({imgUrl, title, description, btn_1_Text, btn_2_Text}) => {
    return (
        <div className="relative h-full w-full">
            <Image
                src={`${imgUrl}`}
                alt="image 1"
                width={1423}
                height={609}
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center ">
                <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        {description}
                    </Typography>
                    <div className="flex justify-center gap-4">
                        <Button className='rounded-sm bg-[#f36b3b] font-normal px-11 hover:bg-[white] text-[white] hover:text-[black]' size="lg">
                            {btn_1_Text}
                        </Button>
                        <Button className='rounded-sm bg-[transparent] font-normal px-11 border border-[white] text-[white] hover:bg-[white] hover:text-[black]' size="lg" color="white" >
                            {btn_2_Text}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide