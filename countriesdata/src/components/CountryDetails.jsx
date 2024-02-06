import CountryWeather from "./CountryWeather"

function CountryDetails ({ country }) {
  const languages = Object.values(country.info.languages)
  const capital = (country.info.capital) 
    ? country.info.capital[0] 
    : null

  return (
    <>
      <h2>{country.info.name.common}</h2>
      <p>Capital {(capital) ? capital : 'Doesn\'t have'}</p>
      <p>Area {country.info.area}</p>

      <h3>Languages</h3>
      <ul>
        {
          languages.map((languaje, index) => (
            <li key={index}>{languaje}</li>
          ))
        }
      </ul>

      <img src={country.info.flags["png"]} alt={country.info.flags["alt"]} />

      {
        (capital) 
          ? <CountryWeather countryCapital={capital} /> 
          : ''
      }
    </>
  )
}

export default CountryDetails