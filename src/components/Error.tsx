import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorProps } from '../interfaces/index';
import { httpResponses } from '../utils/httpResponses'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Error: React.FC<ErrorProps> = ({ errorCode, clearSelected }) => {
  let matchingResponse = httpResponses.find(response =>
    response.code === Number(errorCode)
  )

  if (matchingResponse) {
    return (
      <article className='flex flex-col items-center mt-4 md:my-8'>
        <section className='flex flex-col w-11/12 md:w-9/12 lg:w-6/12'>
          <h2 className='text-xl md:text-2xl'>Error {matchingResponse.code}</h2>
          <h3 className='text-xl font-medium'>{matchingResponse.message}</h3>
          <p className="mt-6 text-xl">{matchingResponse.description}</p>
          <section className="flex flex-col items-center mt-8">
            <Link to='/'>
              <Button variant="outlined" size="large" startIcon={<ArrowBackIcon />} onClick={clearSelected}>back</Button>
            </Link>
          </section>
        </section>
      </article>
    )
  } else {
    return (
      <>
        <p>No matching error</p>
      </>
    )
  }
}