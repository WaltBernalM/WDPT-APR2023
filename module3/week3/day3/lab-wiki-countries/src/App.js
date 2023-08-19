// src/App.js
import { useEffect, useState } from "react";
import "./App.css";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import Navbar from "./components/Navbar";
// import countriesData from './countries.json';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';

const apiUrl = ' https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get(apiUrl)
      const response = await fetch(apiUrl)
      const data = await response.json()
      setCountries(data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        {
          countries.length === 0 ?
          <h2> No countries to show</h2> :
          <>
            <div className="row">
              <div className="col-5" style={ { maxHeight: '90vh', overflow: 'scroll' } }>
                <CountriesList countries={countries}/>
              </div>
              <div className="col-7">
                <Routes>
                  <Route
                    path="/:countryId"
                    element={<CountryDetails countries={countries} />}
                  />
                  </Routes>
                </div>
              </div>
          </>
        }
      </div>
    </div>
  );
}
export default App;