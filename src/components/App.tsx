import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header } from './Header';
import { Search } from './Search';
import { Results } from './Results'
import { Possibilities } from './Possibilities'
import { Calendar } from './Calendar'
import { Error } from './Error'
import { fetchData } from '../utils/fetchCalls';
import { cleanData } from '../utils/cleanData';
import { determineSuitableHours, craftNotice } from '../utils/utils'
import { IpFetch, CleanedHour, Notice, Thresholds } from '../interfaces/index';
import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";
// import { onSnapshot, query } from "firebase/firestore"; 

export const App = () => {
  const [coordinates, setCoordinates] = useState<IpFetch | undefined>(undefined);
  const [forecast, setForecast] = useState<CleanedHour[]>([]);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [suitableHours, setSuitableHours] = useState<CleanedHour[]>([]);
  const [notice, setNotice] = useState<Notice>({ nice: false, hours: 0 });
  const [schedule, setSchedule] = useState<CleanedHour[]>([]);

  const fetchAndCleanData = async () => {
    let ipKey = `103a0ac5b110412c9a639e3ab5afd99f`
    let ipParams = `&fields=latitude,longitude,time_zone`
    let weatherURL = `https://api.weather.gov/points/`
    try {
      let coordinates = await fetchData(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${ipKey}${ipParams}`
      )
      let gridPoints = await fetchData(
        `${weatherURL}${coordinates.latitude},${coordinates.longitude}`
      )
      let forecast = await fetchData(gridPoints.properties.forecastGridData)
      let cleanedData = cleanData(forecast)

      const querySnapshot = await getDocs(collection(db, "calendar-hours"))
      let fetchedCal = querySnapshot.docs.map(function(doc) {
        let docData = doc.data()
        let fetchedCalHour: CleanedHour = {
          month: docData.month,
          day: docData.day,
          hour: docData.hour,
          inCalendar: docData.inCalendar,
          temperature: docData.temperature,
          windSpeed: docData.windSpeed,
          precipProb: docData.precipProb,
          key: doc.id
        }
        return fetchedCalHour
      })
      setSchedule(fetchedCal)
      setCoordinates(coordinates)
      setForecast(cleanedData)
    } catch (error) {
      setErrorCode(Number(error.message))
    }
  }

  // const q = query(collection(db, "calendar-hours"));
  // onSnapshot(q, { includeMetadataChanges: true }, (snapshot) => {
  //   snapshot.docChanges().forEach((change) => {
  //     if (change.type === "added") {
  //         console.log("added: ", change.doc.data());
  //     }
  //     const source = snapshot.metadata.fromCache ? "local cache" : "server";
  //     console.log("Data came from " + source);
  //   })
  // })

  // const q = query(collection(db, "calendar-hours"));
  //   onSnapshot(q, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //         console.log('listener', doc, doc.data())
  //     }
  //   )
  // })

  useEffect(() => {
    fetchAndCleanData()
  }, [])

  const getForecast = (thresholds: Thresholds) => {
    if (coordinates) {
      let suitableHours = determineSuitableHours(
        thresholds,
        forecast,
        coordinates.time_zone.name
      )
      let notice = craftNotice(suitableHours, coordinates.time_zone.name)
      setNotice(notice)
      setSuitableHours(suitableHours)
    }
  }

  const clearSelected = () => {
    setErrorCode(0)
  }

  const addToCalendar = async (hourObject: CleanedHour) => {
    let suitable = suitableHours
    let foundHour = suitable.find(hour => hour.month === hourObject.month && hour.day === hourObject.day && hour.hour === hourObject.hour)
    let thatOne = suitable.indexOf(foundHour!)
    if (schedule.includes(hourObject)) {
      try {
        await deleteDoc(doc(db, "calendar-hours", hourObject.key))
        let currentSchedule = schedule
        let ind = currentSchedule.indexOf(hourObject)
        currentSchedule.splice(ind, 1)
        suitable[thatOne].inCalendar = false
        setSchedule([...currentSchedule])
      } catch (error) {
        console.error("Error deleting document: ", error)
      }
    } else {
      try {
        hourObject.inCalendar = true
        const docRef = await addDoc(collection(db, "calendar-hours"), hourObject)
        suitable[thatOne].inCalendar = true
        suitable[thatOne].key = docRef.id
        hourObject.key = docRef.id
        setSchedule([...schedule, hourObject])
      } catch (error) {
        console.error("Error adding document: ", error)
      }
    }
    setSuitableHours([...suitable])
  }

  return (
    <>
      <Header />
      <main>
        {!errorCode && (
          <Switch>
            <Route exact path='/' render={() =>
              <Search getForecast={getForecast} /> 
            }/>

            <Route exact path='/results' render={() =>
              <Results notice={notice} />
            }/>

            <Route exact path='/good_weather' render={() =>
              <Possibilities
                suitableHours={suitableHours}
                addToCalendar={addToCalendar}
              />
            }/>

            <Route exact path='/calendar' render={() =>
              <Calendar
                calendar={schedule}
                addToCalendar={addToCalendar}
              />
            }/>

            <Route exact path='/404' render={() =>
              <Error errorCode={404} clearSelected={clearSelected} />
            }/>
            
            <Redirect to='/404' />
          </Switch>
        )}
        {errorCode !== 0 &&
          <Error errorCode={errorCode} clearSelected={clearSelected} />
        }
      </main>
    </>
  )
}