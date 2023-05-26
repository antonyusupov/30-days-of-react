import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const CountryToDisp = ({ countryToDisp }) => {
    if (!countryToDisp) {
      return <p>No country found.</p>;
    }
  
    const { name, flags, capital, population, languages } = countryToDisp;
    const formattedLangs = Object.values(languages).join(', ');
  
    return (
      <div className='country-container'>
        <div className='country-flag-container'>
          <img src={flags.svg} alt={name} />
        </div>
        <h3>{name.common}</h3>
        <div className='country-info-container'>
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Languages:</strong> {formattedLangs}</p>
          <p><strong>Population:</strong> {population.toLocaleString()}</p>
        </div>
      </div>
    );
  };

const AllCountries = (props) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchValue, setSearchValue] = useState('');


    const handlePageChange = ({selected}) => {
        setCurrentPage(selected);
    }

    useEffect(() => {
        fetchData()
    },[]);

    const fetchData = async () => {
        const URL = 'https://restcountries.com/v3.1/all';
        try{
            const response = await axios.get(URL);
            const data = await response.data;
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }
    const countriesPerPage = 10; // Number of countries per page
    const offset = currentPage * countriesPerPage;
    const currentPageData = searchValue
    ? data.filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    )
    : data.slice(offset, offset + countriesPerPage);
    const pageCount = Math.ceil(data.length / countriesPerPage);
    // console.log(data[0]);
  return (
    <div className='countries-main_container'>
        <div className='countries-info-container'>
            <h3>Fetching Data Using Hooks</h3>
            <h4>All Countries in The World is {data.length}</h4>
            <div className='country-search_input-container'>
                <input type='text' placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />
            </div>
        </div>
        <div className='countries-country_container'>
        {searchValue
    ? <CountryToDisp countryToDisp={currentPageData[0]} />
    : currentPageData.map((countryDisp) => (
        <CountryToDisp key={countryDisp.name.common} countryToDisp={countryDisp} />
      ))}
      </div>
      <div className='pagination-container'>
        <ReactPaginate
            className='pagination-container pagination'
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={'pagination'}
            activeClassName={'active-page'} // Update the class name
            />
        </div>
    </div>
  )
}

export default AllCountries;