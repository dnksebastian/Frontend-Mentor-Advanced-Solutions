const fetchAllCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countryData = await res.json()
    return countryData
}

const fetchLocalCountryData = async () => {
    const res = await fetch('/data.json');
    const localCountryData = await res.json()

    console.log(localCountryData);
    return localCountryData
}



const countriesServices = {
    fetchAllCountries,
    fetchLocalCountryData
}

export default countriesServices