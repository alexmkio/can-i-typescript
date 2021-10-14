import React from 'react';
import { HourProps } from '../interfaces/index';
import { calendar } from '../utils/time'
import Checkbox from '@mui/material/Checkbox';

export const CalendarRow: React.FC<HourProps> = ({ hour, addToCalendar }) => {
  let month = calendar.months.find(month => month.number === hour.month)?.name
  let time = calendar.hours.find(thisHour => thisHour.number === hour.hour)?.name
  
  return (
    <tr className="border-2 border-gray-900 transition duration-200 hover:bg-gray-200">
      <td><Checkbox defaultChecked onClick={() => addToCalendar(hour)} /></td>
      <td>{month} {hour.day}</td>
      <td>{time}</td>
      <td>{hour.temperature} <span>&#x2109;</span></td>
      <td>{hour.windSpeed}mph</td>
      <td>{hour.precipProb}%</td>
    </tr>
  )
}