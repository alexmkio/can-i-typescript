import React from 'react';
import { PossibilitiesProps } from '../interfaces/index';
import { Link } from 'react-router-dom';
import { HourRow } from "./HourRow"
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const Possibilities: React.FC<PossibilitiesProps> = ({ suitableHours, addToCalendar }) => {
  let hourRows = suitableHours.map(suitableHour => (
    <HourRow
      key={`${suitableHour.month}${suitableHour.day}${suitableHour.hour}`}
      hour={suitableHour}
      addToCalendar={addToCalendar}
    />
  ))

  return (
    <section className='flex flex-col items-center my-4 md:my-8'>
      <h2 className='text-xl md:text-2xl'>Suitable hours to be outside</h2>
      <p className="mt-6 text-lg md:text-xl">Click on an hour to add or delete it from your calendar</p>
      <section className="mt-1 md:mt-2">
        <Link to='/calendar'>
          <Button variant="outlined" size="large" startIcon={<CalendarTodayIcon />} endIcon={<CalendarTodayIcon />}>your calendar</Button>
        </Link>
      </section>
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
}