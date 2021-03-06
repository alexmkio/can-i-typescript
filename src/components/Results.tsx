import React from 'react';
import { Link } from 'react-router-dom';
import { ResultsProps } from '../interfaces/index';
import Button from '@mui/material/Button';

export const Results: React.FC<ResultsProps> = ({ notice }) => {
  let result
  if (notice.nice) {
    result = <><h2 className="text-xl md:text-2xl">Good news!</h2>
      <p className="my-3 text-lg md:text-xl">You can go outside for {notice.hours} hours!</p></>
  } else {
    result = <><h2 className="text-xl md:text-2xl">Bad news</h2>
      <p className="my-3 text-lg md:text-xl">You can't go outside for {notice.hours} hours!</p></>
  }

  return (
    <section className="flex flex-col items-center my-4 md:my-8">
      {result}
      <p className="mt-6 text-lg md:text-xl">To see all the forcasted hours that satisfy your thresholds</p>
      <section className="mt-1 md:mt-2">
        <Link to='/good_weather'>
          <Button variant="outlined" size="large">click here</Button>
        </Link>
      </section>
    </section>
  )
}