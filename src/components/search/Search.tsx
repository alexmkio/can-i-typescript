import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchProps } from '../../interfaces/index';

export const Search: React.FC<SearchProps> = ({ getForecast }) => {
  const [minTemp, setMinTemp] = useState(50);
  const [maxTemp, setMaxTemp] = useState(90);
  const [wind, setWindSpeed] = useState(10);
  const [precipProbability, setProbability] = useState(50);

  const onSubmitSearch = () => {
    let thresholds = {
      temperature: {
        low: minTemp,
        high: maxTemp
      },
      windSpeed: wind,
      probOfPrecip: precipProbability
    }
    getForecast(thresholds)
  }

  return (
    <section className="flex justify-center my-16">
      <section className="flex flex-col w-1/3">
        <h2 className="text-3xl">Select your weather thresholds and find out if you can go outside</h2>
        <form className="mt-4 flex flex-col items-center">
          
          <label className="flex flex-col items-center my-3">
            <p className="text-gray-700">Min Temperature</p>
            <select name='minTemp' value={minTemp}
              className="rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer"
              onChange={event => setMinTemp(Number(event.target.value))}
            >
              <option value={40}>40</option>
              <option value={50}>50</option>
              <option value={60}>60</option>
            </select>
          </label>

          <label className="flex flex-col items-center my-3">
            <p className="text-gray-700">Max Temperature</p>
            <select name='maxTemp' value={maxTemp}
              className="rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer"
              onChange={event => setMaxTemp(Number(event.target.value))}
            >
              <option value={80}>80</option>
              <option value={90}>90</option>
              <option value={100}>100</option>
            </select>
          </label>

          <label className="flex flex-col items-center my-3">
            <p className="text-gray-700">Wind Speed</p>
            <select name='wind' value={wind}
              className="rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer"
              onChange={event => setWindSpeed(Number(event.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </label>

          <label className="flex flex-col items-center my-3">
            <p className="text-gray-700">Probability of Precipitation</p>
            <select name='precipProbability' value={precipProbability}
              className="rounded-full w-24 mt-1 bg-gray-100 shadow-md cursor-pointer"
              onChange={event => setProbability(Number(event.target.value))}
            >
              <option value={30}>30</option>
              <option value={50}>50</option>
              <option value={70}>70</option>
            </select>
          </label>

          <Link to='/results' onClick={() => onSubmitSearch()}>
            <button className="uppercase bg-yellow-300 border border-gray-900 rounded-full shadow-md py-3 px-6 mt-5 transition duration-500 ease-in-out hover:bg-green-400 transform hover:scale-110">submit</button>
          </Link>
            
        </form>
      </section>
    </section>
  )
};