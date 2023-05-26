import axios from 'axios';
import { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [data, setData] = useState([]);
  
  useEffect (() => {
    const fetchData = async () => {
      const URL = 'https://api.thecatapi.com/v1/breeds';
      try{
        const response = await axios.get(URL);
        const returnedData = await response.data;
        setData(returnedData); 
         
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  if (data.length === 0) {
    return <div>Loading data...</div>;
  }

  
  const metricWeight = (data.reduce((sum, cat) => sum + parseInt(cat.weight.metric), 0) / data.length).toFixed(2);
  const averageLife = (data.reduce((sum, cat) => sum + parseInt(cat.life_span), 0) /data.length).toFixed(2);
  const uniqueCountryCodes = data.map((breed) => breed.origin.country_code);
  const countriesHaveCats = uniqueCountryCodes.length;
  
  const countries = {};
  data.forEach(cat => {
    if (cat.country_code) {
      const countryCode = cat.country_code;
      countries[countryCode] = (countries[countryCode] || 0) + 1;
    }
  });
  
  const sortedCountries = Object.entries(countries);
  const arrayCountries = sortedCountries.sort((a, b) => b[1] - a[1]);
  const countryWithMostCats = arrayCountries[0][0];

  // Ascending Order.
  const ascendingOrdered = Object.entries(countries);

  const rightOne = (ascendingOrdered.sort((a, b) => a[1] - b[1]).map(entry => entry.join(' - '))).join(' / ');
  
  return (
    <div>
      <div>
        <h2>This is an API Examples With AXIOS</h2>
          <p>This is Average Weight: {metricWeight}</p>
          <p>This is Average Life: {averageLife}</p>
      </div>
      <div>
        <h4>How many countries do have cats</h4>
        <p>{countriesHaveCats}</p>
      </div>
      <div>
        <h4>Most Breeds</h4>
        <p>The Most Breeds in: {countryWithMostCats} !</p>
      </div>
      <div>
        <h4>Ascending Ordered</h4>
        <p>The ascending order is like this: {rightOne} !</p>
      </div>
    </div>
  )
}

export default ApiComponent;