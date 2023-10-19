"use client";

import RegisterAndLogin from './RegisterAndLogin';
import JobVacants from './JobVacants';
import Events from './Events';

const UpcomingEventSection = () => {
    
    
    return (
        <div className='2xl:container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-3  mx-auto  py-20'>
            {/* Events col */}
            <Events />

            {/* Job Vacants Col */}
            <JobVacants />

            {/* Register & Login Col  */}
            <RegisterAndLogin />
        </div>
    )
}

export default UpcomingEventSection