import { useState, useEffect, createContext } from 'react';
import countriesServices from '../services/countriesServices';

const CountriesContext = createContext()


export const CountriesContextProvider = (props) => {

    const [allCountries, setAllCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])


    /* Temporary local json fetch */
  useEffect(() => {
    const fetchData = async () => {
      const data = await countriesServices.fetchLocalCountryData()
      setAllCountries(data)
    }
    fetchData()
  }, [])

   // Visited pages data

   const setInitialPages = async () => {
    //  const germany = allCountries.find(c => c.name === 'Germany')
    //  const usa = allCountries.find(c => c.name === 'United States of America')
    //  const brazil = allCountries.find(c => c.name === 'Brazil')
    //  const iceland = allCountries.find(c => c.name === 'Iceland')

     const starterVisitedCountries = ['DEU', 'USA', 'BRA', 'ISL']
     
     if (!visitedCountries || visitedCountries.includes(null) || visitedCountries.includes(undefined) || visitedCountries.length === 0) {
         setVisitedCountries(starterVisitedCountries);
    }
   }
 
   useEffect(() => {
     setInitialPages()

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [allCountries])


 

    return (
        <CountriesContext.Provider value={[allCountries, visitedCountries, setVisitedCountries]}>
            {props.children}
        </CountriesContext.Provider>
    )
};

export default CountriesContext