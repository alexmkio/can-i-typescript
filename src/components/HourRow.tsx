import React from 'react';
import { HourProps } from '../interfaces/index';
import { calendar } from '../utils/time'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

export const HourRow: React.FC<HourProps> = ({ hour, addToCalendar }) => {
  let month = calendar.months.find(month => month.number === hour.month)?.name
  let time = calendar.hours.find(thisHour => thisHour.number === hour.hour)?.name
  let checkbox = (hour.inCalendar ? <Checkbox defaultChecked /> : <Checkbox />)
  
  return (
    <TableRow
      key={`${hour.month}${hour.day}${hour.hour}`}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">{checkbox}</TableCell>
      <TableCell align="right">{month} {hour.day}</TableCell>
      <TableCell align="right">{time}</TableCell>
      <TableCell align="right">{hour.temperature}</TableCell>
      <TableCell align="right">{hour.windSpeed}</TableCell>
      <TableCell align="right">{hour.precipProb}</TableCell>
    </TableRow>
  )
}