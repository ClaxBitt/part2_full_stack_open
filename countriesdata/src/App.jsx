import React, { useState, useEffect } from "react"
import countriesService from "./services/countries"

import Notification from "./components/Notification"
import CountryFilter from "./components/CountryFilter"
import CountriesList from "./components/CountriesList"

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filteredCountryText, setFilteredCountryText] = useState('')
  const [notificationMsg, setNotificationMsg] = useState(null)
 
  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => setAllCountries(countries))
      .catch(err => {
        setNotificationMsg('Could not get countries data from server')
        console.log(err)
      })
  }, [])

  const handleCountryFilterChange = (event) => {
    setFilteredCountryText(event.target.value.toLowerCase())
  }

  return (
    <div>
      <CountryFilter 
        filteredCountryText={filteredCountryText}
        handleCountryFilterChange={handleCountryFilterChange}
      />

      <Notification msg={notificationMsg} />
      <CountriesList 
        allCountries={allCountries} 
        filteredCountryText={filteredCountryText}
      />
    </div>
  )
}

export default App
