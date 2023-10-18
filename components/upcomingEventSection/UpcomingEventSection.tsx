import RegisterAndLogin from './RegisterAndLogin';
import JobVacants from './JobVacants';
import Events from './Events';

const UpcomingEventSection = () => {
    
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto lg:w-[83%] py-20'>
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