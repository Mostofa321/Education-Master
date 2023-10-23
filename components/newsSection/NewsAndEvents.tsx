import React from 'react'
import { upComingEvents } from '../upcomingEventSection/Data';
import { Typography } from '../materialTailwind/MaterialComponents';

const NewsAndEvents = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <div>
      <Typography
        variant='h6'
      >
        NEWS AND EVENTS
      </Typography>
      <hr className='border mb-8 mt-3' />
      {/* Events  */}
      <div>
        {
          upComingEvents?.map((event, index) => {

            if (index >= 4) {
              return;
            }

            // separating event date, month and year 
            const d = new Date(event?.date);
            const date = d.getDate();
            const month = months[d.getMonth()];;
            const year = d.getFullYear();

            return (
              <div key={index} className='flex flex-wrap items-center gap-3'>
                <div className='bg-[#03294e] text-[white] p-3 rounded-sm text-center'>
                  <Typography
                    variant='h4'
                    className='font-normal'
                  >
                    {date}
                  </Typography>
                  <Typography
                    variant='small'
                  >
                    {month}, {year}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant='h5'
                    className='font-semibold'
                  >
                    {
                      (event?.title.length < 20) ?
                        event.title :
                        `${event.title.slice(0, 20)}...`
                    }
                  </Typography>
                  <Typography
                    variant='small'
                    className='my-1.5'
                  >
                    {
                      (event?.subTitle.length < 31) ?
                        event.subTitle :
                        `${event.subTitle.slice(0, 31)}...`
                    }
                  </Typography>
                  <Typography
                    variant='small'
                    className='text-[#959595]'
                  >
                    {event?.time}
                  </Typography>
                </div>
                <hr className='w-full mt-2 mb-4 border border-[#e0e0e0]' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default NewsAndEvents