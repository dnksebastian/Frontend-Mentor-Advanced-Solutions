import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";

import CountriesContext from '../../contexts/CountriesContext';

import './details.css'

const DetailsPage = () => {

    const countryCode = useParams().code

    const context = useContext(CountriesContext)
    const countries = context[0];
    const visited = context[1];
    const setVisited = context[2];


    let allCountries = countries

    const countryToDisplay = allCountries.find(f => f.alpha3Code === countryCode)

    // const updateVisitedPages = () => {
    //     const newVisitedPages = [...visited]
    //     if(!newVisitedPages.includes(countryToDisplay)) {
    //         newVisitedPages.unshift(countryToDisplay)
    //         newVisitedPages.pop()
    //         // console.log(newVisitedPages);
    //         setVisited(newVisitedPages)
    //     } else {
    //         const revisitedPageIndex = newVisitedPages.findIndex(p => p === countryToDisplay);
    //         newVisitedPages.splice(revisitedPageIndex, 1)
    //         newVisitedPages.unshift(countryToDisplay)
    //         setVisited(newVisitedPages)
    //         // console.log(newVisitedPages);
    //     }
    // };

    const updateVisitedPages = () => {
        const newVisitedPages = [...visited];

        if (newVisitedPages.includes(countryCode)) {
            const revisitedCountryIndex = newVisitedPages.findIndex(c => c === countryCode);
            newVisitedPages.splice(revisitedCountryIndex, 1);
            newVisitedPages.unshift(countryCode)
            setVisited(newVisitedPages)
        } else if (!newVisitedPages.includes(countryCode)) {
            newVisitedPages.unshift(countryCode);
            newVisitedPages.pop()
            setVisited(newVisitedPages)
        } else {
            return
        }
    };

    
    useEffect(() => {
        updateVisitedPages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode])

    const findFullCountryName = (code) => {
        const foundCountry = allCountries.find(c => c.alpha3Code === code)
        return foundCountry.name.split('(')[0] || 'Unknown'
    }

  
    if(!countries || countries.length === 0) {
        return (
            <div className="details-wrapper">
                <p>Please wait or try again...</p>
            </div>
        )
    }

    const nameSimplified = countryToDisplay?.name.split('(');
    const countryLanguages = countryToDisplay.languages.map(l => l.name)

    return (
        <div className="details-wrapper">
            <Link className="back-link" to={'/'}>
            <button className="btn btn-back"><i className="fa-solid fa-arrow-left-long"></i> Back</button>
            </Link>

            <div className='country-info-wrapper'>
                <div className='country-flag-wrapper'>
                    <img className="country-detail-flag" src={countryToDisplay.flag || ''} alt={`Flag of ${nameSimplified[0] || countryToDisplay.name || ''}`} />
                </div>
                <div className='country-details-wrapper'>
                    <h1>{nameSimplified[0] || countryToDisplay.name || ''}</h1>
                    <div className='details-box'>
                        <div className="detail-helper">
                            <span className="detail-label">Native Name:</span>
                            <span className="detail-data">{countryToDisplay.nativeName || ''}</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Population:</span>
                            <span className="detail-data">{countryToDisplay.population.toLocaleString() || ''}</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Region:</span>
                            <span className="detail-data">{countryToDisplay.region || ''}</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Sub Region:</span>
                            <span className="detail-data">{countryToDisplay.subregion || ''}</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Capital:</span>
                            <span className="detail-data">{countryToDisplay.capital || ''}</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Top Level Domain:</span>
                            <span className="detail-data">{countryToDisplay.topLevelDomain[0] || ''}</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Currencies:</span>
                            <span className="detail-data">{
                                countryToDisplay.currencies.map(c => c.name) || ''
                            }</span>
                        </div>
                        <div className="detail-helper">
                            <span className="detail-label">Languages:</span>
                            <div className="country-langs">
                                {/* {countryToDisplay.languages && countryToDisplay.languages.map(l => <span key={l.name}>{l.name}</span>)} */}
                                {countryLanguages && countryLanguages.join(', ')}
                            </div>
                        </div>
                    </div>

                    {countryToDisplay.borders &&
                    <div className="border-countries-wrap">
                        <h2>Border Countries:</h2>
                        <div className='border-countries-links'>
                        {countryToDisplay.borders.map(b => <Link to={`/country/${b}`} key={b}>
                            <span className="border-link">{findFullCountryName(b)}</span></Link>)
                        }
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailsPage




