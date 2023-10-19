import React from 'react'
import Link from 'next/link';
import { Typography } from '../materialTailwind/MaterialComponents';

const DownloadApp = () => {
    return (
        <div className=''>
            <Typography variant='h6' className='pb-6 text-[white]'>
                DOWNLOAD OUR FREE MOBILE APPS
            </Typography>
            <div className='flex flex-col sm:flex-row gap-2'>
                <Link
                    href={""}
                    className="bg-[url('/app.png')] bg-no-repeat w-[157px] h-[55px]"
                    style={{ backgroundPosition: '-12px -15px', }}
                >
                </Link>
                <Link
                    href={""}
                    className="bg-[url('/app.png')] bg-no-repeat w-[157px] h-[55px]"
                    style={{ backgroundPosition: '-170px -15px', }}
                >
                </Link>
            </div>
        </div>
    )
}

export default DownloadApp