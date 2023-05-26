import React from "react";
// import CalculatedPercentage from "./CountriesComponent";

 const CalculatedPercentage = ({country: {country, population}}) => {
  const worldsPop = 7693165599;
  const widthOfProgress = `${Math.round((population / worldsPop) * 100)}% `;
  const spanStyle = {
    width: widthOfProgress,
    height: 25,
    backgroundColor: 'rgb(255, 180, 0)',
    borderRadius: 5
  }
  return (
    <div className='country-container' key={country.id}>
      <h2>{country}</h2>
      <div className='progress-bar'>
        <p style={spanStyle}></p>
      </div>
      <p>{population}</p>
    </div>
  ) 
}

const PopulationDisplay = ({tenHighestPopulation}) => {
    const countryPopulation = tenHighestPopulation.map((country) => (
      <CalculatedPercentage key={country.id} country={country} />
      ))
      return (
        <div className='population-displayer-container' key={countryPopulation.country}>
          <h3>World population</h3>
          <p>Ten most populated countries</p>
          {countryPopulation}
        </div>
      )
  }
export default PopulationDisplay;