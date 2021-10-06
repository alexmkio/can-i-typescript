import React from 'react';
import { HourProps } from '../interfaces/index';
import { calendar } from '../utils/time'

export const HourCard: React.FC<HourProps> = ({ hour, addToCalendar }) => {
  let month = calendar.months.find(month => month.number === hour.month)?.name
  let time = calendar.hours.find(thisHour => thisHour.number === hour.hour)?.name
  let icon = (hour.inCalendar ? 'remove' : 'add')

  return (
    <article className='flex flex-col items-center border p-6 rounded-2xl shadow-md bg-gray-50 transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105'>
      <label>
        <button className="material-icons-outlined md-24 bg-yellow-300 rounded-full shadow-md p-3 transition duration-500 ease-in-out transform hover:scale-125"
          onClick={() => addToCalendar(hour)}
        >
          {icon}
        </button>
      </label>

      <dl className="flex flex-col items-center text-center uppercase">
        <dt className="mt-4">Date</dt>
        <dd className="text-xl">{time} {month} {hour.day}</dd>

        <dt className="mt-4">Temperature</dt>
        <dd className="text-xl">{hour.temperature} <span>&#8457;</span></dd>

        <dt className="mt-4">Wind Speed</dt>
        <dd className="text-xl">{hour.windSpeed} mph</dd>

        <dt className="mt-4">Probability of Precipitation</dt>
        <dd className="text-xl">{hour.precipProb}%</dd>
      </dl>
    </article>
  )
};