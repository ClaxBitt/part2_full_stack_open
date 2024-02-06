function CountryFilter({ filteredCountryText, handleCountryFilterChange }) {
  return (
    <div>
      <p>
        Find countries: 
        <input 
          value={filteredCountryText} 
          onChange={handleCountryFilterChange} 
        />  
      </p>
    </div>
  )
}

export default CountryFilter