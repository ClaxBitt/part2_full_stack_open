import React, { useState } from "react"

import CountryDetails from "./CountryDetails"

function Country (country) {
  const [showDetails, setShowDetails] = useState(country.showInfo)

  const changeShowDetails = () => {
    setShowDetails(!showDetails)
  }

  if (showDetails) {
    return (
      <div>
         <button onClick={() => changeShowDetails()}>
          {showDetails ? 'hide' : 'show'}
        </button>
        <CountryDetails 
          country={country} 
          detailsHandle={changeShowDetails}
          showDetails={showDetails} 
        />
      </div>
    )
  }

  return (
    <div>
      <p>
        {country.info.name.common}
        <button onClick={() => changeShowDetails()}>
          {showDetails ? 'hide' : 'show'}
        </button>
      </p>

    </div>
  )
  
}

export default Country