import React from 'react';
import { CalendarProps } from '../interfaces/index';
import { CalendarRow } from "./CalendarRow"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Calendar: React.FC<CalendarProps> = ({ calendar, addToCalendar }) => {
  let hourRows = calendar.map(hour => (
    <CalendarRow
      key={`${hour.month}${hour.day}${hour.hour}`}
      hour={hour}
      addToCalendar={addToCalendar}
    />
  ))

  if (calendar.length) {
    return (
      <section className='flex flex-col items-center my-4 md:my-8'>
        <h2 className='text-xl md:text-2xl capitalize'>Your calendar</h2>
        <p className="mt-6 text-lg md:text-xl">Click on an hour to delete it from your calendar</p>
        <table className="table-fixed mt-4 md:mt-8 text-center">
          <thead>
            <tr className="bg-gray-900 text-gray-50 border-2 border-gray-900 divide-x-2 divide-white">
              <th className="w-1/12 p-2">In Cal</th>
              <th className="w-2/12">Date</th>
              <th className="w-1/12">Hour</th>
              <th className="w-1/12">Temp</th>
              <th className="w-1/12">Wind</th>
              <th className="w-1/12">Precipt</th>
            </tr>
          </thead>
          <tbody>
            {hourRows}
          </tbody>
        </table>
      </section>
    )
  } else {
    return (
      <section className='flex flex-col items-center my-4 md:my-8'>
        <p className="text-xl md:text-2xl capitalize">Your calendar is empty</p>
        <section className="mt-1 md:mt-2">
          <Link to='/good_weather'>
            <Button variant="outlined" size="large" startIcon={<ArrowBackIcon />}>go back</Button>
          </Link>
        </section>
      </section>
    )
  }
}