import React from 'react'
import { Typography } from '../materialTailwind/MaterialComponents';

const VideoGallery = () => {
    return (
        <div>
            <Typography
                variant='h6'
            >
                VIDEO GALLERY
            </Typography>
            <hr className='border mb-8 mt-3' />
            <iframe
                src="https://www.youtube.com/embed/2WqFtiR4-F4?autoplay=0&amp;showinfo=0&amp;controls=0"
                allowFullScreen
                width={'100%'}
                height={200}
            />
            <Typography
                variant='h6'
                className='my-5'
            >
                MAECENAS SOLLICITUDIN LACINIA
            </Typography>
            <Typography
                className='text-[#636363]'
            >
                Maecenas finibus neque a tellus auctor mattis. Aliquam tempor varius ornare. Maecenas dignissim leo leo, nec posuere purus finibus vitae.
                Quisque vitae neque at tellus malesuada convallis. Phasellus in lectus vitae ex euismod interdum non a lorem. Nulla bibendum. Curabitur mi odio, tempus quis risus cursus.
            </Typography>

        </div>
    )
}

export default VideoGallery