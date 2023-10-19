import Link from 'next/link';
import { Typography } from '../materialTailwind/MaterialComponents';
import React from 'react'
import { topCouses } from './Data';
import TopCourses from './TopCourses';
import NewCourses from './NewCourses';
import HelpAndSupport from './HelpAndSupport';
import GetInTouch from './GetInTouch';
import DownloadApp from './DownloadApp';
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <div className='bg-[#002147]'>
            <div className="container mx-auto px-10 py-20">
                {/* Footer Top Sectio start  */}
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 py-10 mb-10 lg:border-y border-[#6a83a0]'>
                    <TopCourses />
                    <NewCourses />
                    <HelpAndSupport />
                </div>
                {/* Footer Top Sectio End  */}

                {/* Footer Bottom Sectio start  */}
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 py-5'>
                    <GetInTouch />
                    <DownloadApp />
                    <SocialMedia />
                </div>
                {/* Footer Bottom Sectio End  */}
            </div>
        </div>
    )
}

export default Footer