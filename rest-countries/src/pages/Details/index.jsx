import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";

import CountriesContext from '../../contexts/CountriesContext';

const DetailsPage = () => {

    const countryName = useParams().name

    const context = useContext(CountriesContext)
    const countries = context[0];
    const visited = context[1]
    const setVisited = context[2]


    let allCountries = countries


    const updateVisitedPages = () => {
        const newVisitedPages = [...visited]
        if(!newVisitedPages.includes(countryToDisplay)) {
            newVisitedPages.unshift(countryToDisplay)
            newVisitedPages.pop()
            // console.log(newVisitedPages);
            setVisited(newVisitedPages)
        } else {
            const revisitedPageIndex = newVisitedPages.findIndex(p => p === countryToDisplay);
            newVisitedPages.splice(revisitedPageIndex, 1)
            newVisitedPages.unshift(countryToDisplay)
            setVisited(newVisitedPages)
            // console.log(newVisitedPages);
        }
    };

    
    useEffect(() => {
        updateVisitedPages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  
    if(!countries || countries.length === 0) {
        return (
            <>loading...</>
        )
    }

    const countryToDisplay = allCountries.find(f => f.name === countryName)


    return (
        <div>
            <Link to={'/'}>
            <button>back</button>
            </Link>

            <div className='country-info-wrapper'>
                <div className='country-flag-wrapper'>
                    <img src="" alt="" />
                </div>
                <div className='country-details-wrapper'>
                    <h1>{countryToDisplay.name}</h1>
                    <div className='details-box'>
                        details...
                    </div>
                    <div className='border-countries-box'>
                        border countries...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage


