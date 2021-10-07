import React from 'react';
import { HourProps } from '../interfaces/index';
import { calendar } from '../utils/time'
import Checkbox from '@mui/material/Checkbox';

export const HourRow: React.FC<HourProps> = ({ hour, addToCalendar }) => {
  let month = calendar.months.find(month => month.number === hour.month)?.name
  let time = calendar.hours.find(thisHour => thisHour.number === hour.hour)?.name

  if (hour.inCalendar) {
    return (
      <tr className="bg-gray-200 border-2 border-gray-900">
        <td><Checkbox onClick={() => addToCalendar(hour)} /></td>
        <td>{month} {hour.day}</td>
        <td>{time}</td>
        <td>{hour.temperature}</td>
        <td>{hour.windSpeed}</td>
        <td>{hour.precipProb}</td>
      </tr>
    )
  } else {
    return (
      <tr className="border-2 border-gray-900 transition duration-200 hover:bg-gray-200">
        <td><Checkbox onClick={() => addToCalendar(hour)} /></td>
        <td>{month} {hour.day}</td>
        <td>{time}</td>
        <td>{hour.temperature}</td>
        <td>{hour.windSpeed}</td>
        <td>{hour.precipProb}</td>
      </tr>
    )
  }
}