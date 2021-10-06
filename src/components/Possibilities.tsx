import React from 'react';
import { PossibilitiesProps } from '../interfaces/index';
import { Link } from 'react-router-dom';
import { HourCard } from "./HourCard"
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const Possibilities: React.FC<PossibilitiesProps> = ({ suitableHours, addToCalendar }) => {
  let hourCards = suitableHours.map((suitableHour) => (
    <HourCard
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
      
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Hour</TableCell>
              <TableCell align="right">Temperature&nbsp;(<span>&#8457;</span>)</TableCell>
              <TableCell align="right">Wind Speed&nbsp;(mph)</TableCell>
              <TableCell align="right">Probability of Precipitation&nbsp;(%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hourCards}
          </TableBody>
        </Table>
      </TableContainer>
      
    </section>


  )
}