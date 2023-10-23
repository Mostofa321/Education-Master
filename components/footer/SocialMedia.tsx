import React from 'react'
import { IconButton, Typography } from '../materialTailwind/MaterialComponents';
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube, FaWhatsapp} from "react-icons/fa"

const SocialMedia = () => {
    return (
        <div className=''>
            <Typography variant='h6' className='pb-6 text-[white]'>
                SOCIAL MEDIA
            </Typography>
            <div className='flex gap-2'>
                <IconButton variant="outlined" color="white" className="rounded-full text-lg">
                    <FaFacebookF />
                </IconButton>
                <IconButton variant="outlined" color="white" className="rounded-full text-lg">
                    <FaTwitter />
                </IconButton>
                <IconButton variant="outlined" color="white" className="rounded-full text-lg">
                    <FaGooglePlusG />
                </IconButton>
                <IconButton variant="outlined" color="white" className="rounded-full text-lg">
                    <FaYoutube />
                </IconButton>
                <IconButton variant="outlined" color="white" className="rounded-full text-lg">
                    <FaWhatsapp />
                </IconButton>
            </div>
        </div>
    )
}

export default SocialMedia