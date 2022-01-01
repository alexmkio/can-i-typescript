import { Weather, ThresholdValues } from "../interfaces/weather"
import { CleanedHour, TempHours, WindHours, PreciptHours } from '../interfaces/index';

export const cleanData = (forecast: Weather) => {
  let tempObjects = getTemperature(forecast.properties.temperature.values)
  let windObjects = getWindSpeed(forecast.properties.windSpeed.values)
  let preciptObjects = getProbabilityOfPrecipitation(forecast.properties.probabilityOfPrecipitation.values)

  return Object.keys(tempObjects).reduce((acc: CleanedHour[], element) => {
    if (windObjects[element] && preciptObjects[element]) {
      let combinedHour: CleanedHour = {
        month: tempObjects[element].month,
        day: tempObjects[element].day,
        hour: tempObjects[element].hour,
        inCalendar: false,
        temperature: tempObjects[element].temperature,
        windSpeed: windObjects[element].windSpeed,
        precipProb: preciptObjects[element].precipProb
      }
      acc = [...acc, combinedHour]
    }
    return acc
  }, [])
};

const getTemperature = (tempValues: ThresholdValues[]) => {
  return tempValues.reduce((acc: TempHours, element) => {
    let fullArray = element.validTime.split('T')
    let dateArray = fullArray[0].split('-')
    let month = Number(dateArray[1])
    let day = Number(dateArray[2])
    let hour = Number(fullArray[1].split(':')[0])
    let hoursThisLasts = Number(fullArray.join().split('H').join().split(',')[2])

    for (let i = 0; i < hoursThisLasts; i++) {
      let thisMonth = month
      let thisDay = day
      let thisHour = hour + i
      if (thisHour > 23) {
        thisDay++
        thisHour = thisHour - 24
      }
      let weatherObj = { 
        month: thisMonth, 
        day: thisDay, 
        hour: thisHour,
        temperature: ((element.value! * (9 / 5)) + 32)
      }
      acc[`${makeDblDgts(thisMonth)}${makeDblDgts(thisDay)}${makeDblDgts(thisHour)}`] = weatherObj
    }
    return acc
  }, {})
}

const getWindSpeed = (windValues: ThresholdValues[]) => {
  return windValues.reduce((acc: WindHours, element) => {
    let fullArray = element.validTime.split('T')
    let dateArray = fullArray[0].split('-')
    let month = Number(dateArray[1])
    let day = Number(dateArray[2])
    let hour = Number(fullArray[1].split(':')[0])
    let hoursThisLasts = Number(fullArray.join().split('H').join().split(',')[2])

    for (let i = 0; i < hoursThisLasts; i++) {
      let thisMonth = month
      let thisDay = day
      let thisHour = hour + i
      if (thisHour > 23) {
        thisDay++
        thisHour = thisHour - 24
      }
      let weatherObj = { 
        windSpeed: Math.round(element.value! / 1.609344)
      }
      acc[`${makeDblDgts(thisMonth)}${makeDblDgts(thisDay)}${makeDblDgts(thisHour)}`] = weatherObj
    }
    return acc
  }, {})
}

const getProbabilityOfPrecipitation = (precipValues: ThresholdValues[]) => {
  return precipValues.reduce((acc: PreciptHours, element) => {
    let fullArray = element.validTime.split('T')
    let dateArray = fullArray[0].split('-')
    let month = Number(dateArray[1])
    let day = Number(dateArray[2])
    let hour = Number(fullArray[1].split(':')[0])
    let hoursThisLasts = Number(fullArray.join().split('H').join().split(',')[2])

    for (let i = 0; i < hoursThisLasts; i++) {
      let thisMonth = month
      let thisDay = day
      let thisHour = hour + i
      if (thisHour > 23) {
        thisDay++
        thisHour = thisHour - 24
      }
      let weatherObj = { 
        precipProb: Math.round(element.value)
      }
      acc[`${makeDblDgts(thisMonth)}${makeDblDgts(thisDay)}${makeDblDgts(thisHour)}`] = weatherObj
    }
    return acc
  }, {})
}

const makeDblDgts = (num: Number) => {
  return num.toString().length === 2 ? num : `0${num}`
}