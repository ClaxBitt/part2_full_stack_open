import React, { useState, useEffect } from "react"
import weatherService from "../services/weather"

import Notification from "./Notification"

function CountryWeather ({ countryCapital }) {
  const [weather, setWeather] = useState(null)
  const [notificationMsg, setNotificationMsg] = useState(null)

  useEffect(() => {
    weatherService
      .getCapitalWeather(countryCapital)
      .then(capitalWeather => setWeather(capitalWeather))
      .catch(err => {
        setNotificationMsg('An error occurred while obtaining capital data')
        console.log(err)
      })
  }, [])

  if (weather) {
    return (
      <div>
        <h3>Weather in {countryCapital}</h3>
        <p><strong>Temperature: </strong>{weather.current.temp_c} Celcius</p>
        <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
        <p><strong>Wind: </strong>{(weather.current.wind_kph * (5/18)).toFixed(2)} m/s</p>
      </div>
    )
  }

  return <Notification msg={notificationMsg} />
}

export default CountryWeather