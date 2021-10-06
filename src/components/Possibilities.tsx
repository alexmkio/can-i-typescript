import React from 'react';
import { Link } from 'react-router-dom';
import { PossibilitiesProps } from '../interfaces/index';
import { HourCard } from "./HourCard"
import Button from '@mui/material/Button';

export const Possibilities: React.FC<PossibilitiesProps> = ({ suitableHours, addToCalendar }) => {
  let hourCards = suitableHours.map(suitableHour => {
    return (
      <HourCard
        key={`${suitableHour.month}${suitableHour.day}${suitableHour.hour}`}
        hour={suitableHour}
        addToCalendar={addToCalendar}
      />
    )
  })

  return (
    <section className='flex flex-col items-center my-4 md:my-8'>
      <h2 className='text-xl md:text-2xl'>Suitable hours to be outside</h2>
      <p className="mt-6 text-lg md:text-xl">Click on an hour to add or delete it from your calendar</p>
      <section className="mt-1 md:mt-2">
        <Link to='/calendar'>
          <Button variant="contained">your calendar</Button>
        </Link>
      </section>
      <section className='p-8
        grid gap-8 w-11/12
        sm:grid-cols-2 sm:gap-6 sm:w-auto
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-6
      '>
        {hourCards}
      </section>
    </section>
  )
}