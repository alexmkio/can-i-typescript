import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorProps } from '../../interfaces/index';
import { httpResponses } from '../../utils/httpResponses'

export const Error: React.FC<ErrorProps> = ({ errorCode, clearSelected }) => {
  let matchingResponse = httpResponses.find(response =>
    response.code === Number(errorCode)
  )

  if (matchingResponse) {
    return (
      <article className='flex flex-col items-center mt-4 md:my-8'>
        <section className='flex flex-col w-11/12 md:w-9/12 lg:w-6/12'>
          <h2 className='text-3xl'>Error {matchingResponse.code}</h2>
          <h3 className='text-xl font-medium'>{matchingResponse.message}</h3>
          <p className="mt-6 text-xl">{matchingResponse.description}</p>
          <section className="flex flex-col items-center mt-8">
            <Link to='/'>
              <button
                onClick={clearSelected}
                className="uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md mt-1 py-3 px-6 transition duration-500 ease-in-out hover:bg-pink-400 transform hover:scale-110"
              >Back</button>
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