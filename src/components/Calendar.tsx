import React from 'react';
import { CalendarProps } from '../interfaces/index';
// import { HourCard } from "./HourCard"
// import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Calendar: React.FC<CalendarProps> = ({ calendar, addToCalendar }) => {

  return (
    <>
    </>
  )
  // let hourCards = calendar.map(hour => {
  //   return (
  //     <HourCard
  //       key={`${hour.month}${hour.day}${hour.hour}`}
  //       hour={hour}
  //       addToCalendar={addToCalendar}
  //     />
  //   )
  // })

  // if (calendar.length) {
  //   return (
  //     <section className='flex flex-col items-center my-4 md:my-8'>
  //       <h2 className='text-xl md:text-2xl capitalize'>Your calendar</h2>
  //       <p className="mt-6 text-lg md:text-xl">Click on an hour to delete it from your calendar</p>
  //       <section className='p-8
  //         grid gap-8 w-11/12
  //         sm:grid-cols-2 sm:gap-6 sm:w-auto
  //         md:grid-cols-3
  //         lg:grid-cols-4
  //         xl:grid-cols-6
  //       '>
  //         {hourCards}
  //       </section>
  //     </section>
  //   )
  // } else {
  //   return (
  //     <section className='flex flex-col items-center my-4 md:my-8'>
  //       <p className="text-xl md:text-2xl capitalize">Your calendar is empty</p>
  //       <section className="mt-1 md:mt-2">
  //         <Link to='/good_weather'>
  //           <Button variant="outlined" size="large" startIcon={<ArrowBackIcon />}>go back</Button>
  //         </Link>
  //       </section>
  //     </section>
  //   )
  // }
}