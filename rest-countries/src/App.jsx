import './App.css'
import useLocalStorage from 'use-local-storage';
import { useState, useEffect, useCallback } from 'react';

import Header from './components/Header/Header'
import Controls from './components/Controls/Controls';
import Results from './components/Results/Results';

function App() {
  // State
  const [countries, setCountries] = useState([]);
  const [countryQuery, setCountryQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [matchingCountries, setMatchingCountries] = useState([]);

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

  useEffect(() => {
    console.log(countryQuery);
    console.log(matchingCountries);
    console.log(regionFilter);
  }, [
    countryQuery, matchingCountries, regionFilter
  ])

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

  /* Temporary local json fetch */
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then((json) => setCountries(json))
  }, [])

  const uniqueRegions = [...new Set(countries.map(country => country.region
  ))];

  // ..........................



  return (
    <div className='app' data-theme={theme}>
    <Header theme={theme} handleTheme={changeTheme}></Header>
    <Controls regions={uniqueRegions} handleCountryQuery={handleCountryQuery} handleRegionFilter={handleRegionFilter} ></Controls>
    <Results allCountries={countries} matchingCountries={matchingCountries} countryQuery={countryQuery} regionFilter={regionFilter} ></Results>
    </div>
  )
}

export default App
