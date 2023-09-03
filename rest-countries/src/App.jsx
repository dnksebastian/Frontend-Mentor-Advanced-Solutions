import './App.css'
import useLocalStorage from 'use-local-storage';
import { useState, useEffect, useCallback } from 'react';

import Header from './components/Header/Header'
import Controls from './components/Controls/Controls';
import Results from './components/Results/Results';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryQuery, setCountryQuery] = useState('');
  const [matchingCountries, setMatchingCountries] = useState([]);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleCountryQuery = (e) => {
    const query = e.target.value
    setCountryQuery(query)
  }

  useEffect(() => {
    console.log(countryQuery);
    console.log(matchingCountries);
  }, [
    countryQuery, matchingCountries
  ])

  const findCountries = useCallback(() => {
    if(countryQuery) {
      const foundCountries = countries.filter(c => c.name.toLowerCase().includes(countryQuery.toLowerCase()))
      setMatchingCountries([...foundCountries])
    } else {
      setMatchingCountries([])
    }
  }, [countryQuery, countries]);

  useEffect(() => {
    findCountries()
  }, [countryQuery, findCountries])

  
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
    <Controls regions={uniqueRegions} handleCountryQuery={handleCountryQuery}></Controls>
    <Results allCountries={countries} matchingCountries={matchingCountries}></Results>
    </div>
  )
}

export default App
