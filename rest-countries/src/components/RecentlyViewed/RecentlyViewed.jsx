// import { useContext, useState } from 'react';
import { useContext, useEffect, useState } from 'react';
import CountriesContext from '../../contexts/CountriesContext';

import CountryTile from "../CountryTile/CountryTile"
import './recentlyviewed.css'


const RecentlyViewed = ({allCountries}) => {
    const [ visitedToDisplay, setVisitedToDisplay ] = useState([])

    const context = useContext(CountriesContext);
    const visitedPages = context[1];
    
    useEffect(() => {
        const foundCountries = visitedPages.map(fc => {
            const country = allCountries.find(c => c.alpha3Code === fc);
            return country
        })

        setVisitedToDisplay(foundCountries)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visitedPages, context])
    
    // const [ listVisible, setListVisible ] = useState(true);
    // const hideWhenVisible = {display: listVisible ? 'none' : ''}
    // const showWhenVisible = {display: listVisible ? '' : 'none'}


    if(!visitedToDisplay || visitedToDisplay.includes(undefined) || visitedToDisplay.includes(null)) {
        return null
    }

    return (
        <>
        {/* <div className='rv-label-helper'>
        <h2 className='rv-label'>Recently viewed</h2>
        <div style={hideWhenVisible}>
        <button className='btn btn-toggle-recent' onClick={() => setListVisible(true)}><i className='fa-solid fa-plus'></i></button>
        </div>
        <div style={showWhenVisible}>
        <button className='btn btn-toggle-recent' onClick={() => setListVisible(false)}><i className='fa-solid fa-minus'></i></button>
        </div>

        </div> */}


        {/* <div style={showWhenVisible}>
        <ul className='recent-views-list'>
            { visitedPages.map(p => <CountryTile key={p.name} country={p} />) }
        </ul>
        </div> */}

        <div className='recent-wrapper'>
        <ul className='recent-views-list'>
            {/* { visitedPages.map(p => <CountryTile key={p.name} country={p} />) } */}
            { visitedToDisplay.map(p => <CountryTile key={p.numericCode} country={p} />) }
        </ul>
        </div>
        </>
    )
}

export default RecentlyViewed