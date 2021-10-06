import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchProps } from '../interfaces/index';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

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
    <section className="flex my-4 md:my-8 text-center items-center justify-center">
      <section className="flex flex-col w-11/12 sm:w-9/12 md:w-7/12 lg:w-full">
        <h2 className="text-3xl">Select your weather thresholds and find out if you can go outside</h2>

        <section className="mt-12">
          <FormControl className="w-2/12">
            <InputLabel>Min Temperature</InputLabel>
            <Select
              value={minTemp}
              label="Min Temperature"
              onChange={event => setMinTemp(Number(event.target.value))}
            >
              <MenuItem value={40}>40 ℉</MenuItem>
              <MenuItem value={50}>50 ℉</MenuItem>
              <MenuItem value={60}>60 ℉</MenuItem>
            </Select>
          </FormControl>
        </section>

        <section className="mt-12">
          <FormControl className="w-2/12">
            <InputLabel>Max Temperature</InputLabel>
            <Select
              value={maxTemp}
              label="Max Temperature"
              onChange={event => setMaxTemp(Number(event.target.value))}
            >
              <MenuItem value={80}>80 ℉</MenuItem>
              <MenuItem value={90}>90 ℉</MenuItem>
              <MenuItem value={100}>100 ℉</MenuItem>
            </Select>
          </FormControl>
        </section>

        <section className="mt-12">
          <FormControl className="w-2/12">
            <InputLabel>Wind Speed</InputLabel>
            <Select
              value={wind}
              label="Wind Speed"
              onChange={event => setWindSpeed(Number(event.target.value))}
            >
              <MenuItem value={5}>5mph</MenuItem>
              <MenuItem value={10}>10mph</MenuItem>
              <MenuItem value={20}>20mph</MenuItem>
              <MenuItem value={30}>30mph</MenuItem>
            </Select>
          </FormControl>
        </section>

        <section className="mt-12">
          <FormControl className="w-2/12">
            <InputLabel>Probability of Precipitation</InputLabel>
            <Select
              value={precipProbability}
              label="Probability of Precipitation"
              onChange={event => setProbability(Number(event.target.value))}
            >
              <MenuItem value={30}>30%</MenuItem>
              <MenuItem value={50}>50%</MenuItem>
              <MenuItem value={70}>70%</MenuItem>
            </Select>
          </FormControl>
        </section>

        <section className="mt-12">
          <Link to='/results' onClick={() => onSubmitSearch()}>
            <Button variant="contained">submit</Button>
          </Link>
        </section>

      </section>
    </section>
  )
};