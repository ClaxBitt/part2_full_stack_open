import Country from "./Country"

const renderCountries = (filteredCountries) => {
  const numberFilteredCountries = filteredCountries.length

  if (numberFilteredCountries > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (numberFilteredCountries == 1) {
    return (
      <Country 
        info={filteredCountries[0]} 
        showInfo={true}
      />
    )
  }

  return filteredCountries.map(country => {
    return (
      <Country 
        key={country.cca3} 
        info={country} 
        showInfo={false}
      />
    )
  })
}


function CountriesList({ allCountries, filteredCountryText }) {
  const filteredCountries = allCountries.filter(country => {
    return country.name.common.toLowerCase().includes(filteredCountryText)
  })

  return (
    <div>
      {
        renderCountries(filteredCountries)
      }
    </div>
  )
}

export default CountriesList