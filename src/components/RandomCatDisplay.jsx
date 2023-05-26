import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const RandomCatDisplay = () => {
  const [catData, setCatData] = useState({
    catImage: '',
    catName: '',
    catWeight: '',
    catLife: '',
    catOrigin: '',
    catTemperament: '',
    catDescription: '',
  });
  

  useEffect(() => {
    const fetchData = async () => {
      const URL = 'https://api.thecatapi.com/v1/breeds';
      try {
        const response = await axios.get(URL);
        const returnedData = await response.data;
        setCatData(returnedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const getRandomCat = async () => {
    if(catData.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * catData.length);
    const randomSelectedCat = catData[randomIndex];
    const imageRef = await randomSelectedCat.reference_image_id;
    const catImage = `https://cdn2.thecatapi.com/images/${imageRef}.jpg`;

    setCatData({
      catImage,
      catName: randomSelectedCat.name,
      catWeight: randomSelectedCat.weight.metric,
      catLife: randomSelectedCat.life_span,
      catOrigin: randomSelectedCat.origin,
      catTemperament: randomSelectedCat.temperament,
      catDescription: randomSelectedCat.description,
    });
  };

  useEffect(() => {
    getRandomCat();
  }, [catData]);


  return (
    <div>
      <h2>Random Cat Displayer (day-19)</h2>
      <div className='random-cat-container'>
        <div className='random-cat-displayer'>
          <div className='random-cat-image-displayer'>
            <img src={catData.catImage} alt='cat' />
          </div>
          <div className='random-cat-info-displayer'>
            <h2>{catData.catName}</h2>
            <h4>{catData.catOrigin}</h4>
            <p>
              <strong>Temperament:</strong> {catData.catTemperament}
            </p>
            <p>
              <strong>Life-Span:</strong> {catData.catLife} years
            </p>
            <p>
              <strong>Weight:</strong> {catData.catWeight} kg
            </p>
            <h5>Description</h5>
            <p>{catData.catDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomCatDisplay;