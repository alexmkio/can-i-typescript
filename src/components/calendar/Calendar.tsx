import React from 'react';
import { CalendarProps } from '../../interfaces/index';
import { HourCard } from "../hourCard/HourCard"

export const Calendar: React.FC<CalendarProps> = ({ calendar, addToCalendar }) => {
  let hourCards = calendar.map(hour => {
    return (
      <HourCard
        key={`${hour.month}${hour.day}${hour.hour}`}
        hour={hour}
        addToCalendar={addToCalendar}
      />
    )
  })

  return (
    <section className='flex flex-col items-center my-16'>
      <h2 className='text-3xl capitalize'>Your calendar</h2>
      <p className="mt-6 text-xl">Click on an hour to delete it from your calendar</p>
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
};