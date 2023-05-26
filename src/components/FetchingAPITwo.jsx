import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingAPITwo = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            const URL = 'https://api.thecatapi.com/v1/breeds';

            try{
                const response = await axios.get(URL);
                const returnedData = await response.data;
                setCats(returnedData);
            } catch(error) {
                console.log(error);
            }
        }
        fetchCats();
    }, []);

    const countries = {};
    cats.forEach(cat => {
        if(cat.origin) {
            const countryCode = cat.origin;
            countries[countryCode] = (countries[countryCode] || 0) + 1;
        }
    })

    const ascendingCountry = Object.entries(countries);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countriesArray = (ascendingCountry.sort((a, b) => a[1] - b[1]).map((entry) => {
        const [countryCode, count] = entry;
        const handleClick = () => {
            setSelectedCountry(countryCode);
        };
        return (
            <li key={countryCode} onClick={handleClick}>{countryCode} ({count})</li>
        )
    }));

    const CatBreedDisplayer = ({country}) => {
        const countryCats = cats
        .filter((cat) => cat.origin === country)
        .map((cat) => {
                    const imageRef =  cat.reference_image_id;
                    const catImage = `https://cdn2.thecatapi.com/images/${imageRef}.jpg`;
                    const catName= cat.name;
                    const catWeight= cat.weight.metric;
                    const catLife= cat.life_span;
                    const catOrigin= cat.origin;
                    const catTemperament= cat.temperament;
                    const catDescription= cat.description;
        
                    return (
                        <div >
                            <div key={{catName}} className='random-cat-displayer'>
                            <div className='random-cat-image-displayer'>
                                <img src={catImage} alt='cat' />
                            </div>
                            <div className='country-cat-info-displayer'>
                                <h2>{catName}</h2>
                                <h4>{catOrigin}</h4>
                                <p>
                                <strong>Temperament:</strong> {catTemperament}
                                </p>
                                <p>
                                <strong>Life-Span:</strong> {catLife} years
                                </p>
                                <p>
                                <strong>Weight:</strong> {catWeight} kg
                                </p>
                                <h5>Description</h5>
                                <p>{catDescription}</p>
                            </div>
                        </div>
                      </div>
                    )
        });        

        return (
            <div>
                <h2>Cat Breeds For {country}</h2>
                <div>
                    <div className='cat-display-country-grid'>
                        {countryCats}
                    </div>
                </div>
            </div>
        )
    }
    // console.log(cats);
  return (
    <div className='fetching-api-two-container'>
        <div className='fetching-api-links'>
            <ul>{countriesArray}</ul>
        </div>
        <div>
            {selectedCountry && <CatBreedDisplayer country={selectedCountry} />}
        </div>
    </div>
  )
}

export default FetchingAPITwo;