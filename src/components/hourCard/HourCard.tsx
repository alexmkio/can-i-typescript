import React from 'react';
import { HourProps } from '../../interfaces/index';
import { calendar } from '../../utils/time'

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

      <dl className="flex flex-col items-center">
        <dt className="mt-4 uppercase">Date</dt>
        <dd className="text-xl uppercase">{month} {hour.day}</dd>

        <dt className="mt-4 uppercase">Hour</dt>
        <dd className="text-xl uppercase">{time}</dd>

        <dt className="mt-4 uppercase">Temperature</dt>
        <dd className="text-xl uppercase">{hour.temperature} <span>&#8457;</span></dd>

        <dt className="mt-4 uppercase">Wind Speed</dt>
        <dd className="text-xl uppercase">{hour.windSpeed} mph</dd>

        <dt className="mt-4 uppercase">Probability of Precipitation</dt>
        <dd className="text-xl uppercase">{hour.precipProb}%</dd>
      </dl>
    </article>
  )
};