import './App.css'
import useLocalStorage from 'use-local-storage';
// import { useState, useEffect } from 'react';

import Header from './components/Header/Header'
import Controls from './components/Controls/Controls';

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  // const [countries, setCountries] = useState([]);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  
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


  // console.log(countries);

  return (
    <div className='app' data-theme={theme}>
    <Header theme={theme} handleTheme={changeTheme}></Header>
    <Controls></Controls>
    
    <p>REST Countries</p>
    </div>
  )
}

export default App
