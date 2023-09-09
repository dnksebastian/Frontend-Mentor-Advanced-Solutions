import {
  Routes, Route, Navigate, useNavigate
} from 'react-router-dom'

import './App.css'

import useLocalStorage from 'use-local-storage';
import { useState, useEffect, useCallback, useContext } from 'react';

import CountriesContext from './contexts/CountriesContext';

import Header from './components/Header/Header'
import Home from './pages/Home';
import DetailsPage from './pages/Details';

function App() {
  // State
  const [countryQuery, setCountryQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [matchingCountries, setMatchingCountries] = useState([]);

  // Context data
  const context = useContext(CountriesContext)
  const countries = context[0];
  
  
  // Light & Dark Theme controls
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };


  // Functions & props handlers
  
  const handleCountryQuery = (e) => {
    const query = e.target.value
    setCountryQuery(query)
  }

  const handleRegionFilter = (option, {action}) => {
    if (action === 'clear') {
      setRegionFilter('')
    } else if (action === 'select-option') {
      setRegionFilter(option.value)
    } else {
      console.log('Something went wrong. Choose another filter');
      setRegionFilter('')
    }
  };


  const findCountries = useCallback(() => {

    if(regionFilter && countryQuery) {
      const foundCountries = countries.filter(c => c.name.toLowerCase().includes(countryQuery.toLowerCase()) && c.region.toLowerCase() === regionFilter.toLowerCase())
      setMatchingCountries([...foundCountries])
    } else if (regionFilter && !countryQuery) {
      const foundCountries = countries.filter(c => c.region.toLowerCase() === regionFilter.toLowerCase())
      setMatchingCountries([...foundCountries])      
    } else if (countryQuery && !regionFilter) {
      const foundCountries = countries.filter(c => c.name.toLowerCase().includes(countryQuery.toLowerCase()))
      setMatchingCountries([...foundCountries])
    } else {
      setMatchingCountries([])
    }
  }, [countryQuery, countries, regionFilter]);

  useEffect(() => {
    findCountries()
  }, [countryQuery, regionFilter, findCountries])

  
  // useEffect(() => {    
  //   const fetchAllCountries = async () => {
  //     const res = await fetch('https://restcountries.com/v3.1/all');
  //     const countryData = await res.json();
  //     setCountries(countryData);
  //   };

  //   try {
  //     fetchAllCountries()
  //   } catch (err) {
  //     console.error('Could not load countries data...')
  //     console.error(err)
  //   }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  const navigate = useNavigate()

  useEffect(() => {
    setCountryQuery('')
    setRegionFilter('')
  }, [navigate])


  const uniqueRegions = [...new Set(countries.map(country => country.region
  ))];


  return (
        <div className='app' data-theme={theme}>
        <Header theme={theme} handleTheme={changeTheme}></Header>

        <Routes>
          <Route exact path='/country/:code'
          element={<DetailsPage
          />}/>

          <Route exact path='/'
          element={<Home
          uniqueRegions={uniqueRegions}
          regionFilter={regionFilter}
          countryQuery={countryQuery}
          handleCountryQuery={handleCountryQuery}
          handleRegionFilter={handleRegionFilter}
          countries={countries}
          matchingCountries={matchingCountries}
          />} />

          <Route path='*' element={<Navigate to="/"/>} />

        </Routes>

        </div>
  )
}

export default App
