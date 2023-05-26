import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import CountriesComponent from "../countries";

//const jsxElement = <h1>This is a JSX element!</h1>;
const welcome = 'Welcome to 30 days of React';
const title = 'Getting started with React';
const subtitle = 'JavaScript Library';
const student = {
  firstName: 'Anton',
  lastName: 'Yusupov'
}
const date = 'Dec 12 2023';


const ModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeClick = () => {
    setDarkMode(prevMode => !prevMode);
  }
  useEffect (() => {
    const mainDiv = document.querySelector('div');
    if(darkMode) {
      mainDiv.classList.add('darkClass');
    } else {
      mainDiv.classList.remove('darkClass');
    }
  }, [darkMode]);

  return (
  <button onClick={handleModeClick}>Change Mode</button>
  )
}

const SeasonBackground = () => {
  const body = document.getElementById('root');
  const [season, setSeason] = useState('');
  
  body.classList = season === 'summer' ? 'summer': season === 'autumn' ? 'autumn' : season === 'winter' ? 'winter' : season === 'spring' ? 'spring': '';

  return (
    <div>
      <button onClick={() => setSeason('summer')}>Summer</button>
      <button onClick={() => setSeason('autumn')}>Autumn</button>
      <button onClick={() => setSeason('winter')}>Winter</button>
      <button onClick={() => setSeason('spring')}>Spring</button>
    </div>
  )
}

const DayBackground = () => {
  const body = document.getElementById('root');
  const [dayTime, setDayTime] = useState('');
  
  body.classList = dayTime === 'morning' ? 'morning': dayTime === 'noon' ? 'noon' : dayTime === 'afternoon' ? 'afternoon' : dayTime === 'night' ? 'night': '';

  return (
    <div>
      <button onClick={() => setDayTime('morning')}>Morning</button>
      <button onClick={() => setDayTime('noon')}>Noon</button>
      <button onClick={() => setDayTime('afternoon')}>Afternoon</button>
      <button onClick={() => setDayTime('night')}>Night</button>
    </div>
  )
}

const DelayedLoading = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const url = './countries.js';

  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Something is not Right!', error);
        setLoading(false);
      })
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) :(
        <div>
          <CountriesComponent data = {data} />
        </div>
      )}
    </div>
  )
}

const Header = () => (
    <header >
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Student {student.firstName} {student.lastName}</p>
      <small>{date}</small>
      <ModeButton />
      <div>
        <SeasonBackground />
        <DayBackground />
        <DelayedLoading />
      </div>
    </header>
  )

export default Header;