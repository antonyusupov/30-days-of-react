import React from 'react';
import {Footer, Header, Main, Numbers, PopulationDisplay, CountriesComponent, RandomColor, FormValidate, ApiComponent, RandomCatDisplay, FetchingAPITwo, AllCountries, RandomColorRef, TwitterCrud} from './components';
import './styles/styles.css';





export const App = () => {
    const numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const tenHighestPopulation = [
      { country: 'World', population: 7693165599, id:1 },
      { country: 'China', population: 1377422166, id:2 },
      { country: 'India', population: 1295210000, id:3 },
      { country: 'USA', population: 323947000, id:4 },
      { country: 'Indonesia', population: 258705000, id:5 },
      { country: 'Brazil', population: 206135893, id:6 },
      { country: 'Pakistan', population: 194125062, id:7 },
      { country: 'Nigeria', population: 186988000, id:8 },
      { country: 'Bangladesh', population: 161006790, id:9 },
      { country: 'Russia', population: 146599183, id:10 },
      { country: 'Japan', population: 126960000, id:11 },
    ];
  

  return (
  <div>
    <Header/>
    <Main/>
    <Numbers numsArray = {numsArray}/>
    <RandomColor />
    <PopulationDisplay tenHighestPopulation = {tenHighestPopulation} />
    <CountriesComponent /> 
    <FormValidate />
    <ApiComponent />
    <RandomCatDisplay />
    <FetchingAPITwo />
    <AllCountries />
    <RandomColorRef />
    <TwitterCrud />
    <Footer/>
  </div>
  )
}
