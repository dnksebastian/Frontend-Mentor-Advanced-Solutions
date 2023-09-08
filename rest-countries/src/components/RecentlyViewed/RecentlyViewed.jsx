import { useContext } from 'react';
import CountriesContext from '../../contexts/CountriesContext';

import CountryTile from "../CountryTile/CountryTile"
import './recentlyviewed.css'


const RecentlyViewed = () => {
    const context = useContext(CountriesContext)

    const visitedPages = context[1]

    if(!visitedPages || visitedPages.includes(undefined) || visitedPages.includes(null)) {
        return null
    }


    return (
        <>
        <h2 className='rv-label'>Recently viewed</h2>
        <ul className='recent-views-list'>
            { visitedPages.map(p => <CountryTile key={p.name} country={p} />) }
        </ul>
        </>
    )
}

export default RecentlyViewed