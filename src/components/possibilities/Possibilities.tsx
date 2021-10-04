import React from 'react';
import { Link } from 'react-router-dom';
import { PossibilitiesProps } from '../../interfaces/index';
import { HourCard } from "../hourCard/HourCard"

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
    <section className='flex flex-col items-center my-16'>
      <h2 className='text-3xl'>Suitable hours to be outside</h2>
      <p className="mt-6 text-xl">Click on an hour to add or delete it from your calendar</p>
      <Link to='/calendar'>
        <button className="uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md mt-1 py-3 px-6 transition duration-500 ease-in-out hover:bg-blue-400 transform hover:scale-110">Your Calendar</button>
      </Link>
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